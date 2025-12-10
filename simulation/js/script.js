
const myContainer = document.getElementById('box');
// myContainer.style.padding="0px";

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var modalBtn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var closeBtn = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
modalBtn.addEventListener("click", function () {
  modal.style.display = "block";
});

// When the user clicks on <span> (x), close the modal
closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});


function alerts(icon,title,text)
{
  Swal.fire({
    icon: icon,
    title: title,
    html: text,
    allowOutsideClick: false,
    target: '.container',
    customClass: {                      // <------ customClass is an object!
      container: "position-absolute",
  popup: "swal-popup",
  title: "swal-title",
  content: "swal-content",
    },     
  });
}

// table
let index = 1;
let count = 0;

function populateDataPointsTable() {
  // dataval();
  var tableData = [];
  const dataPointsTable = document.getElementById("dataPointsTable");
  const tbody = dataPointsTable.getElementsByTagName("tbody")[0];

  let cgpa = (document.getElementById("cgpa"));
  let interactive = (document.getElementById("interactive"));
  let practical = (document.getElementById("practical"));
  let comm = (document.getElementById("comm"));
  let job = (document.getElementById("job"));
  
  
if ( cgpa.value!='NULL'&& interactive.value!='NULL'&& practical.value!='NULL' && comm.value!='NULL' && job.value!='NULL'){
  const row = document.createElement("tr");
  row.classList.add("tocheck")
    rl=document.getElementsByClassName("tocheck")
    let countd=0
    des=true;
    for (var j = 0; j < rl.length; j++) {
     if(rl[j].cells[1].innerHTML==cgpa.value && rl[j].cells[2].innerHTML==interactive.value && rl[j].cells[3].innerHTML==practical.value && rl[j].cells[4].innerHTML==comm.value && rl[j].cells[5].innerHTML==job.value){
      countd=countd+1
      
      if(countd==3){

        alerts('error','Oops..Duplicate Values',"The provided row has already been entered 3 times; please try using different values.");
        
        cgpa.value='NULL'
        interactive.value='NULL'
        practical.value='NULL'
        comm.value='NULL'
        job.value='NULL'
      
      cgpa.style.border=""
      interactive.style.border=""
      practical.style.border=""
      comm.style.border=""
      job.style.border=""
        des=false;
        break;


      }

     }
     }
     if(des==true){

  document.getElementById('reset').disabled=false;
  row.innerHTML = `
      <td>${index}</td>
      <td>${cgpa.value}</td>
      <td>${interactive.value}</td>
      <td>${practical.value}</td>
      <td>${comm.value}</td>
      <td>${job.value}</td>
      <td><input type="button" class="delete-button" value="Delete" onClick="deleteRow(this)"></td>

    `;

  tbody.appendChild(row);
  index++;
  count++;
  cgpa.value='NULL'
  interactive.value='NULL'
  practical.value='NULL'
  comm.value='NULL'
  job.value='NULL'

cgpa.style.border=""
interactive.style.border=""
practical.style.border=""
comm.style.border=""
job.style.border=""
     }
}
else
  {
    let countfof=0
    let a=""
    if(cgpa.value=='NULL'){
      a=a+"CGPA ,"
      countfof=countfof+1
      cgpa.style.border="2px solid red"
    }
    else{
      cgpa.style.border=""
    }
    if(interactive.value=='NULL'){
      a=a+"INTERACTIVE ,"
      countfof=countfof+1
      interactive.style.border="2px solid red"
    }
    else{
      interactive.style.border=""
    }
    if(practical.value=='NULL'){
      a=a+"PRACTICAL KNOWLEDGE ,"
      countfof=countfof+1
      practical.style.border="2px solid red"
    }
    else{
      practical.style.border=""
    }
    if(comm.value=='NULL'){
      a=a+"COMM. SKILL ,"
      countfof=countfof+1
      comm.style.border="2px solid red"
    }
    else{
      comm.style.border=""
    }
    if(job.value=='NULL'){
      a=a+"JOB OFFER ,"
      countfof=countfof+1
      job.style.border="2px solid red"
    }
    else{
      job.style.border=""
    }
    if(countfof==1){
      g='MISSING VALUE!!'
      tempa = a.split(" ,");
      tempa.pop()
      a=''
    a=tempa[0] 
        a=a+` field cannot be NULL.<br> Please select the value and then click the <b style="color:#004E86">ADD</b> button.`
    }
    if(countfof>1 && countfof<5){
      g='MISSING VALUES!!'
      tempa = a.split(" ,");
      tempa.pop()
      a='' 
      for(let i=0;i<tempa.length;i++){
        if (i!=tempa.length-1){
          a=a+tempa[i]+', '
        }
        if(i==tempa.length-1){
          a=a+'and '+tempa[i]
        }
      }
   
        a=a+` fields cannot have NULL value.<br> Please select the value and then click the <b style="color:#004E86">ADD</b> button.`
    }
    if(countfof==5){
      g='MISSING VALUES!!'
      a=`Select values for all the attributes and then click the <b style="color:#004E86">ADD</b> button.`
    }

    alerts('error',g,a);
  

  }
  if (count === 7) {
    f=document.getElementById("add-button")
    f.style.cursor="not-allowed";
    f.disabled = true;


    let temp2 = document.getElementById("for11");
    let yes1 =0 , no1=0;
    for (let i = 0 ; i<7 ; i++){
     let z =  temp2.rows.item(i).cells.item(4).innerHTML
      if (z=='Yes'){
        yes1=yes1+1
      }
      if (z=='No'){
        no1=no1+1
      }
    }
 
if (yes1==7){
  Swal.fire({
    showCancelButton: true,
  title: "Target YES!",
  text: "Since all the target values in the dataset are 'Yes', the prediction will likewise be 'Yes'. Would you like to modify any of the rows?",
  icon: "warning",
  allowOutsideClick: false,
  cancelButtonText: "NO",
  cancelButtonColor : "red",
  confirmButtonText: "YES",
  target: '.container',
  customClass: {                      // <------ customClass is an object!
    container: "position-absolute",
        popup: "swal-popup",
        title: "swal-title",
        content: "swal-content",
  }, 
  
}).then((result) => {
  if (result.isConfirmed) {

    alerts('info','','Click on <b style="color:red">Delete</b> button and then add a new row.');

    const ne = document.getElementById("NEXT")
      ne.disabled=false;
      ne.style.cursor="pointer";
      ne.onclick=function(){tocheckthenextfunc()}
    
    ;}
    else{
        f=document.getElementById("add-button")
        f.style.cursor="not-allowed";
        f.disabled = true;
        for(let i =6;i>=0;i--){
            const del=document.getElementsByClassName("delete-button")
          del[i].disabled=true;
          del[i].style.opacity=0.5
          del[i].style.cursor="not-allowed";
        }
   
      const ne = document.getElementById("NEXT")
      ne.disabled=false;
      ne.style.cursor="pointer"
      
      alerts('success','','Click on the <b style="color:#004E86">NEXT</b> button.');


    }
  
});


}

else if(no1==7){
  Swal.fire({
    showCancelButton: true,
  title: "Target NO!",
  text: "Since all the target values in the dataset are 'No', the prediction will likewise be 'No'. Would you like to modify any of the rows?",
  icon: "warning",
  allowOutsideClick: false,
  cancelButtonText: "NO",
  cancelButtonColor : "red",
  confirmButtonText: "YES",
  target: '.container',
  customClass: {                      // <------ customClass is an object!
    container: "position-absolute",
        popup: "swal-popup",
        title: "swal-title",
        content: "swal-content",
  }, 
  
}).then((result) => {
  if (result.isConfirmed) {

    alerts('info','','Click on <b style="color:red">Delete</b> button and then add a new row.');

    const ne = document.getElementById("NEXT")
      ne.disabled=false;
      ne.style.cursor="pointer";
      ne.onclick=function(){tocheckthenextfunc()}
    
    ;}
    else{
        f=document.getElementById("add-button")
        f.style.cursor="not-allowed";
        f.disabled = true;
        for(let i =6;i>=0;i--){
            const del=document.getElementsByClassName("delete-button")
          del[i].disabled=true;
          del[i].style.opacity=0.5
          del[i].style.cursor="not-allowed";
        }
   
      const ne = document.getElementById("NEXT")
      ne.disabled=false;
      ne.style.cursor="pointer"
      
      alerts('success','','Click on the <b style="color:#004E86">NEXT</b> button.');

    }
  
});

}
else{
    Swal.fire({
        showCancelButton: true,
      text: "Do you want to delete any row?",
      icon: "warning",
      allowOutsideClick: false,
      cancelButtonText: "NO",
      cancelButtonColor : "red",
      confirmButtonText: "YES",
      target: '.container',
      customClass: {                      // <------ customClass is an object!
        container: "position-absolute",
        popup: "swal-popup",
        title: "swal-title",
        content: "swal-content",
      }, 
      
    }).then((result) => {
      if (result.isConfirmed) {
        const ne = document.getElementById("NEXT")
          ne.disabled=true;
         
        
        ;}
        else{
          cgpa.disabled=true;
          interactive.disabled=true;
          practical.disabled=true;
          comm.disabled=true;
          job.disabled=true;
            f=document.getElementById("add-button")
            f.style.cursor="not-allowed";
            f.disabled = true;
            for(let i =6;i>=0;i--){
                const del=document.getElementsByClassName("delete-button")
              del[i].disabled=true;
              del[i].style.opacity=0.5
              del[i].style.cursor="not-allowed";
            }
       
          const ne = document.getElementById("NEXT")
          ne.disabled=false;
          ne.style.cursor="pointer"
          
          alerts('success','','Click on the <b style="color:#004E86">NEXT</b> button.');
    
    var row = dataPointsTable.rows;   
    var i = 6; 
    for (var j = 0; j < row.length; j++) {
        row[j].deleteCell(i);
    }
    for (var i = 0; i < tbody.rows.length; i++) {
      var rowData = [];
      var cells = tbody.rows[i].cells;
    
      // Iterate through each cell of the row
      for (var j = 0; j < cells.length; j++) { 
        var cellValue = cells[j].textContent;
        rowData[j] = cellValue;
      }
    
      tableData.push(rowData);
    }
    
    var serializedData1 = JSON.stringify(tableData); // Convert data to a string format
    localStorage.setItem('objectToPass', serializedData1); 


        }
      
    });
  }
}
}



