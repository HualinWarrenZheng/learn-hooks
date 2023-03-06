import React from 'react';
import logo from './logo.svg';
import './App.css';
import UseStateComponet from './reactHooks/UseStateCompoent';
import UseEffectComponent from './reactHooks/UseEffectComponent';
import UseContextComponent from './reactHooks/UseContextComponent';
import UseRefComponent from './reactHooks/UseRefComponent';
import Messenger from './reactHooks/useReducer01/Messenger';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import * as ReactRouters from './reactRouters/ReactRouters';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ReactRouters.Layout />}>
          <Route index element={<ReactRouters.Home />} />
          <Route path="blogs" element={<ReactRouters.Blogs />} />
          <Route path="contact" element={<ReactRouters.Contact />} />
          <Route path="*" element={<ReactRouters.NoPage />} />
        </Route>
      {/* <div>
        <UseStateComponet />
        <UseEffectComponent /> 
        <UseContextComponent />
        <UseRefComponent />
        <Messenger />
      </div> */}
      </Routes>
    </BrowserRouter>

  );
}

export default App;
