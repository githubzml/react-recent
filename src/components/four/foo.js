import React from "react";
import emitter from "./../../utils/index"
class Foo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "foo1"
        }
        this.selfMethod = this.selfMethod.bind(this);
        this.changFont = this.changFont.bind(this);
    }
   
    selfMethod() {
        this.props.putMethod();
    }
    changFont() {
        this.setState({
            value: "foo-1"
        }, () => {
            //数据异步操作
            // this.props.getFromFoo(this.state.value);
            emitter.emit('ItemChange',this.state.value);
            // console.log(this.state.value)
        })
        
    }
    render() {
        let { value } = this.state;
        return (
            <div>
                <div onClick={this.selfMethod}>this is Foo</div>
                <div style={{ color: "red" }} onClick={this.changFont}>i'm Foo second<span style={{ color: "blue" }}>{value}</span></div>
            </div>

        )
    }
}
export default Foo;