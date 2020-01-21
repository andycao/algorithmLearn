import React from 'react';

// import './adventofcode/spaceImageFormat'
import func from './test/strParse';

class App extends React.Component {
    render(){
        return (<div>
            <p>main</p>
            <button onClick={func}>点击</button>
        </div>)
    }
}

export default App;
