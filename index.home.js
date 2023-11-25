document.getElementById("btn-deposit").addEventListener("click", function () {
  let depositAmountField = document.getElementById("deposit-amount");
  let depositAmount = parseFloat(depositAmountField.value);

  if (isNaN(depositAmount) || depositAmount <= 0) {
    alert("Please enter a valid deposit amount.");
    return;
  }

  let previousDepositAmount = document.getElementById("deposit-total");
  let totalDeposit = parseFloat(previousDepositAmount.innerText);

  totalDeposit += depositAmount;

  previousDepositAmount.innerText = totalDeposit.toFixed(2);
  depositAmountField.value = " ";

  let balanceElement = document.getElementById("balance-total");
  let totalBalance = parseFloat(balanceElement.innerText);
  totalBalance += depositAmount;
  balanceElement.innerText = totalBalance.toFixed(2);
});

document.getElementById("btn-withdraw").addEventListener("click", function () {
  let withdrawAmountField = document.getElementById("withdraw-amount");
  let withdrawAmount = parseFloat(withdrawAmountField.value);

  if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
    alert("Please enter a valid withdrawal amount.");
    return;
  }

  let previousDepositAmount = document.getElementById("deposit-total");
  let totalDeposit = parseFloat(previousDepositAmount.innerText);

  let previousWithdrawAmount = document.getElementById("withdraw-total");
  let totalWithdraw = parseFloat(previousWithdrawAmount.innerText);

  if (withdrawAmount > totalDeposit) {
    alert("Sorry, you do not have enough money to withdraw.");
    return;
  }

  totalDeposit -= withdrawAmount;
  totalWithdraw += withdrawAmount;

  // previousDepositAmount.innerText = totalDeposit.toFixed(2);
  previousWithdrawAmount.innerText = totalWithdraw.toFixed(2);

  withdrawAmountField.value = " ";

  let balanceElement = document.getElementById("balance-total");
  let totalBalance = parseFloat(balanceElement.innerText);
  totalBalance -= withdrawAmount;
  balanceElement.innerText = totalBalance.toFixed(2);
});
