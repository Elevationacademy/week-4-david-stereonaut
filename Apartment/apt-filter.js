//Only start playing with this file if you're done with all the basics

const must = (radio) => radio.filter(rb => rb.checked).length

const findRelevantApts = function (address, minPrice, maxPrice, minRooms, maxRooms, immediate, parking) {
    return apartments.filter(a =>
        a.address.toLowerCase().includes(address.toLowerCase() || "") &&
        a.price >= (minPrice || 0) &&
        a.price <= (maxPrice || a.price) &&
        a.rooms >= (minRooms || 0) &&
        a.rooms <= (maxRooms || a.rooms) &&
        (!immediate[0].checked || a.immediate) &&
        (!parking[0].checked || a.parking)
    )
}

const filter = (arr, cb) => {
    const newArr = []
    for (a in arr) {
        if (cb(a)) newArr.push(a)
    }
    return newArr
}

