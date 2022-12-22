//break dùng để kết thúc vòng lặp
//continue để bỏ qua lần lặp đó

//chỉ in ra ra các số <5
for(var i = 0; i < 10; i++){
    
    if(i>5){
        break;
    }
    
    console.log(i);
}

//chỉ in ra các số chẵn
for(var j = 0; j < 10; j++){
    
    if(j%2!=0){
        continue;//bỏ qua không thực hiện các dòng code phía sau trong lần lặp này nữa
    }

    console.log(j);
}