






// 轮播
	
	function bannerop(dots,imgs,banner,lbtn,rbtn,hot,second){

				let num=0;
				let t;

				imgs[0].style.zIndex=2;
				for (let i = 0; i < dots.length; i++) {
					dots[i].onmouseover=function(){
						for (let j = 0; j < imgs.length; j++) {
							imgs[j].style.zIndex=1;
							// dots[j].style.background='#333';
							dots[j].classList.remove('hot');
						}
						imgs[i].style.zIndex=2;
						// dots[i].style.background='#fff';
						dots[i].classList.add('hot');
						num=i;  //在这里把i赋值给num
					}
				}
				
				
				t=setInterval(move,second);
				function move(){
					num++;
					if (num==imgs.length) {
						num=0;
					}
					for (let j = 0; j < imgs.length; j++) {
						imgs[j].style.zIndex=1;
						dots[j].classList.remove('hot');
					}
					imgs[num].style.zIndex=2;
					dots[num].classList.add('hot');
					//这里就没定义i，
				}

				// 鼠标移入移出停止轮播
				banner.onmouseover=function(){
					clearInterval(t);
				}
				banner.onmouseout=function(){
					t=setInterval(move,second);
				}



				lbtn.onclick=function(){
					num--;
					if (num<0) {
						num=dots.length-1;
					}
					for (let j = 0; j < imgs.length; j++) {
							imgs[j].style.zIndex=1;
							dots[j].classList.remove('hot');
					}
					imgs[num].style.zIndex=2;
					dots[num].classList.add('hot');
				}
				rbtn.onclick=function(){
					move();
				}

				window.onfocus=function(){
				t=setInterval(move,second);
			}
			window.onblur=function(){
				clearInterval(t);
			}
				
				

				
		}
			

			
