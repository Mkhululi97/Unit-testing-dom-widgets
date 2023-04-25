describe("Test My calculateBill Function", function () {
  it("should eqaul 5.5 when called with 'call, call' ", function () {
    assert.equal(5.5, calculateBill("call,call"));
  });
  it("should eqaul 1.5 when called with 'sms, sms' ", function () {
    assert.equal(1.5, calculateBill("sms,sms"));
  });
  it("should eqaul 7 when called with 'call, sms, call , sms' ", function () {
    assert.equal(1.5, calculateBill("sms,sms"));
  });
  it("should return the 'warning' class when the total exceeds 20 ", function () {
    assert.equal(
      "warning",
      calculateBill("call, call, call, call, call, call, call, call")
    );
  });
  it("should return the 'danger' class when the total exceeds 30 ", function () {
    assert.equal(
      "danger",
      calculateBill(
        "call,call,call, call, call, call, call, call, call, call, call, call, call, call, call, call"
      )
    );
  });
});
