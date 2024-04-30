// 3Sum

// ### **문제 설명**
// 정수 배열 nums가 주어지면 `i != j`, `i != k`, `j != k`, `nums[i] + nums[j] + nums[k] == 0`이 성립하는 모든 삼중항 `[nums[i]`, `nums[j]`, `nums[k]]`을 반환한다.

// 반환하는 삼중항에 중복된 요소가 포함되어서는 안된다.
// 예를 들어, `nums = [-1,0,1,2,-1,-4]`일 때, nums에 -1이 2개 존재하므로 `nums[0] + nums[1] + nums[2] == 0`가 성립하는 조합이 `[[ -1, -1, 2 ], [ -1, 0, 1 ], [ -1, 0, 1 ]]`처럼 3개 존재하지만 `[ -1, 0, 1 ]`이 중복되므로 `[[ -1, -1, 2 ], [ -1, 0, 1 ]]`을 반환해야 한다.

// **Example 1:**
// ```
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation:
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
// ```

// **Example 2:**
// ```
// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// ```

// **Example 3:**
// ```
// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.
// ```

// **Constraints:**
// - `3 <= nums.length <= 3000`
// - $`-10^5$ <= nums[i] <= $10^5$`

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = nums => {
  const res = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    for (let j = i + 1; j < nums.length; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;
      for (let k = j + 1; k < nums.length; k++) {
        if (k > j + 1 && nums[k] === nums[k - 1]) continue;
        const sum = nums[i] + nums[j] + nums[k];
        
        if (sum === 0) res.push([nums[i], nums[j], nums[k]])
      }
    }
  }
  return res;
}; // O(n^3)

const threeSum_2 = nums => {
  
}

console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1, -1, 2], [-1, 0, 1]]
console.log(threeSum([-2, 0, 1, 1, 2])); // [[-2, 0, 2], [-2, 1, 1]]
console.log(threeSum([0, 1, 1])); // []
console.log(threeSum([0, 0, 0])); // [[0, 0, 0]]

console.log(threeSum_2([-1, 0, 1, 2, -1, -4])); // [[-1, -1, 2], [-1, 0, 1]]
console.log(threeSum_2([-2, 0, 1, 1, 2])); // [[-2, 0, 2], [-2, 1, 1]]
console.log(threeSum_2([0, 1, 1])); // []
console.log(threeSum_2([0, 0, 0])); // [[0, 0, 0]]