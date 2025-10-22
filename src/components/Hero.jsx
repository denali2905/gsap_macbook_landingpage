import React, {useEffect, useRef} from 'react'

const Hero = () => {
    const videoRef = useRef();

    useEffect(() => {
        if(videoRef.current) videoRef.current.playbackRate = 1;
    }, []);
    return (
        <section id="hero">
            <div>
                <h1>
                    MacBook Pro
                </h1>
                <img src="/title.png" alt="MacBook Pro Title" />
            </div>

            <video ref= {videoRef} src="/videos/hero.mp4" autoPlay muted playsInline/>
            <button> Buy</button>
            <p1>For plenty money or plenty money/mo for 12 months</p1>
        </section>
    )
}
export default Hero
