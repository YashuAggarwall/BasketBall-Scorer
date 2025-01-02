let homeScore=0;
let guestScore=0;
let quarters=0;
let increasedHome=document.getElementById("home")
let increasedGuest=document.getElementById("guest")
function plusone(){
    homeScore+=1;
    increasedHome.innerText=homeScore;
}

function plustwo(){
     homeScore+=2;
    increasedHome.innerText=homeScore;
}

function plusthree(){
     homeScore+=3;
    increasedHome.innerText=homeScore;
}



function plusone1(){
   guestScore+=1;
    increasedGuest.innerText=guestScore;
}

function plustwo2(){
     guestScore+=2;
    increasedGuest.innerText=guestScore;
}

function plusthree3(){
    guestScore+=3;
    increasedGuest.innerText=guestScore;
}

function reset(){
    homeScore=0;
     increasedHome.innerText=homeScore;
    guestScore=0;
    increasedGuest.innerText=guestScore;
    quarters=0;
    
}

function match(){
    if(homeScore>guestScore){
        let diff=homeScore-guestScore
        console.log("Home Team won the match by: "+ diff)
    }
    if(homeScore<guestScore){
        let diff1=-homeScore+guestScore
        console.log("Guest Team won the match by: "+ diff1)
    }
    if(homeScore==guestScore){
        let diff1=-homeScore+guestScore
        console.log("The match is a tie")
    }
    
}

function qmatch(){
    quarters+=1;

}
function rmatch(){
    let rr=4-quarters;
    if(rr<0){
        console.log("Quarters are over");
        match();
    }
    if(rr==0){
        console.log("Game is finished")
    }
    if(rr>0){
    console.log("the remaining quarters are: "+ rr)
}
}