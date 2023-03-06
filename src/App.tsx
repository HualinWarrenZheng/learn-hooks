import React from 'react';
import logo from './logo.svg';
import './App.css';
import UseStateComponet from './reactHooks/UseStateCompoent';
import UseEffectComponent from './reactHooks/UseEffectComponent';
import UseContextComponent from './reactHooks/UseContextComponent';
import UseRefComponent from './reactHooks/UseRefComponent';
import Messenger from './reactHooks/useReducer01/Messenger';

function App() {

  return (
    <div>
      {/* <UseStateComponet />
      <UseEffectComponent /> 
      <UseContextComponent />
      <UseRefComponent />*/}
      <Messenger />
    </div>

  );
}

export default App;
