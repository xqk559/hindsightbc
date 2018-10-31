const fs = require('fs');
let Student;

fs.readFile('output.json', (err, data) => {
    if (err) throw err;
    Student = JSON.parse(data);
    console.log(Student);
});

export default Student;
