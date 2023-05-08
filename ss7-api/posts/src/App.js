import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import List from "./component/List";
import Create from "./component/Create";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<List/>}/>
        <Route path='/create' element={<Create/>}/>
      </Routes>
    </div>
  );
}

export default App;
