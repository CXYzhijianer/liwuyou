function addCookie(key,value,days){
	var d=new Date();
	d.setDate(d.getDate()+days);
	document.cookie=key+"="+escape(value)+";expires="+d.toGMTString();
}
function getCookie(key){
	var str=unescape(document.cookie);
	var arr=str.split("; ");
	for(var i in arr){
		if (arr[i].indexOf(key+"=")==0) {
			return arr[i].substring((key+"=").length);
		}
	}
	return null;
}
//删除cookie
function removeCookie(key){
	addCookie(key,'',-1)
}