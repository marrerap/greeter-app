
import React from 'react';

// function Greeter(props) {    
//     return (
//         <div>
//             Hello {props.name !== undefined ? props.name : "World"}!
//         </div>
//     )
// };

class CounterExercise extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // set the number
            count: 46
        }
    }

    additionClick = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    subtractionClick = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        return (
            <div>
                 <button onClick={this.subtractionClick}>-</button>
                {/* display the number */}
                <span>{this.state.count}</span>
                <button onClick={this.additionClick}>+</button>                
            </div>
        )
    }
}

export default CounterExercise