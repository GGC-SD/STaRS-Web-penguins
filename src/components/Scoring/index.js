import React, {Component, useState, useEffect} from 'react'
import Form from 'react-bootstrap/Form';
import * as ReactBootstrap from 'react-bootstrap';

const style = {
    margin: 20,
    padding: 20,
    color: 'black',
    boxShadow: '1px 1px 5px 5px #7d7c7c',
    marginTop: '40px',
    
}
const styleH2 = {
    fontSize: 36,
    color: 'white',
    width: 'auto',
    backgroundColor: "#00704a",
    align: 'center',
    borderRadius: "5px"
}
const imgStyle = {
    marginLeft: 80,
}

function Button(){
    //each useState for the buttons respectively
    const [submitScore, setSubmitScore] = useState(false);  
  
    return(  
        <div>
            {/* {submitScore ? } */}
            <ReactBootstrap.Button /*style={} onClick={() => setSubmitScore(true)}*/ block variant="primary" type="submit">Submit</ReactBootstrap.Button>
        </div>
    )
}

export default function Scoring(props){

    return (
    <div>
        <div style={style}>   
            <p>Title: </p>
            <p>Advisor: </p>
            <p>Students: </p>
            <br>
            </br>
            <p>Number of Surveys</p>
        </div>
        <Form>
        <div style={style}>
            <div>  
                <h2>#1: Introduction and Motivation</h2>   
                    {['radio'].map(type => (
                        <div key={`inline-${type}`} className="q1">
                        <Form.Check inline label="1" type={type} id={`inline-${type}-1`} />
                        <Form.Check inline label="2" type={type} id={`inline-${type}-2`} />
                        <Form.Check inline label="3" type={type} id={`inline-${type}-3`} />
                        <Form.Check inline label="4" type={type} id={`inline-${type}-4`} />
                        <Form.Check inline label="5" type={type} id={`inline-${type}-5`} />
                        </div>
                    ))}
            </div>
        </div>
        <div style={style}>
            <div>  
                <h2>#2: Methodology</h2>   
                    {['radio'].map(type => (
                        <div key={`inline-${type}`} className="q2">
                        <Form.Check inline label="1" type={type} id={`inline-${type}-1`} />
                        <Form.Check inline label="2" type={type} id={`inline-${type}-2`} />
                        <Form.Check inline label="3" type={type} id={`inline-${type}-3`} />
                        <Form.Check inline label="4" type={type} id={`inline-${type}-4`} />
                        <Form.Check inline label="5" type={type} id={`inline-${type}-5`} />
                        </div>
                    ))}
            </div>
        </div>
        <div style={style}>
            <div>  
                <h2>#3: Results/Solution</h2>   
                    {['radio'].map(type => (
                        <div key={`inline-${type}`} className="q3">
                        <Form.Check inline label="1" type={type} id={`inline-${type}-1`} />
                        <Form.Check inline label="2" type={type} id={`inline-${type}-2`} />
                        <Form.Check inline label="3" type={type} id={`inline-${type}-3`} />
                        <Form.Check inline label="4" type={type} id={`inline-${type}-4`} />
                        <Form.Check inline label="5" type={type} id={`inline-${type}-5`} />
                        </div>
                    ))}
            </div>
        </div>
        <div style={style}>
            <div>  
                <h2>#4: Oral Presentation</h2>   
                    {['radio'].map(type => (
                        <div key={`inline-${type}`} className="q4">
                        <Form.Check inline label="1" type={type} id={`inline-${type}-1`} />
                        <Form.Check inline label="2" type={type} id={`inline-${type}-2`} />
                        <Form.Check inline label="3" type={type} id={`inline-${type}-3`} />
                        <Form.Check inline label="4" type={type} id={`inline-${type}-4`} />
                        <Form.Check inline label="5" type={type} id={`inline-${type}-5`} />
                        </div>
                    ))}
            </div>
        </div>
        <div style={style}>
            <div>  
                <h2>#5: Poster Layout</h2>   
                    {['radio'].map(type => (
                        <div key={`inline-${type}`} className="q5">
                        <Form.Check inline label="1" type={type} id={`inline-${type}-1`} />
                        <Form.Check inline label="2" type={type} id={`inline-${type}-2`} />
                        <Form.Check inline label="3" type={type} id={`inline-${type}-3`} />
                        <Form.Check inline label="4" type={type} id={`inline-${type}-4`} />
                        <Form.Check inline label="5" type={type} id={`inline-${type}-5`} />
                        </div>
                    ))}
            </div>
        </div>
        <div style={style}>
            <div>  
                <h2>#6: Impact</h2>   
                    {['radio'].map(type => (
                        <div key={`inline-${type}`} className="q6">
                        <Form.Check inline label="1" type={type} id={`inline-${type}-1`} />
                        <Form.Check inline label="2" type={type} id={`inline-${type}-2`} />
                        <Form.Check inline label="3" type={type} id={`inline-${type}-3`} />
                        <Form.Check inline label="4" type={type} id={`inline-${type}-4`} />
                        <Form.Check inline label="5" type={type} id={`inline-${type}-5`} />
                        </div>
                    ))}
            </div>
        </div>
        </Form>

        <Button />      

    </div>
    )
};
