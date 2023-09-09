let highIncome = false;
let goodCreditScore = false;
let eliibleForLoan = highIncome || goodCreditScore;
console.log('Eligible',eliibleForLoan);

let applicationRefused = ! eliibleForLoan;
console.log('Application Refused', applicationRefused);