#pragma strict

var skin : GUISkin;
var scoreResult : float;
var state : String;

function Start () {
}

function GameOver(score: float)
{
	state = "GameOver";
	yield WaitForSeconds(1.3);
	state ="";
	yield WaitForSeconds(0.3);
	state = "ShowScore";
	scoreResult = score;
	yield WaitForSeconds(2.0);
	
	Application.LoadLevel("Title");
	
}

function OnGUI()
{
	GUI.skin = skin;

	var sw: int = Screen.width;
	var sh : int = Screen.height;

		if(state == "GameOver")
		{
			GUI.Label(Rect(sw* 2/10, sh*5/7 ,sw*3/5, sh*1/6),"Game Over","Life");
		}
	 	else if(state == "ShowScore")
		{
			var scoreText : String = "Your Score is \n" + scoreResult.ToString();
			GUI.Label(Rect(sw* 2/10, sh*4/7 ,sw*3/5, sh*2/6),scoreText, "Life");
		}
}


function Update () {
		
}