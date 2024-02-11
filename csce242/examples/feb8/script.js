const updateThermometer = () => {
   const goal = 10000;
   const funds = document.getElementById("txt-funds").value;
   const errorSpan = document.getElementById("funds-error");
   errorSpan.innerHTML = "";
   const therm = document.getElementById("thermometer");
   document.querySelector(":root").style.setProperty('--funds', "0%");

   /*Error Messages*/
   
   if(isNaN(funds)) {
    errorSpan.innerHTML = "**Not a Valid Number**"
    return;
   } 
   else if(funds < 0) {
    errorSpan.innerHTML = "**Don't Try To Take Money!!**"
    return;
   }

   const percent = funds/goal * 100;
   document.querySelector(":root").style.setProperty('--funds', percent + "%");

};

const evalForm = (e) => {
   e.preventDefault();

   console.log("we made it");
};

document.getElementById("button-cont").onclick = updateThermometer;
document.getElementById("my-form").onsubmit = evalForm;