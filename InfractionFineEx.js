function tellInfractionFine() {
	var speed = document.getElementById("drivingSpeed").value;
	
	var limit = document.getElementById("speedLimit").value;
	
	var speeding = speed - limit;
	
	var fine = 0
	if (speeding > 20) {
		fine = "Income-based unit fine."
	} else if (speeding <= 0) {
	    fine = "No speeding, no fine."
	} else if (speeding < 15 && limit >= 10 && limit <= 60) {
		fine = "Infraction fine is 85 euros.";
	} else if (speeding > 15 && speeding < 20 && limit >= 10 && limit <= 60) {
		fine = "Infraction fine is 115 euros.";
	} else if (speeding < 15 && limit >= 70 && limit <= 120) { 
		fine = "Infraction fine is 70 euros.";
	} else if (speeding > 15 && speeding <20  && speeding < 20)  {
		fine = "Infraction fine is 100 euros."			
	} 

	document.getElementById("answer").innerHTML = fine
		
}