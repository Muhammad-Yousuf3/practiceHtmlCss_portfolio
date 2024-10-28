
import Image from "next/image"

function Project(){
    
    
    return(
        <main>
        
        <h1 id="pHeading">My Projects</h1>

        <section id="mainSectionProjects">

        <h3 id="pHeading">TypeScript</h3>
        <div id="container-1">
                <div id="box">
                <Image src={"/atm.jpg"} alt="ATM" width={100}  height={100}></Image>
                    <h2>ATM</h2>
                    <p>My CLI App Made With TypeScript Which Consist ATM Functionality Have Features Like FastCash, CheckBalance, WithDraw.</p>
                    <a href="https://github.com/Muhammad-Yousuf3/ATM_Machine_with_basic-features.git">Github</a>
                </div>
                <div id="box">
                <Image src={"/num guessing.webp"} alt="num guessing game" width={100}  height={100}></Image>
                    <h2>Num Guessing Game</h2>
                    <p>My CLI App Made With TypeScript. It is a CLI Game in Which User Needs To Guess a Number Similar to Computer&apos;s Guessed Number.</p>
                    <a href="https://github.com/Muhammad-Yousuf3/cli-number-guessing-game.git">Github</a>
                </div>
                <div id="box">
                <Image src={"/currency convertor.png"} alt="currency convertor" width={100}  height={100}></Image>
                    <h2>Currency Convertor</h2>
                    <p>My CLI App Made With TypeScript. It is a Currency Convertor in Which You Can Convert Given Currecies With Each Other.</p>
                    <a href="https://github.com/Muhammad-Yousuf3/currency_convertor.git">Github</a>
                </div>
                <div id="box">
                <Image src={"/calculator.jpg"} alt="calculator" width={100}  height={100}></Image>
                    <h2>Calculator AND BMI</h2>
                    <p>My CLI Calculator Made With TypeScript. It is a Calculator With 6 Basic Features Like Addition, Exponentiation And BMI Also.</p>
                    <a href="https://github.com/Muhammad-Yousuf3/calculator_with-6operations_bmi.git">Github</a>
                </div>
             </div>
             

             <h3 id="pHeading">Front-End</h3>
              <div id="container-2">
                <div id="box">
                <Image src={"/transportweb.png"} alt="tramsportweb" width={200}  height={200}></Image>
                    <h2>Frieght Transport</h2>
                    <p>My Front-End Project. Made With TailWindCSS And NextJS. This Is My Freight Transportation Website.</p>
                    <a href="https://responsive-next-web-phi.vercel.app">Website</a>
                </div>
                <div id="box">
                    <Image src={"/resume.png"} alt="resume" width={200}  height={200}></Image>
                    <h2>RESUME</h2>
                    <p>My Front-End Project. Made With HTML, CSS And JavaScript. This Is My Simple and Clean Resume.</p>
                    <a href="https://resume-sepia-omega.vercel.app">Website</a>
                </div>
              </div>

        </section>
           

        </main>
    )
}
export default Project