let menu = false;
function fun() {
	var content = document.getElementById("content");
	if (menu) {
		menu = !menu;
		content.style.width = "0px";
		content.style.height = "0px";
		content.style.animation = "animationn 0.6s";
	} else {
		menu = !menu;
		content.style.width = "200px";
		content.style.height = "200px";
		content.style.boxShadow = "0px 0px 25px 0px #0000008e";
		content.style.animation = "animation 0.6s";
	}
}

let contraCapa = false;
function fun2() {
	var capa = document.getElementById("capa");
	var verso = document.getElementById("verso");
	if (contraCapa) {
		contraCapa = !contraCapa;
		capa.style.marginLeft = "0%";
		capa.style.animation = "capaAnnimation2 1s";

		verso.style.marginLeft = "-200%";
		verso.style.animation = "versoAnnimation2 1s";
	} else {
		contraCapa = !contraCapa;
		capa.style.marginLeft = "100%";
		capa.style.animation = "capaAnnimation 1s";

		verso.style.marginLeft = "-200%";
		verso.style.animation = "versoAnnimation 1s";
	}
}
