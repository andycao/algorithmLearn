import React from 'react';
import './style.css';
import atoi from '../leetcode_js/myAtoi_leetcode08';
import flatten from '../leetcode_js/flatten';
import longestPalindrome from '../leetcode_js/longestPalindrome';
import reverseLinkedList from '../leetcode_js/reverseLinkedList';

function TaskList(){
    return (<ul>
        <Link func={longestPalindrome} name='5. 最长回文子串'></Link>
        <Link func={atoi} name='8. 字符串转换整数 (atoi)'></Link>
        <Link func={flatten} name='手写flat'></Link>
        <Link func={reverseLinkedList} name='反转链表'></Link>
    </ul>);
}


function Link(props){
    return <li className="link" onClick={props.func}>{props.name}</li>;
}

export default TaskList;