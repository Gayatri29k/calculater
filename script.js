let input = document.getElementById('inputbox')
let buttons = document.querySelectorAll('button')

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click',(e) =>{
        // if(e.target.innerHTML == '='){
        //     string = eval(string);//percentage sign
        //     input.value = string;
        // }
        if (e.target.innerHTML == '=') {
            try {
                // Replace all occurrences of % with /100
                string = string.replace(/%/g, '/100');
                string = eval(string);
                input.value = string;
            } catch (error) {
                input.value = "Error";
            }

        }else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value=string;

        }
         else if (e.target.textContent == 'DEL') //instead innerhtml use text context
          { 
            string = string.substring(0, string.length - 1);
            input.value = string;
        }
        
        else{
            string += e.target.innerHTML;
        input.value = string
        }

       

    });
});