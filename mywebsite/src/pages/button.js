import React, { useState } from "react";

function Home() {
    return (
        <>
            <p>This is a component</p>
            <p>text</p>
        </>
    );
}


function Button({ Mycomponent }) {
    const [currState, setcurrState] = useState();

    function buttonClicked() {
        setcurrState(!currState);
        console.log(currState)
    }

    return (
        <>
            <button onClick={buttonClicked}>{"<>"}</button>
            {(currState && <>{Mycomponent}</>) || (!currState && <p>...</p >)}
            <p>{"</>"}</p>
        </>
    )
}

export default Button;