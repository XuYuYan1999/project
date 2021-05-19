;
// 匿名自执行
(function(win){
	
	// 获得document对象
	var doc = win.document;
	// 获得html标签
	var docEl = doc.documentElement;
	
	// 获取meta标签
	var metaEl = doc.querySelector('meta[name="viewport"]');
	
	// viewport-fit=cover"设置占满整个屏幕
	metaEl.setAttribute("content", "initial-scale=.5, maximum-scale=.5, minimum-scale=.5, user-scalable=no viewport-fit=cover");
	
	function reRem(){
		// getBoundingClientRect()方法返回元素的大小及其相对于视口的位置
		var _width = docEl.getBoundingClientRect().width;
		// console.log(_width)
		
		var _rem = _width/10;
		docEl.style.fontSize = _rem + 'px';
	}
	reRem();
	
	win.addEventListener('resize',function(){
		reRem();
	})
})(window)