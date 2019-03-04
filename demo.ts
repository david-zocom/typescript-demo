
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
