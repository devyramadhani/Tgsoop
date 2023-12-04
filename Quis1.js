// no1
class Pegawai {
    constructor(nama, umur, gaji) {
      this.nama = nama;
      this.umur = umur;
      this.gaji = gaji;
    }
  
    getInfo() {
      console.log(`Nama: ${this.nama}\nUmur: ${this.umur}\nGaji: ${this.gaji}`);
    }
  
    getPotongan() {// Definisi Kelas PegawaiTetap
class PegawaiTetap {
  constructor(nama, umur, gaji, jabatan) {
    this.nama = nama;
    this.umur = umur;
    this.gaji = gaji;
    this.jabatan = jabatan;
  }

  getInsentif() {
    switch (this.jabatan.toLowerCase()) {
      case 'manager':
        return 5000000;
      case 'assistant manager':
        return 3000000;
      case 'supervisor':
        return 2000000;
      default:
        return 0;
    }
  }

  getGajiTotal() {
    const insentif = this.getInsentif();
    const potongan = this.gaji > 8000000 ? this.gaji * 0.02 : this.gaji * 0.01;
    return this.gaji + insentif - potongan;
  }
}

// Menguji Class PegawaiTetap
const pegTetap = new PegawaiTetap('Budianto Tanuwijaya', 35, 10000000, 'manager');

console.log("Isi Dari Pegawai Tetap");
console.log(pegTetap);
console.log("Gaji Insentif: " + pegTetap.getInsentif());
console.log("Gaji Total: " + pegTetap.getGajiTotal());
console.log("\n\n");

      return this.gaji > 8000000 ? this.gaji * 0.02 : this.gaji * 0.01;
    }
  }
  
  // pemanggil
  const pegawai1 = new Pegawai("John Doe", 30, 10000000);
  pegawai1.getInfo();
  console.log(`Potongan: ${pegawai1.getPotongan()}`);
  