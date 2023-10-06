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

})