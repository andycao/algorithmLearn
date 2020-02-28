function commonParentNode(oNode1, oNode2) {
    let list1 = findParents(oNode1);
    let list2 = findParents(oNode2);

    for(let x of list1) {
        for(let y of list2) {
            if(x === y) {
                return x;
            }
        }
    }

    return null;
}

function findParents(node){
    let list = [node];
    let n = node;
    while(n.parentNode) {
        list.push(n.parentNode);
        n = n.parentNode;
    }
    return list;
}