let ogrenciler = ["çınar","yiğit","ada"];

sonuc = ogrenciler.length;

// array to string
sonuc = ogrenciler.toString();

// console.log(sonuc);
// sonuc = ogrenciler.join(" ");
// console.log(sonuc);
// eleman silme
sonuc = ogrenciler.pop();       // son eleman silinir ve silinen eleman geri döndürülür.

//console.log(sonuc);
sonuc = ogrenciler.shift();     // ilk eleman silinir.

//console.log(sonuc);

// eleman ekleme
// sonuc = ogrenciler.push("sena");    // dizinin sonuna eleman eklenir.
// sonuc = ogrenciler.unshift("sena"); /// dizinin başına ekler

let markalar1 = ["mazda","toyota"];
let markalar2 = ["opel","renault"];
let markalar3 = ["mercedes"];
/// indexOf find , sort , reverse 
  sonuc = markalar1.concat(markalar2, markalar3);
  sonuc = markalar1.splice(0, 1, "bmw","audi");
//sonuc = markalar1.splice(0, 3);

console.log(sonuc);
console.log(markalar1);