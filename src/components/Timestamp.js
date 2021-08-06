
import React from 'react';

// function Greeter(props) {    
//     return (
//         <div>
//             Hello {props.name !== undefined ? props.name : "World"}!
//         </div>
//     )
// };

class Timestamp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // set the number
            date: new Date(),
        }
    }

    // additionClick = () => {
    //     this.setState({
    //         count: this.state.count + 1
    //     })
    // }
    // subtractionClick = () => {
    //     this.setState({
    //         count: this.state.count - 1
    //     })
    // }

    render() {
        return (
            <div> 
                <span>Month:{this.state.date.getMonth()},<br/>Day:                              
                {this.state.date.getDay()}th</span>               
            </div>
        )
    }
}

export default Timestamp