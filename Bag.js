function Bag(props) {
    const bag = {
        padding: "20px",
        border: "1px solid gray",
        background: 'yellow',
        margin: "20px 0",
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
    return (
        <div style={bag}>
            {props.children}
        </div>
    )
}
export default Bag;

const Nav = (props) => {
    return (
        <ul>
            <li>{props.first}</li>
        </ul>
    )
}
