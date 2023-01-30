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

