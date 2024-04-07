const banner = {
    pageTitle: '',
};
const containerOne = {
    mainTitle: '',
    contentOne: '',
    boxOne: '',
    buttonOne: '',
    boxTwo: '',
    buttonTwo: '',
};
const containerTwo = {
    subTitle: '',
    contentTwo: '',
    boxThree: '',
    buttonThree: '',
    boxFour: '',
    buttonFour: '',
};

fetch('intro.json')
    .then(response => response.json())
    .then(data => {
        banner.pageTitle = data[0].banner.pageTitle;
        containerOne.mainTitle = data[1].containerOne.mainTitle;
        containerOne.contentOne = data[1].containerOne.contentOne;
        containerOne.boxOne = data[1].containerOne.boxOne;
        containerOne.buttonOne = data[1].containerOne.buttonOne;
        containerOne.boxTwo = data[1].containerOne.boxTwo;
        containerOne.buttonTwo = data[1].containerOne.buttonTwo;
        containerTwo.subTitle = data[1].containerTwo.subTitle;
        containerTwo.contentTwo = data[1].containerTwo.contentTwo;
        containerTwo.boxThree = data[1].containerTwo.boxThree;
        containerTwo.buttonThree = data[1].containerTwo.buttonThree;
        containerTwo.boxFour = data[1].containerTwo.boxFour;
        containerTwo.buttonFour = data[1].containerTwo.buttonFour;

        localStorage.setItem('banner', JSON.stringify(banner));
        localStorage.setItem('containerOne', JSON.stringify(containerOne));
        localStorage.setItem('containerTwo', JSON.stringify(containerTwo));
    })
    .catch(error => console.error('Error fetching data:', error));
//Edit button One
function openEditorOne() {
    var modal = document.getElementById("editModalOne");
    modal.style.display = "block";
    // Populate text areas with current content
    document.getElementById("editedMainTitleOne").value = document.querySelector(".main-title-one").innerText;
    document.getElementById("editedParaOne").value = document.querySelector(".paraOne").innerText;
}
// Function to close the editor modal
function closeEditorOne() {
    var modal = document.getElementById("editModalOne");
    modal.style.display = "none";
}

// Function to save changes made in the editor modal
function saveChangesOne() {
    var newMainHeadingOne = document.getElementById("editedMainTitleOne").value;
    var newParaOne = document.getElementById("editedParaOne").value;

    document.querySelector(".main-title-one").innerText = newMainHeadingOne;
    document.querySelector(".paraOne").innerText = newParaOne;
    closeEditorOne();
}

//Edit button Two
function openEditorTwo() {
    var modal = document.getElementById("editModalTwo");
    modal.style.display = "block";
    // Populate text areas with current content
    document.getElementById("editedMainTitleTwo").value = document.querySelector(".main-title-two").innerText;
    document.getElementById("editedContentOne").value = document.querySelector(".paraTwo").innerText;
}
// Function to close the editor modal
function closeEditorTwo() {
    var modal = document.getElementById("editModalTwo");
    modal.style.display = "none";
}
// Function to save changes made in the editor modal
function saveChangesTwo() {
    var newMainHeadingTwo = document.getElementById("editedMainTitleTwo").value;
    var newParaTwo = document.getElementById("editedContentOne").value;

    document.querySelector(".main-title-two").innerText = newMainHeadingTwo;
    document.querySelector(".paraTwo").innerText = newParaTwo;
    closeEditorTwo();
}

