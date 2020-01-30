document.addEventListener("DOMContentLoaded", function() {
    let form = document.getElementById("formBox");
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        let query = document.getElementById("userInput").value;

    fetch(`https://www.reddit.com/search.json?q=${query}`) 
        .then(function(infoBack) {
            return infoBack.json();
            // let jsonData = infoBack.json();
            // return jsonData;
        })
        .then(function(jsonRedditData) {
            
            let searchFile = jsonRedditData.data.children;

            // console.log(searchFile);

            
            let urlImgArray = searchFile.map(function(thingsIPulledOutFromSearchFile) {
                let finalImage = thingsIPulledOutFromSearchFile.data.url;
                // console.log(finalImage);
                return finalImage;
            })
            
            let url = "i.redd.it"

            let filteredArray = urlImgArray.filter(function(eachItemInArray) {
                return eachItemInArray.includes(url);
            })

            console.log(filteredArray);

            // document.getElementById("searched-image").src = filteredArray[0];
            
            // }
            let image = document.getElementById("searched-image");
            let slideShowIndex = 0;
            
            let interval = 0;
            setInterval(slide, 2000);
            function slide() {
               image.src = filteredArray[slideShowIndex++%filteredArray.length];
            
        }
        slide();
                
    })
    
    })
})