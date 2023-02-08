import PropTypes from "prop-types"
import styled from "styled-components"
import starGray from "../../assets/star-gray.svg"
import starRed from "../../assets/star-red.svg"

const Star = styled.img`
    display: inline-block;
    flex-shrink: 0;
    aspect-ratio: 1;
    width: 30px;
    @media only screen and (max-width: 680px) {
        width: 15px;
    }
`
const Stars = styled.div`
    display: flex;
    gap: 10px;
`

function Note({ rating, maxRating }) {
    const tabRating = []
    for (let i = 0; i < rating; i++) tabRating.push(starRed)
    for (let i = rating; i < maxRating; i++) tabRating.push(starGray)

    return (
        <Stars>
            {tabRating.map((etoile, index) => (
                <Star key={"star-" + index} src={etoile} alt={"étoile"} />
            ))}
        </Stars>
    )
}

Note.propTypes = {
    rating: PropTypes.array.isRequired,
    maxRating: PropTypes.number,
}
Note.defaultProps = {
    rating: 0,
    maxRating: 5,
}
export default Note
