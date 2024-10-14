//Figuras
import { useEffect, useState } from 'react';
import starIcon from '../../svg/icon-star.svg';

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

        //Posts mais recentes na ordem decrescente, limite de 1
        api.get('/posts?sort=date&_order=desc&_limit=1')
        .then((r)=>{
            setMostseen(r.data);
        })
        .catch((r)=>{
            console.log('Erro na requisição dos post mais recente');
        });

        //Limite de 3 posts
        api.get('/posts?_limit=3')
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
            <Hero></Hero>

            <section className="container">
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
                <h3>Post com mais visistas</h3>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, fugit! Quas maiores impedit quae?
                </p>

                <div className="row">
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                </div>
            </section>

            <Banner></Banner>

        </>
    ); 
}
export default Home;