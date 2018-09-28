



function hua(banner1,dots1,lis,lbtn1,rbtn1,widths,hot1){
	let r;
	let now=0;
	let next=0;
	lis[now].style.left=0;
	rbtn1.onclick=function(){
		next++;
		if (next==lis.length) {
			next=lis.lenght-1;
			return;
		}
		lis[now].style.left=0;
		lis[next].style.left= widths+'px';
		animate(lis[now],{left:-widths});
		animate(lis[next],{left:0});
		dots1[now].classList.remove('hot1');
		dots1[next].classList.add('hot1');
		now=next;
	}
	lbtn1.onclick=function(){
		next--;
		if (next<0) {
			next=0;
			return;
		}
		lis[next].style.left= -widths+'px';
		animate(lis[next],{left:0});
		animate(lis[now],{left:widths});
		dots1[now].classList.remove('hot1');
		dots1[next].classList.add('hot1');
		now=next;
	}
	for (let i = 0; i < dots1.length; i++) {
		dots1[i].onmouseover=function(){
			for (let j = 0; j < dots1.length; j++) {
				lis[j].style.left=-widths+'px';
				dots1[j].classList.remove('hot1');
			}
			lis[i].style.left=0;
			dots1[i].classList.add('hot1');
			now=i;
			next=i;
		}
	}
}