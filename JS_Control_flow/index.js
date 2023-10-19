function gradeStatement() {
    let grade_num = document.getElementById("app");
    let num = 90;
    let result = "";

    if (num >= 90) {
        result = "A";
    } else if (num >= 80) {
        result = "B";
    } else if (num >= 70) {
        result = "C";
    } else if (num >= 55) {
        result = "D";
    } else if (num < 55) {
        result = "F";
    } else if (num < 0 ) {
        result = "Error, num cannot be less than 0";
    }
    grade_num.innerHTML += "<p>" + result + "</p>";
}

 
gradeStatement();



