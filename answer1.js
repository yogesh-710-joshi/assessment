// complexity O(n^2)
function getLargetsSubsequence(arr) {
    const obj = {}
    for (let i = 0; i < arr.length; i++) {
        let start = arr[i]
        let count = 1;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] > start) {
                count++;
                start = arr[j];
            }
        }
        obj[arr[i]] = count
    }
    return Math.max(...Object.values(obj))
}

//complexity nlogn
function getLargetsSubsequence(arr) {
    const result = [];
  
    for (let i = 0; i < arr.length; i++) {
      let left = 0;
      let right = result.length - 1;
      while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (result[mid] < arr[i]) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
  
      if (left >= result.length) {
        result.push(arr[i]);
      } else {
        result[left] = arr[i];
      }
    }
  
    return result.length;
  }