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

