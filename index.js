const btnNames = document.querySelector('.click')



// LOGIC

let currentIndex = 0
let currentLimit = 3

const names = [
	{
		title: 'Name 2',
	},
	{
		title: 'Name 3',
	},
	{
		title: 'Name 4',
	},
	{
		title: 'Name 5',
	},
	{
		title: 'Name 6',
	},
	{
		title: 'Name 7',
	},
	{
		title: 'Name 8',
	},
	{
		title: 'Name 9',
	},
	{
		title: 'Name 10',
	},
]
btnNames.onclick = function () {	
	const [...blockNames] = document.querySelectorAll('.name1')
	const lastElementName = blockNames[blockNames.length - 1]
    console.log(lastElementName)
		
	names.slice(currentIndex,currentIndex + currentLimit).map(function(name) {
	lastElementName.insertAdjacentHTML('beforeend', `<div class="name1">${name.title}</div>	`)
	})
	currentIndex = currentIndex + currentLimit
	}