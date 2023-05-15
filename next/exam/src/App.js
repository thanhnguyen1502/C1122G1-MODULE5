import './App.css';
import {Route, Routes} from "react-router-dom";
import List from "./component/List";
import Header from "./component/Header";
import Update from "./component/Update";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<List/>}/>
                <Route path="/update/:id" element={<Update/>}/>
            </Routes>
        </>
    );
}

export default App;
