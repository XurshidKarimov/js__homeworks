function helloName(string) {
    return helllo `${string}`;
  }
  
  // alert(helloName(prompt('', '')));
  
function makeOutWord(stringOut, stringWord) {
return `${stringOut[0].repeat(2)}${stringWord}${stringOut.slice(-1).repeat(2)}`;
}
  
  // alert(makeOutWord('<<>>', 'Xurshid'));
  
function firstHalf(string) {
return `${string.slice(0, string.length/2)}`
}
  
  // alert(firstHalf('WooHoo'));
  
function nonStart(a, b) {
let first = a.length == 1 ? '' : a.slice(1, a.length),
    second = b.length == 1 ? '' : b.slice(1, b.length);

return `${first}${second}`;
}
  
  // alert(nonStart('Hello', 'world'));
  
function theEnd(str, front) {
if (str.length == 1) return str;
return front ? str[0] : str.slice(-1);
}
  
  // alert(theEnd('Hello', true));
  
function endsLy(str) {
return /ly$/gi.test(str);
}
  
  // alert(endsLy('oddy'));
  
function middleThree(str) {
let middle = Math.floor(str.length/2);
return `${str[middle-1]}${str[middle]}${str[middle+1]}`;
}
  
  // alert(middleThree('Candy'));
  
function lastChars(a, b) {
    
if(!a.length && !b.length) return '@@';

let forA = a.length ? a[0] : '@', 
    forB = b.length ? b.slice(-1) : '@';
    
return `${forA}${forB}`;

}
  
  // alert(lastChars('last','chars'));
  
function seeColor(str) {
return (/(^red|^blue)[\w]+/gi.test(str)) ? str[0] == 'b' ? 'blue' : 'red' : '';
}
  
  // alert(seeColor('redxx'));
  
function extraFront(str) {
    if(str.length == 1 || str.length == 2) return str.repeat(3);
    
    return str.slice(0, 2).repeat(3);
}
  
  // alert(extraFront('hello'));
  
function startWord(str, word) {

    for(let x = 0; x < word.length; x++){
        if(str[x] != word[x]){
            if(x == 0) continue;
            else return '';
        }
    }
    
    return str.slice(0, word.length);
}
  
  // alert(startWord('hippo', 'i'));
  
function makeAbba(a, b) {
return `${a}${b}${b}${a}`;
}
  
  // alert(makeAbba('Hi', 'Bye'));
  
function extraEnd(str) {
return str.slice(-2).repeat(3);
}
  
  // alert(extraEnd('Hello'));
  
function withoutEnd(str) {
    str = str.split('');
    str.splice(0, 1);
    str.splice(str.length-1, 1);
    return str.join('');
}
  
  // alert(withoutEnd('Hello'));
  
function left2(str) {
if(str.length == 2) return str;
return `${str.slice(2)}${str.slice(0, 2)}`;
}
  
  // alert(left2('hi'));
  
function withoutEnd2(str) {
str = str.split('');
str.splice(0, 1);
str.splice(-1, 1);
return str.join('');
}
  
  // alert(withoutEnd2(''));
  
function nTwice(str, n) {
return `${str.slice(0, n)}${str.slice(n*-1)}`;
}

  // alert(nTwice('Chocolate', 3));
  
function hasBad(str) {
    let check = str.indexOf('bad');
    return !check || check == 1 ? true : false;
}
  
  // alert(hasBad('xxbadxxx'));
  
function conCat(a, b) {
return a[a.length-1] == b[0] ? `${a}${b.slice(1)}` : `${a}${b}`;
}
  
  // alert(conCat('abc', ''));
  
function frontAgain(str) {
return str.slice(0,2) == str.slice(-2) ? true : false;
}
  
  // alert(frontAgain('edit'));
  
function without2(str) {
    let subs = str.match(/[A-Z]/g);
    if(subs.length == 1) return str;
    
    let secondBigLetter = subs[1],
        endSubstring = str.slice(str.indexOf(secondBigLetter, 1));
        
    let startSubstring = str.slice(0, endSubstring.length);
    
    if(endSubstring == startSubstring){
        str = str.replace(endSubstring, '');
        return str;
    }
    
    return str;
}
  
  // alert(without2('HelloHe'));
  
function withoutX(str) {
str = str.split('').map((el, indx) => {
    return (el == 'x' && (indx == 0 || indx == str.length-1)) ? '' : el;
})

return str.join('');
}

// alert(withoutX('Hxix'));

function makeTags(tag, word) {
return `<${tag}>${word}</${tag}>`;
}

// alert(makeTags('cite', 'Yay'));

function firstTwo(str) {
    return str.slice(0, 2);
}

// alert(firstTwo('X'));

function comboString(a, b) {
    return a.length > b.length ? `${b}${a}${b}` : `${a}${b}${a}`;
}

// alert(comboString("hi", "hello"));

function right2(str) {
    return str.length == 2 ? str : `${str.slice(-2)}${str.slice(str.length*-1, -2)}`;
}

// alert(right2('java'));

function middleTwo(str) {
    let length = Math.floor(str.length/2);
    return `${str[length-1]}${str[length]}`;
}

// alert(middleTwo('Practice'));

function twoChar(str, int) {
    let check = str.length >= int+2;
    return check ? `${str.slice(int, int+2)}` : `${str.slice(0, 2)}`;
}

// alert(twoChar('java', 3));

function atFirst(str) {
    return str.length < 2 ? `${str}@` : `${str.slice(0,2)}`;
}

// alert(atFirst('h'));

function lastTwo(str) {
    return `${str.slice(str.length*-1, -2)}${str.slice(-1)}${str.slice(-2,-1)}`;
}

// alert(lastTwo('coding'));

function minCat(a, b) {
    let strShort = null, strLong = null;
    
    if(a.length < b.length){
        strShort = a;
        strLong = b;
    }
    else{
        strShort = b;
        strLong = a;
    }
    
    let differance = strLong.length - strShort.length;
    
    if(!differance) return `${a}${b}`;
    
    return strShort == a ? `${strShort}${strLong.slice(differance)}` : `${strLong.slice(differance)}${strShort}`;
}

// alert(minCat('java', 'Hello'));

function deFront(str) {    
    let cut = str.slice(0,2),
        result = str;
    
    let indxA = cut.indexOf('a'),
        indxB = cut.indexOf('b'),
        includeA = cut.includes('a'),
        includeB = cut.includes('b');
        
    if(includeA && includeB){
        if(!indxA && indxB == 1) return str;
        else{
            result = result.replace('a', '');
            result = result.replace('b', '');
            return result;
        }
    }
    else{
        if(includeA && !includeB){
            if(!indxA) return `${str[0]}${str.slice(2)}`;
            else return str.slice(2);
        }
        else if(!includeA && includeB){
            if(indxB == 1) return str.slice(1);
            else return str.slice(2);
        }
        
        return str.slice(2);
    }
}

// alert(deFront('abat'));

function withoutX2(str) {
    let part = str.slice(0, 2); 
    let check = part.includes('x');
    
    if(check){
      part = part.replace(/x/g, '');
      return `${part}${str.slice(2)}`;
    } 
    
    return str;
}

// alert(withoutX2('Hxi'));