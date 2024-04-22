
import { BrowserRouter as Router,Route ,Routes } from 'react-router-dom';
import Login from './components/Login';
import Header from './components/Header';
import Home from './components/Home';
function App() {
  return (
    <div>
      <Router>
                <Routes>
                    
                  <Route exact path="LinkedInClone/" element={<Login/>}></Route>
                  <Route path="LinkedInClone/home" element={<><Header/><Home/></>}></Route>
                </Routes>
            </Router>
    </div>
  );
}

export default App;