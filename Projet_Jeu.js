var attaque_joueur = 15;
var attaque_monstre = 15;
var pv_joueur = 100;
var pv_monstre = 100;
var mana_joueur = 50;
var defense_joueur = 5;
var cout_mana = 10;
var poison = 0;
var dgt_poison = 10;

var pv1=document.getElementById("pv1");
var pv2=document.getElementById("pv2");
var pv3=document.getElementById("pv3");
var pv4=document.getElementById("pv4");
var mana1=document.getElementById("mana1");
var mana2=document.getElementById("mana2");
var mana3=document.getElementById("mana3");
var mana4=document.getElementById("mana4");

var Bouton_attaque=document.getElementById("att");
var Bouton_defense=document.getElementById("def");
var Bouton_special=document.getElementById("spe");

pv1.innerHTML=pv_joueur;
pv2.innerHTML=pv_joueur;
pv3.innerHTML=pv_joueur;
pv4.innerHTML=pv_joueur;
mana1.innerHTML=mana_joueur;
mana2.innerHTML=mana_joueur;
mana3.innerHTML=mana_joueur;
mana4.innerHTML=mana_joueur;

function changeColor(obj) {
  if (obj.style.color == 'orange') {
    obj.style.color = 'black' ;
  } else {
    obj.style.color = 'orange' ;
  }
}

function attaque_joueur(){
  pv_monstre -= attaque_joueur
}

function attaque_monstre(){
	pv_joueur = pv_joueur - attaque_monstre;
	pv1.innerHTML = pv_joueur;
}  

function victoire(){
	if (vie_monstre <=0){
		Boite_dialogue.innerHTML="Vous remportez le combat";
	}
}

function defaite(){
	if (vie_joueur <=0){
	Boite_dialogue.innerHTML="Vous perdez lz combat";
	}
}