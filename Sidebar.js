function Sidebar(props) {
    const styles = {
        color: "white",
        background: "Blue",
        padding:"8px",
        borderRadius:"10px"
    }

    return <h1 style={styles}>{props.greeting}</h1>
}

export default Sidebar;
