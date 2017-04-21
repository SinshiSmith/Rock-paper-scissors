function makeyourmove()
{
  var move = "x";
  switch (Math.floor(Math.random()*3))
  {
  case 0:
   move = "Rock" ;
    break;
  case 1:
   move = "Paper";
    break;
  case 2:
   move = "Scissors";
    break;
  }
return move;
}



function Rules(player, comp)
{
  console.log("p1: " + player);
  console.log ("com: " + comp);

  if (player == "Paper" && comp =="Rock")
    console.log("Winner");
  else if (player == "Paper" && comp =="Scissors")
    console.log("Loser");
  else if (player == "Rock" && comp =="Paper")
    console.log("Loser");
  else if (player == "Rock" && comp =="Scissors")
    console.log("Winner");
  else if (player == "Scissors" && comp =="Paper")
    console.log("Winner");
  else if (player == "Scissors" && comp =="Rock")
    console.log("Loser");
  else
      console.log("Draw");
}


var Comp = makeyourmove();
var z = makeyourmove();
console.log(Rules(z,Comp));
//version 0.5 date 21/4/2017
//first step\
