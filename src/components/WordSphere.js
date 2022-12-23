import * as THREE from 'three'
import React, { useRef, useState, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text, TrackballControls } from '@react-three/drei'
import { skills } from '../util/constants'
import styled from 'styled-components'

const StyledCanvas = styled(Canvas)`
  &: hover {
    cursor: pointer;
  }
`;
function Word({ children, ...props }) {
  const color = new THREE.Color()
  const fontProps = { fontFamily: 'Cabin', fontSize: 2.5, letterSpacing: -0.05, lineHeight: 1, 'material-toneMapped': false }
  const ref = useRef()
  const [hovered, setHovered] = useState(false)
  const over = (e) => {
    e.stopPropagation() 
    setHovered(true)
  }
  const out = () => setHovered(false)
  // Change the mouse cursor on hover
  useEffect(() => {
    if (hovered) document.body.style.cursor = 'pointer'
    return () => (document.body.style.cursor = 'auto')
  }, [hovered])
  // Tie component to the render-loop
  useFrame(({ camera }) => {
    // Make text face the camera
    ref.current.quaternion.copy(camera.quaternion)
    // Animate font color
    ref.current.material.color.lerp(color.set(hovered ? '#ED938A' : '#435BB2'), 0.1)
  })
  return <Text ref={ref} onPointerOver={over} onPointerOut={out} {...props} {...fontProps} children={children} />
}

function getFibonacciSpherePoints(samples, radius, randomize) {
  // Translated from Python from https://stackoverflow.com/a/26127012
  samples = samples || 1;
  radius = radius || 1;
  randomize = randomize || true;
  var random = 1;
  if (randomize === true) {
      random = Math.random() * samples;
  }

  var points = []
  var offset = 2 / samples
  var increment = Math.PI * (3 - Math.sqrt(5));

  for (var i = 0; i < samples; i++) {
      var y = ((i * offset) - 1) + (offset / 2);
      var distance = Math.sqrt(1 - Math.pow(y, 2));
      var phi = ((i + random) % samples) * increment;
      var x = Math.cos(phi) * distance;
      var z = Math.sin(phi) * distance;
      x = x * radius;
      y = y * radius;
      z = z * radius;
      var point = {
          'x': x,
          'y': y,
          'z': z
      }
      points.push(point);
  }
  return points;
}
function Cloud({ count = 4, radius = 20 }) {
  // Create a count x count random words with spherical distribution
  const words = useMemo(() => {
    const temp = []
    //const points = fibonacci_sphere(count);
    const points = getFibonacciSpherePoints(count, radius, false);
    for (let i = 0; i < count; i++) {
      temp.push([new THREE.Vector3(points[i].x, points[i].y, points[i].z), skills[i]])
    }
    return temp
  }, [count, radius])
  return words.map(([pos, word], index) => <Word key={index} position={pos} children={word} />)
}

export default function WordSphere() {
  return (
    <StyledCanvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
      <fog attach="fog" args={['#202025', 0, 80]} />
      <Cloud count={skills.length} radius={20} />
      <TrackballControls noZoom='false' />
    </StyledCanvas>
  )
}
