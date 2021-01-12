function loadData(){
    return fetch('data/data.json')
    .then(response=>response.json())
    .then(json => json.items)
}

function createElement(item){
    console.log(item)
    const img = document.createElement('img');
    img.setAttribute('class','item__thumbnail')
    img.setAttribute('src',item.image);
    const span = document.createElement('span');
    span.setAttribute('class','item__description')
    span.innerHTML=`${item.gender},${item.size}`
    const li =document.createElement('li');
    li.setAttribute('class','item')
    li.setAttribute('data-type', item.type);
    li.setAttribute('data-color', item.color);
    li.append(img);
    li.append(span);
    return li;
}

function updateItems(items,key,value){
    items.forEach(item =>{
        if(item.dataset[key]===value){
            item.classList.remove('invisible')
        }else{
            item.classList.add('invisible')
        }
    })
}

function oneClick(event, items){
    const target= event.target;
    const key = target.dataset.key;
    const value = target.dataset.value;
    updateItems(items,key,value);
}

loadData().then(items=>{
    const ul = document.querySelector('.items');
    const list = items.map(createElement);
    console.log(list)
    ul.append(...list);
    const btn = document.querySelector('.select').addEventListener('click', event=>{
        oneClick(event,list);
    })
})

