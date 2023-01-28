var booksPrice =[80, 95, 300, 400, 190, 560, 300, 50, 120,600];
for(var i = 0; i < booksPrice.length; i++) {
    var bookPrice = booksPrice[i];
    if(bookPrice > 200) {
        continue;
    }  
    console.log(bookPrice);
}