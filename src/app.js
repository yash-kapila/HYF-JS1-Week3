
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

  // First Way
  let p2=[];
  function ascend(){
    for(let i =0; i<people.length; i++){
      
      p2.push(people[i].name)
    }
    console.log(p2.sort());
  }
  ascend();

  //Second Way

  people.sort((a,b) =>  a.name.localeCompare(b.name));
  console.log(people);


  /*
   * Q2.
   * (Topic: Array iteration and conditional operations)
   * Write a function that accepts an array and returns only the even numbers in it.
   * For example, if the input array is [13, 1, 4, 6, 8, 3, 2, 2], the output array should be [4, 6, 8, 2, 2].
   */

   let arr = [13,1,4,6,8,3,2,2]
   function evenArr (){
     let arrNew =[];
     for(let i = 0; i < arr.length; i++) {
       if((arr[i]%2) === 0)
       arrNew.push(arr[i]);
     }
     console.log(arrNew);
   }
   evenArr();



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
  
  let num = 0;

  function average(){
    for (i = 0; i<students.length; i++ ) {
      
      num += students[i].score
      
    }
    
    let avg = (num/(students.length)).toFixed(2);
      console.log(avg)
      
  }
  console.log(average())

  /*
   * Q4.
   * (Topic: Unicode characters and Array iteration)
   * Write a JavaScript function which accept a string as argument and swaps the case of each character.
   * For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
   * Any character other than alphabets will stay as it is.
   * Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
   */

   
    let text = " ";
    function change(num = " "){
     for (let i = 0; i< num.length; i++){
       if(num.charCodeAt(i) >= 97 && num.charCodeAt(i) <= 122) {
      text = text.concat(num[i].toUpperCase);
      } else if (num.charCodeAt(i) >= 65 && num.charCodeAt(i) <=90) {
        text = text.concat(num[i].oUpperCase);
      } else {
        text = text.concat(str[i])
      }
      }
      return num;

   }
   console.log(text("The Quick Brown Fox"));
  