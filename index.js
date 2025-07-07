/* Aşağıda global olarak tanımlanmış değişkenler bulunmaktadır, bunları değiştirmeyiniz. Açıklamaları takip ederek görevleri tamamlayın. */

const pi = 3.14159;

const sayilar = [ /* ...çok uzun dizi... */ ];

/* ÖRNEK GÖREV */
function KareninAlani(kenaruzunlugu) {
  return kenaruzunlugu * kenaruzunlugu;
}

console.log("Karenin alanı:", KareninAlani(10));

/* GÖREV 1 */
function CemberinCevresi(yaricap) {
  return 2 * pi * yaricap;
}

console.log("Çemberin çevresi:", CemberinCevresi(5));

/* GÖREV 2 */
function CemberinAlani(yaricap, piDegeri) {
  return piDegeri * Math.pow(yaricap, 2);
}

console.log("Çemberin alanı:", CemberinAlani(15, pi));

/* GÖREV 3 */
let ucetambolunenler = [];
let enkucuk = sayilar[0];
let enbuyuk = sayilar[0];
let ucebolunenlerintoplami = 0;
let besyuzdenkucuksayilar = [];
let siralisayilar = [];
let tekraredensayilar = [];

// 3a: En küçük ve en büyük sayı
for (let i = 0; i < sayilar.length; i++) {
  if (sayilar[i] < enkucuk) enkucuk = sayilar[i];
  if (sayilar[i] > enbuyuk) enbuyuk = sayilar[i];
}

// 3b: 3'e tam bölünenler
sayilar.forEach((sayi) => {
  if (sayi % 3 === 0) {
    ucetambolunenler.push(sayi);
  }
});

// 3c: 3'e tam bölünenlerin toplamı
ucebolunenlerintoplami = ucetambolunenler.reduce((toplam, sayi) => toplam + sayi, 0);

// 3d: 500'den küçük sayılar
besyuzdenkucuksayilar = sayilar.filter((sayi) => sayi < 500);

// 3e: Küçükten büyüğe sıralama
siralisayilar = [...besyuzdenkucuksayilar].sort((a, b) => a - b);

// 3f: Tekrar eden sayılar ve tekrar sayısı
const sayiSayac = {};
sayilar.forEach((sayi) => {
  sayiSayac[sayi] = (sayiSayac[sayi] || 0) + 1;
});

for (let sayi in sayiSayac) {
  if (sayiSayac[sayi] > 1) {
    tekraredensayilar.push(`${sayi} sayısı ${sayiSayac[sayi]} kere tekrar edilmiştir`);
  }
}

console.log("Toplam sayı adedi:", sayilar.length);
console.log("En küçük:", enkucuk);
console.log("En büyük:", enbuyuk);
console.log("3'e tam bölünenlerin toplamı:", ucebolunenlerintoplami);
console.log("Tekrar eden sayılar:", tekraredensayilar.slice(0, 5)); // uzun olacağı için örnek 5 tane

/*  Bu satırın aşağısındaki kodları lütfen değiştirmeyin  */

function sa() {
  console.log("Kodlar çalışıyor");
  return "as";
}
sa();
module.exports = {
  sa,
  CemberinCevresi,
  CemberinAlani,
  ucetambolunenler,
  enbuyuk,
  enkucuk,
  ucebolunenlerintoplami,
  besyuzdenkucuksayilar,
  siralisayilar,
  tekraredensayilar,
};
