let sudokuLine = sudoku.generate('easy')
console.log(sudokuLine)
let iterator = 0;


for(i = 0; i < 9; i++){
    let newDiv = document.createElement('div')
    newDiv.id = 's'+i;
    document.getElementById('main').appendChild(newDiv)

    for(a = 0; a < 9; a++){
        let newElement = document.createElement('button')
        if(sudokuLine.charAt(iterator) === '.'){
            newElement.innerHTML = ''
        }else{
            newElement.innerHTML = sudokuLine.charAt(iterator)
        }
        document.getElementById('s'+i).appendChild(newElement)
        iterator++
    }
}
