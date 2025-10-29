import React from 'react'
import NavBar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import ProductViewer from "./components/ProductViewer.jsx";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/all";

gsap.registerPlugin(ScrollTrigger)

const App = () => {
    return (
        <div>
            <NavBar/>
            <Hero/>
            <ProductViewer/>

        </div>

    )
}
export default App
