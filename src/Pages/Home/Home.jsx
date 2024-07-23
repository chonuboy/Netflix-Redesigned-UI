import React from 'react';
import Footer from "./Components/Footer/Footer";
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import Row from './Components/Row/Row';
import requests from '../../API/request';
const Home = (props) => {
  return (
    <div>
      
      <Navbar data={props.data}/>
      
      <Banner/>

      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLarge/>

      <Row title="Recently Launched" fetchUrl={requests.fetchTrending} />
      
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      
      <Row title="Trending Now" fetchUrl={requests.fetchComedyMovies} isLarge/>
      
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} isLarge/>
    
      <Footer/>

    </div>
  )
}

export default Home