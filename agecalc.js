const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function ageCalculator() {
    const d1 = parseInt(document.getElementById('bday').value);
    const m1 = parseInt(document.getElementById('bmonth').value);
    const y1 = parseInt(document.getElementById('byear').value);

    const date = new Date();
    const d2 = date.getDate();
    const m2 = 1 + date.getMonth();
    const y2 = date.getFullYear();

    if (isLeapYear(y2)) {
        month[1] = 29;
    }

    let otpday = d2 - d1;
    let otpmonth = m2 - m1;
    let otpyear = y2 - y1;

    if (otpday < 0) {
        otpday += month[(m2 - 2 + 12) % 12];
        otpmonth -= 1;
    }

    if (otpmonth < 0) {
        otpmonth += 12;
        otpyear -= 1;
    }

    if ((d1 > d2) && (y1 === y2) && (m1 >= m2)) {
        otpyear = 0;
    }

    if ((m1 > m2) && (y1 >= y2)) {
        alert('Invalid input, not born yet');
        return;
    }

    document.getElementById('year').innerHTML = otpyear;
    document.getElementById('month').innerHTML = otpmonth;
    document.getElementById('day').innerHTML = otpday;
}

