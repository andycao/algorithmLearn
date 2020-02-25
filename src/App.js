import React from 'react';

// import './adventofcode/spaceImageFormat'

// import func from './test/strParse';
import func from './leetcode_js/zTransform';
import './style/style.css';

class App extends React.Component {
    render(){
        return (<div>
            <p>main</p>
            <button onClick={func}>点击</button>
            <hr/>
            <div className="outer">
                <span className="space a">盒子1号</span>
                <span className="space b">盒子2号</span>
                <span className="space c">盒子3号</span>
            </div>
        </div>)
    }
}

export default App;
