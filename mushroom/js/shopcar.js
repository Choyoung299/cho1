//rem设定
!(function(doc, win) {
    var docEle = doc.documentElement,
        evt = "onorientationchange" in window ? "orientationchange" : "resize",
        fn = function() {
            var width = docEle.clientWidth;
            width && (docEle.style.fontSize = 20 * (width /320) + "px");
        };
     
    win.addEventListener(evt, fn, false);
    doc.addEventListener("DOMContentLoaded", fn, false);
 
}(document, window));
//点击选中所有商品
var inp = document.querySelectorAll('input');
var floor_price=document.querySelector('.floor_price');
var pri=document.querySelector('.cgr-btm-price');
var scc=document.querySelector('.shop-car-com');
	var num = 1;
//当只有一件商品时，默认为全选
	inp[0].onclick=function(){
		if(num==1){
			inp[0].style.backgroundPosition='0 0';
			inp[1].style.backgroundPosition='0 0';
			inp[inp.length-1].style.backgroundPosition='0 0';
			num=0;
			//底部价格变动
			floor_price.innerHTML=pri.innerHTML;			
		}
		else{
			inp[0].style.backgroundPosition='0 100%'
			inp[1].style.backgroundPosition='0 100%';
			inp[inp.length-1].style.backgroundPosition='0 100%';
			num=1;
			//底部价格归零
			floor_price.innerHTML='￥0.00';
		}
	}
//选择购物车内所有商品
	inp[inp.length-1].onclick=function(){
		if(num==1){
			inp[0].style.backgroundPosition='0 0';
			inp[1].style.backgroundPosition='0 0';
			inp[inp.length-1].style.backgroundPosition='0 0';
			num=0;	
			//底部价格变动
			floor_price.innerHTML=pri.innerHTML;					
		}
		else{
			inp[0].style.backgroundPosition='0 100%'
			inp[1].style.backgroundPosition='0 100%';
			inp[inp.length-1].style.backgroundPosition='0 100%';
			num=1;
			//底部价格归零
			floor_price.innerHTML='￥0.00';
		}
	}
//点击选中目标商品
	scc.onclick=function(){
		if(num==1){
			scc.style.backgroundPosition='0 0';
			inp[0].style.backgroundPosition='0 0';
			num=0;	
			//底部价格变动
			floor_price.innerHTML=pri.innerHTML;					
		}
		else{
			scc.style.backgroundPosition='0 100%'
			inp[0].style.backgroundPosition='0 100%'
			num=1;
			//底部价格归零
			floor_price.innerHTML='￥0.00';

		}
	}

//点击编辑出现编辑内容页面
var topta = document.querySelector('.top-tr-a');
var edtopta=document.querySelector('.edit-a')
var goods = document.querySelector('.goods');
var edgoods = document.querySelector('.edit-goods');
var account = document.querySelector('.account');
var edacc = document.querySelector('.edit-account');

	topta.onclick=function(){
		topta.style.display='none';
		goods.style.display='none';
		account.style.display='none';
		edtopta.style.display='block';
		edgoods.style.display='block';
		edacc.style.display='block';
	}

	edtopta.onclick=function(){
		topta.style.display='block';
		goods.style.display='block';
		account.style.display='block';
		edtopta.style.display='none';
		edgoods.style.display='none';
		edacc.style.display='none';
	}

//点击按钮增加减少商品数量
var edminus=document.querySelector('.edit-minus');
var edplus=document.querySelector('.edit-plus');
var edcp=document.querySelector('.edit-count-mp');
edminus.onclick=function(){
	var num=edcp.innerHTML*1;	
	if(edcp.innerHTML>1){
		edcp.innerHTML=num-1;
		edminus.style.border='1px solid #999';
		edminus.style.background='white';
		edminus.style.color='#333';
	}
	else{
		edcp.innerHTML==1;
		edminus.style.border='1px solid #e5e5e5';
		edminus.style.background='#f6f6f6';
		edminus.style.color='#999';
	}
}
edplus.onclick=function(){
	var num=edcp.innerHTML*1;
	edcp.innerHTML=num+1;
}