function creat_array(array) {
    let digit=parseInt(prompt('So phan tu cua mang ?'));
    for (let i=0;i<digit;i++){
        array[i]=parseFloat(prompt('nhap phan tu cho mang:'))
    }
    return array;
}