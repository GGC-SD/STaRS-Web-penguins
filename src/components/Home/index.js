import React, {Component, useState, useEffect} from 'react'
import {Redirect} from 'react-router-dom';
import * as Routes from '../../constants/routes'
import * as ReactBootstrap from 'react-bootstrap';

const style = {
    margin: 20,
    padding: 20,
    color: 'black'
}
const styleH1 = {
    fontSize: 36,
    color: 'white',
    width: 1060,
    backgroundColor: "#2E8B57",
    align: 'center'
  }

//function to manage the button the links to the Judges page
function Buttons(){
    //each useState for the buttons respectively
    const [jredir, setjRedir] = useState(false);  
    const [predir, setpRedir] = useState(false);
  
    return(  
        <div>
            {jredir ? <Redirect to={Routes.JUDGES}/> : null}
            {predir ? <Redirect to={Routes.POSTERS}/> : null}
            <ReactBootstrap.Button variant="success" size="lg" onClick={() => setjRedir(true)} block> Judges</ReactBootstrap.Button>
            <ReactBootstrap.Button variant="success" size="lg" onClick={() => setpRedir(true)} block> Poster</ReactBootstrap.Button>
        </div>
    )
}


function Home(){

    return (<div style={style}>
        <h1 style={styleH1}>Home</h1>
        <p>Hi welome to the STaRS app!</p>
        <Buttons />        
    </div>)
};


export default Home;

