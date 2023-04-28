import './App.css';
import {Route, Routes} from "react-router-dom";
import BlogList from "./component/Blog";
function App() {
  return (
      <Routes>
        <Route path="/" element={<BlogList/>}/>
      </Routes>

  );
}

export default App;
