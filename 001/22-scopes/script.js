var isim = "ulaş"; // global scope
const adres = "İstanbul";

function yazdir() {
    var isim = "özge";
    var yas = 20;
    console.log("function scope: ", isim,yas);
}
yazdir();
if(true) {
    let cinsiyet = "Kadın";
    let isim = "Zeynep";
    console.log(isim, cinsiyet);
}

console.log(isim);

//yazdir();

// fonksiyonlar kendi scope alanlarını oluşturur.
// block içerisinde yeni bir scope oluşmaz. (let,const)