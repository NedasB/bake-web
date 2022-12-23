import { Link } from 'react-router-dom';
import "./index.css"



const Home = () => {
    

    return (
        

        <div className="homeMain">

            <div className="homeGoals">
                <h2 className="ourMission"><b>Our mission</b></h2>
                <p className="goals">Welcome fellow visitor. We are Get Baking, our goal is to encourage and inspire people to get more involved in baking. There is nothing more rewarding than enjoying some fresh made cookies, knowing you have done well.</p>
                
                <Link to="/allrecipes"><button className="homeButton"><b>Click here to view Recipes</b></button></Link>
                

            </div>
        </div>
    );
}


export default Home;
