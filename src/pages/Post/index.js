import Header from "pages/Header";
import Footer from "pages/Footer";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import api from "services/api";

//imagens
import imgProfile from "../../img/profile/ny.jpg";
import imgBanner from "../../img/05.jpg";


const Post = () => {

    const {idPost} = useParams();

    //variável de estado
    const[post,setPost] = useState([]);
    const[user,setUser] = useState([]);


    useEffect(()=>{
        if(idPost){
            api.get('/posts/'+idPost)
            .then((response)=>{
                setPost(response.data); 
                api.get("/user/"+ response.data.id_user)
                .then((r)=>{
                    setUser(r.data);
                }).catch((r)=>{
                    console.log("Erro ao requisitar o usario: "+response.data.id_user)
                });
            }).catch((r)=>{
                console.log("erro ao requisitar o post: " + idPost)
            });
        }
    },[]);
    return(
        <>
            <Header></Header>

            
<section className="container mt-9">
    <h6 className="uppercase color-primary text-center">{post.category}</h6>
    <h3 className="text-center">{post.title}</h3>
    <div className="flex-center my-3">
        <div className="profile">
            <img src={user.ImageProfile} className="profile-img" alt=""/>
        </div>
        <div className="m1-2">
            <h6 className="color-primary">{user.name} {user.surname}</h6>
            <h6 className="color-gray">@{user.user}</h6>
        </div>
        <p className="m1-4">{user.date}</p>
    </div>
    <div className="img-banner hidden">
        <img src={post.imageUrl} alt=""/>
    </div>

    <div className="row my-3">
        <h4>{post.title}</h4>
    </div>
    <p className="mt-1">{post.content}</p>


    <div className="row">
        <div className="grid-3 disappear"></div>
        <div className="grid-6 card">
            <div className="row">
                <div className="grid-3 flex-center pl-1"> .....
                    <div className="profile-big">
                        <img src={user.ImageProfile} className="profile-big" alt=""/>
                    </div>
                </div>
                <div className="grid-9">
                    <h6 className="color-primary">{user.name} {user.surname}</h6> 
                    <h6 className="color-gray">@{user.user}</h6>
                    <p className="mt-1">{user.description}</p>
                </div>
            </div>
        </div>
    </div>
</section>
            
            <Footer></Footer>        
        </>
   
    );
}

export default Post;