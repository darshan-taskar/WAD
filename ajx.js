function load(){
    var name =  document.getElementById('name')
    var email = document.getElementById('inputEmail')
    var city = document.getElementById('inputCity')
   
    var req = new XMLHttpRequest();
req.onreadystatechange = ()=>{
   
       localStorage.setItem("name", name.value);
       localStorage.setItem("inputEmail", email.value);
       localStorage.setItem("inputCity", city.value);


}
    req.open("POST", "http://127.0.0.1:5500/intex.html"  , true);
    req.send()


}