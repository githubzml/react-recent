import React, { useState, useEffect } from "react";
//hook react 16.8新特性 
//它可以让你在不编写class的情况下使用state以及其他的react属性
//state hook
//useState
//effect hook
//useEffect 相对于将componentDidMount componentDidUpdate componentWillUnmount合为一个API
// [] 解构赋值
function Example() {
    const [count, setcount] = useState(0);
    console.log("setcount",setcount);
    useEffect(() => {
        document.title = `you click ${count} time`;
    })
    return (
        <div>
            <div> this is page1</div>
            <p>you click {count} times</p>
            <button onClick={() => { setcount(count + 1) }}>click me</button>
        </div>
    )
}
export default Example;