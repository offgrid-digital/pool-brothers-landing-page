$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav: false,

    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:false,

    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})




// const date = new Date();

// let day = date.getDate();
// let current_month = date.getMonth() + 1;
// let current_year = date.getFullYear();

// // This arrangement can be altered based on how we want the date's format to appear.




function setNextDate() {
    // Get current date
    var date = new Date();

    // Add five days to current date
    date.setDate(date.getDate() + 5);


    let day = date.getDate();
    let current_month = date.getMonth() + 1;
    let current_year = date.getFullYear();

    let currentDate = `${day}-${current_month}-${current_year}`;

    $("#next-date").text(currentDate)
}

function setCurrentMonth() {

    // Creating a date object
    var today = new Date();

    // Getting full month name (e.g. "June")
    var month = today.toLocaleString('default', { month: 'long' });

    // e.preventDefault();

    $("#current-month").text(month)
}


$(document).ready(function () {
    

    setCurrentMonth();
    setNextDate();


});






