// no4
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
  
  // Kelas Dosen turunan dari Karyawan
  class Dosen extends Karyawan {
    constructor({ nama, nomor, gaji, sksMengajar, honorPerSks }) {
      super(nama, 38, gaji); // Umur tidak diinisialisasi untuk kelas Dosen
      this.nomor = nomor;
      this.sksMengajar = sksMengajar;
      this.honorPerSks = honorPerSks;
    }
  
    getHonorMengajar() {
      return this.sksMengajar * this.honorPerSks;
    }
  
    getPotonganHonorMengajar() {
      return this.getHonorMengajar() * 0.01;
    }
  
    getHonorMengajarBersih() {
      return this.getHonorMengajar() - this.getPotonganHonorMengajar();
    }
  
    getGajiTotal() {
      const potongan = this.getPotongan();
      return this.gaji + this.getHonorMengajarBersih() - potongan;
    }
  }
  
  // Contoh Penggunaan
  const dosen1 = new Dosen({
    nama: "Prof Gibran",
    nomor: 38,
    gaji: 12000000,
    sksMengajar: 10,
    honorPerSks: 500000,
  });
  
  dosen1.getInfo();
  console.log(`Honor Mengajar: ${dosen1.getHonorMengajar()}`);
  console.log(`Potongan Honor Mengajar: ${dosen1.getPotonganHonorMengajar()}`);
  console.log(`Honor Mengajar Bersih: ${dosen1.getHonorMengajarBersih()}`);
  console.log(`Total Gaji: ${dosen1.getGajiTotal()}`);
  