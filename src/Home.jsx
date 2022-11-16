import { useState } from "react";
// Components
import Header from "./Header/Header";
import Inspiration from "./Sections/Inspiration";
import LearnMore from "./Sections/LearnMore";
import Partners from "./Sections/Partners";

export default function Home() {
    
    return (
        <div>
             
            <Header />
            <Partners />
            <Inspiration />
            <LearnMore />
        </div>
    )
}