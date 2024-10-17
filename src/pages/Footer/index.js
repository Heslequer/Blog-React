import logo from '../../svg/blog-logo2.svg';
import facebookLogo  from '../../svg/icon-facebook.svg';
import instagramLogo  from '../../svg/icon-instagram.svg';
import youtubeLogo  from '../../svg/icon-youtube.svg';
import twitterLogo  from '../../svg/icon-twitter.svg';
const Footer = () =>{
    return(
        <>
            <footer className="bg-footer bt-black">
            <section className="container pt-4 px-4 pb-0 my-0">
                <div className="row flex-center">
                    <img src={logo} className='icon-l' alt=""/>
                </div>

                <div className="row">
                    <div className="mobile-footer">
                        <div className="grid-3">
                            <h4>Posts</h4>
                            <div className="flex-start-column mt-2">
                                <a href="#" className=" my-1 color-gray">Mais vistos</a>
                                <a href="#" className=" my-1 color-gray">Mais comentados</a>
                                <a href="#" className=" my-1 color-gray">Mais populares</a>
                                <a href="#" className=" my-1 color-gray">Mais recentes</a>
                            </div>
                        </div>
                        <div className="grid-3">
                            <h4>Categorias</h4>
                            <div className="flex-start-column mt-2">
                                <a href="#" className="color-gray my-1">Tecnologia</a>
                                <a href="#" className="color-gray my-1">Games</a>
                                <a href="#" className="color-gray my-1">Fotografia</a>
                                <a href="#" className="color-gray my-1">Cinema</a>
                                <a href="#" className="color-gray my-1">Moda</a>
                            </div>
                        </div>
                    </div>

                    <div className="grid-6 ">
                        <h4 className="mb-2">Quer ser avisado dos novos posts do blog?</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Ornare urna pharetra ut ac, pellentesque.
                        </p>
                        <div className="flex-start-row mt2">
                            <input type="text" name="search" className='mt-2' id="" placeholder="Digite seu e-mail aqui"/>
                            <button className="btn ml-2">Cadastrar</button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="grid-9">
                        <p>
                           2022 | Todos os direitos reservados. 
                        </p>
                    </div>
                    <div className="grid-3 flex-end-row">
                        <img src={facebookLogo} className="icon-s" alt=""/>
                        <img src={instagramLogo} className="icon-s ml-2" alt=""/>
                        <img src={youtubeLogo} className="icon-s ml-2" alt=""/>
                        <img src={twitterLogo} className="icon-s ml-2" alt=""/>
                    </div>
                </div>
            </section>
        </footer>
        </>
    ); 
}
export default Footer;