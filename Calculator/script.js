let string = "";
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        let store=string;
        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('.input').value = string;
        }
        else if (e.target.innerHTML == 'AC') {
            string = "";
            document.querySelector('.input').value = string;
        }
        else if (e.target.innerHTML == 'C') {
            let newStr = string.slice(0, -1);
            string=newStr;
            document.querySelector('.input').value = string;
        }
        else if(e.target.innerHTML=='M+'){
            string=eval(string+store);
            document.querySelector('.input').value = string;
        }
        else if(e.target.innerHTML=='M-'){
            string=eval(string-store);
            document.querySelector('.input').value = string;
        }
        else {
            let c=e.target.innerHTML
            console.log(c);
            string = string + e.target.innerHTML;
            document.querySelector('.input').value = string;
        }
        
        


    })
})