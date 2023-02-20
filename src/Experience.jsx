import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'

import Box from './comp/Box'

export default function Experience()
{
    return <>
        <Perf position="top-left"/>  
        <OrbitControls />  
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />

        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
    </>
}
