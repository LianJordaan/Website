function LoadDropdowns() {
	let btn = document.querySelectorAll('#dropdown-button');
	let info = document.querySelectorAll('#dropdown');
	btn.forEach(iterate);

	function iterate(value, index) {
		value.addEventListener('click', function() {
			info[index].classList.toggle('opened');
			let text = value.textContent
			if(info[index].classList.contains('opened')) {
				text = text.replace('►', '▼');
			} else {
				text = text.replace('▼', '►');
			}
			value.textContent = text;
		})
	}
}

function LoadLinks() {
	let discord = document.querySelector('.aboutme-discord');
	let ball = document.querySelector('.aboutme-discord-ball');
	let alert = document.querySelector('.aboutme-discord-copied');

	discord.style.filter = "grayscale(100%)";

	ball.addEventListener('mouseover', function() {
		discord.style.filter = "grayscale(0%)";
	})
	
	ball.addEventListener('mouseout', function() {
		discord.style.filter = "grayscale(100%)";
	})

	ball.addEventListener('click', function() {
		navigator.clipboard.writeText("Lian#1199");
		alert.style.opacity = "100";
		let clicks = parseInt(discord.className.split(" ")[1].replace("click", ""));
		++clicks;
		discord.classList.add(`${clicks}click`);
		discord.classList.remove(`${clicks-1}click`);
		discord.style.transform = `rotate(${clicks}turn)`;
		console.log(clicks);

		setTimeout(resetOpacity, 3000);

		function resetOpacity() {
			if (clicks == parseInt(discord.className.split(" ")[1])) {
				alert.style.opacity = "0";
			}
		}
	})
}