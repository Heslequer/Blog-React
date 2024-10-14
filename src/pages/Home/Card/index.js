const Card = () =>{
    return(
        <>
            <div className="grid-4 card p-0">
                <div className="thumb hidden">
                    <a href="">
                        <img src="img/01.jpg" alt=""/>
                    </a>
                </div>
                <div className="mt-2 px-2">
                    <h6 className="color-gray">01 NOV 2021</h6>
                    <h6 className="uppercase color-primary">tecnologia</h6>
                    <h4>O que tem de novo no PS5? Muitas novidades?</h4>
                    <p className="mt-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur voluptates, tempore modi vitae accusantium fuga non iste</p>
                    <div className="my-3">
                        <a href="#" className="link color-primary">Ler mais</a>
                    </div>     
                </div>
            </div>

        </>
    ); 
}
export default Card;