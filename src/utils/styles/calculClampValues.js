export default function calculClampValues(
    bigScreen,
    smallScreen,
    bigSize,
    smallSize
) {
    const a = (bigSize - smallSize) / (bigScreen - smallScreen)
    const b = bigScreen * a - bigSize

    return `clamp( ${smallSize}px, calc(${100 * a}vw - ${b}px) , ${bigSize}px )`
}
