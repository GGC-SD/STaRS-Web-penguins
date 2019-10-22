import React, {Component, useState, useEffect} from 'react'
import {Redirect} from 'react-router-dom';
import * as Routes from '../../constants/routes'



//function to manage the button the links to the Judges page
function Buttons(){
    //each useState for the buttons respectively
    const [jredir, setjRedir] = useState(false);  
    const [predir, setpRedir] = useState(false);
  
    return(  
        <div>
            {jredir ? <Redirect to={Routes.JUDGES}/> : null}
            {predir ? <Redirect to={Routes.POSTERS}/> : null}
            <button onClick={() => setjRedir(true)}> Judges</button>
            <button onClick={() => setpRedir(true)}> Poster</button>
        </div>
    )
}

function Home(){

    return (<div>
        <h1>Home</h1>
        <p>Hi welome to the STaRS app!</p>
        <Buttons />        
    </div>)
};


export default Home;

