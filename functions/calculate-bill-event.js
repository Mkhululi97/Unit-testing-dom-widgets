function calculateBill(billString) {
  let billTotal = 0;
  let className = "";
  let billItems = billString.split(",");
  for (let i = 0; i < billItems.length; i++) {
    let billItem = billItems[i].trim().toLowerCase();
    if (billItem === "call") {
      billTotal += 2.75;
    } else if (billItem === "sms") {
      billTotal += 0.75;
    }
  }
  if (billTotal > 30) {
    className = "danger";
    return className;
  }
  if (billTotal > 20) {
    className = "warning";
    return className;
  }

  return billTotal;
}
