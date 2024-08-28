export function calculateTermDeposit(
  startDepositAmount: number | undefined,
  interestRate: number | undefined,
  investmentTerm: number | undefined,
  interestPaid: "monthly" | "quarterly" | "annually" | "atMaturity" | undefined
): number {
  if (startDepositAmount === undefined) {
    throw new Error("Start Deposit Amount is required");
  }
  if (interestRate === undefined) {
    throw new Error("Interest Rate is required");
  }
  if (investmentTerm === undefined) {
    throw new Error("Investment Term is required");
  }
  if (interestPaid === undefined) {
    throw new Error("Interest Paid is required");
  }
  if (startDepositAmount <= 0) {
    throw new Error("Start Deposit Amount must be a positive value");
  }
  if (interestRate <= 0) {
    throw new Error("Interest Rate must be a positive value");
  }
  if (investmentTerm <= 0) {
    throw new Error("Investment Term must be a positive value");
  }
  const rate = interestRate / 100; // Convert rate from 1% to 0.01

  if (interestPaid === "atMaturity") {
    // Calculate simple interest as interst is paid at maturity
    return Math.round(startDepositAmount * (1 + rate * investmentTerm));
  } else {
    // Calculate compound interest if interest paid is monthly, quarterly or annually
    const numOfTimesPerPeriod = {
      monthly: 12,
      quarterly: 4,
      annually: 1,
    };
    return Math.round(
      startDepositAmount *
        Math.pow(
          1 + rate / numOfTimesPerPeriod[interestPaid],
          numOfTimesPerPeriod[interestPaid] * investmentTerm
        )
    );
  }
}
