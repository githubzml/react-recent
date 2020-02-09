import React from "react";
//react自定义事件 满足组件之间通信
import emitter from "./../../utils/index"
class Bar extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.itemChange = emitter.addListener('ItemChange', (msg, data) => console.log("msg", msg));//注册事件
    }
    componentWillUnmount() {
        //全局事件页面绑定 记得取消
        emitter.removeListener(this.itemChange);//取消事件
    }
    render() {
        return (
            //就是普通的添加属性
            //代码分割
            <div aria-haspopup="true">this is Bar</div>
        )
    }
}
export default Bar;