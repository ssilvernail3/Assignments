import React, { useState, useEffect, useRef } from "react";

function Video({ src = "https://media.giphy.com/media/WqRk3K1jpyadXWGmHm/giphy.mp4"}) {
    const [speed, setSpeed] = useState(1);
    const videoRef = useRef(); 
    useEffect(() => {
         videoRef.current.playbackRate = speed; 
    }, [speed])
    return (
        <div>
            <video muted autoPlay loop ref={videoRef}>
                <source src={src} />
            </video>
            <div>
                <button onClick={() => setSpeed(s => s / 2)}>slow</button> 
                <button onClick={() => setSpeed(s => s * 2)}>fast</button> 
                <p>Current Speed: {speed}x</p>
            </div>
        </div>
    )
}

export default Video; 