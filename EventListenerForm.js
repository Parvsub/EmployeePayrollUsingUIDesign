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
        createAndUpdateStorage(employeePayrollData);
    } catch (e){
        return;
    }
}

function createAndUpdateStorage(employeePayrollData){
    let employeePayrollList = JSON.parse(localStorage.getItem("EmployeePayrollList"));
 
    if(employeePayrollList != undefined){
        employeePayrollList.push(employeePayrollData);
    } else {
        employeePayrollList = [employeePayrollData]
    }
    alert(employeePayrollList.toString());
    localStorage.setItem("EmployeePayrollList", JSON.stringify(employeePayrollList));
}

const createEmployeePayroll = () => {
    let employeePayrollData = new EmployeePayrollData();
    try{
        employeePayrollData.name = getInputvalueById('#name');
    } catch (e){
        setTextValue('.text-erroe',e);
        throw e;
    }
    EmployeePayrollData.profilePic = getSelectedValues('[name=profile]').pop();
    EmployeePayrollData.gender = getSelectedValues('[name=gender]').pop();
    EmployeePayrollData.department = getSelectedValues('[name=depertment]');
    EmployeePayrollData.salary = getInputvalueById('#salary');
    EmployeePayrollData.note = getInputvalueById('#notes');
    let date = getInputvalueById('#day')+" "+getInputvalueById('#month')+" "+getInputvalueById('#year');
    EmployeePayrollData.date = Date.parse(date);
    alert(EmployeePayrollData.toString());
    return EmployeePayrollData;
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

    