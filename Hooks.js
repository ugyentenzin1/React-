import {useRef, useState} from "react";

function Hooks() {
    const[inputText, setInputText] = useState();
    //use state(types of Hooks)
    const[form, getForm] = useState({
        firstName: 'Ugyen',
        secondName: 'Tenzin',
        email: 'ugyen@gamil.com'
    });

    const array = [1,2,3,4,5,6];
    console.log(array.map((e)=> e * 10 ));
    //useRef
    const inputRef = useRef(null);

    const inputFocus = () => {
        inputRef.current.focus()
    }

    function handleName(e) {
        setInputText(e.target.value)
    }
    function handleDetails(e) {
        getForm(e.target.value);
    }

    const style = {
        marginBottom: '24px',
        paddingRight: '24px',
        paddingLeft: '24px',
        paddingTop: '8px',
        paddingBottom: '8px',
        borderRadius: '8px',
        background: 'blue',
        color: 'white',
        fontWeight: '700',
        cursor: 'pointer',
    }

    const input = {
        width: '100%',
        padding: '12px',
        borderRadius: '8px',
        border: '1px solid gray'
    }

    const margin = {
        marginBottom: '20px',
        marginTop: '20px',
    }



    return(
        <div style={margin}>
            <div>
                <h3>Use State Hooks</h3>
                <input placeholder="Name" style={input} type="text" value={inputText} onChange={handleName}/>
                <p>The Name is: {inputText}</p>
                <button style={style} onClick={()=>setInputText('')}>Reset</button>
            </div>
            <div>
                <p>First Name: {form.firstName}</p><input value={form.firstName} onChange={e=>{getForm({...form, firstName: e.target.value})}} placeholder="First Name" style={input}/>
                <p>Second Name: {form.secondName}</p> <input value={form.secondName} onChange={e=>{getForm({...form, secondName: e.target.value})}} placeholder="Second Name" style={input}/>
                <p>Email: {form.email}</p><input type="email" value={form.email} onChange={val=>{getForm({...form, email: val.target.value})}} placeholder="Email" style={input}/>
            </div>

            <div style={margin}>
                <h3>Use Ref Hooks</h3>
                <input style={input} placeholder="use ref" type="text" ref={inputRef}/>
                <p><button style={style} onClick={inputFocus}> Input Focus</button></p>
            </div>
        </div>
    )
}

export default Hooks;
