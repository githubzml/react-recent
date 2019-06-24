import React from "react";
import UserGreeting from "../two/usergreet"
import GuessGreet from "../two/guessgreet"
function Greeting(props) {
    const isLogined = props.isLogined;
    if (isLogined) {
        return <UserGreeting />
    }
    return <GuessGreet />
}
export default Greeting;