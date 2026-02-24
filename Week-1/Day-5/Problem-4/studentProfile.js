const student = {
    name : "Pappu Kumar Yadav",
    rollNo : 101,
    marks : 95
};

function updateStudentProfile(studentObj) {
    var profileDiv = document.getElementById("profileCard");

    profileDiv.innerHTML =
        "<h3>Student Profile</h3>" +
        "<p><strong>Name:</strong> " + studentObj.name + "</p>" +
        "<p><strong>Roll No:</strong> " + studentObj.rollNo + "</p>" +
        "<p><strong>Marks:</strong> " + studentObj.marks + "</p>";
}

function updateMarks(newMarks) {
    student.marks = newMarks;
    updateStudentProfile(student);
}