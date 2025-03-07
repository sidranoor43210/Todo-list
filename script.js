var btn=document.getElementById('btn');
var inputvalue=document.getElementById('textinput');
var List=document.getElementById('task-list');
var updatebtn=document.getElementById('update');
let Tasklist=[];
let updateIndex = null;

btn.addEventListener('click',function(){
  if (inputvalue.value.trim() === '') return; //prevent adding empty task
 Tasklist.push(inputvalue.value);
inputvalue.value='';
 List.innerHTML='';
 for(let i=0;i<Tasklist.length;i++){
    List.innerHTML+=`<li>${Tasklist[i]}
     <button onClick="deletetask(${i})">Delete</button>
     <button onClick="edittask(${i})">Edit</button>
 </li>`; }
})

 function deletetask(i){
 Tasklist.splice(i,1);
  List.innerHTML='';
  for(let i=0;i<Tasklist.length;i++){
     List.innerHTML+=`<li>${Tasklist[i]}
      <button onClick="deleteTask(${i})">Delete</button>
        <button onClick="edittask(${i})">Edit</button>
      </li>`;
  }}

 function edittask(i){
inputvalue.value=Tasklist[i];
 updateIndex=i;
 }

 updatebtn.addEventListener('click', function(){
   // Prevent update if no task selected or empty input
  if (updateIndex === null || inputvalue.value.trim() === '') return; 
 
  Tasklist[updateIndex]=inputvalue.value;
  inputvalue.value = '';
  updateIndex = null; 
List.innerHTML='';
for(let i=0;i<Tasklist.length;i++){
   List.innerHTML+=`<li>${Tasklist[i]}
    <button onClick="deleteTask(${i})">Delete</button>
      <button onClick="edittask(${i})">Edit</button>
    </li>`;
}
})

