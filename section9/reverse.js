function reverse(string){
  // add whatever parameters you deem necessary - good luck!
  if(string.length===0) return "";
  return string[string.length-1]+reverse(string.slice(0,string.length-1))
}
const check = reverse('awesome');
console.log('check: ', check)