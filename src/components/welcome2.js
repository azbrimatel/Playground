import React, {Component} from "react" 

class Greetings extends Component{
    render(){
        return <h1>Hola {this.props.name}</h1>
    }
}
export default Greetings