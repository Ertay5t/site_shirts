function print_contact() {
    var sk= "skype: helper"
    var tg= "telegram: @helper"
    var tel= "tel: 8995345235"
    alert(sk + '\n' + tg+ '\n' + tel)    
}

function kalkulator(){
    var a= parseFloat ( prompt('ВВедите первое число'));
    var b= parseFloat (prompt('ВВедите второе число'));
    var plus=a+b;
    var minus= a-b;
    var delenie= a/b;
    var ymnojenie= a*b;
    alert('Сложение: '+ plus +'\n' + "Вычитание:" + minus + '\n' + "Умножение:" +  ymnojenie + '\n' + "Деление :" + delenie  )
}

function calc() {
    var text=prompt('Введите текст : ');
    

    var l = text.length;
    
    var g = text[0];

    var k = text[text.length - 1];

    var z = text[text.length];

    var d = text.indexOf('привет')

    var value = text.replace('привет','пока')


    alert(l)
    alert(g)
    alert(k)
    alert(z)
    alert(d)
    alert(value)
}

function halc() {
    var a = document.getElementById("pct_1");
    a.style.color = "red";
}

function on_enter() {
    b = document.getElementById('button1')
    b.style.backgroundColor = "red";
    b.style.borderRadius = "0px";
    b.style.padding = "20px";
}

function on_leave() {
    b = document.getElementById('button1');
    b.style.backgroundColor = "red";
    b.style.borderRadius = "15px";
    b.style.padding = "10px";
}

function change_style() {
    b = document.getElementById('button1');
    if (window.getComputedStyle(b).backgroundColor== "rgb(255, 0? 0)" )
    {
        b.style.backgroundColor = "green";
    }
    else
        b.style.backgroundColor = "red";

    if (window.getComputedStyle(b).padding !="0px" )
    {
        b.style.borderRadius = "10px";
    }
    else
        b.style.borderRadius = "10px";

    if (window.getComputedStyle(b).padding !="20px")

    {
        b.style.padding = "20px";
    }
    else
        b.style.padding = "5px";
}

function der(){
    var a= parseFloat ( prompt('Введите первое число'));
    var b= parseFloat (prompt('Введите второе число'));
    
    el = document.getElementById('text1');
    if (window.getComputedStyle(el).color == "rgb(255,0,0)")
    {
        el.style.backgroundColor = "green";
    }
    else
        el.style.backgroundColor = "red";
    if (a>b)
    {
        alert('наибольшее A')
    }
    else
        alert('наибольшее B')
}

function test_uss() {
    var a =10;
    var b =20;

    if (a < b && B == 20)
    {
        alert('Условие верно');
    }

    if (a == b || a != 15) {
        alert('Условие верно');
    }
}

function test_his() {
    var arr = ['button1', 'button2', 'button3','button4', 'button5', 'button6'];
    for (let i = 0; i < 3; i++)
    {
        alert(i);
    }
    alert(arr[0]);
}


function test_he() {
    id_arr = ['button1', 'button2', 'button3','button4', 'button5', 'button6']
    for (let i = 0; i<id_arr.length; i++)
{
    t = document.getElementById(id_arr[i]);

    if ( window.getComputedStyle(t).padding != "20px" )
    {
        t.style.padding = "20px";
    }
    else
        t.style.padding = "5px";
}

}

function test_us() {
    var arr = ['ref','fw4','three','frfre'];
    alert(arr[0]);
}

function show_modal() {
    d = document.getElementById("myModal");
    if ( window.getComputedStyle(d).display  != "block")
    {
        d.style.display = "block";
    }
    else
        d.style.display = "none";
}

function stars2() {
    var arr = ['photo1','photo2','photo3','photo4','photo5'];
    for (let i = 0; arr.length; i++) {
        b = arr[i]; 
        r = document.getElementById(b)
        r.src='image/star_1.png'  
    }
}

function show_star(k) {
    // k - номер звезды на которую навёл пользователь
    k=k-1
    var ids = ["star_f_1", "star_f_2", "star_f_3", "star_f_4", "star_f_5"];
    // l - использовать метод индекс для изменения картинок
    b = ids[k]
    a = document.getElementById(b);
    if (a.src.indexOf("star_2.png")>-1)
    {   
        for (let i=0; i<=k ; i++)
        {
            b = ids[i]
            a = document.getElementById(b);
            a.src='image/star_1.png'
        }
    }    
    else{
        
        for (let i=0; i<ids.length ; i++)
        {

            if (i>k)
            {
                b = ids[i]
                a = document.getElementById(b);
                a.src='image/star_2.png'
            }
        }

    }
}

function valid_form(){
    let name = document.getElementById("input_name").value
    let fam = document.getElementById("input_fam").value
    let mail = document.getElementById("input_mail").value
    let phone = document.getElementById("input_phone").value
    console.log(phone.slice(1, 2), phone.indexOf("+7"))
    if(name=="" || name==" ")
    {
        document.getElementById("sp").innerHTML = "Введите имя"
    }
    else{
        document.getElementById("sp").innerHTML = "Имя "  + name
    }

    if(fam=="" || fam==" ")
    {
        document.getElementById("sp1").innerHTML = "Введите Фамилию"
    }
    else{
        document.getElementById("sp1").innerHTML = "Фамилия "  + fam
    }

    if (mail.indexOf("@")==-1)
    {
        document.getElementById("sp2").innerHTML = "Введите почту"
    }
    else{
        document.getElementById("sp2").innerHTML = "Почта "  + mail
    }
    if (phone.indexOf("+7")>-1||phone.slice(0, 1) == "8")
    {
        document.getElementById("sp3").innerHTML = "Номер "  + phone
    }
    else{
        document.getElementById("sp3").innerHTML = "Введите номер телефона"
    }
}

function randomElement(arr) {
    var rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
}

function rand_tshirt(){
    var arr=[shirt1, shirt2, shirt3, shirt4]
    for (let i = 0; arr.length; i++) {
        b = arr[i]; 
        r = document.getElementById(b)
        r.src='image/mysterio_gaze.jpg'
        r.src='image/6184664465.jpg'
        r.src='image/futbolka-brendy-148331b0.jpg'
    }
}
