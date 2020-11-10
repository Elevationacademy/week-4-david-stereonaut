const booksSource = $("#books-template").html()
const booksTemplate = Handlebars.compile(booksSource)

const fetch = function (queryType, queryValue) {
    $.ajax({
        method: "GET",
        url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
        success: function (data) {
            console.log(data)
            data.items.forEach(i => {
                let book = {
                    title: i.volumeInfo.title,
                    author: i.volumeInfo.authors[0],
                    isbn: i.volumeInfo.industryIdentifiers[0].identifier
                }
                let newHTML = booksTemplate(book)
                $("#results").append(newHTML)
            })
        },
        error: function (xhr, text, error) {
            console.log(text);
        }
    });
}

$("#btn").on("click", function () {
    $("#results").empty()
    fetch(($("#type-input").val()), ($("#val-input").val()))
})

const neruoscienceComputerBooks = []
let startIndex = 0
for (let i = 0; i < 3; i++) {
    $.get(`https://www.googleapis.com/books/v1/volumes?q=title:neuroscience&startIndex=${startIndex}&maxResults=40`, function (result) {
        result.items.forEach(function (i) {
            if (!(i.volumeInfo.categories === undefined)){
                if (i.volumeInfo.categories.some(c => c == "Computers")) {
                    neruoscienceComputerBooks.push(i.volumeInfo.title)
                }
            }
        })
    })
    startIndex += 40
}

console.log(neruoscienceComputerBooks)