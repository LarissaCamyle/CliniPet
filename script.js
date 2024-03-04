var texto1 = document.getElementById("texto1ID");
var texto2 = document.getElementById("texto2");
var texto3 = document.getElementById("texto3");
var borda = document.getElementById("borda");


/*MOUSE DENTRO -----------------------------------------*/

texto1.addEventListener ("mouseenter", function()
{
    esconderBorda();
 	console.log("1");
	aparecerBorda();
})

texto2.addEventListener ("mouseenter", function()
{
    esconderBorda();
 	console.log("2");
	aparecerBorda();
})

texto3.addEventListener ("mouseenter", function()
{
    esconderBorda();
 	console.log("3");
	aparecerBorda();
})


/*MOUSE FORA ------------------------------------------*/

texto1.addEventListener ("mouseout", function()
{
 	console.log("1 sair");
	esconderBorda();
})

texto2.addEventListener ("mouseout", function()
{
 	console.log("2 sair");
	esconderBorda();
})
texto3.addEventListener ("mouseout", function()
{
 	console.log("3 sair");
	esconderBorda();
})


/*FUNCOES ---------------------------------------------*/

function aparecerBorda() {
	borda.style.backgroundColor= 'rgb(182, 255, 246)';
    borda.style.height= '5px';
}

function esconderBorda() {
	borda.style.height= '0px';
}