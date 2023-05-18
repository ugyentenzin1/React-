const bool = true;
const str = "Just";

function Example2(props) {
    return (
        <div>
            <h1>the value fof :{props.toggleBoolean.toString()}</h1>
        </div>
    )
}


export default function App() {
    return(
        <div>
            <Example2 toggleBoolean = {!bool}/>
        </div>
    )
};
