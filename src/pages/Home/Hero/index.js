import logoBlogGrande from '../../../svg/blog.svg';

const Hero = () =>{
    return(
        <>
            <section className="container" id="blog">
                <div className="grid-6">
                    <div className="mobileTitulo">
                        <h1 className="h0">blog<span>.</span></h1>
                        <p className="mt-1">Um blog para todos. Escrever. Ler. Comentar. Contribuir. Aprender. Conectar</p>
                        <a href="#" className="btn mt-4">Começar a escrever</a>
                    </div>
                </div>
                <div className="grid-6 logoblog">
                    <img src={logoBlogGrande} className="ilustration" alt=""/>
                </div>
            </section>  
        </>
    ); 
}
export default Hero;