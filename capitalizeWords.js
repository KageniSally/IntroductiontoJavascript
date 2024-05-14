let sentenseTown="nairobi is a city"

newSentenseTown=sentenseTown.split(" ")
console.log(newSentenseTown)
 

newSentenseTown2=[]


for(let word of newSentenseTown ){
    
    word=word.split("")
    
    word[0]=word[0].toUpperCase()
    // console.log(word[0])
    

    word=word.join("")
    console.log(word)
    newSentenseTown2.push(word)
}


newSentenseTown2=newSentenseTown2.join(" ")
console.log(newSentenseTown2)