import React from 'react'
import { Spring, animated } from 'react-spring'

export default function Springs() {
   
        
        return (
            <Spring
            loop
            from={{ opacity: 0, color: 'red', fontSize: 50 }}
            to={[
                { opacity: 2, color: '#ffaaee' },
                { opacity: 1, color: 'rgb(14,26,19)' },
                { opacity: 0, color: '#3252a8' },
            ]}>
            {styles => (
                <animated.div style={styles}>I will fade in and out</animated.div>
            )}
            </Spring>
        )
        
    
}