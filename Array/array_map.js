

var books = [
    {
        id:1,
        name:'JavaScript',
        price:100
    },
    {
        id:2,
        name:'HTML&CSS',
        price:0
    },
    {
        id:3,
        name:'Java',
        price:300
    },
    {
        id:4,
        name:'Python',
        price:0
    },
    {
        id:5,
        name:'C/C++',
        price:500
    },
    {
        id:6,
        name:'Java',
        price:600
    }
]

//map() trả về 1 mảng mới với các phần từ là các giá trị được return từ callback function

function booksHandler(book,index,originArray){
    console.log(index)
    return {
        id: book.id,
        name:'Sách '+book.name,
        price:book.price,
        priceText: `Giá: ${book.price}`,
        // originArray: originArray  //đây là mảng gốc ít được sử dụng
    }
};

var newBooks = books.map(booksHandler);

console.log(newBooks);