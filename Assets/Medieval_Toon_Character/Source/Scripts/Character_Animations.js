#pragma strict
// 캐릭터 내에 들어있던 코드, 필요에 맞게 수정함 
internal var animator:Animator;

private var v:float;
private var h:float;

private var run:float;


function Start () {
	animator=GetComponent(Animator);
}

function Update () {
	v=Input.GetAxis("Vertical");
	h=Input.GetAxis("Horizontal");
		
	run=0.2;
	
	if (animator.GetFloat("Run")==0.2){
		if (Input.GetKeyDown("space")){
			animator.SetBool("Jump",true);
		}
	}
	
}

function FixedUpdate (){
	animator.SetFloat("Walk",v);
	animator.SetFloat("Run",run);
	animator.SetFloat("Turn",h);
}
