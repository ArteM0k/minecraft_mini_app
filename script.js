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
        x: xcord,
        y: ycord,
        z: zcord
    });
    send_data(package);
}

function kill_player(){
    alert("kill");
}

function summon_mob(){
    alert("summon");
}

function send_mes(){
    alert("send");
}

function execute_command(){
    alert("command");
}

function build_structure(){
    alert("build");
}

function send_data(data){
    console.log(data);
}