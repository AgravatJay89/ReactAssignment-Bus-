import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './Layout';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import ConsumeApis from './Student';
import Studentdetails from './Studentdetails';
import Addstudent from './Addstudent';
import EditStudent from './EditStudent';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}></Route>
        <Route path='About' element={<About/>}></Route>
        <Route path='Contact' element={<Contact/>}></Route>
        <Route path='Student' element={<ConsumeApis/>}></Route>
        <Route path='Student/:id' element={<Studentdetails/>}></Route>
        <Route path='Student/Addstudent' element={<Addstudent/>}></Route>
        <Route path='Student/Editstudent/:id' element={<EditStudent/>}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
  //<div className='container'><ConsumeApi/></div>
);


