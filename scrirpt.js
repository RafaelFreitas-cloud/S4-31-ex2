let x=[
["_","_","_","_","_","_"],
["_","_","_","_","@","_"],
["@","_","_","_","_","_"]
]

let y=[
["_","_","_","_","_","_"],
["_","_","_","_","@","_"],
["@","_","D","_","_","_"]
]

let z=[
["_","_","_","@","_","_"],
["_","@","_","_","@","_"],
["@","_","_","_","@","_"]
]

bags = 2 
cap = 2

// return --> 'Clean'

function crap(lista, bags, cap){
    let crap=0
    for(let i=0; i<lista.length;i++){
        for(let j=0;j<lista[i].length;j++){
            if(lista[i][j]=="@"){
            crap++
            }else if(lista[i][j]=="D"){
                return "Dog!!"
            }
        }
    }
    if(crap>bags*cap){
        return "Cr@p"
    }else{
        return "Clean"
    }
}

console.log(crap(x,2,2))
console.log(crap(y,2,2))
console.log(crap(z,2,2))