//Back End
function bankAccount(name,balance) {
  this.name = name;
  this.balance = balance;
};

bankAccount.prototype.withDep = function (add,sub) {
  this.balance += add;
  this.balance -= sub;
};

bankAccount.prototype.viewBal = function () {
  return this.balance;
};

//Front End
$(document).ready(function() {
  var newAccount;
  var deposit = parseInt($("#deposit").val("0"));
  var withdrawl = parseInt($("#withdrawl").val("0"));
//Input Form
  $("form#register-form").submit(function(event) {
    event.preventDefault();
    var name = $("#name").val();
    var initial = parseInt($("#initial").val());
    newAccount = new bankAccount(name,initial);
    $("#output").text(newAccount.viewBal());
  });
//Bank Balance Form
  $("form#deposit-form").submit(function(event) {
    event.preventDefault();
    deposit = parseInt($("#deposit").val());
    withdrawl = parseInt($("#withdrawl").val());
    newAccount.withDep(deposit,withdrawl);
    $("#output").text(newAccount.viewBal());
  });
});
