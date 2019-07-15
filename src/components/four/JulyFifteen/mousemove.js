import React from "react";
class Cat extends React.Component {
    render() {
        const mouse = this.props.mouse;
        return <img src='../../../../public/images/Cat.png' style={{ position: 'absolute', width:'20px',height:'20px',left: mouse.bodyx, top: mouse.bodyx }} />
    }
}
class Mouse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bodyx: 0,
            bodyy: 0,
            pagex: 0,
            pagey: 0,
            screenx: 0,
            screeny: 0,
            offsetx: 0,
            offsety: 0
        };
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleMouseMove(event) {
        this.setState({
            bodyx: event.clientX,
            bodyy: event.clientY,
            pagex: event.pageX,
            pagey: event.pageY,
            offsetx: event.offsetX,
            offsety: event.offsetY
        })
    }
    handleClick(event) {
        this.setState({
            screenx: event.screenX,
            screeny: event.screenY,
        })
    }
    render() {
        return (
            <div style={{ width: '100%' }} onMouseMove={this.handleMouseMove}>
               位置： {this.state.bodyx},{this.state.bodyy},
                {this.props.render(this.state)}
            </div>
        )
    }
}
class MouseTracker extends React.Component {
    render() {
        return (
            <div>
                <div>aoaoa</div>
                <Mouse render={mouse => (
                    <Cat mouse={mouse}></Cat>
                )}>
                </Mouse>
            </div>
        )
    }
}
export default MouseTracker;