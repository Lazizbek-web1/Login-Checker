let n = 0
let ism = ""
let email = ""
let password = ""
let tuxta1 = 0
    function junat(){
        tekshirIsm()
        if (tuxta1>0){
            return;
        }
        tekshirEmail()
        if (tuxta1>0){
            return;
        }
        tekshirPassword()
        if (tuxta1>0){
            return;
        }
        tekkshirConPass()
        if (tuxta1>0){
            return;
        }
        chiqar()
        tozala()
    }

    function tekshirIsm(){
        let a = document.getElementById("inpName")
        let solishtir = ""
        let hisob = 0
        a = a.value.trim()
        for (let i = 0; i<(a.length); i++){
            solishtir = a[i]
            if(solishtir == " "){
                hisob++
            }
        }
        if (hisob<2 || hisob>3){
            tuxta1=1
            return alert("Ism Familiya va otanggizni ismi to'liq kiritilganligini tekshiring")
        }
        else{
            tuxta1=0
            ism = a
        }
    }

    function tekshirEmail(){
        let a = document.getElementById("inpEmail").value
        if (a.length<11){
            tuxta1=1
            return alert("email noto'g'ri kiritildi")
        }
        let hisob1 = a.slice((a.length-10), a.length)
        if (hisob1 != "@gmail.com"){
            tuxta1=1
            return alert("email noto'g'ri kiritildi")
        }
        email = a
    }

    function tekshirPassword(){
        let a = document.getElementById("inpPass").value
        if (a.length<8){
            tuxta1=1
            alert("kod talablarga javob bermaydi");
        }
        let son = 0
        let suz = 0

        for (i=0; i<a.length; i++){
            if (a[i]==1 || a[i]==2 || a[i]==3 || a[i]==4 || a[i]==5 || a[i]==6 || a[i]==7 || a[i]==8 || a[i]==9 || a[i]==0){
                son++
            }
            else{
                suz++
            }
        }
        if (son==0 || suz==0){
            tuxta1=1
            return alert("kod harfalar va sonlardan tashkil topgan bulishi kerak");
        }
    }

    function tekkshirConPass(){
        let a = document.getElementById("inpConPass").value
        let b = document.getElementById("inpPass").value
        if (a !== b){
            tuxta1=1
            return alert("avval va hozir kiritgan kodlaringgiz to'g'ri kelmayapti")
        }
        password = a
    }

    function chiqar(){
        n++
        let a = document.getElementById("tbQush")
        let tr = document.createElement(`tr`);
        tr.innerHTML =`
        <td>${n}</td>
        <td>${ism}</td>
        <td>${email}</td>
        <td>${password}</td>
        `
        a.append(tr);
    }

    let kuzch = 1
    function kuz(){
        if (kuzch%2 != 0){
            let a = document.getElementById("inpPass")
            a.setAttribute("type", "text")
            kuzch++
        }
        else{
            let a = document.getElementById("inpPass")
            a.setAttribute("type", "password")
            kuzch++
        }
    }

    let kuzch1 = 1
    function kuz1(){
        if (kuzch1%2!=0){
            let a = document.getElementById("inpConPass")
            a.setAttribute("type", "text")
            kuzch1++
        }
        else{
            let a = document.getElementById("inpConPass")
            a.setAttribute("type", "password")
            kuzch1++
        }
    }

    function tozala(){
        document.querySelector("#inpName").value = ""
        document.querySelector("#inpEmail").value = ""
        document.querySelector("#inpPass").value = ""
        document.querySelector("#inpConPass").value = ""
    }
