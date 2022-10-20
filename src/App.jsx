import './App.css'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'

import FormOne from './Pages/Form1/Form1';
import FormTwo from './Pages/Form2/Form2';
import FormThree from './Pages/Form3/Form3';

function App() {
  return(
    <Router>
      <Routes>
            <Route path={'/'} element={<FormOne />} />
            <Route path={'/step2'} element={<FormTwo />} />
            <Route path={'/step3'} element={<FormThree />} />  
      </Routes>   
    </Router>
  )
}

export default App
