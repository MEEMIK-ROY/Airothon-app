import {React} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';



import Header from './components/Header';
import AllMoviesFetch from './components/Movies/AllMoviesFetch';
import SingleMovieFetch from "./components/Movies/SingleMovieFetch";
// import AllMovies from './components/Movies/AllMovies';
// import SingleMovie from './components/Movies/SingleMovie';
import Registration from "./components/Registration";
import Footer from './components/Footer';
import HomePage from "./components/Home/HomePage";


function App() {
  return (
    <Router>
      <div>
        <Header />
        {/* <Switch>
          <Route exact path="/movies">
            <AllMoviesFetch />
          </Route>
          <Route exact path="/movies/:movid">
            <SingleMovieFetch />
          </Route>
          <Route exact path="/register">
            <Registration />
          </Route>
          <Route exact path="/">
            <SliderImages/>
            <CardSlider/>
            <Premiers/>
          </Route>
        </Switch> */}
        
       
        <Routes>
          <Route exact path="/movies" element={<AllMoviesFetch />}/>
          <Route exact path="/movies/:movid" element={<SingleMovieFetch />}/>
          <Route exact path="/register" element={<Registration />}/>
          <Route exact path="/" element={<HomePage />}/>
        </Routes>
        
    
        <Footer />
      </div>
    </Router>
  );
}

export default App;
