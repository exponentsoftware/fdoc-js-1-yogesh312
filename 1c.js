function countWords(sentence){
   let arr = sentence.split(" ").map(w => w.length);
   let count=0;
   for(var i=0;i<=arr.length;i++){
       if(arr[i]>=2){
    //    if(arr[i].length>=2){
        count++

       }
    // console.log(arr[i])
   }
   console.log(count)


}
 
const sentence =  `I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher?`
countWords(sentence)


