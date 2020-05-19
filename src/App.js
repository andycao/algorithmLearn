import React, { useState, useEffect } from "react";
import Header from "./pages/header";
import TaskList from "./pages/list";

function App() {
    //0 正序， 1 倒序
    let [order, setOrder] = useState(0);
    useEffect(() => {
        document.title = "Andy的算法学习";
    }, []);

    
    return (
        <div className="container">
            <Header
                changeOrder={() => {
                    order === 0 ? setOrder(1) : setOrder(0);
                }}
            />
            <TaskList order={order} />
        </div>
    );
}

export default App;
