var li = document.getElementsByTagName("footer")[0].getElementsByTagName("li")
window.onresize = function (argument) {
	if(document.body.clientWidth<410){}else if(document.body.clientWidth<575){
		for (var i = 0; i < li.length; i++) {
			li[i].className="mode2"
		};
	}else{
		for (var i = 0; i < li.length; i++) {
			li[i].className="mode1"
		};
	}
}
$("nav .none").live("click",function (argument) {
	$(this).parent().toggleClass("change");
})
window.onload = function (argument) {
	if(document.body.clientWidth<410){}else if(document.body.clientWidth<575){
		for (var i = 0; i < li.length; i++) {
			li[i].className="mode2"
		};
	}else{
		for (var i = 0; i < li.length; i++) {
			li[i].className="mode1"
		};
	}
}