// 0 - $15,600	10.5%
// $15,601 - $53,500	17.5%
// $53,501 - $78,100	30%
// $78,101 - $180,000	33%
// $180,001 and over	39%

export function GetIncomeTaxRate(
  anualSalary: number,
  otherIncome: number,
  expenses: number,
  studentLoanBool: boolean,
  kiwisaverContribution: number,
) {
  let totalIncome: number = 0
  let taxableOtherIncome: number = 0
  const nonTaxableOtherIncome: number = 0
  let taxDeductions: number = 0
  let studentLoanDeduction: number
  let totalDeductions: number = 0

  otherIncome >= 5000
    ? (otherIncome = taxableOtherIncome)
    : (otherIncome = nonTaxableOtherIncome)
  if (taxableOtherIncome === undefined) {
    return (taxableOtherIncome = 0)
  }
  totalIncome = anualSalary + taxableOtherIncome - expenses

  const taxBracket1 = 10.5 / 100
  const taxBracket2 = 17.5 / 100
  const taxBracket3 = 30 / 100
  const taxBracket4 = 33 / 100
  const taxBracket5 = 39 / 100

  const dollarValueInsideTB1 = 15600
  const dollarValueInsideTB2 = 53500 - 15600
  const dollarValueInsideTB3 = 78100 - 53500
  const dollarValueInsideTB4 = 180000 - 78100

  const kiwisaverPercentage = kiwisaverContribution / 100

  const kiwisaverContributionValue = totalIncome * kiwisaverPercentage

  if (totalIncome >= 0 && totalIncome <= 15600) {
    taxDeductions = totalIncome * taxBracket1
    return taxDeductions

  } else if (totalIncome >= 15601 && totalIncome <= 53500) {
    taxDeductions = (totalIncome - 15600) * taxBracket2 
    taxDeductions += dollarValueInsideTB1 * taxBracket1
    console.log(taxDeductions)
    return taxDeductions

  } else if (totalIncome >= 53501 && totalIncome <= 78100) {
    taxDeductions = (totalIncome - 53500) * taxBracket3
    taxDeductions += dollarValueInsideTB1 * taxBracket1
    taxDeductions += dollarValueInsideTB2 * taxBracket2
    return taxDeductions

  } else if (totalIncome >= 78101 && totalIncome <= 180000) {
    taxDeductions = (totalIncome - 78100) * taxBracket4
    taxDeductions += dollarValueInsideTB1 * taxBracket1
    taxDeductions += dollarValueInsideTB2 * taxBracket2
    taxDeductions += dollarValueInsideTB3 * taxBracket3
    return taxDeductions

  } else if (totalIncome >= 180001) {
    taxDeductions = (totalIncome - 180000) * taxBracket5
    taxDeductions += dollarValueInsideTB1 * taxBracket1
    taxDeductions += dollarValueInsideTB2 * taxBracket2
    taxDeductions += dollarValueInsideTB3 * taxBracket3
    taxDeductions += dollarValueInsideTB4 * taxBracket4
    return taxDeductions

  }

 
  studentLoanBool === true && totalIncome >= 5000
    ? (studentLoanDeduction = totalIncome * 0.12)
    : (studentLoanDeduction = 0)

  totalDeductions =
    taxDeductions + studentLoanDeduction + kiwisaverContributionValue

  return totalDeductions
}

console.log(GetIncomeTaxRate(250000, 0, 0, false, 0))
