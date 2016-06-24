@script RequireComponent(UISlider)
@HideInInspector
internal var animator:Animator;

 var life : float;
 var score : float;
 var skin : GUISkin;
 var slider : UISlider;
 var audio1: AudioClip;
 
function CatchSalmon(amount : float)
{
     score += amount;
     life += 1.0;
}

function ApplyDamage(amount : float) //피해 입으면
{
	life -= amount;
	animator.SetBool("Dying",true); //넘어지는 애니메이션 보임
	
	
}
function OnDestroyCharacter()
{
	var character : GameObject = GameObject.FindWithTag("Player");
	if(character.transform.position.y < -1.0)
	{
		
		life = 0;
	}                                            
}


function Start () {
	animator=GetComponent(Animator);
	
	life = 100.0;
	score = 0.0;

}

function Update () {
	life = life - 0.04; //생명이 계속 줄어들게 함
	slider.value = life*0.01;
	OnDestroyCharacter();

	if(life <= 0){ //생명이 0보다 작거나 같으면
		//게임오버
		GameObject.FindWithTag("GameController").SendMessage("GameOver",score);
		enabled = false;
		
		}
}
function MeetCastle()
{
	//게임 클리어시 메세지 전송
	GameObject.FindWithTag("castle").SendMessage("GameCleared",score);
	enabled = false;
}
function OnGUI(){
	 
	 GUI.skin = skin;
	 var sw : int = Screen.width;
	 var sh : int = Screen.height;

	 var scoreText : String = "Score : " + score.ToString();
	 GUI.Label(Rect(sw*3/5, sh*1/10, sw*1/4,sh*1/6),scoreText, "Life");
	
 }
 

 