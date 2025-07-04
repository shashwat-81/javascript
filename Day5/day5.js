let student = {
    name: "shashwat",
    age: 21,
    cgpa: 8.49
};

let output = "";
for (let key in student) {
    output += `key is ${key} and value is ${student[key]}<br>`;
}
document.body.innerHTML += `<div>${output}</div>`;

