const banner = {
    pageTitle: '',
};
const intro = {
    title: '',
    content: '',
};
const yalaData = {
    cardOneTitle: '',
    cardOneContent: '',
    cardTwoTitle: '',
    cardTwoContent: '',
    cardThreeTitle: '',
    cardThreeContent: '',
};

fetch('yala.json')
    .then(response => response.json())
    .then(data => {
        banner.pageTitle=data[0].banner.pageTitle;
        intro.title= data[1].intro.title;
        intro.content=data[1].intro.content;
        yalaData.cardOneTitle=data[2].yalaData.cardOneTitle;
        yalaData.cardOneContent=data[2].yalaData.cardOneContent;
        yalaData.cardTwoTitle=data[2].yalaData.cardTwoTitle;
        yalaData.cardTwoContent=data[2].yalaData.cardTwoContent;
        yalaData.cardThreeTitle=data[2].yalaData.cardThreeTitle;
        yalaData.cardThreeContent=data[2].yalaData.cardThreeContent;

        localStorage.setItem('banner', JSON.stringify(banner));
        localStorage.setItem('intro', JSON.stringify(intro));
        localStorage.setItem('yalaData', JSON.stringify(yalaData));
    })
    .catch(error => console.error('Error fetching data:', error));
//Edit button One
function openEditorOne() {
    var modal = document.getElementById("editModalOne");
    modal.style.display = "block";
    // Populate text areas with current content
    document.getElementById("editedHeadingOne").value = document.querySelector(".main-title").innerText;
    document.getElementById("editedParagraphOne").value = document.querySelector(".paraOne").innerText;
}
// Function to close the editor modal
function closeEditorOne() {
    var modal = document.getElementById("editModalOne");
    modal.style.display = "none";
}
// Function to save changes made in the editor modal
function saveChangesOne() {
    var newHeadingOne = document.getElementById("editedHeadingOne").value;
    var newParagraphOne = document.getElementById("editedParagraphOne").value;

    document.querySelector(".main-title").innerText = newHeadingOne;
    document.querySelector(".paraOne").innerText = newParagraphOne;

    closeEditorOne();
}

//Edit button Two
function openEditorTwo() {
    var modal = document.getElementById("editModalTwo");
    modal.style.display = "block";
    // Populate text areas with current content
    document.getElementById("editedCardHeadingOne").value = document.querySelector("#cardOnetitle").innerText;
    document.getElementById("editedCardParaOne").value = document.querySelector("#paraOne").innerText;
    document.getElementById("editedCardHeadingTwo").value = document.querySelector("#cardTwoTitle").innerText;
    document.getElementById("editedCardParaTwo").value = document.querySelector("#paraTwo").innerText;
    document.getElementById("editedCardHeadingThree").value = document.querySelector("#cardThreeTitle").innerText;
    document.getElementById("editedCardParaThree").value = document.querySelector("#paraThree").innerText;
}
// Function to close the editor modal
function closeEditorTwo() {
    var modal = document.getElementById("editModalTwo");
    modal.style.display = "none";
}
// Function to save changes made in the editor modal
function saveChangesTwo() {
    var newCardHeadingOne = document.getElementById("editedCardHeadingOne").value;
    var newCardParagraphOne = document.getElementById("editedCardParaOne").value;
    var newCardHeadingTwo = document.getElementById("editedCardHeadingTwo").value;
    var newCardParagraphTwo = document.getElementById("editedCardParaTwo").value;
    var newCardHeadingThree = document.getElementById("editedCardHeadingThree").value;
    var newCardParagraphThree = document.getElementById("editedCardParaThree").value;

    document.querySelector("#cardOnetitle").innerText = newCardHeadingOne;
    document.querySelector("#paraOne").innerText = newCardParagraphOne;
    document.querySelector("#cardTwoTitle").innerText = newCardHeadingTwo;
    document.querySelector("#paraTwo").innerText = newCardParagraphTwo;
    document.querySelector("#cardThreeTitle").innerText = newCardHeadingThree;
    document.querySelector("#paraThree").innerText = newCardParagraphThree;

    closeEditorTwo();
}
