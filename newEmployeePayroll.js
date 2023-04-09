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


window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

//Template literal ES^ feature
const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
                            "<th>Salary</th><th>Start Date</th><th>Actions</th>";
    let innerHTML = `${headerHtml}`;
    let employeePayrollList = createEmployeePayrollJSON();
    for (const employeePayrollData of employeePayrollList) {
        innerHTML = `${innerHTML}
   <tr>
     <td><img class="profile"  src="${EmployeePayrollData._profilePic}" alt=""></td>
     <td>${employeePayrollData._name}</td>
     <td>${employeePayrollData._gender}</td>
     <td>${getDeptHtml(employeePayrollData._department)}</td>   
     <td>${employeePayrollData._salary}</td>
     <td>${employeePayrollData._StartDate}</td>
   <td>
    <img name = "${employeePayrollData._id}" onclick="remove(this)" src="./delete-black-18dp.svg" alt="delete">
    <img name = "${employeePayrollData._id}" onclick="update(this)" src="./create-black-18dp (1).svg" alt="edit">
</td>
</tr>
`;
}
document.querySelector('#table-display').innerHTML = innerHTML;
}


const createEmployeePayrollJSON = () => {
    let employeePayrollListLocal = [
        {
            _name: 'Praveen Kumar B',
            _gender: 'male',
            _department: ['Engineering','Finance'],
            _salary: '450000',
            _StartDate: '26 Nov 2020',
            _note: '',
            _id: new Date().getTime(),
            _profilePic: './Ellipse -3.png'
        },
        {
            _name: 'Mohan B',
            _gender: 'Male',
            _department: ['HR'],
            _salary: '500000',
            _StartDate: '23 Sept 2019',
            _note: '',
            _id: new Date().getTime() + 1,
            _profilePic: './Ellipse -7.png'  
        }
    ];
    return employeePayrollListLocal;
}

const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for (const dept of deptList) {
        deptHtml = `${deptHtml} <div class='dept-label'>${dept}</div>`
    }
    return deptHtml;
}


// If not specified then show undefined so we avoid this. 
//      <div class='dept-label'>${employeePayrollData._department[0]}</div>
//      <div class='dept-label'>${employeePayrollData._department[1]}</div>
//    </td>


// To get single details at a time
// let employeePayrollData = createEmployeePayrollJSON()[1];                         
//     const innerHTML= `${headerHtml}

// let innerHTML = `${headerHtml}`;
//     let employeePayrollList = createEmployeePayrollJSON();
//     for (const employeePayrollData of employeePayrollList) {
//         innerHTML = `${innerHTML}