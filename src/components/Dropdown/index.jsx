import PropTypes from "prop-types"
import { useState } from "react"
import styled from "styled-components"
import chevron from "../../assets/chevron-dropdown.svg"

const Wrapper = styled.div`
    border-radius: ${(props) => (props.isLarge ? "5px" : "10px")};
    background: ${(props) => (props.isOpen ? "#f7f7f7" : "transparent")};
    font-weight: 500;
    line-height: 142.6%;
    ${(props) => {
        if (props.isLarge)
            return `width: clamp(250px, 100%,1023px);
    font-size: 24px;`
        else
            return `width: clamp(250px, 100%,582px);
    font-size: 18px;`
    }}
`
const Bande = styled.h3`
    padding: ${(props) => (props.isLarge ? "8px 18px" : "13px 20px")};
    border-radius: 5px;
    background: #ff6060;

    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Sujet = styled.span`
    color: #ffffff;
`
const Fleche = styled.img`
    transform: ${(props) => (props.isOpen ? "scaleY(-1)" : "scaleY(1)")};
    transition: transform 0.8 ease-in-out;
`

const Description = styled.div`
    display: ${(props) => (props.isOpen ? `block` : `none`)};
    padding: ${(props) =>
        props.isLarge ? "27px 20px 18px" : "30px 20px 27px"};
`

function Dropdown({ isLarge, sujet, description }) {
    const [isOpen, setOpen] = useState(false)
    const toggleOpen = () => setOpen(!isOpen)
    return (
        <Wrapper isLarge={isLarge} isOpen={isOpen}>
            <Bande isLarge={isLarge}>
                <Sujet>{sujet}</Sujet>
                <Fleche
                    isOpen={isOpen}
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
