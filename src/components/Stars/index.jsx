import PropTypes from "prop-types"
import starGray from "../../assets/star-gray.svg"
import starRed from "../../assets/star-red.svg"

function Stars({ rating, maxRating }) {
    const tabRating = []
    for (let i = 0; i < rating; i++) tabRating.push(starRed)
    for (let i = rating; i < maxRating; i++) tabRating.push(starGray)

    return (
        <div>
            {tabRating.map((etoile, index) => (
                <img key={"star-" + index} src={etoile} alt={"étoile"} />
            ))}
        </div>
    )
}

Stars.propTypes = {
    rating: PropTypes.array.isRequired,
    maxRating: PropTypes.number,
}
Stars.defaultProps = {
    rating: 0,
    maxRating: 5,
}
export default Stars
