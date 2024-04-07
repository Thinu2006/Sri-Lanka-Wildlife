const banner = {
    pageTitle: '',
};
const main = {
    mainTitle: '',
    content: '',
    animalOneName: '',
    animalOneContent: '',
    animalTwoName: '',
    animalTwoContent: '',
    animalThreeName: '',
    animalThreeContent: '',
    subTitle: '',
    subContent: '',
    boxOneTitle: '',
    boxOneContent: '',
    boxOneButton: '',
    boxTwoTitle: '',
    boxTwoContent: '',
    boxTwoButton: '',

};

fetch('animal.json')
    .then(response => response.json())
    .then(data => {
        banner.pageTitle=data[0].banner.pageTitle;
        main.mainTitle=data[1].main.mainTitle
        main.content=data[1].main.content
        main.animalOneName=data[1].main.animalOneName
        main.animalOneContent=data[1].main.animalOneContent
        main.animalTwoName=data[1].main.animalTwoName
        main.animalTwoContent=data[1].main.animalTwoContent
        main.animalThreeName=data[1].main.animalThreeName
        main.animalThreeContent=data[1].main.animalThreeContent
        main.subTitle=data[1].main.subTitle
        main.subContent=data[1].main.subContent
        main.boxOneTitle=data[1].main.boxOneTitle
        main.boxOneContent=data[1].main.boxOneContent
        main.boxOneButton=data[1].main.boxOneButton
        main.boxTwoTitle=data[1].main.boxTwoTitle
        main.boxTwoContent=data[1].main.boxTwoContent
        main.boxTwoButton=data[1].main.boxTwoButton

        localStorage.setItem('banner', JSON.stringify(banner));
        localStorage.setItem('main', JSON.stringify(main));
    })
    .catch(error => console.error('Error fetching data:', error));

//Edit Button One
function openEditorOne() {
    var modal = document.getElementById("editModalOne");
    modal.style.display = "block";
    // Populate text areas with current content
    document.getElementById("editedHeadingOne").value = document.querySelector(".main-title").innerText;
    document.getElementById("editedParagraphOne").value = document.querySelector("#paraOne").innerText;
    document.getElementById("editedTbTitleOne").value = document.querySelector(".title-one").innerText;
    document.getElementById("editedTbContentOne").value = document.querySelector(".text-one").innerText;
    document.getElementById("editedTbTitleTwo").value = document.querySelector(".title-two").innerText;
    document.getElementById("editedTbContentTwo").value = document.querySelector(".text-two").innerText;
    document.getElementById("editedTbTitleThree").value = document.querySelector(".title-three").innerText;
    document.getElementById("editedTbContentThree").value = document.querySelector(".text-three").innerText;
}
// Function to close the editor modal
function closeEditorOne() {
    var modal = document.getElementById("editModalOne");
    modal.style.display = "none";
}
// Function to save changes made in the editor modal
function saveChangesOne() {
    var newHeading = document.getElementById("editedHeadingOne").value;
    var newParagraphOne = document.getElementById("editedParagraphOne").value;
    var newTbTitleOne = document.getElementById("editedTbTitleOne").value;
    var newTbParaOne = document.getElementById("editedTbContentOne").value;
    var newTbTitleTwo = document.getElementById("editedTbTitleTwo").value;
    var newTbParaTwo = document.getElementById("editedTbContentTwo").value;
    var newTbTitleThree = document.getElementById("editedTbTitleThree").value;
    var newTbParaThree = document.getElementById("editedTbContentThree").value;
    
    document.querySelector(".main-title").innerText = newHeading;
    document.querySelector("#paraOne").innerText = newParagraphOne;
    document.querySelector(".title-one").innerText = newTbTitleOne;
    document.querySelector(".text-one").innerText = newTbParaOne;
    document.querySelector(".title-two").innerText = newTbTitleTwo;
    document.querySelector(".text-two").innerText = newTbParaTwo;
    document.querySelector(".title-three").innerText = newTbTitleThree;
    document.querySelector(".text-three").innerText = newTbParaThree;
    closeEditorOne();
}

//Edit Button Two
function openEditorTwo() {
    var modal = document.getElementById("editModalTwo");
    modal.style.display = "block";
    // Populate text areas with current content
    document.getElementById("editedSubTitle").value = document.querySelector(".sub-title").innerText;
    document.getElementById("editedParagraphTwo").value = document.querySelector("#paraTwo").innerText;
    document.getElementById("editedBoxTitleOne").value = document.querySelector(".container-title-one").innerText;
    document.getElementById("editedParagraphThree").value = document.querySelector("#paraThree").innerText;
    document.getElementById("editedBoxTitleTwo").value = document.querySelector(".container-title-two").innerText;
    document.getElementById("editedParagraphFour").value = document.querySelector("#paraFour").innerText;
}
// Function to close the editor modal
function closeEditorTwo() {
    var modal = document.getElementById("editModalTwo");
    modal.style.display = "none";
}
// Function to save changes made in the editor modal
function saveChangesTwo() {
    var newSubHeading = document.getElementById("editedSubTitle").value;
    var newParagraphTwo = document.getElementById("editedParagraphTwo").value;
    var newBoxOne = document.getElementById("editedBoxTitleOne").value;
    var newParagraphThree = document.getElementById("editedParagraphThree").value;
    var newBoxTwo = document.getElementById("editedBoxTitleTwo").value;
    var newParagraphFour = document.getElementById("editedParagraphFour").value;
    
    document.querySelector(".sub-title").innerText = newSubHeading;
    document.querySelector("#paraTwo").innerText = newParagraphTwo;
    document.querySelector(".container-title-one").innerText = newBoxOne;
    document.querySelector("#paraThree").innerText = newParagraphThree;
    document.querySelector(".container-title-two").innerText = newBoxTwo;
    document.querySelector("#paraFour").innerText = newParagraphFour;
    closeEditorTwo();
}