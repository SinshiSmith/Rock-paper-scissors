function Loading()
{

// Defining Players
var Comp = makeyourmove();
var z ;
fuction paper(z){z = "Paper"};
fuction rock(z){z = "Rock"};
fuction scissors(z){z = "Scissors"};
<Button onClick="rock(z)"> Rock  <Button/>
<Button onClick="paper(z)"> Paper  <Button/>
<Button onClick="scissors(z)"> Scissors  <Button/>

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



//Result Functions
function Rules(player, comp)
{
  //Logging things for later
  console.log("p1: " + player);
  console.log ("com: " + comp);

  if (player == "Paper" && comp =="Rock"){
    console.log("Winner");
    document.getElementById("end_game").innerHTML = "Player Wins";
  document.getElementById('block_color').style.backgroundColor="#4bd836";
  }
  else if (player == "Paper" && comp =="Scissors"){
    console.log("Loser");
    document.getElementById("end_game").innerHTML = "Computers > Humans";
     document.getElementById('block_color').style.backgroundColor="#d83636";
  }
  else if (player == "Rock" && comp =="Paper"){
    console.log("Loser");
        document.getElementById("end_game").innerHTML = "Computers > Humans";
             document.getElementById('block_color').style.backgroundColor="#d83636";
  }
  else if (player == "Rock" && comp =="Scissors"){
    console.log("Winner");
     document.getElementById("end_game").innerHTML = "Player Wins";
      document.getElementById('block_color').style.backgroundColor="#4bd836";
  }
  else if (player == "Scissors" && comp =="Paper"){
    console.log("Winner");
     document.getElementById("end_game").innerHTML = "Player Wins";
      document.getElementById('block_color').style.backgroundColor="#4bd836";
  }
  else if (player == "Scissors" && comp =="Rock"){
    console.log("Loser");
    document.getElementById("end_game").innerHTML = "Computers > Humans";
         document.getElementById('block_color').style.backgroundColor="#d83636";
  }
  else{
      console.log("Draw");
      document.getElementById("end_game").innerHTML = "Draw";   
        document.getElementById('block_color').style.backgroundColor="#cfd836";
    }
}


//Calling for players
Rules(z, Comp);
//console.log(Rules(z,Comp));
document.getElementById("p1").innerHTML = "Player: "+z;
document.getElementById("com").innerHTML = "Compter: "+Comp;

//version 0.6 date 21/4/2017
//first step\
//Second step naw
}
