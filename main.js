function loadData(){
    return fetch('data/data.json').then(response =>response.json())
    .then(json => json.items);
}
const ul = document.querySelector('.items');

function display(items){
    
    ul.innerHTML = items.map(item=>createHtmlString(item)).join('');
}

function createHtmlString(item){
    return `
    <li class="item">
        <img src="${item.image}" alt=${item.type} class=item__thumbnail>
        <span class=item__description>${item.gender},${item.size}</span>
    </li>`;
}

function setEventListeners(item){
    const logo = document.querySelector('.logo');
    const btn = document.querySelector('.select');
    logo.addEventListener('click',()=>{
        display(item);
    });
   btn.addEventListener('click', e=>oneClick(e,item))
}

function displayType(items){
    ul.innerHTML = items.map(item=>createHtmlString(item)).join('');
}

function oneClick(e,items){
    const dataset = e.target.dataset;
    const key = dataset.key;
    const value = dataset.value;
    console.log(items)
    const filt=items.filter(item=> item[key]===value);
    displayType(filt);
}
loadData().then(items=>{
    display(items);
    setEventListeners(items);
})
