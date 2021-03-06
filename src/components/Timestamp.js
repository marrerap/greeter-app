
import React from 'react';



class Timestamp extends React.Component {
    constructor() {
        super()
        this.state = {
            date: new Date()
        }
    }
    getMonthName(dayOfMonth) {
        const months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            "June",
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ]
        return months[dayOfMonth]
    }
    updateTime = () => {
        this.setState({
            date: new Date()
        })   
    }
    getSuffix(day) {
        let suffix = 'th';
        if (day === 1 || day === 21 || day === 31) {
            suffix = 'st'
        } else if (day === 2 || day === 22 || day === 32){
            suffix = 'nd'
        }else if (day === 3 || day === 23 || day === 33) {
            suffix = 'rd'
        }
        return suffix
    }

    render() {
        const date = this.state.date;
        const time = date.toLocaleTimeString()
        const month = this.getMonthName(date.getMonth())
        const day = date.getDate()
        const suffix = this.getSuffix(day)
        // const month = (dat.getMonth())
        // const months = [
        //     'January',
        //     'February',
        //     'March',
        //     'April',
        //     'May',
        //     "June",
        //     'July',
        //     'August',
        //     'September',
        //     'October',
        //     'November',
        //     'December'
        // ]
        
        

        return (
            <div>
            <div>{month} {day}{suffix},{time} </div>
            <button type="submit" onClick={this.updateTime} >♻️⏲️</button>
            </div>
        )
    }
}

export default Timestamp