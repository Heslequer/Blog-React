import Header from "pages/Header";
import Footer from "pages/Footer";
import imgProfile from "../../img/profile/ny.jpg"
const Profile = () => {
    return(
        <>
            <Header></Header>

            <section className="container mb-4 pb-0 mt-8">
                <div className="row">
                    <div className="grid-6">
                        <div className="flex-start-row">
                            <div>
                                <img src={imgProfile} alt="" className="profile-big"/>
                            </div>
                            <div className="ml-3">
                                <h3>Násser Yousef</h3>
                                <h6 className="color-gray">@nasseryousef</h6>
                            </div>
                        </div>
                        <p className="mt-3">
                            Olá, bom dia! Seja bem-vindo ao blog. Compartilhe conhecimento.
                        </p>
                    </div>
                    <div className="grid-6" id="botoes">
                        <a href="#" className="btn mr-2">Meus dados</a>
                        <a href="#" className="btn">Adicionar post</a>
                    </div>
                </div>
            </section>

            <section className="container pt-0 pb-0 mt-0">
                <h3>Adicionar um novo post</h3>
                <p className="mt-1">Preencha os campos abaixo para adicionar um novo post ao blog</p>
                <form>
                    <div className="row">
                        <div className="grid-3 p-0">
                            <label for="date "><h6>Data</h6></label>
                            <input type="date" id="date" name="date" className="mt-1"/>
                        </div>
                        <div className="grid-3 p-0">
                            <label for="category"><h6>Categoria</h6></label>
                            <select name="category" id="category" className="mt-1">
                                <option value="tecnlogia">tecnlogia</option>
                                <option value="games">games</option>
                                <option value="cinema">cinema</option>
                                <option value="fotografia">fotografia</option>
                            </select>
                        </div>
                        <div className="grid-6 p-0">
                            <label for="title"><h6>Título</h6></label>
                            <input type="text" name="title" id="title" className="mt-1"/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="grid-9 p-0">
                            <label for="resume"><h6>Resumo</h6></label>
                            <input type="text" name="resume" id="resume" className="mt-1"/>
                        </div>
                        <div className="grid-3 p-0">
                            <label for="duration"><h6>Duração</h6></label>
                            <select name="duration" id="duration" className="mt-1">
                                <option value="5">5min.</option>
                                <option value="7">7min.</option>
                                <option value="10">10min.</option>
                                <option value="15">15min.</option>
                            </select>
                        </div>
                    </div>

                    <div className="row">
                        <div className="grid-12">
                            <label for="description"><h6>Descrição</h6></label>
                            <textarea name="description" id="description" className="w-100" rows="7"></textarea>
                            <div className="row flex-end-row">
                                <button className="btn mt-2">Adicionar</button>
                            </div>
                        </div>
                    </div>
                </form>
            </section>
     
            <Footer></Footer>    
        </>
   
    );
}

export default Profile;