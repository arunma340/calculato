screen=document.getElementById('screen')

function on(data){
    screen.value=data
}
function displayData(data){
    screen.value=screen.value+data
}
function allclear(){
    screen.value=""
}


function findout(){
    screen.value=eval(screen.value)
}

function backspace(){
   screen.value = screen.value.slice(0,-1)

}