/*
JavaScript Algorithms and Data Structures Masterclass

isPalindrome
Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward).  Otherwise it returns false.
*/

const isPalindrome = (str) => {
  let revStr = '';
  let ind = str.length - 1;
  const innerFunc = (string, index) => {
    if(index < 0) {
      return '';
    } else {
      return string[index] + innerFunc(string, index - 1);
    }
  }
  revStr = innerFunc(str, ind);

  return str === revStr ? true : false;
}

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false