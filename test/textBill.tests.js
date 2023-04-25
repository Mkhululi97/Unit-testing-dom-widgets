describe("Test My TextBill Function", function () {
  it("should return '19.25' for 7 calls at 2.75 each if the text input value is 'call, CaLl, CALL'", function () {
    let textBill = TextBill();

    textBill.textInput("call");
    textBill.textInput("caLl");
    textBill.textInput("call");
    textBill.textInput("call");
    textBill.textInput("Call");
    textBill.textInput("CALL");
    textBill.textInput("call");

    assert.equal(19.25, textBill.totalCallCost());
    assert.equal(0, textBill.totalSmsCost());
    assert.equal(19.25, textBill.totalCost());
  });
  it("should return '8.25' for 11 sms's at 0.75 each if the text input value is 'sms, Sms, SMS'", function () {
    let textBill = TextBill();

    textBill.textInput("sms");
    textBill.textInput("sms");
    textBill.textInput("sms");
    textBill.textInput("sms");
    textBill.textInput("sms");
    textBill.textInput("sms");
    textBill.textInput("sms");
    textBill.textInput("sms");
    textBill.textInput("sms");
    textBill.textInput("sms");
    textBill.textInput("sms");

    assert.equal(0, textBill.totalCallCost());
    assert.equal(8.25, textBill.totalSmsCost());
    assert.equal(8.25, textBill.totalCost());
  });
  it("should return the 'total bill' for 3 sms's and 4 calls", function () {
    let textBill = TextBill();

    textBill.textInput("sms");
    textBill.textInput("Sms");
    textBill.textInput("SMS");
    textBill.textInput("Call");
    textBill.textInput("CALL");
    textBill.textInput("caLl");
    textBill.textInput("call");

    assert.equal(11, textBill.totalCallCost());
    assert.equal(2.25, textBill.totalSmsCost());
    assert.equal(13.25, textBill.totalCost());
  });

  it("should return the class name of 'warning' when the warning level has been reached", function () {
    let textBill = TextBill();

    textBill.textInput("sms");
    textBill.textInput("Sms");
    textBill.textInput("SMS");
    textBill.textInput("Call");
    textBill.textInput("CALL");
    textBill.textInput("caLl");
    textBill.textInput("call");
    textBill.textInput("sms");
    textBill.textInput("Sms");
    textBill.textInput("SMS");
    textBill.textInput("Call");
    textBill.textInput("CALL");
    textBill.textInput("caLl");
    textBill.textInput("call");
    textBill.textInput("sms");
    textBill.textInput("Sms");
    textBill.textInput("SMS");
    textBill.textInput("Call");
    assert.equal("warning", textBill.getClassName());
  });

  it("should return the class name of 'critical' when the critical level has been reached", function () {
    let textBill = TextBill();

    textBill.textInput("sms");
    textBill.textInput("Sms");
    textBill.textInput("SMS");
    textBill.textInput("Call");
    textBill.textInput("CALL");
    textBill.textInput("caLl");
    textBill.textInput("call");
    textBill.textInput("call");
    textBill.textInput("call");
    textBill.textInput("call");
    textBill.textInput("call");
    textBill.textInput("call");
    textBill.textInput("call");
    textBill.textInput("call");
    assert.equal("warning", textBill.getClassName());

    textBill.textInput("call");
    textBill.textInput("call");
    textBill.textInput("call");
    textBill.textInput("call");
    textBill.textInput("call");
    textBill.textInput("call");
    textBill.textInput("call");
    textBill.textInput("call");
    assert.equal("critical", textBill.getClassName());
  });
});
