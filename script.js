// let i = 0

// for(let i =0; i <= 10; i++){
//     console.log(i)
// }

// while(i < 11){
//     console.log(i)
//     i++
// }

const c = console.log
const d = document.write

const sum = () => {
	let n1 = parseInt(document.getElementById(`n1`).value)
	let n2 = parseInt(document.getElementById(`n2`).value)
	return (n1 + n2)
}
c(sum(3,5))