import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'

export default function Box(props) {
    const ref = useRef()
    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)

    useFrame((state, delta) => {
        // console.log(ref.current.keyName.replace(/\D/g, '')%10/10)
        
        ref.current.scale.y = 0.5 +  Math.sin(state.clock.elapsedTime + ref.current.keyName.replace(/\D/g, '')%900)/3
    })

    return (
      <mesh
        {...props}
        ref={ref}
        // scale={clicked ? 1.5 : 1}
        // onClick={(event) => click(!clicked)}
        // onPointerOver={(event) => hover(true)}
        // onPointerOut={(event) => hover(false)}
        >
        <boxGeometry args={[0.1, 1, 0.1]} />
        <meshNormalMaterial/>
      </mesh>
    )
} 