
const resultSource = $("#result-template").html()
const resultTemplate = Handlebars.compile(resultSource)
const favsSource = $("#favs-template").html()
const favsTemplate = Handlebars.compile(favsSource)

const fetch = function() {
    $("#results").empty()
    $.get(`http://api.giphy.com/v1/gifs/search?q=${$("#input").val()}&api_key=j2Rcc2eiIWFfUwuJCusU5s8gjIJ92EML&limit=5`, function(result){
        let embedURLs = result.data.map(d => d.embed_url)
        embedURLs.forEach(function(url){
            let resultHTML = resultTemplate({src: url})
            $("#results").append(resultHTML)
        })
    })
}

$("#btn").on("click", fetch)
let favoriteGifs = []
const renderFavs = function(){
    favoriteGifs.forEach(f => {
        let favHTML = favsTemplate({src: f})
        $("#favs").append(favHTML)
    })
}

$("#results").on("click", ".add-fav", function(){
    $("#favs").empty()
    favoriteGifs.push(($(this).siblings("iframe").attr("src")))
    renderFavs()
})