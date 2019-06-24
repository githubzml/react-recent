import React from "react";

// class Square extends React.Component {
//     //定义其子类构造函数 都需要调用super() 函数
//     // constructor(props) {
//     //     super(props);
//     //     this.state = {
//     //         value: null
//     //     }
//     // }
//     render() {
//         return (
//             //减少代码输出 避免this造成的困扰 使用箭头函数
//             <button onClick={() => { this.props.onClick() }}>
//                 {this.props.value}
//             </button>
//         )

//     }
// }
//更改为函数组件
function Square(props) {
    return (
        <button onClick={props.onClick}>{props.value}</button>
    )
}
export default Square;