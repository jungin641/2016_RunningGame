#pragma strict
var skin : GUISkin;
function Start () {

}

function Update () {
	if(Input.GetButtonDown("Jump"))
	{
		Application.LoadLevel("GameScene");
		
		
	}
}
function OnGUI()
{
	GUI.skin = skin;

	var sw: int = Screen.width;
	var sh : int = Screen.height;

	GUI.Label(Rect(sw* 2/10, sh*5/7 ,sw*3/5, sh*1/6),"Hit Space Key to Start", "Message");
		
}