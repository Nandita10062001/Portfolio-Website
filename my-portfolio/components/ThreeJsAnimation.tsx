import * as THREE from 'three';
import { useEffect } from 'react';

export function initAnimation() {
  const canvas = document.getElementById('ai-animation') as HTMLCanvasElement | null;

  // Check if the canvas element exists
  if (!canvas) {
    console.error('Canvas element not found!');
    return;
  }

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas });

  renderer.setSize(window.innerWidth, window.innerHeight);

  const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const torus = new THREE.Mesh(geometry, material);
  scene.add(torus);

  camera.position.z = 30;

  function animate() {
    requestAnimationFrame(animate);
    torus.rotation.x += 0.01;
    torus.rotation.y += 0.01;
    renderer.render(scene, camera);
  }

  animate();
}

const ThreeJsAnimation = () => {
  useEffect(() => {
    initAnimation();
  }, []);

  return <canvas id="ai-animation" className="w-full h-96"></canvas>;
};

export default ThreeJsAnimation;
