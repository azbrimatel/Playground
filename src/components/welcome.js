import React from "react"

// function Greet (){
//     return <h1>Hello</h1>
// }

const Greet = props => {
console.log (props)
return (
<div>
    <h1>Hello {props.name} Also known as {props.anotherName}</h1>
    {props.children}
    
</div>
)
}

export default Greet