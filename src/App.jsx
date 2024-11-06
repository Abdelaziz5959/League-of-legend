import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import HomePage from './Pages/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import DetailChampion from './Pages/DetailChampion';
import ItemPage from './Pages/ItemPage';
import ItemDetailspage from './Pages/ItemDetailsPage';


function App() {
 

  return <>

      <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
      <Route  path='/' element={<HomePage></HomePage>}> </Route>
      <Route path='/champion/:id'element={<DetailChampion></DetailChampion>}> </Route>
      <Route path='/item'element={<ItemPage></ItemPage>}> </Route>
      <Route path='/item/:name'element={<ItemDetailspage/>}> </Route>
      </Routes>
      </BrowserRouter>
    </>
  }

export default App