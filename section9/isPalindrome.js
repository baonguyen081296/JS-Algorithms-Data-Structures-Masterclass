/**
 * Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.
// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false
 */
function isPalindrome(str){
  // add whatever parameters you deem necessary - good luck!
	if(str.length<=1) return true;
	return str[0] === str[str.length-1] && isPalindrome(str.slice(1,str.length-1));
}
const string = 'aba';
const check = isPalindrome(string);
console.log('check: ', check)