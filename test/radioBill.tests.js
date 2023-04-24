describe("RadioBill function test", function () {
  it("it should return '11' for 4 calls at 2.75 each if the radio input value is 'call'", function () {
    let radioBill = RadioBill();

    radioBill.radioInput("call");
    radioBill.radioInput("call");
    radioBill.radioInput("call");
    radioBill.radioInput("call");
    radioBill.radioInput("sms");

    assert.equal(11, radioBill.totalCallCost());
    assert.equal(0.75, radioBill.totalSmsCost());
    assert.equal(11.75, radioBill.totalCost());
  });
  it("it should return '1.5' for 2 sms's at 0.75 each when the radio input value is 'sms'", function () {
    let radioBill = RadioBill();

    radioBill.radioInput("sms");
    radioBill.radioInput("sms");

    assert.equal(0, radioBill.totalCallCost());
    assert.equal(1.5, radioBill.totalSmsCost());
    assert.equal(1.5, radioBill.totalCost());
  });
  it("it should return the 'total bill' when radio input value has  4 sms's and 3 calls", function () {
    let radioBill = RadioBill();

    radioBill.radioInput("sms");
    radioBill.radioInput("call");
    radioBill.radioInput("sms");
    radioBill.radioInput("sms");
    radioBill.radioInput("call");
    radioBill.radioInput("call");
    radioBill.radioInput("sms");

    assert.equal(8.25, radioBill.totalCallCost());
    assert.equal(3, radioBill.totalSmsCost());
    assert.equal(11.25, radioBill.totalCost());
  });
});
