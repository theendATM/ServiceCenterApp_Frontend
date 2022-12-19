import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import './MainPage.css'

const MainPage = () => {

  return(
    <div className="mainPage">
      <Navigation/> 
      <Header/>
      <h2>Welcome to the Service Center App!</h2>
      <br />
      <h2>Please choose the required section</h2>
    </div>
    
  )
}

export default MainPage;