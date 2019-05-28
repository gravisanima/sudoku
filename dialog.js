let showDialog = () =>{
    document.getElementById('dialog').style = 'position: fixed;\n' +
        '    top: 0;\n' +
        '    left: 0;\n' +
        '    display: flex;\n' +
        '    justify-content: center;\n' +
        '    align-items:center;\n' +
        '    width: 100%;\n' +
        '    height: 100%;'
}

let hideDialog = () =>{
    document.getElementById('dialog').style = 'display: none'
}