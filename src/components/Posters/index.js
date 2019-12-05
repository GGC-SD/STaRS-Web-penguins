import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';

const style = {
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
const customBtn = {
    backgroundColor: '#00704a',
    color: 'white',
    border: '2px solid #00704a',
}

function ViewPosterButton(){
    //Button redirects to <Poster> component and shows full details
    return(  
        <div>
            {/* {vredir ? <Redirect to={Routes.JUDGES}/> : null} */}
            <ReactBootstrap.Button variant="primary" size="sm" /*onClick={() => setvRedir(true)} block*/> View</ReactBootstrap.Button>
        </div>
    )
}
export default function Posters(props){
    

    //This is the process used to set up asynchronous func that gets data from 
    //api only when the component is first launched
    
    // useEffect(() => {
    //     get things from api/database;
    // }[]);

    // const fetchData = async () => {
    // const data = await ;
    // };
    // const dataItems = await data.json();


    return (<div style={style}>
        <h1 style={styleH1}>Posters</h1>
        <p>A list of all the posters voted and unvoted</p>
        <ReactBootstrap.Table striped bordered hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Poster</th>
                    <th>Students</th>
                    <th>Advisor</th>
                    <th>Number of Surveys</th>
                    <td></td>
                </tr>
            </thead>
            <tbody>
            <tr>
                    <td>21</td>
                    <td>Detection of Genetic Modification in Non-GMO Labeled Soy Based Protein Powders</td>
                    <td>Tyshica McDaniel
                        Shai Waldrip
                        Nailah Williamson
                    </td>
                    <td>Ernest Ricks, Jr.</td>    
                    <td><ViewPosterButton /> </td>             
                </tr>
                <tr>
                    <td>36</td>
                    <td>Effects of pH, Iron and Reduction state on Melanin Polymerization</td>
                    <td>
                        Christan Santos
                    </td>
                    <td>Robert Haining</td>
                    <td><ViewPosterButton /> </td> 
                </tr>
                <tr>
                    <td>3</td>
                    <td>Time-of-day Influence on Postural Control and Neurocognition for Concussion Diagnostics</td>
                    <td>Katherine Valencia</td>
                    <td>Robert Luddy Haining</td>
                    <td><ViewPosterButton /></td>
                </tr>
                <tr>
                    <td>30</td>
                    <td>The Study of Absorption, Emission, Fluorescence and Raman Spectroscopy Techniques in Physical Chemistry</td>
                    <td>Darshine Munna</td>
                    <td>Patrice Bell</td>
                    <td><ViewPosterButton /></td>
                </tr>
                <tr>
                    <td>15</td>
                    <td>Synthesis and studies of compounds from ninhydrin and substituted anilines</td>
                    <td>Joshua Russell</td>
                    <td>Ajay Mallia</td>
                    <td><ViewPosterButton /></td>
                </tr>
                <tr>
                    <td>17</td>
                    <td>Grizzlies get their growl on: Georgia Gwinnett College chemistry outreach</td>
                    <td>
                        Ara Ko
                        Katie Coscia
                        Madison Roark
                    </td>
                    <td>
                        Rebecca Kalman
                        Gillian Rudd
                    </td>
                    <td><ViewPosterButton /></td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Modulation of Phagocytic Activity of Alpha-Synuclein Stimulated Microglial cells by Anti-inflammatory agents</td>
                    <td>Kyra Brewer</td>
                    <td>
                        Cindy Achat-Mendes
                    </td>
                    <td><ViewPosterButton /></td>
                </tr>
                <tr>
                    <td>19</td>
                    <td>Synthesis and Crystal Structure Analysis of Indenochalcones Using Green Chemistry</td>
                    <td>Elvia Encarnación-Thomas</td>
                    <td>Dr. Mallia
                        Dr. Sloop
                    </td>
                    <td><ViewPosterButton /></td>
                </tr>
                <tr>
                    <td>20</td>
                    <td>Detecting the presence of EPSPS4 and Lectin Genes in Soy Based Protein Powders</td>
                    <td>
                        Danny Vu
                        Jessica Montoya
                        Nhu Tran
                        Vanessa Largo
                    </td>
                    <td>Ernest Ricks, Jr.</td>
                    <td><ViewPosterButton /></td>
                </tr>
                <tr>
                    <td>33</td>
                    <td>Effects of Thermal Oxidation on Surface Topography of Hexagonal Boron Nitride (hBN) by AFM</td>
                    <td>
                        Edil Nour
                    </td>
                    <td>Neelam Khan</td>
                    <td><ViewPosterButton /></td>
                </tr>
            </tbody>
        </ReactBootstrap.Table>  
    </div>
    )
};
