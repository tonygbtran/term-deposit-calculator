import { calculateTermDeposit } from "./calculateTermDeposit";

describe("calculateTermDeposit", () => {
  it("should calculate the correct amount for when interest paid is at maturity", () => {
    expect(calculateTermDeposit(10000, 1.1, 3, "atMaturity")).toBe(10330);
  });
  it("should calculate the correct amount for when interest paid is monthly", () => {
    expect(calculateTermDeposit(12500, 1.2, 4, "monthly")).toBe(13114);
  });
  it("should calculate the correct amount for when interest paid is quarterly", () => {
    expect(calculateTermDeposit(15500, 1.3, 5, "quarterly")).toBe(16539);
  });
  it("should calculate the correct amount for when interest paid is annually", () => {
    expect(calculateTermDeposit(17500, 1.4, 2, "annually")).toBe(17993);
  });
  it("should throw an error when start deposit amount is less than or equal to 0", () => {
    expect(() => calculateTermDeposit(-17500, 1.4, 2, "annually")).toThrowError(
      "Start Deposit Amount is invalid"
    );
  });
  it("should throw an error when interest rate less than 0", () => {
    expect(() => calculateTermDeposit(17500, -1.4, 2, "annually")).toThrowError(
      "Interest Rate is invalid"
    );
  });
  it("should throw an error when investment term is negative", () => {
    expect(() => calculateTermDeposit(17500, 1.4, -2, "annually")).toThrowError(
      "Investment Term is invalid"
    );
  });
  it("should throw an error when start deposit amount is undefined", () => {
    expect(() =>
      calculateTermDeposit(undefined, 1.4, 2, "annually")
    ).toThrowError("Start Deposit Amount is undefined");
  });
  it("should throw an error when interest rate is undefined", () => {
    expect(() =>
      calculateTermDeposit(17500, undefined, 2, "annually")
    ).toThrowError("Interest Rate is undefined");
  });
  it("should throw an error when investment term is undefined", () => {
    expect(() =>
      calculateTermDeposit(17500, 1.4, undefined, "annually")
    ).toThrowError("Investment Term is undefined");
  });
  it("should throw an error when interest paid is undefined", () => {
    expect(() => calculateTermDeposit(17500, 1.4, 2, undefined)).toThrowError(
      "Interest Paid is undefined"
    );
  });
});
