import styled from "styled-components"

export const BackgroundImg = styled.img`
    ${(props) =>
        props?.isAbsolute
            ? `position: absolute;
    z-index: -1000;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);`
            : null}
    display: block;
    ${(props) => (props?.isHeight ? "height:100%;" : null)}
    ${(props) => (props?.isWidth ? "width:100%;" : null)}
    object-fit: cover;
`

export const Message = styled.p`
    text-align: center;
    font-weight: 500;
    font-size: 36px;
    line-height: 142.6%;
`

export const Tag = styled.span`
    display: inline-block;
    width: 115px;
    background: #ff6060;
    border-radius: 10px;
    font-weight: 500;
    font-size: 14px;
    line-height: 142.6%;
    color: #ffffff;
    text-align: center;
`
