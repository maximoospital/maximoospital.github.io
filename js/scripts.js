const home = document.getElementById('home');
const homebtn = document.getElementById('homebtn');
const portfoliobtn = document.getElementById('portfoliobtn');
const contactbtn = document.getElementById('contactbtn');
const portfolio = document.getElementById('portfolio');
const contact = document.getElementById('contact');
window.onload = function WindowLoad(event) {
    var timeDisplay = document.getElementById("watch");
    var dateString = new Date().toLocaleString("en-US", {timeZone: "America/Sao_Paulo"});
    var formattedString = dateString.replace(", ", " - ");
    timeDisplay.innerHTML = formattedString;
    function refreshTime() {
        var dateString = new Date().toLocaleString("en-US", {timeZone: "America/Sao_Paulo"});
        var formattedString = dateString.replace(", ", " - ");
        timeDisplay.innerHTML = formattedString;
    }
    setInterval(refreshTime, 1000);
    homebtn.style.textDecoration = 'none';
    portfoliobtn.style.textDecoration = 'underline';
    contactbtn.style.textDecoration = 'underline';
    portfolio.style.display = 'none';
    contact.style.display = 'none';
    var i1 = 0;
    var txt1 = 'Hello World!'; /* The text */
    var speed = 50; /* The speed/duration of the effect in milliseconds */
    var boolTxt = 0;
    function typeWriter1() {
        if (i1 < txt1.length) {
            document.getElementById("typewriter1").innerHTML += txt1.charAt(i1);
            i1++;
            setTimeout(typeWriter1, speed);
        } else {
            if(boolTxt === 0) {
                document.getElementById("typewriter1").innerHTML = 'Hello World!|';
                boolTxt = 1;
                setTimeout(typeWriter1, speed*8);
            } else {
                document.getElementById("typewriter1").innerHTML = 'Hello World!';
                boolTxt = 0;
                setTimeout(typeWriter1, speed*8);
            }

        }
    }
    setTimeout(typeWriter1, speed);
}
homebtn.addEventListener('click', function handleClick() {
    if(home.style.display === 'none') {
        homebtn.style.textDecoration = 'none';
        portfoliobtn.style.textDecoration = 'underline';
        contactbtn.style.textDecoration = 'underline';
        home.style.display = 'flex';
        portfolio.style.display = 'none';
        contact.style.display = 'none';
    } else {
        console.log("Home");
    }
});
portfoliobtn.addEventListener('click', function handleClick() {
    var i2 = 0;
    var txt2 = 'My Portfolio';
    document.getElementById("typewriter2").innerHTML = "";
    var speed = 50; /* The speed/duration of the effect in milliseconds */
    var boolTxt = 0;
    function typeWriter2() {
        if (i2 < txt2.length) {
            document.getElementById("typewriter2").innerHTML += txt2.charAt(i2);
            i2++;
            setTimeout(typeWriter2, speed);
        } else {
            if(boolTxt === 0) {
                document.getElementById("typewriter2").innerHTML = 'My Portfolio|';
                boolTxt = 1;
                setTimeout(typeWriter2, speed*8);
            } else {
                document.getElementById("typewriter2").innerHTML = 'My Portfolio';
                boolTxt = 0;
                setTimeout(typeWriter2, speed*8);
            }

        }
    }
    setTimeout(typeWriter2, speed);
    if(portfolio.style.display === 'none') {
        homebtn.style.textDecoration = 'underline';
        portfoliobtn.style.textDecoration = 'none';
        contactbtn.style.textDecoration = 'underline';
        home.style.display = 'none';
        portfolio.style.display = 'flex';
        contact.style.display = 'none';
    } else {
        console.log("Portfolio");
    }
});
contactbtn.addEventListener('click', function handleClick() {
    var i3 = 0;
    var txt3 = 'Contact me';
    document.getElementById("typewriter3").innerHTML = "";
    var speed = 50; /* The speed/duration of the effect in milliseconds */
    var boolTxt = 0;
    function typeWriter3() {
        if (i3 < txt3.length) {
            document.getElementById("typewriter3").innerHTML += txt3.charAt(i3);
            i3++;
            setTimeout(typeWriter3, speed);
        } else {
            if(boolTxt === 0) {
                document.getElementById("typewriter3").innerHTML = 'Contact me|';
                boolTxt = 1;
                setTimeout(typeWriter3, speed*8);
            } else {
                document.getElementById("typewriter3").innerHTML = 'Contact me';
                boolTxt = 0;
                setTimeout(typeWriter3, speed*8);
            }

        }
    }
    setTimeout(typeWriter3, speed);
    if(contact.style.display === 'none') {
        homebtn.style.textDecoration = 'underline';
        portfoliobtn.style.textDecoration = 'underline';
        contactbtn.style.textDecoration = 'none';
        home.style.display = 'none';
        portfolio.style.display = 'none';
        contact.style.display = 'flex';
    } else {
        console.log("Contact");
    }
});

