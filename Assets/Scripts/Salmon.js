#pragma strict

function OnTriggerEnter(other: Collider){
	other.gameObject.SendMessage("CatchSalmon",1.0);
	Destroy(gameObject);
}
function Start () {

}

function Update () {

}