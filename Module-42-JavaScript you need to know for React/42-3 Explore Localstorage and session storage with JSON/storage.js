

const userLocalInfo = () => {
 

    const inputId = document.getElementById('ueser-id');
    const id = inputId.value;
    
    const inputValue = document.getElementById('user-value');
    const value = inputValue.value;

    inputId.value = '';
    inputValue.value = '';


    if (id && value) {
    
    localStorage.setItem(id, value); // nomal  value getting 

   // localStorage.setItem(id, JSON.stringify([value])); // getting any type of value and object and aryy
    }


}



