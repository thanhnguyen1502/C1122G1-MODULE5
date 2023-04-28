import './App.css';
import List from "./component/List";
import Create from "./component/Create";
import {Route, Routes} from "react-router-dom";
import Update from "./component/Update";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<List/>}/>
                <Route path="/create" element={<Create/>}/>
                <Route path="/update/:id" element={<Update/>}/>
            </Routes>
        </>
    );
}

export default App;
