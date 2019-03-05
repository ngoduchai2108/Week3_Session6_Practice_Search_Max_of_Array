function output_array(array) {
    let data=" [ ";
    for (let i=0;i<array.length;i++){
        if (i===array.length-1){
            data+=array[i]+" ]";
            break;
        }
        data+=array[i]+" , ";
    }
    return document.getElementById('array').innerHTML=data;
}