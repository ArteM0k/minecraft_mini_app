const tg = window.Telegram.WebApp;

tg.ready();
tg.expand();

var username = null;

user.onchange = set_user;
tp.onclick = teleport_player;
kill.onclick = kill_player;
summon.onclick = summon_mob;
send_message.onclick = send_mes;
send_command.onclick = execute_command;
build.onclick = build_structure; 

function set_user(){
    username = user.value;
    let package = JSON.stringify({
        user: username
    });
    console.log(package);
}

function teleport_player(){
    let xcord = x.value.trim();
    let ycord = y.value.trim();
    let zcord = z.value.trim();
    if (xcord === "" || ycord === "" || zcord === ""){
        tg.showAlert("Fill all the gaps");
        return;
    }
    if (username === null){
        tg.showAlert("Select a user");
        return;
    }
    let package = JSON.stringify({
        user: username,
        action: "TP",
        params: [xcord, ycord, zcord]
    });
    send_data(package);
}

function kill_player(){
    if (username === null){
        tg.showAlert("Select a user");
        return;
    }
    let package = JSON.stringify({
        user: username,
        action: "KILL",
        params: []
    });
    send_data(package);
}

function summon_mob(){
    let entity = mob.value;
    let number = amount.value;
    if (username === null){
        tg.showAlert("Select a user");
        return;
    }
    if (entity === ""){
        tg.showAlert("Select a mob");
        return;
    }
    if (number === "" || number === "0" || number[0] === "-"){
        tg.showAlert("Incorrect number of mobs");
        return;
    }
    let package = JSON.stringify({
        user: username,
        action: "SUMMON",
        params: [entity, number]
    });
    send_data(package);
}

function send_mes(){
    let mes = message.value.trim();
    if (username === null){
        tg.showAlert("Select a user");
        return;
    }
    if (mes === ""){
        tg.showAlert("Enter your message");
        return;
    }
    let package = JSON.stringify({
        user: username,
        action: "MESSAGE",
        params: [mes]
    });
    send_data(package);
}

function execute_command(){
    let com = command.value.trim();
    if (username === null){
        tg.showAlert("Select a user");
        return;
    }
    if (com === ""){
        tg.showAlert("Enter a command");
        return;
    }
    let package = JSON.stringify({
        user: username,
        action: "COMMAND",
        params: [com]
    });
    send_data(package);
}

function build_structure(){
    let building = structure.value;
    if (username === null){
        tg.showAlert("Select a user");
        return;
    }
    if (building === ""){
        tg.showAlert("Select a structure");
        return;
    }
    let package = JSON.stringify({
        user: username,
        action: "BUILD",
        params: [building]
    });
    send_data(package);
}

function send_data(data){
    console.log(data);
}