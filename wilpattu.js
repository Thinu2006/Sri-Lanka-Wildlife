const banner = {
    pageTitle: '',
};
const intro = {
    title: '',
    contentOne: '',
    contentTwo: '',
};
const wilpattuData = {
    cardOnetitle: '',
    cardOneContent: '',
    cardTwotitle: '',
    cardTwoContent: '',
    activities: '',
    cardThreetitle: '',
    cardThreeContentOne: '',
    cardThreeContentTwo: '',
};

fetch('wilpattu.json')
    .then(response => response.json())
    .then(data => {
        banner.pageTitle=data[0].banner.pageTitle;
        intro.title= data[1].intro.title;
        intro.contentOne=data[1].intro.contentOne;
        intro.contentTwo=data[1].intro.contentTwo;
        wilpattuData.cardOnetitle=data[2].wilpattuData.cardOnetitle;
        wilpattuData.cardOneContent=data[2].wilpattuData.cardOneContent;
        wilpattuData.cardTwotitle=data[2].wilpattuData.cardTwotitle;
        wilpattuData.cardTwoContent=data[2].wilpattuData.cardTwoContent;
        wilpattuData.Wilpattu=data[2].wilpattuData.Wilpattu;
        wilpattuData.cardThreetitle=data[2].wilpattuData.cardThreetitle;
        wilpattuData.cardThreeContentOne=data[2].wilpattuData.cardThreeContentOne;
        wilpattuData.cardThreeContentTwo=data[2].wilpattuData.cardThreeContentTwo;
        localStorage.setItem('banner', JSON.stringify(banner));
        localStorage.setItem('intro', JSON.stringify(intro));
        localStorage.setItem('wilpattuData', JSON.stringify(wilpattuData));
    })
    .catch(error => console.error('Error fetching data:', error));

//Edit button One
function openEditorOne() {
    var modal = document.getElementById("editModalOne");
    modal.style.display = "block";
    // Populate text areas with current content
    document.getElementById("editedHeadingOne").value = document.querySelector(".main-title").innerText;
    document.getElementById("editedParagraphOne").value = document.querySelector(".paraOne").innerText;
    document.getElementById("editedParagraphTwo").value = document.querySelector(".paraTwo").innerText;
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
    var newParagraphTwo = document.getElementById("editedParagraphTwo").value;

    document.querySelector(".main-title").innerText = newHeadingOne;
    document.querySelector(".paraOne").innerText = newParagraphOne;
    document.querySelector(".paraTwo").innerText = newParagraphTwo;

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
    var listContent = "";
    var listItems = document.querySelectorAll("#listOne li");
    listItems.forEach(function(item) {
        listContent += item.textContent + "\n";
    });
    document.getElementById("editedCardList").value = listContent;
    document.getElementById("editedCardHeadingThree").value = document.querySelector("#cardThreeTitle").innerText;
    document.getElementById("editedCardParaThree").value = document.querySelector("#paraThree").innerText;
    document.getElementById("editedCardParaFour").value = document.querySelector("#paraFour").innerText;
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
    var newListOne = document.getElementById("editedCardList").value.trim();
    var newCardHeadingThree = document.getElementById("editedCardHeadingThree").value;
    var newCardParagraphThree = document.getElementById("editedCardParaThree").value;
    var newCardParagraphFour = document.getElementById("editedCardParaFour").value;

    document.querySelector("#cardOnetitle").innerText = newCardHeadingOne;
    document.querySelector("#paraOne").innerText = newCardParagraphOne;
    document.querySelector("#cardTwoTitle").innerText = newCardHeadingTwo;
    document.querySelector("#paraTwo").innerText = newCardParagraphTwo;
    var listItems = newListOne.split('\n').map(function(item) {
        return "<li>" + item + "</li>";
    }).join('');
    document.getElementById("listOne").innerHTML = listItems;
    document.querySelector("#cardThreeTitle").innerText = newCardHeadingThree;
    document.querySelector("#paraThree").innerText = newCardParagraphThree;
    document.querySelector("#paraFour").innerText = newCardParagraphFour;

    closeEditorTwo();
}
