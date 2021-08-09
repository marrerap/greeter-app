import React from 'react'
import rot13 from 'rot-thirteen'


class Translator extends React.Component {
    constructor(props) {
        super(props)
        // set the initial state-text to include a prop if available or an empty string
        this.state = {
            text: props.initialText || '',
            translatedText: rot13(props.initialText)

        }
    }

    handleTextChange = (event) => {
        // change the state-text based on the event target 
        this.setState({
            text: event.target.value,
            translatedText: rot13(event.target.value)
        })
    }

    render() {
        return (
        <div>
            {/* display the initial state-text */}
            {this.state.translatedText}
            <br />
            {/* use input to change the above state-text, must have onchange and value to work  */}
            <input type='text' onChange={this.handleTextChange} value={this.state.text} />
        </div>)
    }
}

export default Translator;