//do/while sẽ thực hiện code trong di trước rồi mới so sánh điều kiện trong while là true hay false rồi mới tiếp tục lặp
//nên code chắc chắn sẽ được thực hiện ít nhất 1 lần kể cả điều kiện trong while là false

var i = 0;

do{
    console.log(i);
    i++;
}while(i<10)//true


var j = 0;
do{
    console.log(j);
    j++;
}while(j>10)//false