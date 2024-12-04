function activeNavigTitle(content_file_key) {
    const nav_items = document.getElementsByClassName("nav-item")
    for (let index = 0; index < nav_items.length; index++) {
        console.log("index: ", index)
        console.log("content_file_key: ", content_file_key)
        console.log("nav_items[index].childNodes[0].className: ", nav_items[index].childNodes[0].className)
        nav_items[index].childNodes[0].className = "nav-link"
        if(nav_items[index].childNodes[0].id == content_file_key) {
            nav_items[index].childNodes[0].className = "nav-link active"
            console.log('nav_items[index].id: ', nav_items[index].id)
            console.log("innerText: ", nav_items[index].innerText)
            document.getElementsByTagName("title")[0].innerText=nav_items[index].innerText
        }
    }
}

async function fetchHTML(content_url) {
   console.log("content_url: ", content_url)
    let response = await fetch(content_url)
    let content = await response.text()
    console.log("content: ", content)
    let component = document.getElementById("component")
    component.innerHTML = content
}

function Component(content_url, content_file_key) {
    activeNavigTitle(content_file_key)
    fetchHTML(content_url)
}
async function fetchJson() {
    let component = document.getElementById("component")
    let innerHTML = '<h6>component_json_</h6>\n<p>Содержание ...</p>\n\n'
    // let responce = await fetch("https://my-json-server.typicode.com/typicode/demo/posts")
    //let responce = await fetch("https://vmarshirov.github.io/g06u28/030_js/data/0620.json")
    //let responce = await fetch("http://185.182.111.214:7628/tmp/g06u28.txt_api.json")
    let responce = await fetch("../2024_BWT2/bloks/component_json.json")
    let content = await responce.text()
    console.log("content: ", content)
    content = JSON.parse(content)
    // content = await responce.json()
    content = content.splice(0, 4)
    console.log(content)
}
    for (let key in content) {
        console.log(content[key].id, content[key].title)
        console.log(content[key])
    }
     innerHTML +=
    <form action="https://www.bing.com/search?" id="UserEnter" name="UserEnter" target="_blank">
    <input type="hidden"  name="q" value="search">
    
    innerHTML +=<div class="d-flex flex-wrap">
    for (key in content) {
        innerHTML += 
        <div class="border p-2 m-2" style="width: 220px;">
        <img src=${content[key].img} width="200px">
        <h6>${content[key].title}</h6>
        <p>${content[key].description}. Цена
        ${content[key].price} р.</p>
        <p>Количество
        <input type="hidden" name= "vendor_code" value=${content[key].vendor_code}></input>
        <input type="number" name="amount" value="0" style="width: 2.0rem;"></input>
        </p>
        </div>
    }
    {
    innerHTML +=
    </div>
    <button type="submit" class="btn btn-light">Оформить</button>
    
    console.log(innerHTML)
    component.innerHTML = innerHTML
}

function component_json(content_url, content_file_key) {
    activeNavigTitle(content_file_key)
    fetchJson()
}