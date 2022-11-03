
import './App.css';
import Card from './RentMeContainer/Card/Card';
import Home from './RentMeContainer/Home/Home';
import Footer from './RentMeContainer/Footer/Footer'
import SignIn from './RentMeContainer/SignIn/SignIn';
import SignUp from './RentMeContainer/SignUP/SignUp';
function App() {
  return (
    <div className="App">
       <SignIn/> 
      <SignUp/>  
          <Home/>
      <Card/>
    
      <Footer/>

      {/* <h1>heloo </h1> */}
    </div>
  );
}

export default App;
