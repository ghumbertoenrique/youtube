const filterButtons = document.querySelectorAll(".filter-btn");
const photos = document.querySelectorAll(".photo");

filterButtons.forEach( button => {
    button.addEventListener( "click", () => {
        const filterValue = button.getAttribute("data-filter");

        photos.forEach(photo => {
            photo.style.display = "none";
            if( filterValue === "all" || photo.classList.contains(filterValue)){
                photo.style.display = "block";
            }
        });
    });
});