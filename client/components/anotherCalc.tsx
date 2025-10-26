const taxBrackets = [
  { threshold: 180000, rate: 0.39 },
  { threshold: 78100, rate: 0.33 },
  { threshold: 53500, rate: 0.30 },
  { threshold: 15600, rate: 0.175 },
  { threshold: 0, rate: 0.105 }
]

interface CalculationResult {
  totalDeductions: number, 
  takeHomePay: number, 
  isStudentLoan: boolean
  studentLoanDeductions: number, 
  kiwisaverDeductions: number,
  totalIncome: number,
  taxDeductions: number,
}

export function anotherGetIncomeRateCalc(
  anualSalary: number,
  otherIncome: number,
  expenses: number,
  studentLoanBool: boolean,
  kiwisaverContribution: number,
): CalculationResult {
  let taxDeductions = 0

  const STUDENT_LOAN_THRESHOLD = 24128
  const studentLoanDeductionRate = 0.12
  let studentLoanDeductions = 0

  const totalIncome = anualSalary + otherIncome - expenses

  let incomeToTax = totalIncome

  const kiwisaverDeductions = totalIncome * (kiwisaverContribution / 100)

  for (let i = 0; i < taxBrackets.length ; i++) {
    const bracket = taxBrackets[i]
    if (totalIncome > bracket.threshold) {
      const valueInBracket = incomeToTax - bracket.threshold
      taxDeductions += valueInBracket * bracket.rate
      incomeToTax = bracket.threshold
    }
  }

  if (studentLoanBool == true && totalIncome < STUDENT_LOAN_THRESHOLD) {
      studentLoanDeductions += totalIncome * studentLoanDeductionRate
  }

  const totalDeductions = taxDeductions + studentLoanDeductions + kiwisaverDeductions
  const takeHomePay = totalIncome - totalDeductions
  const isStudentLoan = studentLoanBool



  return {
    totalDeductions,
    takeHomePay,
    totalIncome,
    taxDeductions,
    isStudentLoan,
    studentLoanDeductions,
    kiwisaverDeductions,
  }

  
}