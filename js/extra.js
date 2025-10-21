document.getElementById("btn-add").addEventListener('click',(event)=>{
console.log("object");
const add_container=document.getElementById('text-container');
const div=document.createElement('div');
div.innerHTML = `
<div class="flex gap-5 mt-5 items-center justify-center">
<button id="btn-delete"  class="btn">Delete</button> <h2>I love my country </h2>
</div>
`;
add_container.appendChild(div);
});