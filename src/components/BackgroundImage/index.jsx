import { BackgroundImg } from "../../utils/styles/Atoms.jsx"
import PropTypes from "prop-types"

function BackgroundImage({ isHeight, isWidth, src, alt }) {
    return (
        <BackgroundImg
            isHeight={isHeight}
            isWidth={isWidth}
            src={src}
            alt={alt}
        />
    )
}
BackgroundImage.propTypes = {
    isHeight: PropTypes.bool,
    isWidth: PropTypes.bool,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
}
BackgroundImage.defaultProps = {
    isWidth: true,
}

export default BackgroundImage
