import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import {useState} from 'react';
import Home from "./Home";
import Speaker from "./Speaker";
const _Routes = () => {
    return (
        <Router>
            <Routes>
                <Route exact path = "/" element={<Home/>}></Route>
                <Route exact path = "/speaker" element={<Speaker/>}></Route>
                {/* <Route exact path = "/Blogs" element={<Blog/>}></Route>
                <Route exact path = "/About" element={<About/>}></Route>
                <Route exact path = "/Theme" element={<Theme/>}></Route>
                <Route exact path = "/Teams" element={<Teams/>}></Route> */}
            </Routes>
        </Router>
    )
}

export default _Routes