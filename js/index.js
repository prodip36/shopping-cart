
document.getElementById('card-1').addEventListener('click',function(event){
    event.preventDefault();
    const img_src=document.getElementById('img-1').src;
    const title=getElementValueById('title-card-1');
    const price=getElementValueById('price-card-1');
    console.log(title , price);
    const div=document.createElement('div');
    div.innerHTML=` <div class="flex items-center justify-between gap-5 mb-5 bg-white rounded-sm px-3">
    <div class="p-2"> <img class="border text-[#d7d6c5] rounded-full h-15 w-15" src="${img_src}"> </div>
    <div> <h2 class="font-bold">${title}</h2> </div>
    <div><h2 class="text-red-600 font-bold">$ ${price}</h2> </div>
    <div> <button class="btn bg-white border-none"><i class="fa-solid fa-trash "></i></button></div>
    </div>
    `
    document.getElementById('my-cart').appendChild(div);

    // delete button
    
})