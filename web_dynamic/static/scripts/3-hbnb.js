// let amenity_ids = {}
let amenity_ids = []
$(document).ready(()=>{
    inputs = $("ul input:checkbox")
    inputs.change(function() {
        let amenity_id = $(this).data("id");
        $amenities_chosen = $(".amenities_chosen")

        // console.log($am)

        let item = $(this).data("name")
        if ($(this).prop("checked")) {
            // amenity_ids['amenity_id'] = amenity_id  //using dict
            amenity_ids.push(amenity_id)
            // item_to_add = ``
            $amenities_chosen.append(`<span>${item}</span>`)
        }
        else {
            let index = amenity_ids.indexOf(amenity_id);
            if (index !== -1) {line
                amenity_ids.splice(index, 1);
                $amenities_chosen.find(`span:contains("${item}")`).eq(0).remove();

        }

        // }
            // delete amenity_ids[amenity_id]  //using dict
        }
        // console.log("amenity_ids is ", amenity_ids)  
    })

    $.get("http://127.0.0.1:5001/api/v1/status/", function(data) {
    if (data.status == "OK") {
        $("#api_status").addClass("available");
    } else {
        $("#api_status").removeClass("available");
    }
    }, "json")
    

    // fetch("http://127.0.0.1:5001/api/v1/places_search/", {
    //     method:"POST",
    //     headers:{
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify({})
    // })
    // .then((res) => res.json())
    // .then((data) => {
        
    //     data.forEach((place) => {
    //         place_to_add = `
            // <article>
            // <div class="title_box">
            //     <h2>${place.name}</h2>
            //     <div class="price_by_night">$${place.price_by_night}</div>
            // </div>
            // <div class="information">
            //     <div class="max_guest">${place.max_guest} Guest</div>
            //         <div class="number_rooms">${place.number_rooms} Bedroom</div>
            //         <div class="number_bathrooms">${place.number_bathrooms} Bathroom</div>
            // </div>
            // <div class="user">
            //     </div>
            //     <div class="description">
            //     ${place.description}
            //     </div>
            // </article>
    //         `
    //         document.querySelector(".places").innerHTML += place_to_add
    //     })

    // })

    $.ajax({
        url: "http://127.0.0.1:5001/api/v1/places_search/",
        method: "POST",
        contentType: "application/json", // Set the content type to JSON
        data: JSON.stringify({}), // Send an empty JSON object in the request body
        success: function(data) {
          data.forEach(function(place) {
            const place_to_add = `
            <article>
            <div class="title_box">
                <h2>${place.name}</h2>
                <div class="price_by_night">$${place.price_by_night}</div>
            </div>
            <div class="information">
                <div class="max_guest">${place.max_guest} Guest</div>
                    <div class="number_rooms">${place.number_rooms} Bedroom</div>
                    <div class="number_bathrooms">${place.number_bathrooms} Bathroom</div>
            </div>
            <div class="user">
                </div>
                <div class="description">
                ${place.description}
                </div>
            </article>
            `;
            $(".places").append(place_to_add);
          });
        },
        error: function() {
          // Handle any errors that occur during the AJAX request here
          console.log("An error occurred while fetching the data.");
        }
      });
      

})