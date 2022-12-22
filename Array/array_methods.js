
/*
    forEach()
    evevy()
    some()
    find()
    filter()
    map()
    reduce()
*/

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

// forEach() dùng để duyệt mảng thay vì phải dùng vòng lặp với them số truyền vào là một callback function

// books.forEach(function(book, i){
//     console.log(i+' là chỉ số của phần tử trong mảng',book,' là phần tử trong mảng')
// })

//-----------------------------------------------------------------------------------------------------------------------------------

//every() dùng để kiểm tra xem tất cả các phần tử trong mảng có đáp ứng điều kiện nào đó hay không
//nếu có return true / nếu chỉ có 1 phần tử không đáp ứng điều kiện sẽ return false

// var all_isFree = books.every(function(book, i){
//     console.log(i);
//     return book.price === 0;//kiểm tra xem price của các phần tử có == 0 hay không?
// })

// console.log(all_isFree);

//-----------------------------------------------------------------------------------------------------------------------------------

//some() dùng để kiểm tra xem có phần tử nào trong mảng đáp ứng điều kiện nào đó hay không
//chỉ cần 1 phần tử đáp ứng điều kiện thì return true 
//nếu không có phần tử không đáp ứng điều kiện sẽ return false (trái ngược với every())

// var isFree = books.some(function(book, i){
//     console.log(i);
//     return book.price === 0;//kiểm tra xem có phần tử có price == 0 hay không?
// })

// console.log(isFree);

//-----------------------------------------------------------------------------------------------------------------------------------
//find() trả về 1 phần tử đầu tiên có đáp ứng điều kiện đặt ra trong mảng nếu không sẽ trả về undefined
// chỉ trả về 1 phần tử đầu tiên được tìm thấy
//  var sach = books.find(function(book,i){
//     // console.log(i);
//     return book.name === 'Java' //trả về phần tử có name = 'Java'
//  })
// console.log(sach);

//-----------------------------------------------------------------------------------------------------------------------------------

//filter() trả về 1 mảng mới chứa tất cả các phần tử có đáp ứng điều kiện đặt ra trong mảng gốc nếu không sẽ trả về undefined

// var sach = books.filter(function(book,i){
//     // console.log(i);
//     return book.name === 'Java' //trả về phần tử có name = 'Java'
//  })
// console.log(sach);

