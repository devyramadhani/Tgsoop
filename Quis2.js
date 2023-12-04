// no2
class Karyawan {
    constructor(nama, umur, gaji) {
      this.nama = nama;
      this.umur = umur;
      this.gaji = gaji;
    }
  
    getInfo() {
      console.log(`Nama: ${this.nama}\nUmur: ${this.umur}\nGaji: ${this.gaji}`);
    }
  
    getPotongan() {
      return this.gaji > 8000000 ? this.gaji * 0.02 : this.gaji * 0.01;
    }
  }
  
  // Kelas KaryawanTetap turunan dari Karyawan
  class KaryawanTetap extends Karyawan {
    constructor(nama, umur, gaji, jabatan) {
      super(nama, umur, gaji);
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
      const potongan = this.getPotongan();
      return this.gaji + insentif - potongan;
    }
  }
  
  // Contoh Penggunaan
  const karyawan1 = new KaryawanTetap("John Doe", 30, 10000000, "Manager");
  karyawan1.getInfo();
  console.log(`Insentif: ${karyawan1.getInsentif()}`);
  console.log(`Potongan: ${karyawan1.getPotongan()}`);
  console.log(`Total Gaji: ${karyawan1.getGajiTotal()}`);
  