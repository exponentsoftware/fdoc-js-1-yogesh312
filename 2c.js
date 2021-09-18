//method 1
function reverseArray(arr){
    var a=[];
    for(let i=arr.length-1; i>=0; i--){
        a.push(arr[i]);
    }
    console.log(a)
}
arr = [1,2,3];
reverseArray(arr);

//method 2
function revArray(arr2){
    let revArr=[];
    while(arr2.length){
        revArr.push(arr2.pop())
    }
    console.log(revArr)
}
arr2=[1,2,3]
revArray(arr2);
