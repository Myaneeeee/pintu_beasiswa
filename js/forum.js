document.addEventListener('DOMContentLoaded', (event) => {
    const modal = document.getElementById("newForumModal");
    const btn = document.getElementById("newForumBtn");
    const forumBar = document.getElementById("forumBar");
    const span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal
    btn.onclick = function() {  
        modal.style.display = "block";
        forumBar.style.display = "none";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
        forumBar.style.display = "flex"; // Use flex to ensure centering
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            forumBar.style.display = "flex"; // Use flex to ensure centering
        }
    }
});
