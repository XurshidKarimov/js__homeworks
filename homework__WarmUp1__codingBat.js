function sleepIn(weekday, vacation){
    return !weekday || vacation;
  }

function monkeyTrouble(aSmile, bSmile){
    return aSmile && bSmile || !aSmile && !bSmile ? true : false;
}

function sumDouble(a, b){
    return a == b ? (a + b) * 2 : a + b;
}

function diff21(n){
    return n > 21 ? (n-21)*2 : 21 - n;
}

function parrotTrouble(talking, hour){
    return talking && (hour < 7 || hour > 20);
}

function makes10(a, b){
    return (a == 10 || b == 10) || a + b == 10;
}

function nearHundred(n){
    let absolute = Math.abs(n)%10;
    return absolute ? n >= 90 && n <= 100 || n >= 190 && n <= 200 : n ? true : false;
}

function posNeg(a, b, negative){
    return (negative) ? a < 0 && b < 0 : (a > 0 && b < 0 || a < 0 && b > 0) ? true : false;
}

function notString(str){
    return str.startsWith("not") ? str : `not ${str}`;
}

function missingChar(str, n){
    str = str.split('');
    str.splice(n, 1);
  
   return str.join(''); 
}

function frontBack(str){
    let point = str.length * -1;
    return str.length == 1 ? str : str.length == 2 ? `${str.slice(-1)}${str.slice(-2, -1)}` : `${str.slice(-1)}${str.slice(point+1, -1)}${str.slice(point, point+1)}`;
}

function front3(str){
    return str.slice(0, 3).repeat(3);
}

function backAround(str){
    return `${str.slice(-1)}${str}${str.slice(-1)}`;
}

function or35(n){
    return !(n%3) || !(n%5);
}

function front22(str){
    return `${str.slice(0, 2)}${str}${str.slice(0, 2)}`;
}

function startHi(str){
    return str.startsWith("hi");
}

function icyHot(temp1, temp2){
    return (temp1 > 100 && temp2 < 0) || (temp2 > 100 && temp1 < 0);
}

function in1020(a, b){
    return a >= 10 && a <= 20 || b >= 10 && b <= 20;
}

function hasTeen(a, b, c){
    return [a, b, c].some(item => item >= 13 && item <= 19);
}

function loneTeen(a, b){
    return ([a, b].every(item => item >= 13 && item <= 19)) ? false : ([a, b].some(item => item >= 13 && item <= 19));
}

function delDel(str){
    return str.indexOf("del") == 1 ? str.replace("del", '') : str; 
}

function mixStart(str){
    return /^[a-z]ix/.test(str);
}

function startOz(str){
    return str.startsWith("oz") ? "oz" : str[0] == "o" ? str[0] : str[1] == "z" ? str[1] : "";
}

function intMax(a, b, c){
    return Math.max(a,b,c);
}

function close10(a, b){
    let start = Math.abs(a - 10), end = Math.abs(b - 10);
    return start == end ? 0 : start < end ? a : b;
}

function in3050(a, b){
    let _3040 = [a, b].every(item => item >= 30 && item <= 40);
    let _4050 = [a, b].every(item => item >= 40 && item <= 50);
    
    return _3040 || _4050;
}

function max1020(a, b){
    let state = [a,b].every(item => item >= 10 && item <= 20);
    return state ? Math.max(a, b) : (!(a >= 10 && a <= 20) && !(b >= 10 && b <= 20)) ? 0 : (a >= 10 && a <= 20) ? a : b;
}

function stringE(str){
    let len = str.match(/e/g).length;
    return len >= 1 && len <= 3;
}

function lastDigit(a, b, c){
    return a%10 == b%10 ? true : false;
}

function endUp(str){
    return str.length <= 2 ? str.toUpperCase() : `${str.slice(str.length * -1, -3)}${str.slice(-3).toUpperCase()}`;
}

function everyNth(str, n){
    let word = '';
    for(let x = 0; x < str.length; x += n){
      word += str[x];
    }
    return word;
}