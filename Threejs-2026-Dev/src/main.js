import * as THREE from "three";

//scene
const scene = new THREE.Scene();

//3d object-mesh

//geometry

const geometry = new THREE.BoxGeometry(1,1,1);

//material

const material  = new THREE.MeshBasicMaterial({color:"#ff0"});

const cube  = new THREE.Mesh(geometry,material);

scene.add(cube);

//camera

const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,100);

camera.position.z=3
//renderer

const canvas = document.querySelector("#webgl");

if (!canvas) {
  throw new Error("Canvas element #webgl was not found.");
}

const renderer = new THREE.WebGLRenderer({ canvas });

renderer.setSize(window.innerWidth,window.innerHeight);
//renderer start

renderer.render(scene,camera)
