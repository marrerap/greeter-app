
import React from 'react';

// function Greeter(props) {    
//     return (
//         <div>
//             Hello {props.name !== undefined ? props.name : "World"}!
//         </div>
//     )
// };

class Greeter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    handleClick = () => {
        if (this.state.count >= 10) {
            this.setState({ count: 0})
            } else {
                this.setState({
                    count: this.state.count + 1
                })
            }
        // this.setState({
        //     count: this.state.count + 1
        // })
    }
    render() {
        return (
        <div>
            <span>Hello</span> {this.props.name || "World"}!
            <button onClick={this.handleClick}>👋</button>
            <span>{this.state.count}</span>
        </div>
        )}
}

export default Greeter