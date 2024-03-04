// versions would be a 1D array with either '0' or '1' as its elements.
// '0' indicates the version is bug-free and '1' indicates the version is buggy.
// (Ex - For input [0, 0, 1, 1, 1], the bug was introduced in version 2 and the function should return 1)

function lastBugFreeVersion(versions) {
  // Your implementation here
  let left = 0;
  let right = versions.length - 1;
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    let isBad = versions[mid] === 1;
    if (isBad) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
}

lastBugFreeVersion([0, 0, 1, 1, 1]);
