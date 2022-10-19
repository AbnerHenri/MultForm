import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import FormOne from './Pages/Form1/Form1';
import FormTwo from './Pages/Form2/Form2';
import FormThree from './Pages/Form3/Form3';

function Routes() {
  return(
    <BrowserRouter>
        <Route path={'/'} exact element={FormOne}/>
        <Route path={'/step2'} exact element={FormTwo} />
        <Route path={'/step3'} exact element={FormThree} />
    </BrowserRouter>
  );
}

export default Routes;