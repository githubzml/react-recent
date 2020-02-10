import React, { Component } from 'react';
import { CSSTransition } from "react-transition-group";
class Boss extends Component {
    constructor(props) {
        super(props);
        this.state = { isShow: true }
        this.handler = this.handler.bind(this);
    }
    handler() {
        let { isShow } = this.state;
        this.setState({
            isShow: !isShow
        })
    }
    render() {
        let { isShow } = this.state;
        return (
            <div>
                {/* <div className={isShow ? 'show' : 'hide'}>boss</div> */}
                {/* unmountOnExit 可以是删除该节点 */}
                <CSSTransition
                in={isShow}
                timeout={2000}
                classNames="boss-text"
                unmountOnExit
                >
                <div>boss</div>
                </CSSTransition>
                <div>
                    <button onClick={this.handler}>点击</button>
                </div>
            </div>
        );
    }
}

export default Boss;