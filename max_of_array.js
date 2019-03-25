function max_of_array(array) {
    let digit=0;
    let data1="";
    let Max=array[0];
    for (let i=1;i<array.length;i++){
        if (array[i]>=Max){
            Max=array[i];
            digit=i;
        }
    }
    data1+="Phan tu Lon Nhat trong mang la: "+Max+ " voi chi so la: "+digit;
    return data1;
}