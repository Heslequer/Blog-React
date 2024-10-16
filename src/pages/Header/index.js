import logo from '../../svg/Blog-logo.svg';
import { Link } from "react-router-dom";
const Header = () =>{
    return(
        <>
            <header className="px-2 py-1">
                <nav>
                    <div >
                        <Link to={"/"} href="" >
                            <img src={logo} alt="" className="logo"/>
                        </Link>
                    </div>
                    <ul className="menu">
                        <li>
                            <Link to={"/about"} href="">Sobre</Link>
                        </li>
                        <li>
                            <Link to={"/contact"} href="">Contato</Link>
                        </li>
                    </ul>
                </nav>
                <div className="bx">

                </div>
                <div className="flex-start-row">
                    <div className="search">
                        <form className="flex-start-row">
                            <input type="text" name="search" placeholder="Buscar..."/>
                            <button className="btn-search"></button>
                        </form>
                    </div>
                    
                    <div className="cta-desktop ml-3">
                        <Link to={"/login"} href="" className="btn">Login</Link>
                    </div>
                    <div className="cta-mobile">
                        <a href="" className="link  color-primary">Login</a>
                    </div>
                </div>
            </header>

            <div className="relative">
                <div className="menu-mobile">
                    <ul className="nav-mobile">
                        <li>
                            <Link to={"/about"} href="">Sobre</Link>
                        </li>
                        <li>
                            <Link to={"/about"} href="">Sobre</Link>
                        </li>
                        <li>
                            <form className="flex py-2 px-2">
                                <input type="text" name="search" placeholder="Buscar..."/>
                                <button className="btn-search"></button>
                            </form>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    ); 
}
export default Header;