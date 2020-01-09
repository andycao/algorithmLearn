export default (list, a, b) => {
    const temp = list[a]
    list[a] = list[b]
    list[b] = temp;
}