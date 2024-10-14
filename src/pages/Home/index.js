import starIcon from '../../svg/icon-star.svg'

//components

import Banner from './Banner';
import Card from './Card';
import Hero from './Hero';
import Main from './Main';

const Home = () =>{
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
                        <Main></Main>
                        <Main></Main>
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