// skriva en funktion som kontrollerar om ett element finns med i en lista- precis som find
var data = ['trä', 'sten', 'plåt', 'pepparkaksdeg'];
function findInList(haystack, needle) {
    for (var i = 0; i < haystack.length; i++) {
        console.log('Haystack index är: ' + i);
        if (haystack[i] === needle) {
            return true;
        }
    }
    return false;
}
console.log('Vi letar efter "sten". Finns det i listan? ' + findInList(data, 'sten'));
//let f: string = console.log('hej');
var x = 'anka'; // implicit string
x = x + 5; // 'anka5': string
var z = 'beta';
z = false;
var y = true;
var tuple = [1, 'anka'];
var o1 = {
    hej: true,
    talk: function () { console.log('talking'); }
};
o1.talk();
function talk2(o2) {
    o2.talk();
}
//
