// window.addEventListener('DOMContentLoaded', (event) => {
//     createInnerHtml();
// });

// //Template literal ES^ feature
// const createInnerHtml = () => {
// const innerHTML= `
// <tr>
// <th></th>
// <th>Name</th>
// <th>Gender</th>
// <th>Department</th>
// <th>Salary</th>
// <th>Start Date</th>
// <th>Actions</th>
// </tr>
// <tr>
// <td><img class="profile" alt="" src="./Ellipse -3.png">
// </td>
// <td>Praveen Kumar B</td>
// <td>Male</td>
// <td><div class='dept-label'>HR</div>
// <div class='dept-label'>Finance</div></td>
// <td>350000</td>
// <td>23 Sept 2020</td>
// <td>
//     <img id = "1" onclick="remove(this)" alt="delete" src="./delete-black-18dp.svg">
//     <img id = "1" alt="edit" onclick="update(this)" src="./create-black-18dp (1).svg">
// </td>
// </tr>
// `;
// document.querySelector('#table-display').innerHTML = innerHTML;
// }

let employeePayrollList;
window.addEventListener('DOMContentLoaded', (event) => {
   
    employeePayrollList = getEmployeePayrollDataFromStorage();
    document.querySelector(".emp-count").textContent = employeePayrollList.length;
  
    createInnerHtml();
    localStorage.removeItem('editEmp');
});

const getEmployeePayrollDataFromStorage = () => {
    return localStorage.getItem('employeePayrollData') ?
                        JSON.parse(localStorage.getItem('employeePayrollData')) : [];
};

const createInnerHtml = () => {
   
    alert("Hello");
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
                            "<th>Salary</th><th>Start Date</th><th>Actions</th>";
    if(employeePayrollList.length == 0) return;
    let innerHTML = `${headerHtml}`;
    for (const employeePayrollData of employeePayrollList) {
        innerHTML = `${innerHTML}
   <tr>
   <td><img class="profile" src="${employeePayrollData.profileImage}" alt=""></td>
   <td>${employeePayrollData.name}</td>
   <td>${employeePayrollData.gender}</td>
   <td>${employeePayrollData.department}</td>
   <td>${employeePayrollData.salary}</td>
   <td>${employeePayrollData. startDate}</td>
   <td>
   <img name="${employeePayrollData.id}" onclick="remove(this)" 
          src="./delete-black-18dp.svg" alt="delete">
   <img name="${employeePayrollData.id}" onclick="update(this)" 
          src="./edit.svg" alt="edit">       
   </td>
</tr>
`;
    }
document.getElementById('table-display').innerHTML = innerHTML;}


const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for (const dept of deptList) {
        deptHtml = `${deptHtml} <div class='dept-label'>${dept}</div>`
    }
    return deptHtml;
}

