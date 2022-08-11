import { React, ReactDOMServer } from "./dependencies.ts";

const Varios = ( props:Array<string>) =>{
    const colors = Object.values(props)

    return(
        <ul>
            {colors.map((color, index) => { 
                return <li key={index} style={{color: color}}>{color} </li>
            })}
        </ul>
    )
}

export default (props:Array<string> = [])=>
`<!DOCTYPE html>
${ReactDOMServer.renderToString((
    <>
    <form action="/" method="post"> 
        <input name="textColor" placeholder="color" type="text" />
        <button type="submit">submit</button>
    </form>
    <hr/>
    < Varios {...props} />
    </>
))}`

