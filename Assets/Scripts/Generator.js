#pragma strict

var intervalMin : float = 0.1;
var intervalMax : float = 2.0;
var SalmonRate : float = 0.7;

var Character : GameObject;

var Salmon : GameObject; //연어
var Cat : GameObject; //고양이

var isGameOver : boolean;


function Start () {
	isGameOver = false;
	
  while(isGameOver==false){
	yield WaitForSeconds(Random.Range(intervalMin, intervalMax));
		
		var prefab : GameObject = Random.value < SalmonRate ? Salmon : Cat;
		
		var x : float = Random.Range(-1.8, 1.8);
		var position : Vector3 = Vector3(x, 0.0, Character.transform.position.z-8.0 );
		
		if (prefab==Salmon)
				position.y = 0.74;
		
	
		Instantiate(prefab, position ,Quaternion.identity);
		
		//종료하면 그만 만들기
		var character : GameObject = GameObject.FindWithTag("Player");
		if(character.transform.position.y < -8.0)
		{
			isGameOver = true;
		}
		
}
}

function Update () {
	

}