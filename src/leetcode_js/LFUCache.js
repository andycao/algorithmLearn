/**
 * 460. LFU缓存
 */
/**
 * @param {number} capacity
 */
var LFUCache = function (capacity) {
    this.map = new Map();
    this.capa = capacity;
    this.timer = 0;
};

/** 
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function (key) {
    let res = this.map.get(key);
    if (res === undefined) return -1;
    res.times = res.times + 1;
    res.lastDate = this.timer++;
    return res.value;
};

/** 
 * value, times, lastDate
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function (key, value) {
    if(this.capa === 0) return ;

    if (this.map.has(key)) {
        const old = this.map.get(key);
        this.map.set(key, {
            value: value,
            times: old.times + 1,
            lastDate: this.timer++
        });
    } else {
        if (this.map.size < this.capa) {
            this.map.set(key, {
                value: value,
                times: 1,
                lastDate: this.timer++
            });
        } else {
            //delete small oldest
            let smallest = {
                times: Number.MAX_SAFE_INTEGER,
                lastDate: this.timer++
            };
            let smallestKey;

            for (let e of this.map) {
                let obj = e[1];
                if (obj.times < smallest.times || obj.times === smallest.times && obj.lastDate < smallest.lastDate) {
                    smallest = e[1];
                    smallestKey = e[0];
                }
            }
            this.map.delete(smallestKey);

            //add new
            this.map.set(key, {
                value: value,
                times: 1,
                lastDate: this.timer++
            });
        }
    }
};

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

const title = "460. LFU缓存";
export default {
    func: () => {

        let cache = new LFUCache(2 /* capacity (缓存容量) */);
        let out;
        cache.put(1, 1);
        cache.put(2, 2);
        cache.put(3, 3);
        cache.get(3);
        cache.get(2);
        cache.put(4, 4);
        out = cache.get(2);       // 返回 1

        console.log(cache);

        return `${title}: ${JSON.stringify(cache)}`
    },
    title: title,
    file: "leetcode_js/LFUCache.js",
}