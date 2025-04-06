import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
import Homescreen from './screens/Homescreen';
import Bookingscreen from './screens/Bookingscreen';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <BrowserRouter>
     <Routes>
     <Route path="/home" exact Component={Homescreen} />
     <Route path="/book/:roomid" exact Component={Bookingscreen}></Route>
     </Routes>
    
     </BrowserRouter>
    </div>
  );
}

export default App;
