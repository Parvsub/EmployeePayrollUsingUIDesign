     window.addEventListener('DOMContentLoaded',(event)=>{
     const name = document.querySelector('#name');
     const textError = document.querySelector('.text-error');
     name.addEventListener('input',function(){
     if(name.value.length == 0){
        textError.textContent = "";
        return;
    }
try{
    (new EmployeePayrollData()).name = name.value;
    textError.textContent ="";
}   catch (e){
    textError.textContent = e;
}
});
        const salary=document.querySelector('#salary');
        const output = document.querySelector('.salary-output');
        salary.addEventListener('input',function(){
          output.innerHTML = salary.value;
          });
});

const save = () => {
    try {
        let employeePayrollData = createEmployeePayroll();
    } catch (e){
        return;
    }
}

const createEmployeePayroll = () => {
    let employeePayrollData = new employeePayrollData();
    try{
        employeePayrollData.name = getInputvalueById('#name');
    } catch (e){
        setTextValue('.text-erroe',e);
        throw e;
    }
    employeePayrollData.profilePic = getSelectedValues('[name=profile]').pop();
    employeePayrollData.gender = getSelectedValues('[name=gender]').pop();
    employeePayrollData.department = getSelectedValues('[name=depertment]');
    employeePayrollData.salary = getInputvalueById('#salary');
    employeePayrollData.note = getInputvalueById('#notes');
    let date = getInputvalueById('#day')+" "+getInputvalueById('#month')+" "+getInputvalueById('#year');
    employeePayrollData.date = Date.parse(date);
    alert(employeePayrollData.toString());
    return employeePayrollData;
    }

    const getSelectedValues = (propertyValue) => {
        let allItems = document.querySelector(propertyValue);
        let selItems = [];
        allItems.forEach(item => {
            if(item.checked) selItems.push(item.value);
        });
        return selItems;
        }

        const getInputvalueById = (id) => {
            let value = document.querySelector(id).value;
            return value;
        }

        const getInputElementValue = (id) => {
            let value = document.getElementById(id).value;
            return value;
        }

    