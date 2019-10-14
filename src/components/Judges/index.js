import React from 'react'
// import {Route, Switch} from 'react-router-dom';

export default function Judges(){
    return(
        <div>
        <h1>Judges</h1>
        <p> This is for the judges</p>
        </div>
    );
}

// function Judges({ match }){
//     return (
//     <div>
//         <h1>Judges</h1>  
//         <ul>
//             <li>
//                 <Link to ={`${match.url}/remaining`}>What's left to judge?</Link>
//             </li>
//             <li>
//                 <Link to={`${match.url}/completed`}>Completed</Link>    
//             </li>
            
//         </ul>
//         <Switch>
//         <Route path={`${match.path}/:judgeId`} component={Judge} />
//         <Route exact path={match.path} render={() => <h1>Select an option</h1>} />
//         </Switch>
//     </div>
//     );
// };

// function Judge({match}){
//     return(
//         <h2> Requested judge ID: {match.params.judgeId}</h2>
//     )
// }
// export default Judges;