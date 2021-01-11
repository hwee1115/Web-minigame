function loadData(){
    return fetch('data/data.json').then(response =>response.json())
    .then(json => json.items);
}

loadData().then(items=>{
    console.log(items);
})
