import Header from "pages/Header";
import Footer from "pages/Footer";
import logo from '../../svg/blog-logo2.svg'
const Login = () => {
    return(
        <>
            <Header></Header>


            <section className="container">
                <div className="row">
                    <div className="grid-4 dissapear"></div>

                    <div className="grid-4">
                        <div className="flex-center">
                            <img src={logo} className="icon-l"/>
                        </div>
                        <h5 className="text-center">Olá faça o login para continuar</h5>
                        <form>
                            <input type="text" name="user" className="mt-3" placeholder="DIgite seu nome"/>
                            <input type="password" name="password" className="mt-3" placeholder="DIgite sua senha"/>
                            <button className="btn w-100 mt-4">Entrar</button>
                        </form>
                    </div>
                </div>
            </section>


            <Footer></Footer>      
        </>
   
    );
}

export default Login;