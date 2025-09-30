

const accesskey = "hHG-UFZs2iF9nTT35EfHX7xKg3RkonzyEfrOhkh08Lg";
const formEl = document.querySelector("form")
const searchInputEl = document.getElementById("search-input");
const searchResultEl = document.querySelector(".search-results");
const showMOreButtonEl = document.getElementById("show-more-button")

let inputData = "";
let page = 1;

async function searchImage(){
    inputData = searchInputEl.value
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accesskey}`
    console.log(url);
    const response = await fetch(url);
    const data =await response.json();
        if(page === 1) {
            searchResultEl.innerHTML= "";
        }
    
    const results = data.results;

    results.map((result)=>{
        const imageWraper = document.createElement("div")
        imageWraper.classList.add("search-result");
        const image = document.createElement("img")
        image.src = result.urls.small;
        image.alt = result.alt_description;
        const imageLink = document.createElement("a")
        imageLink.href = result.links.html
        imageLink.target = "_blank";
        imageLink.textContent = result.alt_description;


        imageWraper.appendChild(image);
        imageWraper.appendChild(imageLink);
        searchResultEl.appendChild(imageWraper)
        
    })
        page++

        if(page > 1){
            showMOreButtonEl.style.display = "block"
        }

    
}

formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    page = 1;
    searchImage();
})



showMOreButtonEl.addEventListener("click", ()=>{
    searchImage()
})