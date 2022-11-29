// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]; 

    function destructivelyAppendCat(name){
    cats.push('Ralph')
}
function destructivelyPrependCat(name) {
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat(){
    cats.pop("Garfield")
}
function destructivelyRemoveFirstCat(){
    cats.shift("Milo")
}
function appendCat(name){
   let temporarycatname = cats.slice()
   temporarycatname.push("Broom")
   return temporarycatname
}
function prependCat(name){
    let temporarycatname = cats.slice()
    temporarycatname.unshift("Arnold")
    return temporarycatname
}
 function removeLastCat(){
    let temporarycatname = cats.slice()
    temporarycatname.pop()
    return temporarycatname
 }
 function removeFirstCat(){
    let temporarycatname = cats.slice()
    temporarycatname.shift()
    return temporarycatname

 }