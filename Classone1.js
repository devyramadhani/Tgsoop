// 1. Buatlah class bernama Animal
class Animal {
    constructor(name, age, isMammal) {
      this.name = name;
      this.age = age;
      this.isMammal = isMammal;
    }
  }
  
  // 2. Buatlah class bernama Rabbit
  class Rabbit extends Animal {
    constructor(name, age) {
      super(name, age, true); // properti isMammal diinisialisasi dengan nilai true
    }
  
    // Method eat
    eat() {
      return `${this.name} sedang makan!`;
    }
  }
  
  // 3. Buatlah class bernama Eagle
  class Eagle extends Animal {
    constructor(name, age) {
      super(name, age, false); // properti isMammal diinisialisasi dengan nilai false
    }
  
    // Method fly
    fly() {
      return `${this.name} sedang terbang!`;
    }
  }
  
  // 4. Buatlah instance dari class Rabbit bernama "myRabbit"
  const myRabbit = new Rabbit("Labi", 2);
  
  // 5. Buatlah instance dari class Eagle bernama "myEagle"
  const myEagle = new Eagle("Elo", 4);
  
  // pemanggil
  console.log(myRabbit.eat()); // Output: Labi sedang makan!
  console.log(myEagle.fly()); // Output: Elo sedang terbang!
  