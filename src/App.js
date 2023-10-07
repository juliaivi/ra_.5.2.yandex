import React from 'react';
import './App.css';
import Header from './components/Header';
import dataHeader from './data/dataHeader';
import dataBody from './data/dataBody';
import {dataFooter} from './data/dataFooter';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';

function App() {      console.log('dataFooter', dataFooter)
  return (
    <div className="App">
      <Header dataHeader={dataHeader}/>
      <Body dataBody={dataBody} />

      <Footer dataFooter={dataFooter}/>
    </div>
  );
}

export default App;
