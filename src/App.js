

import {Routes, Route} from 'react-router-dom';

import Header from "./layouts/Header/Header";
import Blogs from "./pages/Blogs/Blogs";
import Home from "./pages/Home/Home";
import Movies from "./pages/Movies/Movies";

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/movies' element={<Movies />} />
                <Route path='/blogs' element={<Blogs />} />
            </Routes>
        </div>
    )
}
export default App;