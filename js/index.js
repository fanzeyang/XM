
window.onload=function(){



	let shopcar=document.querySelector('.topbar-cart');
	let sc=document.querySelector('.topbar-cart>a')
	let sc2=document.querySelector('.topbar-cart>a>span')
	let loading=document.querySelector('.cart-menu');
	shopcar.onmouseover=function(){
		sc.style.color='#ff6700';
		sc.style.background='white';
		sc2.style.color='#ff6700';
		// loading.style.display='block';
		loading.style.height='100px';
	}
	shopcar.onmouseout=function(){
		sc.style.color='#b0b0b0';
		sc.style.background='#424242';
		sc2.style.color='#b0b0b0';
		// loading.style.display='none';
		loading.style.height='0';
	}
	let li=document.querySelectorAll('.home-hero-list .list >li');
	let children=document.querySelectorAll('.children-list');
	// console.log(li)
	for (let i = 0; i < li.length; i++) {
		li[i].onmouseover=function(){
			for (let j = 0; j < children.length; j++) {
				children[j].style.display='none';
			}
			children[i].style.display='block';
		}
		li[i].onmouseout=function(){
			children[i].style.display='none';
		}
	}


	let dots=document.querySelectorAll('.home-hero-list-control div');
	let imgs=document.querySelectorAll('.home-hero a img');
	let banner=document.querySelector('.home-hero-caontainer');
	let lbtn=document.querySelectorAll('.arrow div')[0];
	let rbtn=document.querySelectorAll('.arrow div')[1];
	bannerop(dots,imgs,banner,lbtn,rbtn,'hot',1500);



	// 家电
	let catalogs=document.querySelectorAll('.catalog ul li');
	// console.log(catalogs);
	let lists=document.querySelectorAll('.jiadian-list2');
	// console.log(lists);
	lists[0].style.display="block";
	for (let i=0;i<catalogs.length;i++) {
			catalogs[i].onmouseenter=function() {
				for (let j=0;j<lists.length;j++){
					lists[j].style.display="none";
					catalogs[j].style.color="#000";
					catalogs[j].style.borderBottom="none"
				}
				lists[i].style.display="block";
				catalogs[i].style.color="#ff6700";
			}
		}







	// 内容
	let banner1=document.querySelector('.book1');
	let dots1=document.querySelectorAll('.dian1 dl');
	let lis=document.querySelectorAll('.box:first-child li');
	let lbtn1=document.querySelector('.hez1');
	let rbtn1=document.querySelector('.hez2');
	let widths=parseInt(getComputedStyle(banner1,null).width);
	
	hua(banner1,dots1,lis,lbtn1,rbtn1,widths,'hot1');


	let banner2=document.querySelector('.book2');
	let dots2=document.querySelectorAll('.dian2 dl');
	let lis2=document.querySelectorAll('.box:nth-child(2) li');
	let lbtn2=document.querySelector('.hez3');
	let rbtn2=document.querySelector('.hez4');
	let widths2=parseInt(getComputedStyle(banner2,null).width);
	hua(banner2,dots2,lis2,lbtn2,rbtn2,widths2,'hot1');



	let banner3=document.querySelector('.book3');
	let dots3=document.querySelectorAll('.dian3 dl');
	let lis3=document.querySelectorAll('.box:nth-child(3) li');
	let lbtn3=document.querySelector('.hez5');
	let rbtn3=document.querySelector('.hez6');
	let widths3=parseInt(getComputedStyle(banner3,null).width);
	hua(banner3,dots3,lis3,lbtn3,rbtn3,widths3,'hot1');


	let banner4=document.querySelector('.book4');
	let dots4=document.querySelectorAll('.dian4 dl');
	let lis4=document.querySelectorAll('.box:nth-child(4) li');
	let lbtn4=document.querySelector('.hez7');
	let rbtn4=document.querySelector('.hez8');
	let widths4=parseInt(getComputedStyle(banner4,null).width);
	hua(banner4,dots4,lis4,lbtn4,rbtn4,widths4,'hot1');





	let lxmcontrol=document.querySelector('.lxmcontrol');
	let rxmcontrol=document.querySelector('.rxmcontrol');
	let scroll=document.querySelector('.xm-goodlist2 ul');
	rxmcontrol.onclick=function(){
		scroll.style.transform="translateX("+(-1000)+"px)";
	}
	lxmcontrol.onclick=function(){
		scroll.style.transform="translateX("+(0)+"px)";
	}
}