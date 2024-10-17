import Header from "pages/Header";
import Footer from "pages/Footer";
import Card from "pages/Home/Card";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import api from "services/api";

const Search = () => {

    const {wordSearch} = useParams();

    //variáveis de estado
    const[word, setWord] = useState(wordSearch);
    const[search, setSearch] = useState([]);
    const[form, setForm] = useState([])


    useEffect(()=>{
        if(word){
            api.get("/posts?q="+word)
            .then((r)=>{
                setSearch(r.data);
            })
        }
    }, [word])

    const initialValueForm = {
        search: ''
    }
    
    function onChange(event){
        const{value, name} = event.target;
        setForm({...form, [name]:value})
    }
    const navigate = useNavigate();

    function handleSearch(e){
        //não faz nada ao apertar enter no formulario (por padrão recarrega a página)
        e.preventDefault();

        setWord(form.search)
        navigate("/search/"+form.search)
    }


    return(
        <>
            <Header></Header>

            <section className="container pb-0 mb-2">

                <h6 className="uppercase color-primary text-center">
                    {search.length} resultados
                </h6>

                <h4 className="text-center">
                    "{word}"
                </h4>

                <form onSubmit={handleSearch}>
                    <div className="row">
                        <div id="buscador" className="flex-center my-2">
                            <input type="text" name="search" placeholder="Buscar..." onChange={onChange}></input>
                            <button className="btn ml-2"> Buscar </button>
                        </div>

                    </div>
                </form>
                <div className="row stretch wrap">
                    {
                        search.map((item)=>{
                            return <Card key={item.id}content={item}></Card>
                        })
                    }
                </div>
            </section>

            <Footer></Footer>
        </>
   
    );
}

export default Search;