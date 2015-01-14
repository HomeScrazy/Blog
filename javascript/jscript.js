//将需要显示的文章显示，将不需要的影藏起来
function showContext(id){
	var x=getElementsByClassName('context');
	for(var i=0;i<x.length;i++){
		if(x[i].id==id){
			x[i].style.display="block";
		}
		else{
			x[i].style.display="none";
		}
	}

}
function hideContext(id){
	var x=document.getElementById(id);
	x.style.display="none";
}
//根据ClassName来获取函数
function getElementsByClassName(n){
	var el=[];
	_el = document.getElementsByTagName('*');
    for (var i=0; i<_el.length; i++ ) {
       if (_el[i].className == n ) {
           el[el.length] = _el[i];
        }
   }
   return el;
}