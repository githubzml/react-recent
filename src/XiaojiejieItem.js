import React, { Component } from 'react';
import PropTypes from 'prop-types';
class XiaojiejieItem extends Component {
    constructor(props) {
        //构造函数最先执行
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.deleteItem(this.props.index)
    }
    //性能优化 判断上一次 与本次值是否相同
    shouldComponentUpdate(nextProps,nextState){
        if(nextProps.content !== this.props.content){
            return true;
        }else{
            return false;
        }
    }
    //接受props变化
    componentWillReceiveProps() {
        console.log("child-componentWillReceiveProps")
    }
    //组件将要被注销
    componentWillUnmount() {
        console.log("child-componentWillUnmount")
    }
    render() {
        return (
            //性能不好
            <li onClick={this.handleClick}>
                {this.props.oname}-为你服务-{this.props.content}-{this.props.oage}
            </li>
        );
    }
}
//1.类型校验
XiaojiejieItem.propTypes = {
    //2.设置必穿要求
    oname: PropTypes.string.isRequired,
    content: PropTypes.string,
    index: PropTypes.number,
    deleteItem: PropTypes.func
}
XiaojiejieItem.defaultProps = {
    //3.设置默认值
    oage: 21
}


export default XiaojiejieItem;