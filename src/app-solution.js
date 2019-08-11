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

  /*
   * I create a function here so that I can use the logic for multiple inputs.
   * That means, I can use this function not just for `people` array but a different array as well.
   * Note: I use an empty array as a default parameter :)
   */
  function sortArray(arr = []) {
    /*
     * `sort` here is a MUTATING method i.e it changes the array referred to by `arr` variable.
     * In order to understand it better, try to do console.log(arr) before returning it from the function.
     */
    arr.sort(function(firstElem, secondElem) {
      return firstElem.name.localeCompare(secondElem.name);
    });

    return arr;
  }

  console.log(sortArray(people));

  /*
   * Q2.
   * (Topic: Array iteration and conditional operations)
   * Write a function that accepts an array and returns only the even numbers in it.
   * For example, if the input array is [13, 1, 4, 6, 8, 3, 2, 2], the output array should be [4, 6, 8, 2, 2].
   */

  /*
   * I create a function here again so that I can use the logic for multiple inputs.
   * Note: I use an empty array as a default parameter :)
   */
  function getEvenNumbers(arr = []) {
    const evenNumbers = [];
    for (let i = 0; i < arr.length; i++) {
      /* The conditional check finds out if the element of the array is an even number */
      if (arr[i] % 2 === 0) {
        evenNumbers.push(arr[i]);
      }
    }
    return evenNumbers;
  }

  const arr1 = [13, 1, 4, 6, 8, 3, 2, 2];
  const arr2 = [1,2,3,4,5,6,7,8,9];
  /* See I can reuse my even numbers logic now for multiple kind of inputs. This is the power of functions. :) */
  console.log(getEvenNumbers(arr1));
  console.log(getEvenNumbers(arr2));


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

  /*
   * I create a function here again to make sure I can reuse my logic for multiple inputs
   */
  function calculateAverage(arr = []) {
    /* Create a temporary variable here to store sum inside it */
    let sum = 0;

    /*
     * In order to calculate average score of the class, we first need to find out the total sum of each student.
     * Use a forEach or any regular loops like for, while or do-while.
     */
    arr.forEach(function(elem) {
      sum = sum + elem.score;
    });

    /*
     * This condition is not mandatory but it is good to have in case there is an empty array passed to the function.
     */
    if (arr.length !== 0) {
      const average = sum / arr.length;
      return average;
    }
    
    return 'Err!! Seems like input is empty.';
  }

  console.log(calculateAverage(students));
  console.log(calculateAverage());


  /*
   * Q4.
   * (Topic: Unicode characters and Array iteration)
   * Write a JavaScript function which accept a string as argument and swaps the case of each character.
   * For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
   * Any character other than alphabets will stay as it is.
   * Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
   */

  /*
   * I create a function here again to reuse the logic for a different kind of strings.
   * Pay attention to the names I've chosen for the function here and above. They all have a verb in the name
   * which describes the activity going on inside the function.
   * I've also provided a default value as empty string in case this function is invoked without any arguments.
   */
  function transformString(str = '') {
    let transformedString = '';
    /* We loop through the string as we would do for an array because we need to transform all elements of the string */
    for (let i = 0; i < str.length; i++) {
      /* 
       * In order to understand this conditional check better, please go to this URL: http://sticksandstones.kstrom.com/appen.html
       * The `if` condition checks if the current element inside string is lowercase, and then convert it to uppercase.
       * The `else if` condition checks if the current element inside string is uppercase, and then convert it to lowercase.
       * Otherwise, don't manipulate the element and add it to the new temporary string as it is. This is required for characters like empty space, dot(.), comma(,) and so on.
       */
      if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
        transformedString = transformedString.concat(str[i].toUpperCase());
      } else if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
        transformedString = transformedString.concat(str[i].toLowerCase());
      } else {
        transformedString = transformedString.concat(str[i]);
      }
    }
    return transformedString;
  }

  console.log(transformString('The Quick Brown Fox'));
}