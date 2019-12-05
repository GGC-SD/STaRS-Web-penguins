import React, {useState} from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import {Link, Redirect} from 'react-router-dom';
import * as routes from '../../constants/routes'

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
    backgroundColor: "#00704a",
    align: 'center',
    borderRadius: "5px"
}

function ViewJudgeButton(){
     
    //This displays more of te judges information
    return(  
        <div>
            {/* {vredir ? <Redirect to={Routes.JUDGES}/> : null} */}
            <ReactBootstrap.Button variant="primary" size="sm" /*onClick={() => setvRedir(true)} block*/> View</ReactBootstrap.Button>
        </div>
    )
}

export default function Judges(){
    
    return(
        <div style={styleBody}>
        <h1 style={styleH1}>Judges</h1>
        <p> This is for the judges</p>
        <ReactBootstrap.Table striped bordered hover>
            <thead>
                <tr>
                    <th>Judge</th>
                    <th>Number of Poster Surveyed</th>
                    <th>Groups Surveyed</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Dr. Burr</td>
                    <td>3</td>
                    <td>"Detection of Genetic Modification in Non-GMO Labeled Soy Based Protein Powders "
                        "Effects of pH, Iron and Reduction state on Melanin Polymerization"
                        "Time-of-day Influence on Postural Control and Neurocognition for Concussion Diagnostics"
                    </td>
                    <td><ViewJudgeButton /> </td>
                </tr>
                <tr>
                    <td>Dr. Stanhope</td>
                    <td>5</td>
                    <td>"The Study of Absorption, Emission, Fluorescence and Raman Spectroscopy Techniques in Physical Chemistry"
                        "Synthesis and studies of compounds from ninhydrin and substituted anilines"
                        "Grizzlies get their growl on: Georgia Gwinnett College chemistry outreach"
                        "Modulation of Phagocytic Activity of Alpha-Synuclein Stimulated Microglial cells by Anti-inflammatory agents"
                        "Synthesis and Crystal Structure Analysis of Indenochalcones Using Green Chemistry"
                    </td>
                    <td><ViewJudgeButton /> </td>
                </tr>
                <tr>
                    <td>Dr. Smith</td>
                    <td>1</td>
                    <td>"The Effects of Nicotine as a Neuroprotectant Against Nigrostriatal Damage"
                    </td>
                    <td><ViewJudgeButton /> </td>
                </tr>
                <tr>
                    <td>Dr. Pierre</td>
                    <td>4</td>
                    <td>"Detecting the presence of EPSPS4 and Lectin Genes in Soy Based Protein Powders"
                        "Detection of Genetic Modification in Non-GMO Labeled Soy Based Protein Powders"
                        "Effects of Thermal Oxidation on Surface Topography of Hexagonal Boron Nitride (hBN) by AFM"
                        "Design and synthesis of ninhydrin based unnatural Î±- amino acids"
                    </td>
                    <td><ViewJudgeButton /> </td>
                </tr>
                <tr>
                    <td>Dr. Ramon</td>
                    <td>9</td>
                    <td>"Time-of-day Influence on Postural Control and Neurocognition for Concussion Diagnostics"
                        "Synthesis and Characterization of Biofuel using GGC Dining Operations Waste Oil and Grease"
                        "The Ingredients for a Pleasurable Flight"
                        "Time-of-day Influence on Postural Control for Concussion Diagnostics"
                        "Relationship of Muscle Oxygenation, VO2, and Heart Rate to Exercise Intensity"
                        "Upgrading Waste Oil"
                        "Shared Augmented Reality Experience of 3D Molecules  in a Chemistry Classroom"
                        "Exploration in Using Neural Networks to Recognize Handwritten Digits"
                        "An Analytical Exploration in Gun Violence in the USA"
                    </td>
                    <td><ViewJudgeButton /> </td>
                </tr>
                <tr>
                    <td>Dr. Cosby</td>
                    <td>3</td>
                    <td>"MR. Mol: Mixed Reality Molecule"
                        "Verifying Non-GMO Labels on Soy-Based Protein Powders"
                        "The Same World: Education Through Shared Augmented Reality Experiences"
                    </td>
                    <td><ViewJudgeButton /> </td>
                </tr>
                <tr>
                    <td>Dr. Moesby</td>
                    <td>6</td>
                    <td>"Study of binary eutectic mixtures in quest of green solvents"
                        "Synthesis and gelation studies of N-phenyloctadecanamides as low molecular mass gelators"
                        "The Effects of Nicotine as a Neuroprotectant Against Nigrostriatal Damage"
                        "Analysis of GGC Dining Operations Waste Oil and Grease for use as Biofuel"
                        "ynthesis and studies of compounds from ninhydrin and substituted anilines"
                        "Effects of pH, Iron and Reduction state on Melanin Polymerization"
                    </td>
                    <td><ViewJudgeButton /> </td>
                </tr>
            </tbody>
    
        </ReactBootstrap.Table>        

        </div>
    );
}

   //This is the process used to set up asynchronous func that gets data from 
    //api only when the component is first launched
    
    // useEffect(() => {
    //     get things from api/database;
    // }[]);

    // const fetchData = async () => {
    // const data = await ;
    // };
    // const dataItems = await data.json();
