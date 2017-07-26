/* * Create by lcr on 2017/2/22  * */
import axios from 'axios'
function move_pop_init_startData ( pop_move , startData ) {
	var _top = startData.initTop;
	var _left = startData.initLeft;
	pop_move.style.top  = _top + "px";
	pop_move.style.left  = _left + "px";
}
function move_pop_touchstart ( evt , pop_move , startData ) {
	var touch = evt.touches[0]; //获取第一个触点
	startData.startX = Number(touch.pageX); //页面触点X坐标
	startData.startY = Number(touch.pageY); //页面触点X坐标
	startData.startTop =  pop_move.offsetTop; 
	startData.startLeft =  pop_move.offsetLeft;
	startData.initTop = startData.initTop ? startData.initTop : pop_move.offsetTop ; 
	startData.initLeft = startData.initLeft ? startData.initLeft : pop_move.offsetLeft ; 
}
function move_pop_touchmove ( evt , pop_move , startData , notranslate) {
	var content_width = pop_move.clientWidth ; 
	var content_height = pop_move.clientHeight ; 
	var warp_width = pop_move.parentNode.clientWidth;
	var warp_height = pop_move.parentNode.clientHeight;
	var minLeft = 0 ;
	var maxLeft = 0;
	var minTop = 0 ;
	var maxTop = 0 ;
	if ( notranslate ) {
		minLeft = 0 ;
		maxLeft = warp_width - content_width;
		minTop = 0 ;
		maxTop = warp_height - content_height;
	} else {
		minLeft = content_width/2;
		maxLeft = warp_width - content_width/2;
		minTop = content_height/2;
		maxTop = warp_height - content_height/2;
	}
	var touch = evt.touches[0]; //获取第一个触点
	var x = Number(touch.pageX); //页面触点X坐标
	var y = Number(touch.pageY);
	var startX = +startData.startX ;
	var startY = +startData.startY ;
	var offsetTop = +startData.startTop ;
	var offsetLeft = +startData.startLeft ;
	var change_x = startX - x;
	var change_y = startY - y;
	var left = offsetLeft  - change_x;
	var top = offsetTop - change_y;
	function _move(minVal,maxVal,val,type){
		var value = val < minVal ? minVal : ( val > maxVal ? maxVal : val);
		pop_move.style[type] = value + "px";
	}
	_move(minLeft,maxLeft,left,"left");
	_move(minTop,maxTop,top,"top");
}
function getPageNameByStr ( type ){
	/*后台返回的页面节点，根据该节点跳转不同的页面*/
	var next_node_name = {
		payment:["PAY:PRE","PAY:PAY","PLA:UNP"],//付款页面
		order_add_coupon:["PLA:CPN"],			//电子卷页面
		order_add_sale:["PLA:PRM","PLA:MUT"]	//促销页面
	};
	if (typeof type !== "string" || type === "" ) return null;
	if ( next_node_name.payment.indexOf(type) !== -1 ) {
		return 'payment' ;
	}
	if ( next_node_name.order_add_coupon.indexOf(type) !== -1 ) {
		return 'order_coupon' ;
	}
	if ( next_node_name.order_add_sale.indexOf(type) !== -1 ) {
		return 'order_promotion';
	}
	return null ; 
}
// 訂單的類型名称
function orderTypeName ( orderType ) {
	if ( orderType == 'PSC') {return '超市訂貨'; }
	if ( orderType == 'CTR') {return '櫃檯訂貨'; }
	if ( orderType == 'TPD') {return '電話訂貨'; }
	if ( orderType == 'MLD') {return '郵寄訂貨'; }
	if ( orderType == 'FXD') {return '傳真訂貨'; }
	if ( orderType == 'REP') {return '到府維修訂貨'; }   
	return '' ;
}
function getDate (n=0 , f='') {
	let now = new Date();
	let date = new Date( now.getTime() + n * 24 * 3600 * 1000 );
	let year = date.getFullYear();
	let month = (date.getMonth() + 1) > 9 ? (date.getMonth() + 1) : '0' + (date.getMonth() + 1) ;
	let day = date.getDate() > 9  ? date.getDate() : '0' + date.getDate() ;
	// let hour = date.getHours(); 
	// let minute = date.getMinutes(); 
	// let second = date.getSeconds();
	return '' + year + f + month + f + day ;
}
export {
	getDate,
	orderTypeName,
	getPageNameByStr,
	move_pop_init_startData,
	move_pop_touchstart,
	move_pop_touchmove
}