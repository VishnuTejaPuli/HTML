const rows=100 ;
const cols = 100;

const table = document.getElementById('mulTable');

let headerRow = '<tr><th></th>';
   for(let col =1;col <= cols; col++){
       headerRow += '<th>${col}</th>';
   }
   headerRow += '</tr>';
   table.innerHTML += headerRow;

   for (let row = 1; row <= rows; row++) {
 let rowHTML = `<tr><th>${row}</th>`;
 for (let col = 1; col <= cols; col++) {
   const cellValue = row * col;
   rowHTML += `<td>${cellValue}</td>`;
   totalProduct *= cellValue;
 }
 rowHTML += '</tr>';
 table.outerHTML += rowHTML;
}