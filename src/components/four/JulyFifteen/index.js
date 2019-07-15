import React from "react";
import Omousemove from "./mousemove";
class Orefs extends React.Component {
    // ref 不可过度使用
    // 使用情景 1.自动聚焦
    //         2.文本选择
    //         3.媒体播放

    //你不能在函数组件上使用 ref 除非他指向一个DOM元素或class组件
    // https://react.docschina.org/docs/refs-and-the-dom.html
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.inputFocus = this.inputFocus.bind(this);
    }
    inputFocus() {
        this.myRef.current.focus();
    }
    render() {
        return (
            <div>
                <div>this  is refs</div>
                <div>enen</div>
                <input type="text" ref={this.myRef} />
                <input type="button" value="点击" onClick={this.inputFocus} />
                {/* <Omousemove /> */}
            </div>
        )
    }
}
export default Orefs;