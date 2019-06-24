import React, { Fragment } from "react";
import "./index.css";
import Greeting from "./childComponents/one/index";
import Foo from "./foo"
import Bar from "./bar"
class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            arr: [1, 2, 3],
            val: 'ene'
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getInputVal = this.getInputVal.bind(this);

        this.ownMethod = this.ownMethod.bind(this);
        this.getFromFoo = this.getFromFoo.bind(this);
    }
    //React 方法绑定this  class方法默认不会绑定this
    // 1 constructor内部绑定this this.handleClick = this.handleClick.bind(this)
    // 2 方法定义时绑定箭头函数 handleClick = ()=>{}
    // 3 标签内引入箭头函数 ()=>this.handleClick() 可能会进行额外渲染 不推荐使用
    componentWillMount() {
        console.log("componentWillMount")
    }
    componentDidMount() {
        console.log("componentDidMount")
    }
    componentWillReceiveProps() {
        console.log("componentWillReceiveProps")
    }
    // shouldComponentUpdate() {
    //     console.log("shouldComponentUpdate")
    // }
    componentWillUpdate() {
        console.log("componentWillUpdate")
    }
    componentDidUpdate() {
        console.log("componentDidUpdate")
    }
    componentWillUnmount() {
        console.log("componentWillUnmount")
    }
    //React 事件对象e将会被隐式传递 this.handleClick.bind(this, "cc", "mm")  
    handleClick(p, m, e) {
        e.preventDefault();
        console.log("组织事件默认行为", p, m);
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state.val);
    }
    getInputVal(e) {
        this.setState({
            val: e.target.value
        })

    }
    ownMethod() {
        console.log(2222)
    }
    getFromFoo(text) {
        //子传递给父级 通过回调函数
        console.log("text", text)
    }
    //React 条件渲染
    //1 标签绑定布尔值
    //2 将组建复制给变量 再将变量写入 render函数中
    //3 与运算符 &&
    //4 三目运算符
    //5 阻止条件渲染
    render() {
        let { date, arr, val } = this.state;
        return (
            <div>
                <div className="otit">头部</div>
                <a href="#" onClick={this.handleClick.bind(this, "cc", "mm")}>点击</a>
                {date.toLocaleDateString()}
                {/* 列表渲染 */}
                <ul>
                    {arr && arr.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })}
                </ul>
                {/* 受控组件 */}
                <form onSubmit={this.handleSubmit}>
                    <input value={val} onChange={this.getInputVal} />
                    <input type="submit" value="提交" />
                </form>
                <Greeting isLogined={true}></Greeting>
                <Foo putMethod={this.ownMethod} getFromFoo={this.getFromFoo}></Foo>
                <Bar></Bar>
                <Fragment>
                    <dt>文字一</dt>
                    <dd>数字1</dd>
                </Fragment>
            </div>
        )
    }
}
export default Game;