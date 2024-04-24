// running sum

// ### **문제 설명**
// 주어진 배열 nums의 누계 합(running sum)을 runningSum[i] = sum(nums[0]...nums[i])으로 정의합니다. nums의 누계 합을 반환합니다.

// Example 1:
// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

// Example 2:
// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].

// Example 3:
// Input: nums = [3,1,2,10,1]
// Output: [3,4,6,16,17]

const runningSum = nums => {
  let result = []; // 누적 합을 저장할 배열
    let sum = 0; // 누적 합을 계산할 변수
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]; // 현재 요소를 누적 합에 추가
        result.push(sum); // 계산된 누적 합을 결과 배열에 추가
    }
    return result;
};

const runningSum_2 = nums => {
  const sum = [nums.at(0)];
  // [ 1 ] => [ 1, 2 ]

  for (let i = 1; i < nums.length; i++) {
    sum[i] = sum[i - 1] + nums[i];
  }

  return sum;
}

const runningSum_3 = nums => { 
  let sum = 0
  return nums.map(n => (sum += n));
}

console.log(runningSum([1, 1, 1, 1, 1])); // [1, 2, 3, 4, 5]
console.log(runningSum([1, 2, 3, 4])); // [1, 3, 6, 10]
console.log(runningSum([3, 1, 2, 10, 1])); // [3, 4, 6, 16, 17]
console.log(runningSum_2([1, 1, 1, 1, 1])); // [1, 2, 3, 4, 5]
console.log(runningSum_2([1, 2, 3, 4])); // [1, 3, 6, 10]
console.log(runningSum_2([3, 1, 2, 10, 1])); // [3, 4, 6, 16, 17]
console.log(runningSum_3([1, 1, 1, 1, 1])); // [1, 2, 3, 4, 5]
console.log(runningSum_3([1, 2, 3, 4])); // [1, 3, 6, 10]
console.log(runningSum_3([3, 1, 2, 10, 1])); // [3, 4, 6, 16, 17]