#pragma strict


function OnTriggerEnter(other: Collider){
	other.gameObject.SendMessage("ApplyDamage",10.0); //ApplyDamage 메세지 전송
	Destroy(gameObject); //없앰
}
function Start () {

}

function Update () {

}
