import './App.css'
import { Route, Routes } from 'react-router-dom'

import FormOne from './Pages/Form1/Form1';
import FormTwo from './Pages/Form2/Form2';
import FormThree from './Pages/Form3/Form3';

function App() {
  return(
    <Routes>
        <Route path={'/'} exact element={<FormOne />} />
        <Route path={'/step2'} element={<FormTwo />} />
        <Route path={'/step3'} element={<FormThree />} />
    </Routes>   
  )
}

export default App
