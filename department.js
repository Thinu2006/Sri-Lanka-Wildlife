const banner = {
    pageTitle: '',
};
const container = {
    title: '',
    content: '',
    button: '',
};
const gallery = {
    subTitle: '',
};

fetch('department.json')
    .then(response => response.json())
    .then(data => {
        banner.pageTitle = data[0].banner.pageTitle;
        container.title = data[1].container.title;
        container.content = data[1].container.content;
        container.button = data[1].container.button;
        gallery.subTitle = data[2].gallery.subTitle;

        localStorage.setItem('banner', JSON.stringify(banner));
        localStorage.setItem('container', JSON.stringify(container));
        localStorage.setItem('gallery', JSON.stringify(gallery));
    })
    .catch(error => console.error('Error fetching data:', error));


function openEditor() {
    var modal = document.getElementById("editModal");
    modal.style.display = "block";
    // Populate text areas with current content
    document.getElementById("editedTitle").value = document.querySelector(".main-title").innerText;
    document.getElementById("editedPara").value = document.querySelector("p").innerText;
}
// Function to close the editor modal
function closeEditor() {
    var modal = document.getElementById("editModal");
    modal.style.display = "none";
}
// Function to save changes made in the editor modal
function saveChanges() {
    var newHeading = document.getElementById("editedTitle").value;
    var newPara = document.getElementById("editedPara").value;

    document.querySelector(".main-title").innerText = newHeading;
    document.querySelector("p").innerText = newPara;
    closeEditor();
}
