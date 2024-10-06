import React, { useMemo } from 'react'
import { useFrame } from 'react-three-fiber'
import { Vector3, BufferGeometry, BufferAttribute, LineBasicMaterial, Line } from 'three'

interface CollatzModelProps {
  sequence: number[]
}

const CollatzModel: React.FC<CollatzModelProps> = ({ sequence }) => {
  const points = useMemo(() => {
    return sequence.map((value, index) => {
      const theta = index * 0.1
      const r = Math.log(value + 1) * 0.1
      const x = r * Math.cos(theta)
      const y = index * 0.1
      const z = r * Math.sin(theta)
      return new Vector3(x, y, z)
    })
  }, [sequence])

  const lineGeometry = useMemo(() => {
    const geometry = new BufferGeometry().setFromPoints(points)
    return geometry
  }, [points])

  const lineMaterial = useMemo(() => {
    return new LineBasicMaterial({ color: 0x00ffff, linewidth: 2 })
  }, [])

  const line = useMemo(() => {
    return new Line(lineGeometry, lineMaterial)
  }, [lineGeometry, lineMaterial])

  useFrame(({ camera }) => {
    camera.position.x = Math.sin(Date.now() * 0.001) * 5
    camera.position.z = Math.cos(Date.now() * 0.001) * 5
    camera.position.y = 2
    camera.lookAt(0, 0, 0)
  })

  return (
    <>
      <primitive object={line} />
      {points.map((point, index) => (
        <mesh key={index} position={point}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshBasicMaterial color={0x00ffff} />
        </mesh>
      ))}
    </>
  )
}

export default CollatzModel