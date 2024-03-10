function calculateAge() {
  var dobInput = document.getElementById('dob');
  var dob = new Date(dobInput.value);
  var currentDate = new Date();

  var years = currentDate.getFullYear() - dob.getFullYear();
  var months = currentDate.getMonth() - dob.getMonth();
  var days = currentDate.getDate() - dob.getDate();

  if (months < 0 || (months === 0 && days < 0)) {
    years--;
    months += 12;
  }

  if (days < 0) {
    var lastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 0);
    days += lastMonth.getDate();
    months--;
  }

  var result = document.getElementById('result');
  result.textContent = 'Your age is: ' + years + ' years, ' + months + ' months, and ' + days + ' days.';
}
