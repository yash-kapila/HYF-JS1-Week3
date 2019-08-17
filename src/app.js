{
  /*
   * Q1.
   * (Topic: Array sorting)
   * Write a program which would sort the below array in ascending order by name.
   * Hint: String.prototype.localeCompare()
   */
  const people = [{
    name: 'Richie Baros'
  }, {
    name: 'Jayson Karner'
  }, {
    name: 'Dylan Wanner'
  }, {
    name: 'Travis Tarwater'
  }, {
    name: 'Angelique Lyall'
  }, {
    name: 'Stacie Dyar'
  }];
  people.sort(function(a, b){
    return a.name.localeCompare( b.name)
  });
  console.log(people);

  /*
   * Q2.
   * (Topic: Array iteration and conditional operations)
   * Write a function that accepts an array and returns only the even numbers in it.
   * For example, if the input array is [13, 1, 4, 6, 8, 3, 2, 2], the output array should be [4, 6, 8, 2, 2].
   */
  const arr = [13, 1, 4, 6, 8, 3, 2, 2];
  let newArr = [];
  function myNum() {
    for (let i = 0; i < arr.length; i++){
      if (arr[i] % 2 === 0){
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }
  console.log(myNum());
  // console.log(arr[n]);
  /* 
   * Q3.
   * (Topic: Array iteration)
   * A class has 5 students defined below. Write a program to calculate average score of the class.
   * Note: The average should be restricted to 2 decimal places.
   */
  const students = [{
    name: 'Student 1',
    score: 93
  }, {
    name: 'Student 2',
    score: 87
  }, {
    name: 'Student 3',
    score: 84
  }, {
    name: 'Student 4',
    score: 90
  }, {
    name: 'Student 5',
    score: 96
  }];
  let sum = 0 ;
  function average(){
    for(i = 0; i < students.length; i++){
      sum = sum + students[i].score;
    }
    const scoreAverage = ( sum / students.length ).toFixed(2);
    // const scoreAverage = ( sum / i ).toFixed(2);  //  worked
    return scoreAverage;
  }
  console.log(average());

  /*
   * Q4.
   * (Topic: Unicode characters and Array iteration)
   * Write a JavaScript function which accept a string as argument and swaps the case of each character.
   * For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
   * Any character other than alphabets will stay as it is.
   * Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
   */
  let input = 'The Quick Brown Fox';
  let inputArr = input.split("");
  function char(){
    for (let a = 0; a < inputArr.length; a++){
      if (inputArr[a] === inputArr[a].toUpperCase()){
        inputArr[a] = inputArr[a].toLowerCase();
      } else if (inputArr[a] === inputArr[a].toLowerCase()) {
        inputArr[a] = inputArr[a].toUpperCase();
      }
    }
    return inputArr.join("");
  }
  console.log(char());
}