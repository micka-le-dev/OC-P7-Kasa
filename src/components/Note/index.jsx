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
    const score = rating * 1
    const scoreMax = maxRating * 1
    const tab = []
    for (let i = 0; i < score; i++) tab.push(starRed)
    for (let i = score; i < scoreMax; i++) tab.push(starGray)

    return (
        <Stars>
            {tab.map((etoile, index) => (
                <Star key={"star-" + index} src={etoile} alt={"étoile"} />
            ))}
        </Stars>
    )
}

Note.propTypes = {
    rating: PropTypes.string.isRequired,
    maxRating: PropTypes.string,
}
Note.defaultProps = {
    rating: "0",
    maxRating: "5",
}
export default Note
