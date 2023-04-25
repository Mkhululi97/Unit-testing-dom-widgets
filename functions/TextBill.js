function TextBill() {
  let sumCalls = 0;
  let sumSms = 0;

  function textInput(string) {
    if (string.toLowerCase() === "call") {
      sumCalls += 2.75;
    }
    if (string.toLowerCase() === "sms") {
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
    textInput,
    totalCallCost,
    totalSmsCost,
    totalCost,
    getClassName,
    setClassName,
  };
}
