function sevenRandomNumbers(){
    arr =[]
    for(var i=0; arr.length<=6; i++){
        let a = Math.floor(Math.random()*10);
        if(!arr.includes(a)){
            arr.push(a);
        }
        
        
    }
    console.log(arr);
    
};
sevenRandomNumbers();
