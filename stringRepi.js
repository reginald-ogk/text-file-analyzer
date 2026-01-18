/* Repeat a String Repeat a String
   This function repeats a given string a specified number of times
   and returns the concatenated result.
*/

function repeatStringNumTimes(str, num) {
  let result = "";
  
  if (num <= 0) {
    return "";
  }

  for (let i = 0; i < num; i++){
    result += str;
  }

  return result;
}