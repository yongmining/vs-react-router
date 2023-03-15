import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './layouts/Layout';
import Main from './pages/Main';
import Menu from './pages/Menu';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Layout/>} >
          <Route index element={ <Main/>}/>
          <Route path="/about" element={ <About/>}/>
          <Route path="/menu" element={ <Menu/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
