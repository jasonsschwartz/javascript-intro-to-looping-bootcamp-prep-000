var array = new Array()

function forLoop(array){
  for(let i=0;i<25;i++){
    if (i===1){
      array = (...array, "I am 1 strange loop.")
    } else {
      array[i] = `I am ${i} strange loops.`
    }
  }
}
console.log(array)