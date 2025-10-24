// 0 - $15,600	10.5%
// $15,601 - $53,500	17.5%
// $53,501 - $78,100	30%
// $78,101 - $180,000	33%
// $180,001 and over	39%

const brackets = [
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
  kiwiSaverDeduction: number,
  totalIncome: number,
  taxDeductions: number,
}

export function getIncomeTaxRate(
  anualSalary: number,
  otherIncome: number,
  expenses: number,
  studentLoanBool: boolean,
  kiwisaverContribution: number,
): CalculationResult {

  const totalIncome = (anualSalary + otherIncome) - expenses

  let taxDeductions = 0
  let incomeToTax = totalIncome
  let studentLoanDeductions = 0
  const STUDENT_LOAN_THRESHOLD = 24128
  const studentLoanDeductionRate = 0.12

  for (const bracket of brackets) {
    if (incomeToTax > bracket.threshold) {
      const amountInBracket = incomeToTax - bracket.threshold
      taxDeductions += amountInBracket * bracket.rate
      incomeToTax = bracket.threshold
    }
  }

  const kiwiSaverDeduction = totalIncome * (kiwisaverContribution / 100)

  if (studentLoanBool === true && totalIncome > STUDENT_LOAN_THRESHOLD) {
    studentLoanDeductions += totalIncome * studentLoanDeductionRate
  }
  const isStudentLoan = studentLoanBool
  const totalDeductions = taxDeductions + kiwiSaverDeduction + studentLoanDeductions
  const takeHomePay = totalIncome - totalDeductions

  return { totalDeductions, takeHomePay, isStudentLoan, studentLoanDeductions, kiwiSaverDeduction, totalIncome, taxDeductions }

}

