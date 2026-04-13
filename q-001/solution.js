function flatten(arr, depth = Infinity) {
    const result = [];

    const helper = (current, d) => {
        for(let ele of current){
            if(Array.isArray(ele) && d > 0){
                helper(ele, d-1)
            }
            else{
                result.push(ele);
            }
        }
    }

    helper(arr, depth)
    return result;
}


module.exports = { flatten };