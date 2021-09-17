var a,b;
function countWords(paragraph, word1, word2){
    a=  paragraph.split(word1).length -1;
    b=  paragraph.split(word2).length -1;
    if(a>b){
        console.log(`The word '${word1}' more frequently occurred than word '${word2}'.`)
    } else{
        console.log(`The word '${word2}' more frequently occurred than word '${word1}'.`)
    }

}
const para = "I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.";
countWords(para,"love", "you")



