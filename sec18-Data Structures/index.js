class Student {
	constructor(firstName, lastName,year) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.grade = year ||'Freshman';
	}
	introduce() {
		console.log('this: ', this)
	console.log('introduce: ', this.firstName)
	}
	static staticMethod (){
		console.log('call staticMethod')
	}
}
const stu1= new Student("Tim", "Garcia");
stu1.introduce();
// stu1.staticMethod();
Student.staticMethod();
// console.log('stu1: ', stu1)