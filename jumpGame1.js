const nums = [1, 1, 1, 1, 2, 1, 0, 0, 1, 3];
// [3,2,1,0,4]
// [1,1,1,5,2,3,0,0,1,3]
const canJump = () => {
  let currentJump = nums.length - 1;

  for (let i = nums.length - 2; i >= 0; i--) {
    if (i + nums[i] >= currentJump) {
      currentJump = i;
    }
  }

  if (currentJump === 0) {
    return true;
  } else {
    return false;
  }
};

console.log(canJump());
