import logo from '../../svg/Blog-logo.svg';
import { Link, useNavigate } from "react-router-dom";
import { useState,useEffect } from 'react';
import Search from 'pages/Search';
const Header = () =>{

    const initialValueForm = {
        search: ''
    }

    const[form, setForm] = useState(initialValueForm)

    function onChange(event){
        const{value, name} = event.target;
        setForm({...form, [name]:value})
    }
    const navigate = useNavigate();

    function handleSearch(e){
        //não faz nada ao apertar enter no formulario (por padrão recarrega a página)
        e.preventDefault();
        navigate("/search/"+form.search)
    }

    function clickLink(){
        document.querySelector('.bx').classList.toggle('active');
        document.querySelector('.menu-mobile').classList.toggle('showmenu');
        if(!(document.querySelector('.menu-mobile').classList.contains('showmenu')))
            {
                document.body.style.overflow = '';
            
    }



    function clickMenu(){
        document.querySelector('.bx').classList.toggle('active');
        document.querySelector('.menu-mobile').classList.toggle('showmenu');
        if(document.querySelector('.bx').classList.contains('active'))
            {
                document.body.style.overflow = 'hidden';
            }else{
                document.body.style.overflow = '';
            }
    }
    document.querySelectorAll('.link-menu-mobile').forEach((item)=>{    

    })



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
                <div className="bx" onClick={clickMenu}>

                </div>
                <div className="flex-start-row">
                    <div className="search">
                        <form className="flex-start-row" onSubmit={handleSearch}>
                            <input type="text" name="search" placeholder="Buscar..." onChange={onChange}/>
                            <button className="btn-search"></button>
                        </form>
                    </div>
                    
                    <div className="cta-desktop ml-3">
                        <Link to={"/login"} className="btn">Login</Link>
                    </div>
                    <div className="cta-mobile">
                        <Link to={"/login"} className="link p1 color-primary">Login</Link>
                    </div>
                </div>
            </header>

            {/*MENU MOBILE*/}
            
            <div className="relative">
                <div className="menu-mobile">
                    <ul className="nav-mobile">
                        <li className="link-menu-mobile" onClick={clickLink}>
                            
                            <Link to={"/contact"} href="">Contato</Link>                        
                        </li>
                        <li className="link-menu-mobile" onClick={clickLink}>
                            <Link to={"/about"} href="">Sobre</Link>
                        </li>
                        <li className='py-2'>
                            <form className="flex">
                                <input type="text" name="search" placeholder="Buscar..." onChange={onChange}/>
                                <button className="btn-search" onClick={handleSearch}></button>
                            </form>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    ); 
}
export default Header;