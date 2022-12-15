import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import './MainComponent.css'

const MainComponent = () => {

  return(
    <div className="mainComponent">
      <Navigation/> 
      <Header/>
    </div>
    
  )
}

export default MainComponent;