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
  return "$" + this.balance;
};

//Front End
$(document).ready(function() {
  var newAccount;
  $("form#register-form").submit(function(event) {
    event.preventDefault();
    var name = $("#name").val();
    var initial = parseInt($("#initial").val());
    newAccount = new bankAccount(name,initial);
    $("#output").text(newAccount.viewBal());
  });
});
