"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

interface CyberCore3DProps {
  theme?: "cyan" | "green" | "amber";
  activeSystem?: string;
}

export function CyberCore3D({ theme = "cyan", activeSystem = "koris" }: CyberCore3DProps) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Dimensions
    const width = container.clientWidth || 320;
    const height = container.clientHeight || 280;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 4.2;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Color palette based on theme
    let primaryColor = 0x38bdf8; // cyan
    let secondaryColor = 0x818cf8; // indigo

    if (theme === "green") {
      primaryColor = 0x22c55e;
      secondaryColor = 0x4ade80;
    } else if (theme === "amber") {
      primaryColor = 0xf59e0b;
      secondaryColor = 0xfbbf24;
    }

    // Group for all rotating objects
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // 1. Central Wireframe Polyhedron (The Core Engine)
    const geometry = new THREE.IcosahedronGeometry(1.2, 1);
    const wireframe = new THREE.WireframeGeometry(geometry);
    const lineMaterial = new THREE.LineBasicMaterial({
      color: primaryColor,
      transparent: true,
      opacity: 0.85,
      linewidth: 1.5,
    });
    const coreMesh = new THREE.LineSegments(wireframe, lineMaterial);
    coreGroup.add(coreMesh);

    // 2. Inner Solid Glow Sphere
    const innerGeo = new THREE.SphereGeometry(0.7, 16, 16);
    const innerMat = new THREE.MeshBasicMaterial({
      color: secondaryColor,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const innerSphere = new THREE.Mesh(innerGeo, innerMat);
    coreGroup.add(innerSphere);

    // 3. Floating Orbital Particle Ring (Representing messages / packets in RabbitMQ)
    const particlesCount = 180;
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);

    const c1 = new THREE.Color(primaryColor);
    const c2 = new THREE.Color(secondaryColor);

    for (let i = 0; i < particlesCount; i++) {
      const angle = (i / particlesCount) * Math.PI * 2;
      const radius = 1.9 + (Math.random() - 0.5) * 0.6;
      const yOffset = (Math.random() - 0.5) * 0.9;

      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = yOffset;
      positions[i * 3 + 2] = Math.sin(angle) * radius;

      const mixed = Math.random() > 0.5 ? c1 : c2;
      colors[i * 3] = mixed.r;
      colors[i * 3 + 1] = mixed.g;
      colors[i * 3 + 2] = mixed.b;
    }

    const particlesGeo = new THREE.BufferGeometry();
    particlesGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particlesGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const particlesMat = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
    });

    const particles = new THREE.Points(particlesGeo, particlesMat);
    coreGroup.add(particles);

    // 4. Outer Torus Ring (Representing Architecture Ring)
    const torusGeo = new THREE.TorusGeometry(2.1, 0.015, 12, 64);
    const torusMat = new THREE.MeshBasicMaterial({
      color: primaryColor,
      transparent: true,
      opacity: 0.4,
    });
    const torus = new THREE.Mesh(torusGeo, torusMat);
    torus.rotation.x = Math.PI / 3;
    coreGroup.add(torus);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX = x * 1.5;
      mouseY = y * 1.5;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || 320;
      const h = container.clientHeight || 280;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse follow
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      coreGroup.rotation.y = elapsedTime * 0.45 + targetX;
      coreGroup.rotation.x = Math.sin(elapsedTime * 0.25) * 0.2 + targetY;

      // Pulse inner sphere
      const scale = 1 + Math.sin(elapsedTime * 2.5) * 0.06;
      innerSphere.scale.set(scale, scale, scale);

      // Rotate particles ring
      particles.rotation.y = -elapsedTime * 0.6;
      torus.rotation.z = elapsedTime * 0.2;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      geometry.dispose();
      lineMaterial.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      particlesGeo.dispose();
      particlesMat.dispose();
      torusGeo.dispose();
      torusMat.dispose();
      renderer.dispose();
    };
  }, [theme]);

  return (
    <div className="cyber-core-container">
      <div ref={mountRef} className="cyber-core-canvas-wrap" />
      <div className="cyber-core-hud">
        <div className="cyber-hud-top">
          <span className="cyber-hud-pulse" />
          <span className="cyber-hud-title">3D ENGINE // ARCHITECTURE CORE</span>
        </div>
        <div className="cyber-hud-sub">
          <span>SISTEMA ATIVO: <strong>{activeSystem.toUpperCase()}</strong></span>
          <span className="cyber-hud-fps">60 FPS • THREE.JS</span>
        </div>
      </div>
    </div>
  );
}
