import React, { Component } from "react";
import XiaojiejieItem from "./XiaojiejieItem"
import "./style.css";
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
            list: ['xixi', 'enen']
        }
    }
    inputChange(e) {
        console.log(e.target.value)
        this.setState({
            inputValue: e.target.value
        })
    }
    addList() {
        let { inputValue, list } = this.state;
        this.setState({
            list: [...list, inputValue],
            inputValue: ""
        })
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
        let { inputValue, list } = this.state;
        return (
            <div>
                <label htmlFor="zml">增值服务</label>
                <input id="zml" className="oinput" type="text" value={inputValue} onChange={this.inputChange.bind(this)} />
                <button onClick={this.addList.bind(this)}>增加服务</button>
                <ul>
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

                                <XiaojiejieItem key={item, index} content={item} index={index} deleteItem={this.deleteItem.bind(this)}></XiaojiejieItem>
                            )


                        })
                    }
                </ul>
            </div>
        )
    }
}
export default Xiaojiejie;