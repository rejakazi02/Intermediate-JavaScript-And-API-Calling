 
 
 //  CLASS STAR HERE

 class Support {
     name;
     designatin = 'support web Dev';
     address = 'Bd';

     // CONOSTRUCTOR CREAT HERE 

     constructor(name, addr) {
         this.name = name;
         this.address = addr;
     }

     // THIS IS FUNCTION START HERE

     startSession() {
         console.log(this.name, 'start a support session');
     }
 }


 // Support CLASS CALL HERE 

 const aamir = new Support('Ammir', 'Dubai');
 const salman = new Support('Salman', 'Bd');

 // Function CALL HERE 

 aamir.startSession();
 salman.startSession();


 console.log(aamir);
 console.log(salman);