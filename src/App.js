import {React} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';



import Header from './components/Header';
import Registration from "./components/Registration";
import Footer from './components/Footer';
import AllClothes from "./components/Clothes/AllClothes";
import SingleCloth from "./components/Clothes/SingleCloth";
import Login from "./components/Login";
import Homepage from "./components/Home/HomePage";
import CategoryClothes from "./components/Clothes/CategoryClothes";


function App() {
  return (
    <Router>
      <div>
        <Header />
       
        <Routes>
          <Route exact path="/clothes" element={<AllClothes />}/>
          <Route exact path="/cloth/:clothid" element={<SingleCloth />}/>
          <Route exact path="/category/:categoryId" element={<CategoryClothes />}/>
          <Route exact path="/register" element={<Registration />}/>
          <Route exact path="/login" element={<Login />}/>
          <Route exact path="/" element={<Homepage />}/>
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
