let sudokuLine = sudoku.generate('easy');
console.log(sudokuLine);
let iterator = 0;

for(i = 0; i < 9; i++) {
    let newDiv = document.createElement('div');
    newDiv.id = 's' + i;
    newDiv.style = 'height:45px; width: 410px';
    if ((i + 1) % 3 === 0) {
        newDiv.style = 'border-bottom: 1px solid black; width: 410px; height:45px;'
    }else if(i === 0){
        newDiv.style = 'border-top: 1px solid black; width: 410px; height:45px;'
    }
    document.getElementById('main').appendChild(newDiv);

    for (a = 0; a < 9; a++) {
        if(a === 0){
            let newDiv1 = document.createElement('div');
            newDiv1.style = 'height: 45px; width: 1px; background: black; display: inline-block;';
            document.getElementById('s' + i).appendChild(newDiv1);
        }
        let newElement = document.createElement('button');
        newElement.style = 'display: inline-block;';
        if (sudokuLine.charAt(iterator) === '.') {
            newElement.innerHTML = ''
        } else {
            newElement.innerHTML = sudokuLine.charAt(iterator)
        }
        document.getElementById('s' + i).appendChild(newElement);
        iterator++;
        if ((a + 1) % 3 === 0) {
            let newDiv1 = document.createElement('div');
            newDiv1.style = 'height: 45px; width: 1px; background: black; display: inline-block;';
            document.getElementById('s' + i).appendChild(newDiv1);
        }
    }
}
bootbox.prompt("Enter a number", function(result){
    console.log(result);
    });