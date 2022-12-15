function showHello(str){
	var request =new XMLHttpRequest(); //var=VARIABILE "STILE JAVA",  mentre let=dichiara variabile anche utilizzando una funzione  
	
	request.onreadystatechange = function(){  
		if(this.readyState==4 && this.status==200) {    //SPECIFICARE QUANDO STATO CAMBIA - IN QUESTO CASO  è COMPLETAMENTE
			console.log(request.responseText);
			document.getElementById("ServerResponse").innerHTML=request.responseText;
		}								
	};
	
	
	request.open("GET","saluto?user= " + str, true) //(COME, SERVLET, TRUE ASINCRONO= BROWSER NON SI BLOCCA NELL'ATTENDERE RISPOSTA CHE HO INVIATO - FALSE SINCRONO= ATTENDERE RISPOSTA), STIAMO  SETTANDO RICHIESTA VERSO SERVER
	request.send();  //INVIO
	
	
}