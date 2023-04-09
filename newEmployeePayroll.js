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
const innerHTML= `${headerHtml}
<tr>
<td><img class="profile" alt="" src="./Ellipse -3.png">
</td>
<td>Praveen Kumar B</td>
<td>Male</td>
<td><div class='dept-label'>HR</div>
<div class='dept-label'>Finance</div></td>
<td>350000</td>
<td>23 Sept 2020</td>
<td>
    <img id = "1" onclick="remove(this)" alt="delete" src="./delete-black-18dp.svg">
    <img id = "1" alt="edit" onclick="update(this)" src="./create-black-18dp (1).svg">
</td>
</tr>
`;
document.querySelector('#table-display').innerHTML = innerHTML;
}

