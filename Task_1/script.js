function calculateAge() {
    var dob = document.getElementById('dob').value;
    var mob = document.getElementById('mob').value;
    var yob = document.getElementById('yob').value;
  
    var birthDate = new Date(yob, mob - 1, dob);
    var currentDate = new Date();
  
    var years = currentDate.getFullYear() - birthDate.getFullYear();
    var months = currentDate.getMonth() - birthDate.getMonth();
    var days = currentDate.getDate() - birthDate.getDate();
  
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
  