import React from 'react'

class StarRating extends React.Component {

    getStars(numberOfStars) {
        let stars = "☆☆☆☆☆"
        if (numberOfStars === 1) {
            stars = "★☆☆☆☆"
        } else if (numberOfStars === 2) {
            stars = "★★☆☆☆"
        } else if (numberOfStars === 3) {
            stars = "★★★☆☆"
        } else if (numberOfStars === 4) {
            stars = "★★★★☆"
        } else if (numberOfStars === 5) {
            stars = "★★★★★"
        }
        return stars
    }

    render() {
        const numberOfStars = this.props.rating
        const stars = this.getStars(numberOfStars)




        return (
            <div>{stars}</div>
        )

    }
}

export default StarRating
