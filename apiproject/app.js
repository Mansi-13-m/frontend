/*fetch('https://fakestoreapi.com/products').then((data)=>{
    //console.log(data);
    return data.json();

}).then((completedata)=>{
    console.log(completedata[2].title);
    //document.getelElementById('root').completedatainnerHTML=completedata[2].title;
    let data1="";
    completedata.map((values)=>{
        data1+= `<div class="card">
        <h1 class="tittle">${values.title}</h1>
        <img src=${values.image} alt="img" class="images">
        <p>${values.description}</p>
        <p class="category">${values.category}</p>
        <p class="price">${values.price}</p>
    </div>`
    });
    document.getElementById("cards").innerHTML=data1;
}).catch((err)=>{
    console.log(err);
})*/

fetch('https://dummyjson.com/products').then((data)=>{
    return data.json();
}).then((completedata)=>{
    let data1="";
    let data2="";
    completedata.products.map(function(e) {
        data1+=`<div class="card">
        <h1 class="title">${e.title}</h1>
        <img src="${e.images[0]}" alt="img" class="images">
        <p>${e.description}</p>
        <p class="category">${e.category}</p>
        <p class="price">${e.price}</p>
    </div>`
    data2+=`<datalist id="abc">
    <option>${e.title}<br><p>${e.price}</p></option>
    </datalist>`
    });
    document.getElementById("cards").innerHTML=data1;
    document.getElementById("abc").innerHTML=data2;
    
}).catch((err)=>{
    console.log(err);
})

const searchBar = document.getElementById('searchBar');
fetch('https://dummyjson.com/products').then((data)=>{
    return data.json();
}).then((completedata)=>{
    let data1="";
    let data2="";
    completedata.products.map(function(e) {
        data1+=`<div class="card">
        <h1 class="title">${e.title}</h1>
        <img src="${e.images[0]}" alt="img" class="images">
        <p>${e.description}</p>
        <p class="category">${e.category}</p>
        <p class="price">${e.price}</p>
        <button class="button">Add to Cart</button>
    </div>`
    data2+=`<datalist id="abc">
    <option>${e.title}<br><p>${e.price}</p></option>
    </datalist>`
    });
    document.getElementById("cards").innerHTML=data1;
    document.getElementById("abc").innerHTML=data2;
    
}).catch((err)=>{
    console.log(err);
})