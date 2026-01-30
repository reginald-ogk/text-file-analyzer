/* Return a new array that contains the symmetric difference of the two provided arrays. The returned array must contain only the elements that are unique to each of the two arrays. In other words, it should contain only the elements that are in either of the two arrays, but not in both. */


function diffArray(arr1, arr2) {
  // Items in arr1 that are NOT in arr2
  const onlyInArr1 = arr1.filter(item => !arr2.includes(item));

  // Items in arr2 that are NOT in arr1
  const onlyInArr2 = arr2.filter(item => !arr1.includes(item));

  // Combine both results into one array
  return onlyInArr1.concat(onlyInArr2);
}