import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/home';
import Adminpanle from './components/Adminpanle';
import Navbar from './components/Navbar';
import AddPost from './components/AddPost';
import DeletePost from './components/DeletePost';
import EditPost from './components/EditPost';
import ExploreBlog from './components/ExploreBlog';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="" element={<Home />}> </Route>
          <Route path="/adminpannle" element={<Adminpanle />} />
          <Route path="/addpost" element={<AddPost/>}/>
          <Route path="/deletepost" element={<DeletePost/>}/>
          <Route path='/editpost' element={<EditPost/>}/>
          <Route path='/blogdetails/:id' element={<ExploreBlog/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

