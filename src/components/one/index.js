import React from "react";
//命名大驼峰
class ShoppingList extends React.Component {
    render() {
        return (
            <div>
                我是子组件
                <div>
                    shopping list for <h1>{this.props.name}</h1>
                </div>
            </div>
        )
    }
}
export default ShoppingList;