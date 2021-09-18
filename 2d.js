function checkUniqueness(arr){
    let aSet = new Set();
    for(let i =0; i<=arr.length-1; i++){
        aSet.add(arr[i])
    }
    let a =aSet.size;
    let b =arr.length;
    // console.log(a,b);
    //if{aSet.size==arr.length} not working this way
    if(a==b){
        console.log(true);
    }else {
        console.log(false);
    }
}

const arrOne = [1, 4, 6, 2, 1];
checkUniqueness(arrOne);

const arrTwo = [1, 4, 6, 2, 3]
checkUniqueness(arrTwo)
