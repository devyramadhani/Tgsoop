// no3
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
  
  // Kelas PegawaiKontrak turunan dari Karyawan
  class PegawaiKontrak extends Karyawan {
    constructor(nama, umur, gaji, durasi) {
      super(nama, umur, gaji);
      this.durasi = durasi;
    }
  
    getGajiTotal() {
      const potongan = this.getPotongan();
      return this.gaji - potongan;
    }
  }
  
  // Contoh Penggunaan
  const pegawaiKontrak1 = new PegawaiKontrak("Jane Doe", 25, 6000000, 12);
  pegawaiKontrak1.getInfo();
  console.log(`Gaji Total: ${pegawaiKontrak1.getGajiTotal()}`);
  