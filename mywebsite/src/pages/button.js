import React, { useState } from "react";


function Button({ Mycomponent, cmpName }) {
    const [currState, setcurrState] = useState();

    function buttonClicked() {
        setcurrState(!currState);
        console.log(currState)
    }

    return (
        <div>
            {currState ?
                <>
                    <button onClick={buttonClicked}>{"<" + cmpName + ">"}</button>
                    {Mycomponent}
                    <button onClick={buttonClicked}>{"<" + cmpName + "/>"}</button>
                </>
                : <button onClick={buttonClicked}>{"<" + cmpName + ">...<" + cmpName + "/>"}</button>}

        </div>
    )
}

export default Button;