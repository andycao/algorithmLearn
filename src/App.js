import React from 'react';

// import './adventofcode/spaceImageFormat'

// import func from './test/strParse';
import func from './leetcode_js/longestPalindrome';

class App extends React.Component {
    render(){
        return (<div>
            <p>main</p>
            <button onClick={func}>点击</button>
        </div>)
    }
}

export default App;
