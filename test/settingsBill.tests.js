describe("Test My BillCalculator Function", function () {
  describe("set values", function () {
    it("should be able to set the call cost", function () {
      let settingsBill = BillCalculator();
      settingsBill.setCallCost(1.85);
      assert.equal(1.85, settingsBill.getCallCost());

      let settingsBill2 = BillCalculator();
      settingsBill2.setCallCost(2.75);
      assert.equal(2.75, settingsBill2.getCallCost());
    });

    it("should be able to set the sms cost", function () {
      let settingsBill = BillCalculator();
      settingsBill.setSmsCost(0.65);
      assert.equal(0.65, settingsBill.getSmsCost());

      let settingsBill2 = BillCalculator();
      settingsBill2.setSmsCost(0.75);
      assert.equal(0.75, settingsBill2.getSmsCost());
    });

    it("should be able to set the sms cost and call cost", function () {
      let settingsBill = BillCalculator();
      settingsBill.setSmsCost(0.6);
      settingsBill.setCallCost(1.0);
      assert.equal(0.6, settingsBill.getSmsCost());
      assert.equal(1.0, settingsBill.getCallCost());

      let settingsBill2 = BillCalculator();
      settingsBill2.setSmsCost(0.25);
      settingsBill2.setCallCost(3.45);
      assert.equal(0.25, settingsBill2.getSmsCost());
      assert.equal(3.45, settingsBill2.getCallCost());
    });

    it("should be able to set the warning level", function () {
      let settingsBill = BillCalculator();
      settingsBill.setWarningLevel(45);
      assert.equal(45, settingsBill.getWarningLevel());

      let settingsBill2 = BillCalculator();
      settingsBill2.setWarningLevel(55);
      assert.equal(55, settingsBill2.getWarningLevel());
    });

    it("should be able to set the critical level", function () {
      let settingsBill = BillCalculator();
      settingsBill.setCriticalLevel(75);
      assert.equal(75, settingsBill.getCriticalLevel());

      let settingsBill2 = BillCalculator();
      settingsBill2.setCriticalLevel(95);
      assert.equal(95, settingsBill2.getCriticalLevel());
    });

    it("should be able to set the warning level and the critical level", function () {
      let settingsBill = BillCalculator();
      settingsBill.setWarningLevel(25);
      settingsBill.setCriticalLevel(35);
      assert.equal(25, settingsBill.getWarningLevel());
      assert.equal(35, settingsBill.getCriticalLevel());

      let settingsBill2 = BillCalculator();
      settingsBill2.setWarningLevel(50);
      settingsBill2.setCriticalLevel(100);
      assert.equal(50, settingsBill2.getWarningLevel());
      assert.equal(100, settingsBill2.getCriticalLevel());
    });
  });
  describe("use values", function () {
    it("should be able to use the call cost thats being set", function () {
      let settingsBill = BillCalculator();

      settingsBill.setCallCost(2.25);
      settingsBill.setSmsCost(0.85);
      settingsBill.setCriticalLevel(10);

      settingsBill.makeCall();
      settingsBill.makeCall();
      settingsBill.makeCall();

      assert.equal(6.75, settingsBill.totalCallCost());
      assert.equal(0.0, settingsBill.totalSmsCost());
      assert.equal(6.75, settingsBill.totalCost());
    });
    it("should be able to use the call cost that being set for 2 calls at 1.35 each", function () {
      let settingsBill = BillCalculator();

      settingsBill.setCallCost(1.35);
      settingsBill.setSmsCost(0.25);
      settingsBill.setCriticalLevel(10);

      settingsBill.makeCall();
      settingsBill.makeCall();

      assert.equal(2.7, settingsBill.totalCallCost());
      assert.equal(0, settingsBill.totalSmsCost());
      assert.equal(2.7, settingsBill.totalCost());
    });
    it("should be able to use the sms cost thats being set for 2 sms's at 0.85", function () {
      let settingsBill = BillCalculator();

      settingsBill.setCallCost(1.35);
      settingsBill.setSmsCost(0.85);
      settingsBill.setCriticalLevel(10);

      settingsBill.sendSms();
      settingsBill.sendSms();

      assert.equal(0, settingsBill.totalCallCost());
      assert.equal(1.7, settingsBill.totalSmsCost());
      assert.equal(1.7, settingsBill.totalCost());
    });
    it("should be able to send 2 sms's at 0.85 each and make 1 call at 1.35", function () {
      let settingsBill = BillCalculator();

      settingsBill.setCallCost(1.35);
      settingsBill.setSmsCost(0.85);
      settingsBill.setCriticalLevel(10);

      settingsBill.makeCall();
      settingsBill.sendSms();
      settingsBill.sendSms();

      assert.equal(1.35, settingsBill.totalCallCost());
      assert.equal(1.7, settingsBill.totalSmsCost());
      assert.equal(3.05, settingsBill.totalCost());
    });
  });
  describe("warning & critical level", function () {
    it("it should return a class name of 'warning' if warning level is reached", function () {
      let settingsBill = BillCalculator();

      settingsBill.setCallCost(1.35);
      settingsBill.setSmsCost(0.85);
      settingsBill.setCriticalLevel(10);
      settingsBill.setWarningLevel(5);

      settingsBill.makeCall();
      settingsBill.makeCall();
      settingsBill.makeCall();
      settingsBill.makeCall();

      assert.equal("warning", settingsBill.totalClassName());
    });
    it("it should return a class name of 'critical' if critical level is reached", function () {
      let settingsBill = BillCalculator();

      settingsBill.setCallCost(2.5);
      settingsBill.setSmsCost(0.85);
      settingsBill.setWarningLevel(10);

      settingsBill.makeCall();
      settingsBill.makeCall();
      settingsBill.makeCall();
      settingsBill.makeCall();

      assert.equal("critical", settingsBill.totalClassName());
    });
    it("it should stop the total call cost from increasing when the critical level has been reached", function () {
      let settingsBill = BillCalculator();

      settingsBill.setCallCost(2.5);
      settingsBill.setSmsCost(0.85);
      settingsBill.setCriticalLevel(10);

      settingsBill.makeCall();
      settingsBill.makeCall();
      settingsBill.makeCall();
      settingsBill.makeCall();

      assert.equal("critical", settingsBill.totalClassName());
      assert.equal(10, settingsBill.totalCallCost());
    });
    it("it should allow the total to increase after reaching the critical level and then upping the critical level", function () {
      let settingsBill = BillCalculator();

      settingsBill.setCallCost(2.5);
      settingsBill.setSmsCost(0.85);
      settingsBill.setWarningLevel(8);
      settingsBill.setCriticalLevel(10);

      settingsBill.makeCall();
      settingsBill.makeCall();
      settingsBill.makeCall();
      settingsBill.makeCall();
      settingsBill.makeCall();

      assert.equal("critical", settingsBill.totalClassName());
      assert.equal(10, settingsBill.totalCallCost());

      settingsBill.setCriticalLevel(20);

      assert.equal("warning", settingsBill.totalClassName());
      settingsBill.makeCall();
      settingsBill.makeCall();
      assert.equal(15, settingsBill.totalCallCost());
    });
  });
});
