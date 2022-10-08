//when we use "==" if the types of the variables are not the same, the compiler wil convert them into numeric type and then evaluates their equality.
//when we use "===" it evaluates if the variables are exactly the same which means that their values and types must be the same so that the result would be true.
const firstYearCompleted = true;
const yearsCompleted = 1;

yearsCompleted == firstYearCompleted;
yearsCompleted === firstYearCompleted;
