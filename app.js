// // let selectTag=document.querySelectorAll("select")
// // console.log(selectTag)

// // selectTag.forEach(ele=>{
// //     return ele
// // })
// // console.log(selection)

// // Select all <select> elements
// let selectTags = document.querySelectorAll("select");

// // Loop through each <select> element and log its selected value
// selectTags.forEach(ele => {
//     // Log the <select> element itself
//     console.log(ele);
    
//     // Log the selected option's value of the current <select> element
//     ele.addEventListener("change", function() {
//         console.log("Selected value in " + ele.id + ": " + ele.value);
//     });
// });

// // Optionally, if you want to log the initial selected value as well:
// selectTags.forEach(ele => {
//     console.log("Initial selected value in " + ele.id + ": " + ele.value);
// });








//!java script code ....

let selectTags = document.querySelectorAll("select");
selectTags.forEach(ele=>{
    for (const code in countries) {
        let=selected;
        if(){

        }else{
            
        }
       console.log(countries[code])

      let option=` <option value="${code}">${countries[code]}</option>`
        ele.insertAdjacentHTML('beforeend', option)
    }
})
