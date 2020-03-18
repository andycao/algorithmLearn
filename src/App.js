import React from 'react';
import Header from './pages/header';
import TaskList from './pages/list';

class App extends React.Component {
    componentDidMount(){
        document.title = "Andy的算法学习";
    }
    render(){
        return (<div className='container'>
            <Header />
            <TaskList />
        </div>);
    }
}

export default App;
