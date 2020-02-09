import React from "react";
import {Link} from "react-router-dom";
function Index1() {
    return (
        <div>
            <Link to="/page1">Opage1</Link>
            <Link to="/page2">Opage2</Link>
            <div> this is component1</div>
        </div>
    )
}
export default Index1;