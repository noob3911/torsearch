const search = document.querySelector('#form');
const inputVal = document.querySelector('input');
const titleinp =document.querySelector('.title');
const magnetlnk =document.querySelector('.magnet');
const reSearch =document.querySelector('.errorSearch');

search.addEventListener('submit',(e) => {
	e.preventDefault();
	const searchTerm = inputVal.value.trim();
	// console.log(searchTerm)
	titleinp.textContent='Loading..';
	reSearch.textContent='';
	const url = `/tors?address=${searchTerm}`;
	fetch(url).then((res)=>{
		res.json().then((dat)=>{
			// console.log(dat)
			// console.log(dat[1].title)
			titleinp.textContent='';
			if(dat.length===0){
				return reSearch.textContent+="Search again... ";
			}
			else{
				for(var i=1;i<dat.length;i++){
					const list = document.createElement('li');
					const magnet = document.createElement('ul');
					const size = document.createElement('ul');
					const seeds = document.createElement('ul');
					list.innerHTML ="<b>Title</b>:  " + dat[i].title;
					size.innerHTML="Size: " + dat[i].size; 
					seeds.innerHTML="Seeds: " + dat[i].seeds;
					magnet.innerHTML=dat[i].magnet;
					titleinp.appendChild(list);
					titleinp.appendChild(size);
					titleinp.appendChild(seeds);
					list.appendChild(magnet);
				}
			}
			// if(dat.error){
			// 	titleinp.textContent =dat.error;
			// }
			// else{
			// console.log(dat)
			// console.log(dat.title)
			// console.log(dat.magnet)
			// // titleinp.textContent =dat.title;
			// for(const p in dat.title){
			// 	const list =document.createElement('li');
			// 	list.innerHTML = dat.title[p];
			// 	titleinp.appendChild(list);
			// }

			// }

		})

	})
});