const generateAge = ()=> {
    const userDOB = document.getElementById("date");
    console.log(userDOB.value);

    const currentDate = new Date();

    const userDOBYear = new Date(userDOB.value);

    const userAge = currentDate.getFullYear() - userDOBvalue.getFullYear();
    console.log(userAge);
    
}
