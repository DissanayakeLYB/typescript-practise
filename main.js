let user = { name: "lasith", age : 25};

var games = "valo";

const namdeshiyam = "LYB";

//fucntion syntax
function tell_name(name){
    document.write(name);
}

function tell_game(game){
    document.write(game);
}

let a = 30;

//if else 
if (a<20){
    tell_name(user.name);
} else {
    tell_game(games);
}


// conditional terniary operator
var de = 100;
var bw;

de == 100 ? (bw = "Yes") : (bw = "No");

document.write(bw)


//switch case
var day = 1;

switch (day) {
    case 1:
        document.write("Monday");
        break;
    case 2:
        document.write("Tuesday");
        break;
    case 3:
        document.write("Wednesday");
        break;
    case 4:
        document.write("Thursday");
        break;
    case 5:
        document.write("Friday");
        break;
    case 6:
        document.write("Saturday");
        break;
    case 7:
        document.write("Sunday");
        break;

    default:
        document.write("The date you entered is wrong.")
        break;
}