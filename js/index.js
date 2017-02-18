$(function(){
	var $ban = $('#ban');
	var len = $ban.children().length;
	var w = $ban.children().width();
	$ban.width(len*w);
	var n = 0;
	var dis =0;
	function getDis(n){
		if(n<0){
			n=len-1;
			dis=(n-1)*w;
		}else if(n>len-1){
			n=0;
			dis=0;
		}else{
			dis=(n)*w;
		}
		return dis;
	}
	$('#ban').swipeLeft(function(){
		n++;
		$ban.css({
			transform: 'translate('+-getDis(n)+'px)'
		});
	});
	$('#ban').swipeRight(function(){
		n--;
		$ban.css({
			transform: 'translate('+-getDis(n)+'px)'
		});
	});
});
