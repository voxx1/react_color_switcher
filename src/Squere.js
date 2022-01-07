const Squere = ({ colorValue, hexValue, isDarkText }) => {
    return (
        <section
            className="square"
            style={{
                backgroundColor: colorValue,
                color: isDarkText ? '#000' : '#fff'
            }}
        >
            <p>{colorValue ? colorValue : 'Empty Value'}</p>
            <p>{hexValue ? hexValue : null}</p>
        </section>
    )
}

Squere.defaultProps = {
    colorValue: 'Empty Color Value'
}

export default Squere
