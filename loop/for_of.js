////for of thường được sử dụng để duyệt mảng hoặc chuỗi không sử dụng cho object(sẽ báo lỗi)

var languages = ['JS','Java','Python']
var text = 'Minh'

for(var i of languages){//i được gán giá trị là giá trị của các phần tử trong mảng
    console.log(i);
}

for(var j of text){//j được gán giá trị là các chuỗi nhỏ thành phần
    console.log(j);
}
