const Banner = () =>{
    return(
        <>
            <section className="container">
                <div className="img-banner hidden">
                    <img src="img/03.png" alt=""/>
                </div>
                <div className="row mt-3">
                    <h6 className="color-gray text-center">01 NOV 2021</h6>
                        <h6 className="uppercase color-primary text-center">tecnologia</h6>
                        <h3 className="text-center">O que esperar do cinema em 2021?</h3>
                        <p className="mt-1 text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur voluptates, tempore modi vitae accusantium fuga non iste</p>
                        <div className="my-3 flex-center">
                            <a href="#" className="link color-primary">Ler mais</a>
                        </div>     
                </div>
            </section>

        </>
    ); 
}
export default Banner;