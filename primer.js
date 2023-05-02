// Definimos una función para calcular la cuota mensual del préstamo
function calculateMonthlyPayment(loanAmount, interestRate, loanTerm) {
    const monthlyInterestRate = interestRate / 100 / 12;
    const numPayments = loanTerm;
    const monthlyPayment = (loanAmount * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -numPayments));
    return monthlyPayment.toFixed(2);
  }
  
  // Definimos una función para calcular el total a pagar
  function calculateTotalPayment(loanAmount, interestRate, loanTerm) {
    const monthlyPayment = calculateMonthlyPayment(loanAmount, interestRate, loanTerm);
    const totalPayment = monthlyPayment * loanTerm;
    return totalPayment.toFixed(2);
  }
  
  // Definimos un array de préstamos
  const loans = [
    { amount: 1000, interestRate: 5, term: 12 },
    { amount: 2000, interestRate: 7, term: 24 },
    { amount: 5000, interestRate: 10, term: 36 },
    { amount: 10000, interestRate: 12, term },
