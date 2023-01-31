function stringTimes(str, n){
    return str.repeat(n);
}

function frontTimes(str, n){
    return str.slice(0,3).repeat(n);
}

function countXX(str){
    if(str.length <= 1) return 0;
    
    return str.match(/(?<=x)x/g).length;
}

function doubleX(str){
    let indx = str.indexOf("x");
    return str[indx+1] == "x";
}

function stringBits(str){
    if(str.length <= 2) return str[0] ? str[0] : '';
    
    let word = '';
    
    for(let x = 0; x < str.length; x+= 2){
      word += str[x];
    }
    
    return word;
}

function stringSplosion(str){
    return `${str[0]}${str.slice(0,2)}${str.slice(0,3)}${str}`
  }

function last2(str){
    if(!(str)) return 0;
    let count = 0;
  
    main:for(let x = 0; x < str.length; x++){
      let substr = str.slice(x, x+2);
      if(str.endsWith(substr)){
          for(let z = 0; z < str.length; z++){
            if(str.slice(z, z+2) == substr){
              count++;
            }
          }
        break main;
      }
    }
    return --count;
}

function arrayCount9(nums){
    return nums.join('').match(/9/g).length;
}

function arrayFront9(nums){
    return nums.slice(0,4).includes(9);
}

function array123(nums){
    return nums.join('').includes("123");
}

