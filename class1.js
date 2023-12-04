class Animal {
    constructor(name, age, isMammal) {
        this.name = name;
        this.age = age;
        this.isMammal = isMammal;
    }

    info() {
        let mammalType = this.isMammal ? 'Mamalia' : 'Bukan Mamalia';
        return `Hewan ini namanya ${this.name}, berusia ${this.age} tahun, jenisnya ${mammalType}.`;
    }

    makan(makanan) {
        return `Hewan yang bernama ${this.name} makannya adalah ${makanan}.`;
    }
}

const a1 = new Animal('Kelinci', 2, true);
console.log(a1.info());
console.log(a1.makan('Wortel'));

a1.age = 3;
console.log(a1.info());
console.log(a1.makan('Rumput'));




