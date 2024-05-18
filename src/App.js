import React from 'react';
import {BrowserRouter,Router,Route, Routes} from 'react-router-dom'
import Home from './Component/Home.jsx'
import Create from './Component/Create.jsx'
import Read from './Component/Read.jsx'
import Update from './Component/Update.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (

    <div>
          <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/create' element={<Create />}></Route>
                <Route path='/read/:id' element={<Read />}></Route>
                <Route path='/update/:id' element={<Update />}></Route>

            </Routes>
          </BrowserRouter>
    </div>
  );
}
export default App;
