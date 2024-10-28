import Image from "next/image"

function Home(){
  return(
    <main>

    <section id="homeMainSection">

    <section id="homeTextSection">
      <h1 id="hi">Hi,I&apos;m</h1>
      <h2 id="name">Muhammad Yousuf</h2>
      <h3 id="homeH3">Front-End Developer</h3>
      <p id="homeText">Focused on creating efficient and visually appealing web experiences. Hands-on experience in frameworks like Next.js and Tailwind CSS. 
        I&apos;M passionate about solving real-world problems with modern technologies.
       My goal is to keep learning, grow as a full-stack developer, and contribute to innovative projects.</p>
    </section>

    <Image id="mypic" src={"/pic.jpeg"} alt={"Muhammad Yousuf"} width={"300"} height={"100"}></Image>

    </section>

    </main>
  )
}
export default Home