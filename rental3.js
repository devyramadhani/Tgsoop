class rentalmobil {
    constructor(nama, umur, pekerjaan,sim) {
        this.nama = nama;
        this.umur = umur;
        this.pekerjaan = pekerjaan;
        this.sim = sim;
    }

    getinfo() {
        console.log(`Nama: ${this.nama}`);
        console.log(`Umur: ${this.umur} tahun`);
        console.log(`Pekerjaan: ${this.pekerjaan}`);
        console.log(`Sudah memiliki Sim? : ${this.sim}`);

    }

}

class mobil extends rentalmobil {
    constructor (nama, umur, pekerjaan, namamobil){
        super(nama, umur, pekerjaan);
        this.namamobil = namamobil;
    }

    getPerentalan() {
        switch (this.namamobil.toLowerCase()) {
            case 'toyota':
                return 300000;
            case 'supra':
                return 500000;
            case 'avanza':
                return 400000;
            default:
                return 0;
        }
    }
    


    hitungBiayaSewa(jumlahHari) {
        const perentalan = this.getPerentalan(); 
        const totalBiaya = perentalan * jumlahHari;
        return totalBiaya;
    }

    prosesSewa(jumlahHari) {
        console.log(`Pelanggan ${this.nama} telah melakukan penyewaan.`);
        console.log(`Nama mobil yang di sewa : ${this.namamobil}`);
        console.log(`Durasi sewa: ${jumlahHari} hari`);
        const biayaSewa = this.hitungBiayaSewa(jumlahHari);
        console.log(`Total biaya sewa: ${biayaSewa}`);
    }

}

const pelanggan1 = new rentalmobil('Asep', 22, 'pengusaha', true);

pelanggan1.getinfo();

const perentalan1 = new mobil('Asep', 22, 'pengusaha', 'toyota');
perentalan1.prosesSewa(3);



