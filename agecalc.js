const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];




function ageCalculator() {

    const d1 = document.getElementById('bday').value;
    const m1 = document.getElementById('bmonth').value;
    const y1 = document.getElementById('byear').value;

    const date = new Date()
    const d2 = date.getDate()
    const m2 = 1 + date.getMonth()
    const y2 = date.getFullYear()

    let otpday = d2 - d1;
    let otpmonth = parseFloat(m2) - parseFloat(m1) + parseFloat(12);
    let otpyear = y2 - y1 - parseFloat(1);

    if (otpday < 0) {
        otpday = otpday * otpday;
        otpmonth = otpmonth - 1;
    }

    if (otpyear == 0) {
        otpday = d1 - d2;
    }

    if (otpmonth === 12) {
        otpyear = 1;
        otpmonth = 0
    }

    if (m1 < m2) {
        otpyear = 0;
        otpmonth = m2 - m1;
    }
    if ((m1 > m2) && (y1 >= y2)) {
        alert('invalid input, not born yet');
        return;
    }




    document.getElementById('year').innerHTML = otpyear;
    document.getElementById('month').innerHTML = otpmonth;
    document.getElementById('day').innerHTML = otpday;
}
