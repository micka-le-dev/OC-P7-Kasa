import PropTypes from "prop-types"
import { useState } from "react"
import styled from "styled-components"
import chevron from "../../assets/chevron-dropdown.svg"

const Wrapper = styled.div`
    border-radius: ${(props) => (props.isLarge ? "5px" : "10px")};
    background: #f7f7f7;
    font-weight: 500;
    line-height: 142.6%;
    width: 100%;
    ${(props) => {
        if (props.isLarge)
            return `max-width: 1023px;
    font-size: 24px;`
        else
            return `max-width: 582px;
    font-size: 18px;`
    }}
`
const Bande = styled.h3`
    padding: ${(props) => (props.isLarge ? "8px 18px" : "13px 20px")};
    margin-bottom: ${(props) => (props.isLarge ? "27px" : "30px")};
    border-radius: 5px;
    background: #ff6060;

    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Sujet = styled.span`
    color: #ffffff;
`

const Description = styled.div`
    ${(props) =>
        props.isOpen
            ? `height: 0;
    overflow: hidden;`
            : `height: auto;
    overflow: none;`}
    padding: ${(props) => (props.isLarge ? "0 20px 18px" : "0 20px 27px")};
`

function Dropdown({ isLarge, sujet, description }) {
    const [isOpen, setOpen] = useState(false)
    const toggleOpen = () => setOpen(!isOpen)
    return (
        <Wrapper isLarge={isLarge}>
            <Bande isLarge={isLarge}>
                <Sujet>{sujet}</Sujet>
                <img
                    onClick={() => toggleOpen()}
                    src={chevron}
                    alt="chevron dropdown"
                />
            </Bande>
            <Description isLarge={isLarge} isOpen={isOpen}>
                {description?.map((paragraphe, index) => {
                    return (
                        <p key={`dropdown-${sujet}-${index}`}>{paragraphe}</p>
                    )
                })}
            </Description>
        </Wrapper>
    )
}

Dropdown.propTypes = {
    isLarge: PropTypes.bool,
    sujet: PropTypes.string,
    description: PropTypes.array,
}
Dropdown.defaultProps = {
    isLarge: false,
    sujet: "dropdown large",
    description: ["description paragraphe 1", "description paragraphe 2"],
}
export default Dropdown
