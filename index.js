class Person{	
constructor(name, age, email) {
		this.name = name;
		this.age = age;
		this.email = email;
	}


	sayHi() {
		return `Hello from ${this.name} `; 
	}
}

const person1 = new Person('moises', 23, 'email@email.com');

console.log(person1);
