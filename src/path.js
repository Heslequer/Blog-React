import { BrowserRouter as Router, Route, Routes, Navigate, BrowserRouter, useParams } from "react-router-dom";
//Páginas
import About from "pages/About";
import Login from "pages/Login";
import Post from "pages/Post";
import Profile from "pages/Profile";
import Search from "pages/Search";
import NotFound from "pages/NotFound";
import Home from "pages/Home";
import Contact from "pages/Contact";
import ScrollToTop from './ScrollToTop';


const Paths = () => {
    return(
        <>
            <Router basename="Blog-React">
                {/*Switch*/}
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/login" element={<Login/>}/>

                    <Route path="/post/:idPost" element={<Post/>}/>

                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/search/:wordSearch" element={<Search/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="*" element={<NotFound/>}/>

                </Routes>
            </Router>        
        </>
   
    );
}

export default Paths;