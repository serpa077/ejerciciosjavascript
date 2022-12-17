
  
  

        const empleados =[10];;
        const sueldos = new double[10];

        let nombremenor;
        let menorsueldo ;

        let  i = 0;

      
        console.log(" se procede Lectura de nombres y sueldos de empleados: ");                                        
        console.log("Empleado " + (i + 1) + ": ");
      
        console.log("Sueldo: ");
        sueldos.unshift(sueldos)
        
        
        menorsueldo = sueldos[i];
        nombremenor = empleados[i];

        
        for (i = 1; i < empleados.length; i++) {
            console.log("Empleado " + (i + 1) + ": ");
            empleados[i] = sc.nextLine();
            console.log("Sueldo: ");
            sueldos[i] = sc.nextDouble();
            
            if (sueldos[i] > menorsueldo) {
                menorsueldo = sueldos[i];
                nombremenor = empleados[i];
            }
        }

        
        console.log("Empleado con mayor sueldo: " + nombremenor );                                         
        console.log("Sueldo: " + menorsueldo);
    }
}