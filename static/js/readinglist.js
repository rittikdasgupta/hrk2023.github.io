async function readingListAPI(){
    const readingListUrl = "https://script.google.com/macros/s/AKfycby5nVLNnIt458PMk4psYXRuAjZ1pOtAnvW8D3DFn4p8wE6y6CwdUeFFz8chhxpsLYsFlw/exec?path=readinglist";

    let response = await fetch(readingListUrl)

    let data = await response.json()

    let readingList = document.getElementById("readinglist");

    for(let i = 0; i < data.length; i++){
        imgUrl = `https://covers.openlibrary.org/b/isbn/${data[i].isbn}`
        if (data[i].id.toString().length > 0) {
            imgUrl = `https://covers.openlibrary.org/b/id/${data[i].id}`
        }
        readingList.innerHTML +=
        `<div class="readinglist-item">
            <div class="readinglist-item-image">
                <img data-scroll alt="${data[i].book_name}" 
                src="${imgUrl}-M.jpg" class="rl-img">
            </div>
            <div class="readinglist-item-about">
                <div class="readinglist-title">${data[i].book_name}</div>
                <div class="readinglist-descriptions"><b>${data[i].tags}</b></div>
            </div>
        </div>`
    }

}

readingListAPI();
