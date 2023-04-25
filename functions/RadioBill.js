function RadioBill() {
  let sumCalls = 0;
  let sumSms = 0;
  function radioInput(value) {
    if (value === "call") {
      sumCalls += 2.75;
    }
    if (value === "sms") {
      sumSms += 0.75;
    }
  }
  function totalCallCost() {
    return sumCalls;
  }
  function totalSmsCost() {
    return sumSms;
  }
  function totalCost() {
    return sumCalls + sumSms;
  }
  function setClassName() {
    if (totalCost() >= 50) {
      return "critical";
    }
    if (totalCost() >= 30) {
      return "warning";
    }
  }
  function getClassName() {
    return setClassName();
  }

  return {
    radioInput,
    totalCallCost,
    totalSmsCost,
    totalCost,
    setClassName,
    getClassName,
  };
}
