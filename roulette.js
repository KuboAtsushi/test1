var val, rec;
var stop = [];
for(var i = 0;i < 16;i++){
    stop[i] = i+1;
}
var roulette_id;
var flag = false;

function start_roulette(){
    if(flag === false){
        roulette_id = setInterval(set_color,50);
        flag = true;
    }
}

function set_color(){
    $('#box'+stop[val]).css('background-color','white');
    val = Math.floor(Math.random()*stop.length);
    $('#box'+stop[val]).css('background-color','red');
}

function stop_roulette(){
    if(flag === true){
        clearInterval(roulette_id);
        flag = false;
        $('#box' + stop[val]).css('background-color','#FFCCFF');
        stop.splice(val,1);
        console.log(stop);
    }
}

function reset_roulette(){
    clearInterval(roulette_id);
    flag = false;
    for(var i = 0;i < 16;i++){
        stop[i] = i+1;
        $('#box' + stop[i]).css('background-color','white');
    }
}

$(document).ready(function () { 
    var i;
    var td;
    var tr = $('<tr></tr>');
    $('#roulette').append(tr);
    
    for(i = 1;i<=16;i++){
        td ='<td id = "box'+i+'">'+i+'</td>';
        tr.append(td);
        if(i%4 === 0){
            var tr = $('<tr></tr>');
            $('#roulette').append(tr);
        }
    }
    $('#startButton').click(start_roulette);
    $('#stopButton').click(stop_roulette);
    $('#resetButton').click(reset_roulette);
    
});
