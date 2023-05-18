import ReactPlayer from "react-player";


function About(){
    const date = new Date().getDay()
    console.log(date)
    let message ;
    const vUrl = 'https://www.youtube.com/watch?v=SqcY0GlETPk'
    const font = {
        fontsize: '40px'
    }
    const test = true

    if(date >= 0 && 3 >= date){
        message =  `This is the ${date}`
    } else {
        message = `Enjoy Your holiday`
    }

    const bird1 = new Audio(
        "https://upload.wikimedia.org/wikipedia/commons/9/9b/Hydroprogne_caspia_-_Caspian_Tern_XC432679.mp3"
    );

    const bird2 = new Audio(
        "https://upload.wikimedia.org/wikipedia/commons/b/b5/Hydroprogne_caspia_-_Caspian_Tern_XC432881.mp3"
    );

    function toggle1() {
        if (bird1.paused) {
            bird1.play();
        } else {
            bird1.pause();
        }
    }

    function toggle2() {
        if (bird2.paused) {
            bird2.play();
        } else {
            bird2.pause();
        }
    }

    return(
        <div>
            <h1>About Us</h1>
            <h1>{message}</h1>
            <div>
                {test && <h1> Hello </h1>} <span style={font}>World</span>
            </div >
            <img src={require('./Assets/teststst .png')} alt={'sonme'} width={'400px'}/>

            <ReactPlayer
            url={vUrl}
            playing={false}
            volume={0.5}
            />
            <div>
                <button onClick={toggle1}>Caspian Tern 1</button>
                <button onClick={toggle2}>Caspian Tern 2</button>
            </div>


        </div>
    )
}

export default About;
