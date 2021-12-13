import React, { useState } from "react";


function Button({ Mycomponent, cmpName }) {
    const [currState, setcurrState] = useState();

    function buttonClicked() {
        setcurrState(!currState);
        console.log(currState)
    }

    return (
        <>
            {currState ?
                <>
                    <button onClick={buttonClicked}>{"<" + cmpName + ">"}</button>
                    {Mycomponent}
                    <button onClick={buttonClicked}>{"<" + cmpName + "/>"}</button>
                </>
                : <button onClick={buttonClicked}>{"<" + cmpName + ">...<" + cmpName + "/>"}</button>}

        </>
    )
}

export default Button;