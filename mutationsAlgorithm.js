/* Mutations Algorithm
   This function checks if all letters of the second string
   are present in the first string, regardless of case.
*/

function mutation(arr) {
  const first = arr[0].toLowerCase();
  const second = arr[1].toLowerCase();

  for(let char of second) {
    if (!first.includes(char)) {
      return false;
    }
  }

  return true;
}