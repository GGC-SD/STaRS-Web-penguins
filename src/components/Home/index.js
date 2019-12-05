import React, {Component, useState, useEffect} from 'react'
import {Redirect} from 'react-router-dom';
import * as Routes from '../../constants/routes'
import * as ReactBootstrap from 'react-bootstrap';
import Logo from '../Landing/ggcseal.jpg'

const styleBody = {
    margin: 20,
    padding: 20,
    color: 'black',
    boxShadow: '1px 1px 5px 5px #7d7c7c',
    marginTop: '40px',
}
const styleH1 = {
    fontSize: 36,
    color: 'white',
    width: 'auto',
    backgroundColor: '#00704a',
    align: 'center',
    borderRadius: "5px"
  }
const customBtn = {
    backgroundColor: '#00704a',
    color: 'white',
    border: '2px solid #00704a',
  }
  const imgStyle = {
    marginLeft: 230,
    maxWidth: '60%',
    height: 'auto',
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
            <ReactBootstrap.Button style={customBtn} size="lg" onClick={() => setjRedir(true)} block> Judges</ReactBootstrap.Button>
            <ReactBootstrap.Button style={customBtn} size="lg" onClick={() => setpRedir(true)} block> Poster</ReactBootstrap.Button>
        </div>
    )
}


function Home(){

    return (<div style={styleBody}>
        <h1 style={styleH1}>Home</h1>
        <p>Hi welome to the STaRS app!</p>
        <Buttons />        
        <img style={imgStyle} src={Logo}/>
    </div>)
};


export default Home;
