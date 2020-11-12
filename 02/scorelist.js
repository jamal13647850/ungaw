
const createTable=(scoreList) => {
    let table = document.createElement('table');
    let tableBody = document.createElement('tbody');
  
    let rowHead = document.createElement('tr');

    let cellHead1 = document.createElement('th');
    cellHead1.appendChild(document.createTextNode("نام"));
    rowHead.appendChild(cellHead1);

    let cellHead2 = document.createElement('th');
    cellHead2.appendChild(document.createTextNode("امتیاز"));
    rowHead.appendChild(cellHead2);

    tableBody.appendChild(rowHead);

    scoreList.forEach((rowData) =>{
      let row = document.createElement('tr');
  
      let cell = document.createElement('td');
      cell.appendChild(document.createTextNode(rowData.name));
      row.appendChild(cell);

      let cell2 = document.createElement('td');
      cell2.appendChild(document.createTextNode(rowData.score));
      row.appendChild(cell2);
  
      tableBody.appendChild(row);
    });
  
    table.appendChild(tableBody);
    document.body.appendChild(table);
}

const removeUncompleteGAme = (score)=>{
    return score.score>=0;
}

window.addEventListener('DOMContentLoaded', (event) => {

    let scoreList = JSON.parse(localStorage.getItem("scoresList"));
    let filteredScoreList = scoreList.filter(removeUncompleteGAme);
    createTable(filteredScoreList);
    
});