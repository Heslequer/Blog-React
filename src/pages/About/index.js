import Header from "pages/Header";
import Footer from "pages/Footer";
import logoBlogGrande from "../../svg/blog.svg";
const About = () => {
    return(
        <>
            <Header></Header>
            
            <section className="container" id="blog">
                <div className="grid-6">
                    <div className="mobileTitulo">
                        <h1 className="h0">blog<span>.</span></h1>
                        <p className="mt-1">O Blog é um projeto desenvolvido em React.js
                            para o curso FrontPush. Clique abaixo para saber de mais informações
                        </p>
                        <a href="#" className="btn mt-4">Saber mais</a>
                    </div>
                </div>
                <div className="grid-6 logoblog">
                    <img src={logoBlogGrande} className="ilustration" alt=""/>
                </div>
            </section>  
            
            <Footer></Footer>
        </>
   
    );
}

export default About;