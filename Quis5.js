// Todo 1: Buat Sebuah Class dengan Nama Car
class Car {
    // Todo 2: Buat Sebuah Constructor dengan menampung brand, color, maxspeed dan chassisNumber
    constructor(brand, color, maxSpeed, chassisNumber) {
      this.brand = brand;
      this.color = color;
      this.maxSpeed = maxSpeed;
      this.chassisNumber = chassisNumber;
    }
  }
  
  // Todo 3: Membuat objek mobil dengan constructor function Car
  const car1 = new Car('Toyota', 'Silver', 200, 'to-1');
  const car2 = new Car('Honda', 'Black', 180, 'ho-1');
  const car3 = new Car('Suzuki', 'Red', 220, 'su-1');
  
  // Todo 4: Menampilkan Object Car1, Car2, dan Car3
  console.log(car1);
  console.log(car2);
  console.log(car3);
  