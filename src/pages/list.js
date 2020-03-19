import React, { useState } from 'react';
import './style.sass';
import leetcodeList from '../leetcode_js/index';

const urlPrefix = 'https://github.com/andycao/algorithmLearn/blob/master/src/'
function TaskList() {
    const [result, setResult] = useState();

    return <><ul>
        {leetcodeList.map(entry => {
            return <LinkNew
            setResult={setResult}
            answer={entry}
        ></LinkNew>
        })}
    </ul>
        <div className="result">
            {result}
        </div>
    </>;
}

function LinkNew(props) {
    const {answer, setResult} = props;
    return <li>
        <span>{answer.title}</span>
        <span className="link" onClick={() => {
            window.open(urlPrefix + answer.file)
        }}>源码</span>
        <span className="link" onClick={()=>{
            //run func and set result
            setResult(answer.func());
        }}>运行</span>
        {answer.leetLink?<span className="link" onClick={() => {
            window.open(answer.leetLink)
        }}>leetcode题解</span> : null}
    </li>;
}

function Link(props) {
    return <li>
        <span>{props.title}</span>
        <span className="link" onClick={() => {
            window.open(urlPrefix + props.file)
        }}>源码</span>
        <span className="link" onClick={()=>{
            //run func and set result
            props.setResult(props.func());
        }}>运行</span>
        {props.leetLink?<span className="link" onClick={() => {
            window.open(props.leetLink)
        }}>leetcode题解</span> : null}
    </li>;
}

export default TaskList;