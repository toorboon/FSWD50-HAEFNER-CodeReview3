//file for the Javascript part for index.html

//actual calculation for the insurance fee
function calculateInsurancePerCountry(age,country,horse_power){	
	switch (country){
		case 'austria': 
			var insurance_result = horse_power * 100 / age + 50;
			return insurance_result;
			break;
		case 'hungary':
			var insurance_result = horse_power * 120 / age + 100;
			return insurance_result;
			break;
		case 'russia':
			var insurance_result = horse_power * 1500 / age + 150;
			return insurance_result;
			break;
		default: 
			document.getElementById("result").innerHTML = 'Sorry, but your country is not supported. Please try again'
			alert('Sorry, but your country is not supported. Please try again')
			window.location.reload(false);
	}
}

//Main function for putting together: input and calculation and output
function calculateInsurance(){
	//Read values from input fields into variables
	var name = document.getElementsByName('name')[0].value;
	var age = document.getElementsByName('age')[0].value;
	var country = document.getElementsByName('country')[0].value;
	var horse_power = document.getElementsByName('horse_power')[0].value;
	console.log(name,age,country,horse_power);

	//validate input
	if (validate(name,age,country,horse_power)){
		//Write out result
		document.getElementById("result").innerHTML = name + ', your insurance costs: <br>' + Math.floor(calculateInsurancePerCountry(age,country,horse_power)) + ' €';
	} 
}

//Check, if entered values are valid or not
function validate(name,age,country,horse_power){
	var x = true;
	if (name == ''|| age == '' || country == '' || horse_power == ''){
		alert('You have to input values for all four fields!')
		window.location.reload(false);
		var x = false;
	} 
	if ((isNaN(age) || age < 0) && age !== ''){
		alert('You must input positive numbers for age!');
		window.location.reload(false);	
		} else if ((age > 80 || age < 18) && age !== ''){
				alert('You have to be between 18-80 for signing a contract with us!');
				window.location.reload(false);
				var x = false;
			}
	if (isNaN(horse_power) || horse_power < 0){
		alert('You must input positive numbers for horsepower!');
		window.location.reload(false);
		var x = false;
	}
	return x; 
}


//add eventhandler for calculate button
document.getElementById('button_calculate').addEventListener("click",calculateInsurance,false);	

for (var i = 0; i < 4; i++) {
	document.getElementsByClassName('enter_button')[i].addEventListener("keydown", function(event){
    	if (event.key === "Enter") {
        	calculateInsurance();
    	}
	});
}
