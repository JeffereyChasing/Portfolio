import { BrowserRouter, Route,Routes } from "react-router-dom";
import {portfolio,notes} from './pages'

const App = () => {
  return ( 
    <BrowserRouter>
        <Routes>
          <Route path="/notes" Component={notes}/>
          <Route path="/" Component={portfolio}/>
        </Routes>
    </BrowserRouter>
  );
};

export default App;
