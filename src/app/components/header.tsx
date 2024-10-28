"use client"
import { useState } from "react"
import Link from "next/link"

function Header(){
    
    const [navOpen , navClose]=useState(false)

    const Click=()=>navClose(!navOpen)
    
    return(
        <header>
        
        <link
    href="https://cdn.jsdelivr.net/npm/remixicon@4.4.0/fonts/remixicon.css"
    rel="stylesheet"
/>

        <h2 id="navHeader">Yousuf</h2>

        <button id="menuBtn" onClick={Click}><i className="ri-menu-line"></i></button>
        <nav className={`${navOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <ul>
            <button id="Xbtn" onClick={Click}>x</button>
                    <li><a href={"/"}>Home</a></li>
                    <li><Link href={"/components/about"}>About</Link></li>
                    <li><Link href={"/components/project"}>Projects</Link></li>
                    <li><Link href={"/components/contact"}>Contact</Link></li>
            </ul>
        </nav>

        </header>
    )
}
export default Header