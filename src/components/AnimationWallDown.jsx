import React from 'react'
import "../assets/styles/componentStyles/animationwalldown.css"

const AnimationWallDown = (props) => {
    return (
        <>
            <div className={`animationwalldown-container ${props.showAnimationWall ? 'showanimationwall' : ''}`}>
                
            </div>
        </>
    )
}

export default AnimationWallDown