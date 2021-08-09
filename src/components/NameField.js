import React from 'react'


class NameField extends React.Component {
    render() {
        const firstLetter = this.props.firstName.charAt(0)
        return( 
        <div>
            {firstLetter}. {this.props.lastName}
        </div>)
    }
}

export default NameField