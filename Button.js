function Button() {

    const style = {
        marginBottom: '24px',
        paddingRight: '24px',
        paddingLeft: '24px',
        paddingTop: '8px',
        paddingBottom: '8px',
        borderRadius: '8px',
        boxShadow: '2px 5px #888888',
        background: 'blue',
        color: 'white',
        fontWeight: '700',
        cursor: 'pointer',
    }

    const style2 = {
        marginBottom: '24px',
        paddingRight: '24px',
        paddingLeft: '24px',
        paddingTop: '8px',
        paddingBottom: '8px',
        borderRadius: '8px',
        boxShadow: '2px 5px #888888',
        background: 'green',
        color: 'white',
        fontWeight: '700',
        cursor: 'pointer',
    }

    let darkModeOn = false;
    let lightMOde = '<h1>this is ligh mode</h1>';
    let darkMode = '<h1>this is darMode</h1>';

    function clickHandler() {
        darkModeOn = !darkModeOn;

        if(darkModeOn === true) {
            console.log('this is that')
        } else {
            console.log('that is this')
        }
    }
    return(
        <div>
            <button style={style2 } onClick={clickHandler}>Click Me</button>
        </div>
    );
}

export default Button;
