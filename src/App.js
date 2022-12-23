import Home from './Home';
import Navbar from './Navbar';
import AllRecipes from './AllRecipes';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Helmet} from "react-helmet";





function App() {
  return (
    
    <Router>
      <div className="App">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Get Baking</title>
          <meta name="description" content="Get baking website"/>

        </Helmet>
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>

            <Route exact path="/bake-web" element={<Home />}></Route>

            <Route path="/allrecipes" element={<AllRecipes />}></Route>

          </Routes>
          
        </div>
        
      </div>
      
    </Router>
    
  );
}

export default App;





 
   
      
      
       
       
            
      
           
            