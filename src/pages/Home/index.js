//Figuras
import { useEffect, useState } from 'react';
import starIcon from '../../svg/icon-star.svg';
import Header from "pages/Header";
import Footer from "pages/Footer";
import { Link } from "react-router-dom";

//components

import Banner from './Banner';
import Card from './Card';
import Hero from './Hero';
import Main from './Main';

//Api
import api from "services/api";

//Hooks 

const Home = () =>{

    //variáveis de estado
    const[main,setMain] = useState([]);
    const[mostseen,setMostseen] = useState([]);
    const[banner,setBanner] = useState([]);

   
    useEffect(()=>{
        //Posts com 5 estrelas, limite de 2, ordem decrescente
        api.get('/posts?star=5&_limit=2&_order=desc')
        .then((r)=>{
            setMain(r.data);
        })
        .catch((r)=>{
            console.log('Erro na requisição dos posts mais votados');
        });

        //Posts mais recentes na ordem decrescente, limite de 3
        api.get('/posts?sort=date&_order=desc&_limit=3')
        .then((r)=>{
            setMostseen(r.data);
        })
        .catch((r)=>{
            console.log('Erro na requisição dos post mais recente');
        });

        //Limite de 3 posts
        api.get('/posts?id=8    ')
        .then((r)=>{
            setBanner(r.data);
        })
        .catch((r)=>{
            console.log('Erro na requisição dos posts mais vistos');
        });
    },[])
    // ^ passar o parametro vazio faz com que rode apenas quando tiver construindo o componente

    return(
        <>

            <Header></Header>

            <Hero></Hero>

            <section className="container card">
                <div className="row">
                    <div className="grid-5">
                        <img src={starIcon} className="icon-l" alt=""/>
                        <h3 className="mt-2 ">
                            Os melhores e mais bem votados posts do mês.
                        </h3>
                        <p className="mt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur voluptates, tempore modi vitae accusantium fuga non iste. Sint deleniti iste explicabo enim quisquam qui? Sunt excepturi rerum impedit!</p>
                    </div>

                    <div className="grid-7">
                        {
                                main.map((item) =>{
                                    return <Main key={item.id} content={item}> </Main>
                                })
                        }

                    </div>
                </div>
            </section>



            <section className="container">
                <h3 className="pl-1">Post com mais visitas</h3>
                <p className="pl-1 mb-2">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, fugit! Quas maiores impedit quae?
                </p>

                <div className="row stretch ">

                    {
                        mostseen.map((item)=>{
                            return <Card key={item.id}content={item}></Card>
                        })
                    }
                </div>
            </section>

            {
                banner.map((item)=>{
                    return <Banner key={item.id}content={item}></Banner>
                })
            }

        <Footer></Footer>

        </>
    ); 
}
export default Home;