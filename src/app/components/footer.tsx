import Link from "next/link"


function Footer(){
    return(
        <footer>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"/>
        

            <h2 id="footerHeader">Yousuf</h2>
            <h3 id="footerH3">Let&apos;s Build Together.</h3>

            <section id="footerIcons">
    <Link href={"https://www.linkedin.com/in/muhammad-yousuf-786yousuf/"}><i className="fab fa-linkedin "></i></Link>
    <Link href={"https://github.com/Muhammad-Yousuf3"}><i className="fab fa-github "></i></Link>
    <Link href={"mailto:coolmaster808@gmail.com"}><i className="fa fa-envelope"> </i></Link>
    </section>
        </footer>
    )
}
export default Footer