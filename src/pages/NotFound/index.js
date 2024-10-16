import Header from "pages/Header";
import Footer from "pages/Footer";
import { Link } from "react-router-dom";
const NotFound = () => {
    return(
        <>
            <Header></Header>


            <section className="container mb-0">
                <div className="grid-12 flex-center">
                    <img src="svg/blog-logo2.svg" className="icon-l" alt=""/>
                </div>

                <div className="grid-12 flex-center-column">
                    <h1 className="h0 color-gradient my-2">404</h1>
                    <h6 className="my-2">Página não encontrada!</h6>
                    <p className="mt-2 text-center">A página que você tá procurando não existe ou foi removida.</p>
                    <p className="text-center">Clique para voltar para o site.</p>
                    <Link to={"/"} className="btn px-8 py-1 my-4">Voltar p/ Home</Link> 
                </div>
            </section>


            <Footer></Footer>       
        </>
   
    );
}

export default NotFound;