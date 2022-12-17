
        var num = "0";
        var cont = "0";
        var pares = "0";
        var impares = "0";
        for(var cont = 1; cont < 11; cont++) {        
            var num = prompt("INGRESE NÚMERO " + cont + " :");  
            if(((num - num/2)*2) = 0)
            {
                pares = (pares) + 1;
            } else{
                impares = (impares) + 1;
            }          
        }
    document.getElementById('par').value=pares;
    document.getElementById('impar').value=impares;
    }
}


