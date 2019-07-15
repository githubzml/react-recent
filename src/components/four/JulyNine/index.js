import React from "react";
function Item(props) {
    return <li>{props.msg}</li>
}
class Jsx extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const arr = [1, 2, 3, 4];
        return (
            <div>
                <h2>09,07,2019</h2>
                <ul>{arr.map((msg) => <Item key={msg} msg={msg} />)}</ul>
            </div>
        )
    }
}
export default Jsx;