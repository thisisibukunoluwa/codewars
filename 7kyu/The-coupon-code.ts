// Story
// Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

// Task
// Your mission:
// Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

// A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

// Examples:
// checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
// checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false



export function checkCoupon(
  enteredCode: string,
  correctCode: string,
  currentDate: string,
  expirationDate: string
): boolean {
  // TODO: code me
  if (enteredCode !== correctCode) {
    return false;
  }
  let newCurrentDate: number = new Date(currentDate).getTime();
  let newExpirationDate: number = new Date(expirationDate).getTime();
  //   console.log(newCurrentDate,newExpirationDate)
  if (newExpirationDate < newCurrentDate) {
    return false;
  }
  return true;
}