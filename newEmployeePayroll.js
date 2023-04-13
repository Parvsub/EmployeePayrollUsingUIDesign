let empPayrollList;
window.addEventListener('DOMContentLoaded', (event) => {
    empPayrollList = getEmpDataFromStorage();
    document.querySelector(".emp-count").textContent = empPayrollList.length;
    createInnerHtml();
    localStorage.removeItem('editEmp');
});

const getEmpDataFromStorage = () => {
    return localStorage.getItem('formData') 
    ? JSON.parse(localStorage.getItem('formData')) : [];
};

/* Using Template Literal */
const createInnerHtml = () => {   
    const headerHtml = "<th>Profile Picture</th> <th>Name</th> <th>Gender</th> <th>Department</th>" + 
                        "<th>Salary</th> <th>Start Date</th> <th>Actions</th>";
    
    //if(empPayrollList.length == 0) return;
    let innerHtml = `${headerHtml}`;

    for(const Employee of empPayrollList){
        innerHtml = `${innerHtml}
            <tr> 
                <td><img class="profile" alt="" src="${Employee.profilePic}"></td>
                <td>${Employee.name}</td> 
                <td>${Employee.gender}</td> 
                <td>${getDeptHtml(Employee.department)}</td>
                <td>${Employee.salary}</td>
                <td>${Employee.startDate}</td>
                <td> 
                    <img name="${Employee.id}" id="iconAction" alt="delete" onclick="remove(this)"  src="../pages/delete-black-18dp.svg" alt="delete">
                    <img name="${Employee.id}" id="iconAction" alt="edit" onclick="update(this)"  src="../pages/edit.svg" alt="edit">   
                </td>
            </tr>                   
        `;
    }
        document.getElementById('display').innerHTML = innerHtml;
}
    

const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for (const dept of deptList){
        deptHtml = `${deptHtml} <div class = 'dept-label'>${dept}</div>`;
    }
    return deptHtml;
};


//Delete employee details
const remove = (row) => {
    if(confirm('Do you want to delete this record?')){
        //the immediate parent of the row is the <td> , and the next parent of the <td> element is 
        //the <tr> element that contains the row.
        const rowIndex = row.parentNode.parentNode.rowIndex;

        //get the id of the record to be removed from the empPayrollList array using the index of the row
        const id = empPayrollList[rowIndex - 1]._id;

        //the index of the record to be removed and the number of records to be removed(here only one)
        empPayrollList.splice(rowIndex - 1, 1);
    }
    localStorage.setItem("formData", JSON.stringify(empPayrollList));
    
    // Update the employee count display
    document.querySelector(".emp-count").textContent = empPayrollList.length;
    //re-rendering the table with the updated data.
    createInnerHtml();
}

//Edit  

 function update(node) {
    let newElement = empPayrollList.find((empData) => empData.id == node.name);
    if (!newElement) return;
    localStorage.setItem('editEmp', JSON.stringify(newElement));
    window.location.href = 'new_Payroll_form.html';
  }
