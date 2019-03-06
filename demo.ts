// skriva en funktion som kontrollerar om ett element finns med i en lista- precis som find
const data: string[] = ['trä', 'sten', 'plåt', 'pepparkaksdeg'];
function findInList(haystack: string[], needle: string): boolean  {
	for(let i: number = 0; i<haystack.length; i++) {
		console.log('Haystack index är: ' + i)
		if(haystack[i] === needle) {
			return true;
		}
	}
	return false;
}

console.log('Vi letar efter "sten". Finns det i listan? ' + findInList(data, 'sten'));
//let f: string = console.log('hej');



let x = 'anka';  // implicit string
x = x + 5;  // 'anka5': string

let z: any = 'beta';
z = false;

const y: boolean = true;

let tuple: [number, string] = [1, 'anka'];

interface CanTalk {
	hej: boolean;
	talk: () => void;
}
let o1: CanTalk = {
	hej: true,
	talk: function() { console.log('talking'); }
};
o1.talk();

function talk2(o2: CanTalk) {
	o2.talk();
}










//
