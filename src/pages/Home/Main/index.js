
import api from "services/api";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";



const Main = ({content}) =>{

    const[user, setUser] = useState([]);

    useEffect(()=>{
        
        if(content)
        {
            api.get('/user/'+content.id_user)
            .then((r)=>{
                setUser(r.data);
            }).catch((r)=>{
                console.log('Erro na requisição do usuário');
            })
        }

    },[])

    return(
        <>
            <div className=" py-3 bb-black">
                    <h6 className="color-gray">{content.date}</h6>
                    <h6 className="uppercase color-primary">{content.category}</h6>
                    <Link to={"/post/"+ content.id} >
                        <h4 className="underline">{content.title}</h4>
                    </Link>
                    <p className="mt-1">{content.resume}</p>
                    
                    <div className="flex-start-row mt-3">
                        <div className="profile">
                            <img src={user.ImageProfile} alt="" className="profile-img"/>
                        </div>
                        <div className="ml-1">
                            <h6 className="color-primary">{user.name} {user.surname}</h6>
                            <h6 className="color-gray">@{user.user}</h6>
                        </div>
                    </div>
                </div>
        </>
    ); 
}
export default Main;