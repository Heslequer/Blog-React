import { Link } from "react-router-dom";
const Banner = ({content}) =>{
    return(
        <>
            <section className="container card">
                <div className="img-banner hidden">
                    <Link to={"/post/"+content.id}><img src={content.imageUrl} alt=""/></Link>
                </div>
                <div className="row text-center mt-3">
                    <h6 className="color-gray text-center">{content.date}</h6>
                    <h6 className="uppercase color-primary text-center">{content.category}</h6>
                    <Link to={"/post/"+content.id}><h3 className="underline">{content.title}</h3></Link>
                    <p className="mt-1 p2 text-center">{content.resume}</p>
                    <div className="my-3 flex-center">
                        <Link to={"/post/"+content.id} className="link p2 color-primary">Ler mais</Link>
                    </div>     
                </div>
            </section>

        </>
    ); 
}
export default Banner;