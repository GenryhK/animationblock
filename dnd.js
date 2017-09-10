const block = document.querySelector('#block');
block.style.position=`absolute`;
block.style.top=0+`px`;
block.style.left=0+`px`;
function a(){if(parseInt(block.style.top)!=document.documentElement.clientHeight-block.clientHeight){



	block.style.top= parseInt(block.style.top)+1+`px`}

	else{block.style.left= parseInt(block.style.left)+1+`px`}
};
let timerID=setInterval(a,16)
function stop(){clearInterval(timerID)}


/*console.log(document.documentElement.clientHeight)
console.log(document.documentElement.clientWidth)*/




