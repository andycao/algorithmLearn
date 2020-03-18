/**
 * 836. 矩形重叠
 * 矩形以列表 [x1, y1, x2, y2] 的形式表示，其中 (x1, y1) 为左下角的坐标，(x2, y2) 是右上角的坐标。

如果相交的面积为正，则称两矩形重叠。需要明确的是，只在角或边接触的两个矩形不构成重叠。

给出两个矩形，判断它们是否重叠并返回结果。

把一个矩形想象成x，y两个范围，当两个矩形的两个范围都有相交的时候，那么这两个矩形重叠

 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function(rec1, rec2) {
    let [ax1, ay1, ax2, ay2] = rec1;
    let [bx1, by1, bx2, by2] = rec2;

    return isRangeOverlap([ax1, ax2], [bx1, bx2]) && isRangeOverlap([ay1, ay2], [by1, by2]);
};

/**
 * 两个范围是否相交
 * @param {array} a 
 * @param {array} b 
 */
function isRangeOverlap (a, b){
    if(a.length !== 2 || b.length !== 2) return false;

    //a 在左边
    if(a[0] <= b[0]) {
        return a[1] > b[0];
    } else {
        return a[0] < b[1];
    }
}

export default {
    func: () => {
        const rec1 = [0,0,2,2];
        const rec2 = [1,1,3,3];

        const res = isRectangleOverlap(rec1, rec2);
        console.log(res);
        return `矩形重叠 ${rec1} ${rec2} : ${res}`;
    },
    title: '836. 矩形重叠'
}