
function chuyendoitiente() {
    let sotien= parseFloat(document.getElementById("sotien").value);
    let quocgia =document.getElementById("quocgia").value;
    let donvi =document.getElementById("donvi").value;
    //let thuchien=parseFloat();
    // let thuchien1=parseFloat();
    // sotien=parseFloat();
    if (quocgia===donvi)
    {
        kq=sotien;
    }else
    if((quocgia==='usd') && (donvi==='vn'))
    {
        kq=sotien*23000;
    }
    else
    {
        kq=sotien/23000;
    }
    document.getElementById('result').innerHTML='result' +kq;
    //alert('kq :'+thuchien);
}