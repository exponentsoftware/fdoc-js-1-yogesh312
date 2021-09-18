const sentence =  `I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher?`
// console.log(countWords(sentence));
// 31

function verietyOfWords(sentence){
    
    arr = sentence.split(" ")
    let aSet = new Set();
    for(let i =0; i<=arr.length; i++){
        aSet.add(arr[i])
    }
    console.log(aSet.size)
}
verietyOfWords(sentence);
//the task was limited to tell the no of words
//i would have gone further and change this object aSet to array if i had to print the sentence