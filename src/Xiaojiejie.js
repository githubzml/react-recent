import React, { Component } from "react";
import XiaojiejieItem from "./XiaojiejieItem"
import Boss from "./Boss";
import "./style.css";
import axios from "axios";
import { CSSTransition, TransitionGroup } from "react-transition-group"

// - Transition
//单个动画
// - CSSTransition
//组动画
// - TransitionGroup


class Xiaojiejie extends Component {
    //指针 
    //数据驱动
    //如何设置
    //事件绑定

    //调用父级别方法
    constructor(props) {
        super(props);
        this.state = {
            inputValue: 'zml',
            list: []
        }
        //创建ref 的另一种形式
        this.obtn = React.createRef();
    }
    componentWillMount() {
        console.log("-------------组件将要挂载在DOM")
    }
    componentDidMount() {
        // console.log("-------------组件挂载完成的时刻")

        axios.post("https://www.easy-mock.com/mock/5e40d0309d282806e0f9d458/ReactDemo1/react").then(res => {
            console.log(111, res)
            this.setState({
                list: res.data.data
            })
        }).catch((error) => {
            console.log(error)
        })
    }
    shouldComponentUpdate() {
        // 发生改变之前 渲染之前
        //优化性能
        console.log("1-shouldComponentUpdate");
        return true;
    }
    //将要更新
    componentWillUpdate() {
        console.log("2-componentWillUpdate");
    }
    //一切更新完成后
    componentDidUpdate() {
        console.log("4-componentDidUpdate");
    }
    inputChange(e) {
        console.log(e.target.value)
        //方法1
        // this.setState({
        //     inputValue: e.target.value
        // })
        //方法2 ref
        this.setState({
            inputValue: this.input.value
        })

    }
    addList() {
        let { inputValue, list } = this.state;
        //setstate 异步方法 虚拟DOM
        this.setState({
            list: [...list, inputValue],
            inputValue: ""
        }, () => {
            console.log(this.ul.querySelectorAll("li").length, this.obtn);
        })
        //坑 setState 完成之后 再执行
        //console.log(this.ul.querySelectorAll("li").length)
    }
    deleteItem(index) {
        let { inputValue, list } = this.state;
        list.splice(index, 1);
        //不允许直接操作数据源 非常消耗性能 后期App 应用性能会受影响 官网上也有说过
        //不允许this.state.splice(index, 1);
        this.setState({
            list: list
        })
    }
    render() {
        console.log("3-render-------------挂载中")
        let { inputValue, list } = this.state;
        return (
            <div>
                <label htmlFor="zml">增值服务</label>
                <input

                    id="zml"
                    className="oinput"
                    type="text"
                    value={inputValue}
                    onChange={this.inputChange.bind(this)}
                    ref={(input) => { this.input = input }}
                />
                <button ref={this.obtn} onClick={this.addList.bind(this)}>增加服务</button>
                <ul ref={(ul) => { this.ul = ul }}>
                    <TransitionGroup>
                        {
                            list.map((item, index) => {
                                //key={index + item} 保证不重复
                                //加（） 可以换行
                                // return (<li
                                //     key={index + item}
                                //     onClick={this.deleteItem.bind(this, index)}
                                //     dangerouslySetInnerHTML={{ __html: item }}
                                // >

                                // </li>)
                                return (
                                    //appear 出现时添加动画效果
                                    <CSSTransition timeout={2000} appear unmountOnExit classNames="boss-text" key={item, index}>
                                        <XiaojiejieItem oname="小路" key={item, index} content={item} index={index} deleteItem={this.deleteItem.bind(this)}></XiaojiejieItem>
                                    </CSSTransition>
                                )


                            })
                        }
                    </TransitionGroup>
                </ul>

                <Boss></Boss>
            </div>
        )
    }
}
export default Xiaojiejie;