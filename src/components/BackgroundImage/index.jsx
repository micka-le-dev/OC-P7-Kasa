import { BackgroundImg } from "../../utils/styles/Atoms.jsx"
import PropTypes from "prop-types"

function BackgroundImage({ isAbsolute, isHeight, isWidth, src, alt }) {
    return (
        <BackgroundImg
            isAbsolute={isAbsolute}
            isHeight={isHeight}
            isWidth={isWidth}
            src={src}
            alt={alt}
        />
    )
}
BackgroundImage.propTypes = {
    isAbsolute: PropTypes.bool,
    isHeight: PropTypes.bool,
    isWidth: PropTypes.bool,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
}
BackgroundImage.defaultProps = {
    isWidth: true,
    isAbsolute: true,
}

export default BackgroundImage
