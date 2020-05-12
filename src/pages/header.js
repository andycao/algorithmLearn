import React from "react";
function Header(props) {
    return (
        <div>
            <h2>算法学习记录</h2>
            <p>根据题号，或者leetcode题解，找到原问题</p>
            <p>
                <a href="https://leetcode-cn.com/u/egerton/" target="blank">
                    我的Leetcode
                </a>

                <a
                    style={{ marginLeft: "10px" }}
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        props.changeOrder();
                    }}
                >
                    反转顺序
                </a>
            </p>
            <hr></hr>
        </div>
    );
}

export default Header;
