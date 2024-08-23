/**
 * 1. Buatlah fungsi dengan parameter berapa banyak angka yg akan ditampilkan secara looping, 
 * dimana jika angka tersebut habis dibagi 3 cetak "fish" jika habis dibagi 5 cetak "bash" dan jika habis dibagi 15 cetak "fish bash", 
 * cetak cukup salah satu dari kondisi tersebut, cetak menggunakan console log atau sejenisnya.
 */

function fishBash(jumlah) {
  const arrayKeluaran = [];

  for (let index = 1; index <= jumlah; index++) {
    let keluaran = "";
    if (index % 3 === 0) keluaran += "fish ";
    if (index % 5 === 0) keluaran += "bash";
    if (keluaran.length < 1) keluaran = index;
    
    arrayKeluaran.push(keluaran);
  }

  return arrayKeluaran;
}


/**
 * 2. Buatlah fungsi dengan input array integer untuk mengurutkan angka dari kecil kebesar 
 * dan besar kekecil dengan manual tanpa fungsi bawaan javascript
 */

function arrayUrutKeBesar(array) {
  let index = 0;

  while (index < array.length - 1) {
    if (array[index] > array[index + 1]) {
      let temp = array[index];
      array[index] = array[index + 1];
      array[index + 1] = temp;
      index = 0;
    } else {
      index++;
    }
  }

  return array;
};

function arrayUrutKeKecil(array) {
  let index = 0;

  while (index < array.length - 1) {
    if (array[index] < array[index + 1]) {
      let temp = array[index];
      array[index] = array[index + 1];
      array[index + 1] = temp;
      index = 0;
    } else {
      index++;
    }
  }

  return array;
};

/**
 *  Buatlah fungsi dengan input string 
 * jika string tersebut dibalik dan tetap sama dengan string yang diinputkan maka return true 
 * jika tidak return false
 */
function kalimatSamaJikaDibalik(kalimat) {
  kalimat = kalimat.toLowerCase().replace(/\s/g, "");
  let kalimatDiBalik = "";

  for (let index = kalimat.length - 1; index >= 0; index--) {
    kalimatDiBalik += kalimat[index];
  }

  return kalimat === kalimatDiBalik;

}

module.exports = { fishBash, arrayUrutKeBesar, arrayUrutKeKecil, kalimatSamaJikaDibalik };