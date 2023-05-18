import './App.css';
import {Route,Routes ,BrowserRouter,Link} from 'react-router-dom';
import {HomePage} from './HomePage';
import {Apple} from './Apple';
function App() {
  return (
  <BrowserRouter>
    <div>
      <Link to ='/'>HomePage</Link>
      <Link to = '/apple'>Apple</Link> 
    </div>
    <Routes>
      <Route path = '/' element = {<HomePage/>}/>
      <Route path = '/apple' element = {<Apple/>}/>
    </Routes>
  </BrowserRouter>
  );
}
export default App;
