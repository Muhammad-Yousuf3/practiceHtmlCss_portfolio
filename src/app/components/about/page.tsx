"use client"
import { useState } from "react"
import Image from "next/image"

function About(){
    
    const [eduon,eduoff]=useState(true)  
    const [skillon,skilloff]=useState(true)
    
    const Edu_Btn=()=>eduoff(!eduon)
    const Skill_Btn=()=>skilloff(!skillon)

  
    
    return(
        <main>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"></link>
    <section id="about">
        <div id="ab-img">
            <Image src={"/boy.webp"} alt="" width={"300"} height={"300"}></Image>
        </div>
        <div id="ab-content">
            <div id="h1">
                <h1>About Me</h1>
            </div>
            <div id="paragraph">
            <p> Hello, I&apos;m <span>Muhammad Yousuf</span>, a Front-End Developer from Karachi, Pakistan. I
            specialize in HTML5, CSS3, Tailwind CSS, JavaScript, and TypeScript and have 
            hands-on experience with Next.js and React. Alongside web development, I am 
            actively learning Generative AI to stay at the forefront of emerging technologies. 
            Currently, I am enhancing my skills through institutes like PIAIC, GIAIC, and AIT. 
            My goal is to become a successful Full-Stack Developer and contribute to impactful projects across diverse domains.
            </p>
            </div>
            

            <div id="headings">
        <h2 onClick={Edu_Btn}>Education</h2>
        <h2 onClick={Skill_Btn}>Skills</h2>
        </div>

    <div id="Education-skills-content">

        <div id="educationContent" className={`${eduon ? 'hidden' : 'block'}`} >
                <li> Governor Sindh Initiaive For AI,Metaverse and Web3.0 </li>
                <li>Aligarh Institute of Technology.</li>
                <li>PIAIC</li>
        </div>    
        
       
        <div id="skillsContent" className={`${skillon ? 'hidden' : 'block'}`}>
        
        <li>HTML 5</li>
        <li>CSS 3</li>
        <li>TailwindCSS</li>
        <li>TypeScript</li>        
        <li>JavaScript </li>
              
        </div>
    </div>


        </div>
    </section>

        </main>
    )
}
export default About

