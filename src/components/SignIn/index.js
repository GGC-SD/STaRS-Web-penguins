import React, {useState} from 'react'
import * as ReactBootstrap from 'react-bootstrap';

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
 

export default function SignIn(){

    const [login, setLogin] = useState({
        judge: "",
        password: "",
    });
    
    const [judgeId, setJudgeId] = useState(0);
    
    const printLogin = e => {
    
    console.log(`judge: ${login.judge}, password: ${login.password}, id: ${judgeId}`);
    };
    
    const updateField = e => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value
    });
    };

    return (<div style={styleBody}>
        <h1 style={styleH1}>Sign in</h1>
        <form onSubmit={printLogin}>
            <label>
                Judge
                <input 
                    value={login.judge}
                    name="judge"
                    onChange={updateField}
                />
            </label>

            <label>
                password
                <input 
                    type="password"
                    value={login.password}
                    name="password"
                    onChange={updateField}
                />
            </label>

            <br />
            <ReactBootstrap.Button variant="secondary" onClick={() => {
                setJudgeId(judgeId + 1);
                printLogin();
            }} >submit</ReactBootstrap.Button>
        </form>
    </div>)
};

// class Dashboard extends React.Component {
//   render() {
//     return (
//       <div className="container">
//         <div className="card">
//           <div className="card-header ggc-green white-text">
//             Please select one of the following options to continue
//           </div>
//           <div className="card-block">
//             <div className="row">
//               <div className="col-sm-4" align="center">
//                 <div className="card">
//                   <div className="card-block">
//                     <h4 className="h3">Reports for Individual Posters</h4>
//                     <a
//                       className="w3-btn-floating-large ggc-green w3-text-shadow"
//                       ui-sref="posterList"
//                     >
//                     </a>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-sm-4" align="center">
//                 <div className="card">
//                   <div className="card-block">
//                     <h4 className="h3">Reports for Individual Judges</h4>
//                     <a
//                       className="w3-btn-floating-large ggc-green w3-text-shadow"
//                       ui-sref="judgeList"
//                     >
                      
//                     </a>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-sm-4" align="center">
//                 <div className="card">
//                   <div className="card-block">
//                     <h4 className="h3">Report for Judges and Posters</h4>
//                     <a
//                       className="w3-btn-floating-large ggc-green w3-text-shadow"
//                       ui-sref="finalReport"
//                     >
                     
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

