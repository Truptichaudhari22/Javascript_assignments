
//15. Write a program which can give grades to students according to theirs scores

function giveGrades(num){
  if (num >= 80){
    return "A";
  } else if (num >=70){
    return "B";
  } else if (num >=60){
    return "c";
  } else if (num >= 50){
    return "D";
  } else {
    return "F";
  }

}

let storeNum = giveGrades(77);
console.log(storeNum);