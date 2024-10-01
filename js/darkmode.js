var dCheck = document.getElementById("dMode");

function darkMode() {
  console.log("heck yeah");
  var inputs = document.getElementsByTagName('input');
  var body = document.body;
  
  body.style.color="f1f1f1";
  body.style.backgroundColor="3c3c3c";

  for(var i=0; i&lt;inputs.length; i++){
   if(inputs[i].getAttribute('type')=='button'){
     inputs.style.backgroundColor="#13f4f3";
   }
  }  
}

dCheck.onClick(){
  darkMode();
}
