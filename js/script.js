//Design de Imagem 2020/21 - Matilde Ferreira & Ricardo Figueiredo
let color;

$(document).ready(function () {

	$('html, body').animate({
		scrollTop: $(document).height() - $(window).height()
	}, 0);
});

$(window).resize(Andares);

$(window).scroll(function () {
	Andares();

	let posMenu = $("#bot").offset().top;
	if ($(document).height() - posMenu > $('.base').height()) {
		color = "rgb(0, 0, 0)";
		$('#bot li').css("color", color);
	} else {
		color = "rgb(255, 255, 255)";
		$('#bot li').css("color", color);
	}
});
$('#bot li').hover(function () {
	let posMenu = $("#bot").offset().top;

	if ($(document).height() - posMenu > $('.base').height()) {

		$(this).css("color", "rgb(70, 70, 70)")
		color = "rgb(0, 0, 0)";

	} else {

		$(this).css("color", "rgb(200, 200, 200)")
		color = "rgb(255, 255, 255)";
	}
}, function (pcolor) {
	$(this).css("color", color);
});


function Andares() {
	let heightAndar = $('.meio').height() - 1;
	let PageHeight = $(document).height();
	let posInfo = $("#info").offset().top - $('.topo').height();
	let andares = 797 - (posInfo / heightAndar);

	if (parseInt(andares) >= 798) {
		andares = 797;
	}
	let estudantes = parseInt(andares) * 10;

	let metros = parseInt(andares) * 4;

	$("#andares").text(parseInt(andares) + ' Andares');
	$("#estudantes").text(estudantes + ' Estudantes');
	$("#metros").text(parseInt(metros) + ' Metros');
	
	if (metros > 300 && metros < 350){	
	$("#eifell").fadeIn(400);
	}else{
	$("#eifell").fadeOut(400);	
	}
	
	if (metros > 530 && metros < 580){
	$("#Tower").fadeIn(400);
	}else{
	$("#Tower").fadeOut(400);	
	}
	
	if (metros > 800 && metros < 850){
	$("#higher").fadeIn(400);
	}else{
	$("#higher").fadeOut(400);	
	}
	
	if (metros > 1990 && metros < 2040){
	$("#mountain").fadeIn(400);
	}else{
	$("#mountain").fadeOut(400);	
	}
	
	if (metros > 2320 && metros < 2370){
	$("#pico").fadeIn(400);
	}else{
	$("#pico").fadeOut(400);	
	}
	if (metros > 10 && metros < 60){
	$("#gaivota").fadeIn(400);
	}else{
	$("#gaivota").fadeOut(400);	
	}
}

$('#osquartos').click(function () {
	$('#faculdades ol').slideToggle(500);
});
$('#faculdades ol').click(function () {
	$('#faculdades ol').slideToggle(500);
	$(this).slideToggle(500);
	$(this).children().slideToggle(500);
});


$('#faculdades ol > li').click(function () {
	$('#faculdades ol').slideToggle(500);
	$('#oandar').css("font-weight", "500");
	$('#sobre').css("font-weight", "500");
});

$('#oandar').click(function () {
	$('#predio').hide();
	$('#info').hide();
	$('#paginaandar').show();
	$('#paginasobre').hide();
	$('#paginaestatistica').hide();
	$('#quartoa').hide();
	$('#quartoap').hide();

	$(this).css("font-weight", "600");
	$('#sobre').css("font-weight", "500");
	$('#estatisticas').css("font-weight", "500");
});

$('header').click(function () {
	$('#predio').show();
	$('#info').show();
	$('#paginaandar').hide();
	$('#paginasobre').hide();
	$('#paginaestatistica').hide();
	$('#quartoa').hide();
	$('#quartoap').hide();
	$('#oandar').css("font-weight", "500");
	$('#sobre').css("font-weight", "500");
	$('#estatisticas').css("font-weight", "500");
	$('html, body').animate({
		scrollTop: $(document).height() - $(window).height()
	}, 0);
})

$('#planta').click(function () {
	$('.gif').hide();
	$('.planta').show();
	$(this).css("font-weight", "600");
	$(this).css("text-decoration", "underline");
	$("#mockup").css("font-weight", "400");
	$("#mockup").css("text-decoration", "none");
})

$('#mockup').click(function () {
	$('.gif').show();
	$('.planta').hide();
	$(this).css("font-weight", "600");
	$(this).css("text-decoration", "underline");
	$("#planta").css("font-weight", "400");
	$("#planta").css("text-decoration", "none");
});

$('#sobre').click(function () {
	$('#predio').hide();
	$('#info').hide();
	$('#paginaandar').hide();
	$('#paginaestatistica').hide();
	$('#paginasobre').show();
	$('#quartoa').hide();
	$('#quartoap').hide();
	$(this).css("font-weight", "600");
	$('#oandar').css("font-weight", "500");
	$('#estatisticas').css("font-weight", "500");
});

$('.arquitetura').click(function () {
	$('#predio').hide();
	$('#info').hide();
	$('#paginaandar').hide();
	$('#paginasobre').hide();
	$('#paginaestatistica').hide();
	$('#quartoap').hide();

	$('#sobre').css("font-weight", "500");
	$('#oandar').css("font-weight", "500");
	$('#quartoa').show();
});

$('#mulher').click(function () {
	$('#predio').hide();
	$('#info').hide();
	$('#paginaandar').hide();
	$('#paginasobre').hide();
	$('#paginaestatistica').hide();
	$('#quartoap').hide();

	$('#sobre').css("font-weight", "500");
	$('#oandar').css("font-weight", "500");
	$('#quartoa').show();
});

$('.artesplasticas').click(function () {
	$('#predio').hide();
	$('#info').hide();
	$('#paginaandar').hide();
	$('#paginasobre').hide();
	$('#paginaestatistica').hide();
	$('#quartoa').hide();
	$('#sobre').css("font-weight", "500");
	$('#oandar').css("font-weight", "500");

	$('#quartoap').show();
});

$('#homem').click(function () {
	$('#predio').hide();
	$('#info').hide();
	$('#paginaandar').hide();
	$('#paginasobre').hide();
	$('#paginaestatistica').hide();
	$('#quartoa').hide();
	$('#sobre').css("font-weight", "500");
	$('#oandar').css("font-weight", "500");

	$('#quartoap').show();
});


$('img#aarrowleft').click(function () {
	$('#a1').show();
	$('#a2').hide();
});

$('img#aarrowright').click(function () {
	$('#a1').hide();
	$('#a2').show();
});

$('img#aparrowleft').click(function () {
	$('#ap1').show();
	$('#ap2').hide();
});

$('img#aparrowright').click(function () {
	$('#ap1').hide();
	$('#ap2').show();
});

$('#estatisticas').click(function () {
	$('#predio').hide();
	$('#info').hide();
	$('#paginaandar').hide();
	$('#paginasobre').hide();
	$('#paginaestatistica').show();
	$('#quartoa').hide();
	$('#quartoap').hide();
	$(this).css("font-weight", "600");
	$('#oandar').css("font-weight", "500");
	$('#sobre').css("font-weight", "500");
});
