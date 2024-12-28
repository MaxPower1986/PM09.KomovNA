import Main from './Main';
import Reg from './comp/Reg';
import Login from './comp/Login';
import Page from './comp/Page';
import Info from './comp/Info';
import Info2 from './comp/Info2';
import Otsiv from './comp/Otsiv';
import AddTheme from './comp/AddTheme';
import './App.css';
import {Route, Routes} from 'react-router-dom';

function App() {
    return (
      <div>
      <Routes>
          <Route path='/' exact element={<Main/>} />
          <Route path='/reg' exact element={<Reg/>} />
          <Route path='/login' exact element={<Login/>} />
          <Route path='/Page' exact element={<Page/>} />
          <Route path='/Info' exact element={<Info/>} />
          <Route path='/Info2' exact element={<Info2/>} />
          <Route path='/otsiv' exact element={<Otsiv/>} />
          <Route path='/addtheme' exact element={<AddTheme/>} />
      </Routes>
  </div>

    )

}

export default App;
