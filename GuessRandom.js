import promo from "./components/Promo";

function GuessRandom(props) {
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
    const numberGuess = () => {
        let randomNum = Math.floor(Math.random()* 10) + 1;
        console.log(randomNum);
        let input = prompt(`Type the Number`)
        alert(`this is random Number: ${randomNum}, Your Guess: ${input}`);
    }
    return(
        <div>
            <h1>Guess the Random From 1 to 10</h1>
            <button style={style} onClick={numberGuess}>Guess Number from 1 to 10</button>
            <h1>{props.date}</h1>
        </div>
    )
}

export default GuessRandom;
