import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import Main from "./Main";
import Sidebar from "./Sidebar";
import Bag from "./Bag";
import Example from "./Example";
import Example2 from "./Example2";
import Button from "./Button";
import GuessRandom from "./GuessRandom";
import Promo from "./components/Promo";
import PromoHeading from "./PromoHeading";
import Hooks from "./Hooks";
import React, {useState} from "react";
import Fruits from "./Fruits";
import FruitsCounter from "./FruitsCounter";
import {Link, Route, Routes} from "react-router-dom";
import Home from "./Home";
import myLogo from "./logoZhang.png"
import Contact from "./Contact";
import About from "./About";
import Calculator from "./calculator";


function Logo(props) {
    return <img src='./logo.svg' width="200px"/>;
}


const data = {
    heading: "99% of Sale",
    string: "thank you from purchasing"
}

function Error(props) {
    const data = 5;
    try {
        return data.toUpperCase();
    } catch {
        console.log('Numbers cant be in UpperCase');
    }
}

const style = {
    display:'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
}

 const sonam = {
    color: 'white',
 }
const style2 = {
    paddingRight: '24px',
    paddingLeft: '24px',
    paddingTop: '8px',
    paddingBottom: '8px',
    borderRadius: '8px',
    color: 'black',
    fontWeight: '700',
    cursor: 'pointer',
    marginRight: "16px"
}

const date = new Date();

function App(props) {

    const [fruits] = useState([
        {fruitName: 'apple', id: 1},
        {fruitName: 'Peach', id: 2},
        {fruitName: 'plum', id: 3},
        {fruitName: 'plum', id: 4},
        {fruitName: 'plum', id: 5},
        {fruitName: 'plum', id: 6},
        {fruitName: 'plum', id: 7},
        {fruitName: 'plum', id: 8},
        {fruitName: 'plum', id: 9},
    ]);

    const navBar = {
        background: "#26648e",
        width:"100%",
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    }

    const navItem = {
        marginLeft: "16px",
        width: "120px",
        background: "white",
        textAlign:"center",
        padding: "8px 20px",
        borderRadius: "10px",
        textDecoration: "none"

    }

    const button = {
        display:"flex",
        alignItems:"center"
            }
    // return <Heading />;
    return(
        <div style={style}>
            <nav style={navBar}>
                <div>
                    <Link to="/home" style={navItem}>HOME</Link>
                    <Link to="/fruits-Counter" style={navItem}>FRUITS</Link>
                    <Link to="/contact" style={navItem}>CONTACT</Link>
                    <Link to="/about_us" style={navItem}>ABOUT US</Link>
                    <Link to="/calculator" style={navItem}>CALCULATOR</Link>
                </div>
                <div style={style}>
                 <img src={myLogo} width={'190px'} className={'margin-left'}/>
                </div>
                <div style={button}>
                    <button style={style2}>LOGOUT</button>
                </div>
            </nav>
            {/*<Header name="Ugyen" color="Blue"/>*/}
            {/*<Main greeting="Goodmrning"/>*/}
            {/*<Sidebar greeting="Good Evening"/>*/}
            {/*<Bag children={<h3>Hello There</h3>}/>*/}
            {/*<Example/>*/}
            {/*<Example2 toogleBoolean='shdb'/>*/}
            {/*<Logo />*/}
            {/*<Error/>*/}
            {/*<Button/>*/}
            {/*<GuessRandom date = {date.toLocaleTimeString()}/>*/}
            {/*<PromoHeading*/}
            {/*    heading = {data.heading}*/}
            {/*    string = {data.string}/>*/}
            {/*<Hooks/>*/}
            {/*<Fruits fruits={fruits}/>*/}
            <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/fruits-Counter" element={<FruitsCounter fruits={fruits}/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/about_us" element={<About/>}/>
                <Route path="/calculator" element={<Calculator/>}/>
            </Routes>
        </div>
    )
}

function Heading(props) {
    return(<h1>{props.title}</h1>)
}

export default App;
