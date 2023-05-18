function Example() {
    const test = Math.floor(Math.random() * 10 )+ 1;
    console.log(test);

    console.log(Math.floor(3))

    const styles = {
        display: 'flex',
        justifyContent: 'center',
    }

    return (
        <div className="heading" style={styles}>
            <h1>This is my lucky Number:{Math.floor(Math.random()*10)}</h1>
        </div>
    );
}

export default Example;
