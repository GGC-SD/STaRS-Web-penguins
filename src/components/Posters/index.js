import React from 'react'

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
    </div>
    )
};
