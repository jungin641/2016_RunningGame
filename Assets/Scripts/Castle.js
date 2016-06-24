#pragma strict
var skin : GUISkin;
var scoreResult : float;
var state : String;

function Start () {

}

function Update () {

}

function OnTriggerEnter(other : Collider) {
	   if(other.transform.tag=="Player"){ //성과 캐릭터가 만나면 메세지 전송
	  		GameObject.FindWithTag("Player").SendMessage("MeetCastle");
	  }  
	   
}
function GameCleared(score: float) //게임 클리어시 실행 코드
{
	state = "GameCleared";
	yield WaitForSeconds(1.3);
	state ="";
	yield WaitForSeconds(0.3);
	state = "ShowScore";
	scoreResult = score;
	yield WaitForSeconds(2.0);
	
	Application.LoadLevel("Title"); //타이틀 화면 로딩
	
}


function OnGUI()
{
	GUI.skin = skin;

	var sw: int = Screen.width;
	var sh : int = Screen.height;

		if(state == "GameCleared")
		{
			GUI.Label(Rect(sw* 2/10, sh*5/7 ,sw*3/5, sh*1/6),"Game Cleared!","Life");
		}
	 	else if(state == "ShowScore")
		{
			var scoreText : String = "Your Score is \n" + scoreResult.ToString();
			GUI.Label(Rect(sw* 2/10, sh*4/7 ,sw*3/5, sh*2/6),scoreText, "Life");
		}
}
