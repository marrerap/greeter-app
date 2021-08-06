
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
                <span>{this.state.date.getMonth()}                              
                {this.state.date.getDay()},{this.state.date.getTime()}</span>               
            </div>
        )
    }
}

export default Timestamp