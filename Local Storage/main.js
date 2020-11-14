let wisdom = []

$("#store").on("click", () => {
    $("#text").empty()
    parsedWisdom = JSON.parse(localStorage.wisdom || "[]")
    wisdom.push({ text: $("input").val() })
    if (wisdom.length%2 === 0){
        localStorage.wisdom = JSON.stringify(wisdom)
    }
    render()
})

const render = function(){
    let parsed = JSON.parse(localStorage.wisdom || null)
    $("#text").empty()
    if (parsed){
        parsed.forEach(w => {
            $("#text").append(`<p>${w.text}</p><i class="fas fa-trash del"></i>`)
        })
    }
    
}

render()

$("#clear").on("click", () => {
    localStorage.removeItem('wisdom')
    render()
})

$("#text").on("click", ".fas", function(){
    let delText = $(this).closest("p").html()
    let parsed = JSON.parse(localStorage.wisdom)
    for (let i in parsed){
        if(parsed[i].text === delText){
            parsed.splice(i, 1)
        }
    }
    localStorage.wisdom = JSON.stringify(parsed)
    render()
})