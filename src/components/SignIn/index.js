// import React from 'react'

// function SignIn(){
//     return (<div>
//         <h1>Sign in</h1>
//         <p>this page is most likely to be combined with the landing page or home page.</p>
//     </div>)
// };
// export default SignIn;
import React from "react";

class Dashboard extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="card">
          <div className="card-header ggc-green white-text">
            Please select one of the following options to continue
          </div>
          <div className="card-block">
            <div className="row">
              <div className="col-sm-4" align="center">
                <div className="card">
                  <div className="card-block">
                    <h4 className="h3">Reports for Individual Posters</h4>
                    <a
                      className="w3-btn-floating-large ggc-green w3-text-shadow"
                      ui-sref="posterList"
                    >
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-4" align="center">
                <div className="card">
                  <div className="card-block">
                    <h4 className="h3">Reports for Individual Judges</h4>
                    <a
                      className="w3-btn-floating-large ggc-green w3-text-shadow"
                      ui-sref="judgeList"
                    >
                      
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-4" align="center">
                <div className="card">
                  <div className="card-block">
                    <h4 className="h3">Report for Judges and Posters</h4>
                    <a
                      className="w3-btn-floating-large ggc-green w3-text-shadow"
                      ui-sref="finalReport"
                    >
                     
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;