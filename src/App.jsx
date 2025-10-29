import React from 'react'
import NavBar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import ProductViewer from "./components/ProductViewer.jsx";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/all";
import {Shape} from "@react-three/drei";
import Showcase from "./Showcase.jsx";

gsap.registerPlugin(ScrollTrigger)

const App = () => {
    return (
        <div>
            <NavBar/>
            <Hero/>
            <ProductViewer/>
            <Showcase/>
        </div>

    )
}
export default App
