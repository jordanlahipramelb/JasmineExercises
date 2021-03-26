it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 20000,
    years: 10,
    rate: 5,
  };
  expect(calculateMonthlyPayment(values)).toEqual('212.13');
});

it('should return a result with 2 decimal places', function () {
  const values = {
    amount: 15051,
    years: 5,
    rate: 5.5,
  };
  expect(calculateMonthlyPayment(values)).toEqual('287.49');
});

/// etc
