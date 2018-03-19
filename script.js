$(document).ready(function() {

	let city = $('.weather-city');
	let desc = $('.weather-description');
	let wind = $('.weather-wind');
	let temp = $('.weather-temp');
	let btn = $('.js-btn');
	let input = $('.js-input');

	function setWheatherData(result) {
		city.text(result.name);
		wind.text(result.wind.speed);
		temp.text(result.main.temp);
		desc.text(result.weather[0].description);
	};

	btn.click(function() {
		$.getJSON('http://api.openweathermap.org/data/2.5/weather?q=' + input.val() + '&APPID=42b48587e1a4e48a2e14c453899f9cc4', function(result) {
			console.log(result);
			setWheatherData(result);
		});
	});

});