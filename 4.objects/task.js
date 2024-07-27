function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if(Student.hasOwnProperty(this.marks)){
    this.marks = [...marks];
  }
}

Student.prototype.getAverage = function () {
  if(Student.hasOwnProperty(this.marks) || (this.marks == [])){
    this.getAverage = 0;
  }else{
    let sum = 0;
    for(let i = 0; i < this.marks.length; i++){
      sum += this.marks[i];
    }
    this.getAverage = sum / this.marks.length; 
  }
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}
