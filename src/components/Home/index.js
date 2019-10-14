import React, {Component} from 'react'

const style = {
    margin: 20,
    padding: 20,
    color: 'black'
}

export default function Home(){
    return (<div style={style}>
        <h1>Home</h1>
        <p>Hi welome to the STaRS app!</p>
        <button>posters</button>
        <button>judges</button>
    </div>)
};

//  export default class Home extends Component{
//     state = {count: 0}

//     componentDidMount() {
//         setInterval =>(() => {
//             this.setstate({count: this.state.count + 1})
//         }, 1000)
//     }

//     render() {
//         const {count} = this.state
//         const {color, size} = this.props

//         return (
//         <div style = {{color, fontSize: size}}>
//             {count}
//         </div>)
//     }
// }