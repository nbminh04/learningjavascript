

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

//reduce() sử dụng để tính toán giữa các phần tử trong mảng có thể sử dụng vòng lặp thông thường để thay thế

function coinHandler(accumulator, currentValue, indexValue){
    //accumulator - biến lưu trữ, currentValue - giá trị hiện tại, indexValue - chỉ số hiện tại
    return accumulator + currentValue.price;
}
var totalCoin = books.reduce(coinHandler,0)
//coinHandler - callback function, 0 - giá trị tích trữ ban đầu(có thể để ở bất khỳ kiểu dữ liệu nào mong muốn nhận được) sẽ được gán lần đầu tiên cho accumulator
console.log(totalCoin)


//ví dụ 1
var numbers = [1,2,3,4,5,6]

var totalNumber = numbers.reduce((num0,curentTotalNum)=>{
    return num0 +curentTotalNum
}, 0)

console.log(totalNumber);