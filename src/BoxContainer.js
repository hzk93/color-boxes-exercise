import React, { Component } from 'react'
import Box from './Box'
import './BoxContainer.css'

class BoxContainer extends Component{
    static defaultProps = {
        numBoxes: 40,
        allColors: ["purple", "magenta", "violet", "pink","blue","violet","red","yellow","brown","teal"]
    }

    render(){
        const boxes = Array.from({ length: this.props.numBoxes}).map(
            () => <Box colors={this.props.allColors}/>
        )
        console.log("TXT->",boxes)
        return(
            <div className="BoxContainer">
                {boxes}
            </div>
        )
    }
}

export default BoxContainer