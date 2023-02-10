import PropTypes from "prop-types"
import styled from "styled-components"
import { Tag } from "../../utils/styles/Atoms.jsx"

const TagList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`
function Tags({ tags }) {
    return (
        <TagList>
            {tags.map((tagName, index) => (
                <Tag key={"tag-name-" + index}>{tagName}</Tag>
            ))}
        </TagList>
    )
}

Tags.propTypes = {
    tags: PropTypes.array.isRequired,
}
Tags.defaultProps = {
    tags: ["tag-name"],
}
export default Tags
