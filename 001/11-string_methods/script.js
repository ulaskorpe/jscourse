
let kursAdi = "Komple Uygulamalı Web Geliştirme Eğitimi.";

let sonuc;

sonuc = kursAdi.toLowerCase();
console.log(sonuc);
sonuc = kursAdi.toUpperCase();
console.log(sonuc);
sonuc = kursAdi.length;
console.log(sonuc);
sonuc = kursAdi[1];
console.log(sonuc);
sonuc = kursAdi.slice(0, 6);
console.log(sonuc);
sonuc = kursAdi.slice(10);///10. danbaştan sona 
console.log(sonuc);
sonuc = kursAdi.slice(-10);///sondan başla gerikalan
console.log(sonuc);
sonuc = kursAdi.slice(-10, -5);
console.log(sonuc);

sonuc = kursAdi.substring(0, 6);
console.log(sonuc);
sonuc = kursAdi.substring(10);
console.log(sonuc);
sonuc = kursAdi.replace("Eğitimi","Kursu");
console.log(sonuc);
sonuc = kursAdi.trim();
console.log(sonuc);
sonuc = kursAdi.trimEnd();
console.log(sonuc);
sonuc = kursAdi.trimStart();
console.log(sonuc);

sonuc = kursAdi.indexOf("Komple");
console.log(sonuc);
sonuc = kursAdi.split(" ");
console.log(sonuc);
sonuc = kursAdi.split(" ")[0];
console.log(sonuc);
sonuc = kursAdi.split(" ")[3];
console.log(sonuc);