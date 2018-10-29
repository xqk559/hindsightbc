const fs = require('fs');

fs.readFile('output.json', (err, data) => {
    if (err) throw err;
    let Student = JSON.parse(data);
    console.log(Student);
});

export default Student;
