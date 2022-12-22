//for in thường được sử dụng để duyệt object, mảng hoặc chuỗi

var myObject = {
    name: 'Minh',
    age: '27',
    address:'Ha Noi'
}

var myArray = ['JS','Java','Python']

var myText = "Minh"

for(var i in myObject){// đối với object biến i sẽ được gán giá trị là các key
    console.log(i);
    console.log(myObject[i]);
}

for(var j in myArray){// đối với Array biến j sẽ được gán giá trị là các chỉ số của mảng
    console.log(j);
    console.log(myArray[j]);
}

for(var k in myText){// đối với chuỗi biến k sẽ được gán giá trị là các chỉ số của trong chuỗi
    console.log(k);
    console.log(myText[k])
}