function skillsMember() {
  var member = document.getElementById("member").value;
  var memberError = document.getElementById("memberError");
  if (member == "") {
    memberError.innerHTML = "Please enter a valid member.";
    return false;
  }
  if (member.length < 3) {
    memberError.innerHTML = "Member should be atleast 3 characters long.";
    return false;
  }
  if (member.length > 50) {
    memberError.innerHTML = "Member should be atmost 50 characters long.";
    return false;
  }
  memberError.innerHTML = "";
  return true;
}