import React, { useState } from 'react';
import './style.sass';
import atoi from '../leetcode_js/myAtoi_leetcode08';
import flatten from '../leetcode_js/flatten';
import longestPalindrome from '../leetcode_js/longestPalindrome';
import reverseLinkedList from '../leetcode_js/reverseLinkedList';
import mirrorTree101 from '../leetcode_js/mirrorTree101';
import candies2 from '../leetcode_js/candies2';
import findContinuousSequence from '../leetcode_js/findContinuousSequence';

const urlPrefix = 'https://github.com/andycao/algorithmLearn/blob/master/src/'
function TaskList() {
    const [result, setResult] = useState();

    return <><ul>
        <Link func={() => {
            setResult(longestPalindrome())
        }}
            name='5. 最长回文子串'
            source='leetcode_js/longestPalindrome.js'
        ></Link>
        <Link
            func={() => {
                setResult(atoi())
            }}
            name='8. 字符串转换整数 (atoi)'
            source="leetcode_js/myAtoi_leetcode08.js"
        ></Link>
        <Link
            func={() => {
                setResult(flatten())
            }}
            source="leetcode_js/flatten.js"
            name='手写flat'
        ></Link>
        <Link
            func={() => {
                setResult(reverseLinkedList())
            }}
            name='反转链表'
            source="leetcode_js/reverseLinkedList.js"
        ></Link>
        <Link
            func={() => {
                setResult(mirrorTree101())
            }}
            name='镜像二叉树'
            source="leetcode_js/mirrorTree101.js"
        ></Link>
        <Link
            func={() => {
                setResult(candies2())
            }}
            name='1103.分糖果2'
            source="leetcode_js/candies2.js"
            leetLink="https://leetcode-cn.com/problems/distribute-candies-to-people/solution/js-shu-zu-by-egerton/"
        ></Link>
        <Link
            func={() => {
                setResult(findContinuousSequence())
            }}
            name='57 - II 连续正整数序列'
            source="leetcode_js/findContinuousSequence.js"
            leetLink="https://leetcode-cn.com/problems/he-wei-sde-lian-xu-zheng-shu-xu-lie-lcof/solution/javascript-shuang-zhi-zhen-hua-dong-chuang-kou-by-/"
        ></Link>
    </ul>
        <div className="result">
            {result}
        </div>
    </>;
}

function Link(props) {
    return <li>
        <span>{props.name}</span>
        <span className="link" onClick={() => {
            window.open(urlPrefix + props.source)
        }}>源码</span>
        <span className="link" onClick={props.func}>运行</span>
        {props.leetLink?<span className="link" onClick={() => {
            window.open(props.leetLink)
        }}>leetcode题解</span> : null}
    </li>;
}

export default TaskList;