function updateSerialNumbers() {
  index--;
  count--;
  var table = document.getElementById('dataPointsTable');
  var rows = table.getElementsByTagName('tr');

  // Start the serial number from 1
  var serialNumber = 1;

  // Loop through each row (skip the header row)
  for (var i = 1; i < rows.length; i++) {
    var row = rows[i];

    // Update the serial number cell
    var sNoCell = row.cells[0];
    sNoCell.textContent = serialNumber;

    // Increment the serial number for the next row
    serialNumber++;
  }
}

function populateDataPointsTablecon() {
  // dataval();
  var tableData = [];

  const select = document.getElementById('exampleSelect');
  const selectedExample = select.value;
  
  if ( select.value !="NULL"){
    const examples = {
      "example1": [
  
        [1,	'Sunny',	'Hot',	'High',	'Weak',	'No'],
        [2,	'Sunny',	'Hot',	'High',	'Strong',	'No'],
        [3,	'Overcast',	'Hot',	'High',	'Weak',	'Yes'],
        [4,	'Rain',	'Mild',	'High',	'Weak',	'Yes'],
        [5,	'Sunny',	'Mild',	'High',	'Weak',	'No'],
        [6,	'Rain',	'Cool',	'Normal',	'Strong',	'No'],
        [7,	'Overcast',	'Hot',	'Normal',	'Weak',	'Yes'],
  
        // Add more rows as needed
      ],
      "example2": [
        [1,	'Sunny',	'Hot',	'High',	'Weak',	'No'],
        [2,	'Sunny',	'Hot',	'High',	'Strong',	'No'],
        [3,	'Overcast',	'Hot',	'High',	'Weak',	'Yes'],
        [4,	'Rain',	'Mild',	'High',	'Weak',	'Yes'],
        [5,	'Rain',	'Cool',	'Normal',	'Weak',	'Yes'],
        [6,	'Rain',	'Cool',	'Normal',	'Strong',	'No'],
        [7,	'Overcast',	'Cool',	'Normal',	'Strong',	'Yes'],
        [8,	'Sunny',	'Mild',	'High',	'Weak',	'No'],
        [9,	'Sunny',	'Cool',	'Normal',	'Weak',	'Yes'],
        [10,	'Rain',	'Mild',	'Normal',	'Weak',	'Yes'],
        [11,	'Sunny',	'Mild',	'Normal',	'Strong',	'Yes'],
        [12,	'Overcast',	'Mild',	'High',	'Strong',	'Yes'],
        [13,	'Overcast',	'Hot',	'Normal',	'Weak',	'Yes'],
        [14,	'Rain',	'Mild',	'High',	'Strong',	'No'],
  
        // Add more rows as needed
      ],

      "example3": [
        [1,	'Sunny',	'Hot',	'High',	'Weak',	'No'],
        [2,	'Sunny',	'Hot',	'High',	'Strong',	'No'],
        [3,	'Rain',	'Mild',	'High',	'Weak',	'Yes'],
        [4,	'Rain',	'Cool',	'Normal',	'Weak',	'Yes'],
        [5,	'Rain',	'Cool',	'Normal',	'Strong',	'No'],
        [6,	'Sunny',	'Mild',	'High',	'Weak',	'No'],
        [7,	'Sunny',	'Cool',	'Normal',	'Weak',	'Yes'],
        [8,	'Rain',	'Mild',	'Normal',	'Weak',	'Yes'],
        [9,	'Sunny',	'Mild',	'Normal',	'Strong',	'Yes'],
        [10,	'Rain',	'Mild',	'High',	'Strong',	'No'],
  
        // Add more rows as needed
      ]

      // Add more examples as needed
    };
  
    const exampleData = examples[selectedExample];
  
    const dataTable = document.getElementById('dataPointsTable');
   // dataTable.innerHTML ='' ; // Clear existing table content
  
    exampleData.forEach(function(rowData) {
      const row = dataTable.insertRow();
      rowData.forEach(function(cellData) {
        const cell = row.insertCell();
        cell.appendChild(document.createTextNode(cellData));
      });
    });

 document.getElementById('reset').disabled=false;

document.getElementById("add-button").disabled = true;
const ne = document.getElementById("NEXT")
          ne.disabled=false;
          ne.style.cursor="pointer"
          alerts('success','','Click on the <b style="color:#004E86">NEXT</b> button.');
          
          
          for (var i = 1; i < dataTable.rows.length; i++) {
            var rowData = [];
            var cells = dataTable.rows[i].cells;
          
            // Iterate through each cell of the row
            for (var j = 0; j < cells.length; j++) { 
              var cellValue = cells[j].textContent;
              rowData[j] = cellValue;
            }
          
            tableData.push(rowData);
          }
          console.log(tableData)
          var serializedData1 = JSON.stringify(tableData); // Convert data to a string format
          localStorage.setItem('objectToPass', serializedData1); 
              }



  else{

    if(select.value =="NULL"){
      select.style.border="2px solid red"
    }
    else{
      select.style.border=""
    }
   

  alerts('error','MISSING VALUE!!',' Please select the value and then click the <b style="color:#004E86">SUBMIT</b> button.');

  }

  
  if (count === 7) {
    
    
        f=document.getElementById("add-button")
        f.style.cursor="not-allowed";
        f.disabled = true;

    
    Swal.fire({
        showCancelButton: true,
      text: "Do you want to delete any row?",
      icon: "warning",
      allowOutsideClick: false,
      cancelButtonText: "NO",
      cancelButtonColor : "red",
      confirmButtonText: "YES",
      target: '.container',
      customClass: {                      // <------ customClass is an object!
        container: "position-absolute",
        popup: "swal-popup",
        title: "swal-title",
        content: "swal-content",
      }, 
      
    }).then((result) => {
      if (result.isConfirmed) {
      
        const ne = document.getElementById("NEXT")
          ne.disabled=true;

        ;}
        else{
          corpus.disabled=true;
          temp.disabled=true;
          humd.disabled=true;
          wind.disabled=true;
          tennist.disabled=true;
            f=document.getElementById("add-button")
            f.style.cursor="not-allowed";
            f.disabled = true;
            for(let i =6;i>=0;i--){
                const del=document.getElementsByClassName("delete-button")
              del[i].disabled=true;
              del[i].style.opacity=0.5
              del[i].style.cursor="not-allowed";
            }
       
          const ne = document.getElementById("NEXT")
          ne.disabled=false;
          ne.style.cursor="pointer"
          alerts('success','','Click on the <b style="color:#004E86">NEXT</b> button.');
     

    var row = dataPointsTable.rows;   
    var i = 6; 
    for (var j = 0; j < row.length; j++) {
        row[j].deleteCell(i);
    }
    for (var i = 0; i < tbody.rows.length; i++) {
      var rowData = [];
      var cells = tbody.rows[i].cells;
    
      // Iterate through each cell of the row
      for (var j = 0; j < cells.length; j++) { 
        var cellValue = cells[j].textContent;
        rowData[j] = cellValue;
      }
    
      tableData.push(rowData);
    }
    
    var serializedData1 = JSON.stringify(tableData); // Convert data to a string format
    localStorage.setItem('objectToPass', serializedData1); 
        }
      
    });
  
  
}
}


function tocheckthenextfunc(){
  rl=document.getElementsByClassName("tocheck");
  if(rl.length==7){ 
  }
  
  }


