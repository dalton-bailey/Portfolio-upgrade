 
 
 async function getHotelData() {
     try {
         const response = await fetch('DGM-2760/hotel/hotel.json')
         return await response.json() // Return the JSON object
     } catch (error) {
         console.error(error)
     }
 }

 let hotelData = {}
 getHotelData().then(data => hotelData = data)
 
// Store in a variable document.querySelectorAll("a")
// use that variable to loop over each element and addEventListener to each one. I suggest using forEach

// document.querySelector("#marriott").addEventListener('click', hotelInfo)
// let hotelName = document.querySelectorAll("a").addEventListener('click', hotelInfo)

let hotelName = document.querySelectorAll("a")

console.log(hotelName)

hotelName.forEach(name => {
    name.addEventListener('click',hotelInfo)
})

function hotelInfo(event) {
    let hotelChoice = hotelData.hotels.find(hotel => {
        return event.target.id === hotel.name.toLowerCase()
    })

    document.querySelector("#hotelName").textContent = `${hotelChoice.name} Hotel`
    document.querySelector('#address').textContent = `${hotelChoice.address}`
    document.querySelector('#rooms').textContent = `${hotelChoice.rooms}`
    document.querySelector('#gym').textContent = `${hotelChoice.gym}`
    document.querySelector('#type').textContent = `${hotelChoice.roomTypes}`
    document.querySelector('#picture').src = `${hotelChoice.picture}`



}



