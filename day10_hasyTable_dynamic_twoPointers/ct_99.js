// Two sum

// ### **문제 설명**
// 정수 배열 nums와 정수 target이 주어지면 nums의 두 요소의 합이 target과 같은 두 요소의 인덱스를 반환한다. 각 입력에는 정확히 하나의 해만 있으며 같은 요소를 두 번 사용할 수 없다.
// 어떤 순서로든 답을 반환할 수 있다.
// - 시간 복잡도 제한 : $O(n)$

// **Example 1:**
// ```
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// ```

// **Example 2:**
// ```
// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// ```

// **Example 3:**
// ```
// Input: nums = [3,3], target = 6
// Output: [0,1]
// ```

// **Constraints:**
// - `2 <= nums.length <= $10^4$`
// - $`-10^9$ <= nums[i] <= $10^9$`
// - $`-10^9$ <= target <= $10^9$`
// - **Only one valid answer exists.**

// **Follow-up:**
// Can you come up with an algorithm that is less than $O(n^2)$ time complexity?

const twoSum = (nums, target) => {
  const map = {}; // 숫자와 그 인덱스를 저장할 객체

    // 배열을 한 번 순회하면서
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]; // 필요한 페어 값을 계산

        // 해시 테이블에서 페어 값이 존재하는지 확인
        if (map[complement] !== undefined) {
          console.log(map);
            return [map[complement], i]; // 페어 값의 인덱스와 현재 인덱스를 반환
        }

        // 현재 숫자와 인덱스를 맵에 저장
        map[nums[i]] = i;
    }

    // 이론상 이 라인은 실행되지 않음, 문제 조건에 따라 정확히 하나의 해가 존재
    return [];
};

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6)); // [1, 2]
console.log(twoSum([3, 3], 6)); // [0, 1]