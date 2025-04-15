"use strict";
/* any type */
let x;
x = () => {
    return 1;
};
console.log(x);
/* unknown type */
// unknown type ni biron narsani qiymati ko'p o'zgarsa yokida,
// uni qiymati aniq bo'lmas ishlatilinadi, oldin doim tekshirish kerak bo'ladi.
let y = 32;
// !!! using unknown is much better than using any!
