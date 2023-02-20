import { useMemo, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useControls } from 'leva'
import { Perf } from 'r3f-perf'

import Box from './comp/Box'

export default function Experience()
{

    // const { numberOfBoxes } = useControls ('number of boxes', {
    //     numberOfBoxes : {value: 100}
    // })
    const numberOfBoxes = 900;


    const positionBoxes = useMemo(()=>
    {
        const position = []

        for(let i=0; i<numberOfBoxes; i++){
            let temp = []
            temp.push(i%30/10)
            temp.push(-1)
            temp.push(parseInt(i/30)/10)
            position.push(temp)
            console.log(parseInt(i/30));
        }
        return position

    }, [numberOfBoxes])

    
    return <>
        <Perf position="top-left"/>  
        <OrbitControls />  
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        
        {[...Array(numberOfBoxes)].map((value, index)=>
                <Box 
                    key={`index${index}`} 
                    keyName={`count${index}`} 
                    position={positionBoxes[index]} 
                />
                
            )
        }
    </>
}