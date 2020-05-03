import React, { useState, useEffect } from "react";
import "./style.sass";
import leetcodeList from "../leetcode_js/index";
import shortid from "shortid";

const urlPrefix = "https://github.com/andycao/algorithmLearn/blob/master/src/";
function TaskList(props) {
    //展示结果的index
    const [stageIndex, setStageIndex] = useState();
    const [list, setList] = useState(
        leetcodeList.map((entry) => {
            return {
                ...entry,
                key: shortid.generate(),
            };
        })
    );

    useEffect(() => {
        setList([...list].reverse());
        setStageIndex(null);
    }, [props.order]);

    return (
        <>
            <ul>
                {list.map((entry, index) => {
                    return (
                        <Quest
                            key={index}
                            answer={entry}
                            showAns={stageIndex === index}
                            stageSelf={setStageIndex.bind(null, index)}
                        ></Quest>
                    );
                })}
            </ul>
        </>
    );
}

function Quest(props) {
    const { answer, stageSelf, showAns } = props;
    const [result, setResult] = useState("");

    return (
        <li>
            <div className="action">
                <span>{answer.title}</span>
                <span
                    className="link"
                    onClick={() => {
                        window.open(urlPrefix + answer.file);
                    }}
                >
                    源码
                </span>
                <span
                    className="link"
                    onClick={(e) => {
                        e.preventDefault();
                        stageSelf();
                        setResult(answer.func());
                    }}
                >
                    运行
                </span>
                {answer.leetLink ? (
                    <span
                        className="link"
                        onClick={() => {
                            window.open(answer.leetLink);
                        }}
                    >
                        leetcode题解
                    </span>
                ) : null}
            </div>
            {showAns ? <div className="result">{result}</div> : ""}
        </li>
    );
}

export default TaskList;
