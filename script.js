// DECLARE YOUR VARIABLES HERE
let teamOneName;
teamOneName = "birdbird";

let teamTwoName = "bread";

let scoreOne;
scoreOne = 0;

let scoreTwo;
scoreTwo = 0;

let freeThrow;
freeThrow = 1;

let twoPointShot;
twoPointShot = 2;

let threePointShot;
threePointShot = 3;

let arena;
arena = "Birds vs Bread";
$(".h1").text(arena);

















// DON'T CHANGE THIS CODE
updateTeams();

let realTeamOneName, realTeamTwoName, realScoreOne, realScoreTwo, realThreePointShot, realTwoPointShot, realFreeThrow;

try {
    realTeamOneName = eval('teamOneName');
    realTeamTwoName = eval('teamTwoName');
    realScoreOne = eval('scoreOne');
    realScoreTwo = eval('scoreTwo');
    realThreePointShot = eval('threePointShot');
    realTwoPointShot = eval('twoPointShot');
    realFreeThrow = eval('freeThrow');
} catch (_e) {}

updateTeams();

$("button").click(function(){
    var team;
    team = $(this).attr("team");
    
    var points;
    points = $(this).attr("class");
    
    updateScore(team, points);
});

function updateScore(myTeam, myPoints){
    if(myTeam === "one"){
        if(myPoints === "twoPt"){
            realScoreOne += realTwoPointShot;
        } else if(myPoints === "threePt"){
            realScoreOne += realThreePointShot;
        } else if(myPoints === "freeThrow"){
            realScoreOne += realFreeThrow;
        }
        $(".scoreOne").text(realScoreOne);
    } else if (myTeam === "two"){
        if(myPoints === "twoPt"){
            realScoreTwo += realTwoPointShot;
        } else if(myPoints === "threePt"){
            realScoreTwo += realThreePointShot;
        } else if(myPoints === "freeThrow"){
            realScoreTwo += realFreeThrow;
        }
        $(".scoreTwo").text(realScoreTwo);
    }
}

function updateTeams(){
    $(".teamOne").text(realTeamOneName);
    $(".teamTwo").text(realTeamTwoName);
}

