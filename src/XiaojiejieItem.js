import React, { Component } from 'react';
class XiaojiejieItem extends Component {
    constructor(props) { 
        //构造函数最先执行
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() { 
        this.props.deleteItem(this.props.index)
    }
    render() { 
        return (  
            //性能不好
            <li onClick={this.handleClick}>
                {this.props.content}
            </li>
        );
    }
}
 
export default XiaojiejieItem;