var setActive=function()
{
	var firstClass=$(".header").attr("class").split(" ")[0];
	var selector=".header li:contains('" + firstClass + "')";
	$(selector).addClass("active");
};

var main=function()
{
	$(".header").load("header.html", setActive);
};

$(document).ready(main);