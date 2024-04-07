const banner = {
    pageTitle: '',
    description: '',
};
const intro = {
    mainTitle: '',
    introContent: '',
};
const contentOne = {
    subOne: '',
    subOneContentOne: '',
    animals: [],
    subOneContentTwo: '',
    activities: []
};
const contentTwo = {
    subTwo: '',
    subTwoContentOne: ''
};
const articles = {
    articleTitle: '',
};
const blogOne = {
    boxOne: '',
    boxOneContent: '',
    buttonOne: ''
};
const blogTwo = {
    boxTwo: '',
    boxTwoContent: '',
    buttonTwo: ''
};
const blogThree = {
    boxThree: '',
    boxThreeContent: '',
    buttonThree: ''
};

fetch('index.json')
    .then(response => response.json())
    .then(data => {
        banner.pageTitle = data[0].banner.pageTitle;
        banner.description = data[0].banner.description;
        intro.mainTitle = data[1].intro.mainTitle;
        intro.introContent = data[1].intro.introContent;
        contentOne.subOne = data[2].contentOne.subOne;
        contentOne.subOneContentOne = data[2].contentOne.subOneContentOne;
        contentOne.animals = data[2].contentOne.animals;
        contentOne.subOneContentTwo = data[2].contentOne.subOneContentTwo;
        contentOne.activities = data[2].contentOne.activities;
        contentTwo.subTwo = data[2].contentTwo.subTwo;
        contentTwo.subTwoContentOne = data[2].contentTwo.subTwoContentOne;
        articles.articleTitle = data[3].articles.articleTitle;
        blogOne.boxOne = data[3].blogOne.boxOne;
        blogOne.boxOneContent = data[3].blogOne.boxOneContent;
        blogOne.buttonOne = data[3].blogOne.buttonOne;
        blogTwo.boxTwo = data[3].blogTwo.boxTwo;
        blogTwo.boxTwoContent = data[3].blogTwo.boxTwoContent;
        blogTwo.buttonTwo = data[3].blogTwo.buttonTwo;
        blogThree.boxThree = data[3].blogThree.boxThree;
        blogThree.boxThreeContent = data[3].blogThree.boxThreeContent;
        blogThree.buttonThree = data[3].blogThree.buttonThree;

        localStorage.setItem('banner', JSON.stringify(banner));
        localStorage.setItem('intro', JSON.stringify(intro));
        localStorage.setItem('contentOne', JSON.stringify(contentOne));
        localStorage.setItem('contentTwo', JSON.stringify(contentTwo));
        localStorage.setItem('articles', JSON.stringify(articles));
        localStorage.setItem('blogOne', JSON.stringify(blogOne));
        localStorage.setItem('blogTwo', JSON.stringify(blogTwo));
        localStorage.setItem('blogThree', JSON.stringify(blogThree));
    })
    .catch(error => console.error('Error fetching data:', error));

//Edit button One
function openEditorOne() {
    var modal = document.getElementById("editModalOne");
    modal.style.display = "block";
    // Populate text areas with current content
    document.getElementById("editedHeadingOne").value = document.querySelector("#titleOne").innerText;
    document.getElementById("editedParagraphOne").value = document.querySelector("#contentOne").innerText;
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
    document.querySelector("#titleOne").innerText = newHeadingOne;
    document.querySelector("#contentOne").innerText = newParagraphOne;
    closeEditorOne();
}
//Edit button Two
function openEditorTwo() {
    var modal = document.getElementById("editModalTwo");
    modal.style.display = "block";
    // Populate text areas with current content
    document.getElementById("editedHeadingTwo").value = document.querySelector("#titleTwo").innerText;
    document.getElementById("editedParagraphTwoOne").value = document.querySelector("#contentTwoOne").innerText;
    var listOneContent = "";
    var listOneItems = document.querySelectorAll("#listOne li");
    listOneItems.forEach(function(item) {
        listOneContent += item.textContent + "\n";
    });
    document.getElementById("editedListOne").value = listOneContent;
    document.getElementById("editedParagraphTwoTwo").value = document.querySelector("#contentTwoTwo").innerText;
    var listTwoContent = "";
    var listTwoItems = document.querySelectorAll("#listTwo li");
    listTwoItems.forEach(function(item) {
        listTwoContent += item.textContent + "\n";
    });
    document.getElementById("editedListTwo").value = listTwoContent;
}
// Function to close the editor modal
function closeEditorTwo() {
    var modal = document.getElementById("editModalTwo");
    modal.style.display = "none";
}
// Function to save changes made in the editor modal
function saveChangesTwo() {
    var newHeadingTwo = document.getElementById("editedHeadingTwo").value;
    var newParagraphTwoOne = document.getElementById("editedParagraphTwoOne").value;
    var newListOne = document.getElementById("editedListOne").value.trim();
    var newParagraphTwoTwo = document.getElementById("editedParagraphTwoTwo").value;
    var newListTwo = document.getElementById("editedListTwo").value.trim();
    document.querySelector("#titleTwo").innerText = newHeadingTwo;
    document.querySelector("#contentTwoOne").innerText = newParagraphTwoOne;
    var listOneItems = newListOne.split('\n').map(function(item) {
        return "<li>" + item + "</li>";
    }).join('');
    document.getElementById("listOne").innerHTML = listOneItems;
    document.querySelector("#contentTwoTwo").innerText = newParagraphTwoTwo;
    var listTwoItems = newListTwo.split('\n').map(function(item) {
        return "<li>" + item + "</li>";
    }).join('');
    document.getElementById("listTwo").innerHTML = listTwoItems;
    closeEditorTwo();
}

//Edit button Three
function openEditorThree() {
    var modal = document.getElementById("editModalThree");
    modal.style.display = "block";
    // Populate text areas with current content
    document.getElementById("editedHeadingThree").value = document.querySelector("#titleThree").innerText;
    document.getElementById("editedParagraphThree").value = document.querySelector("#contentThree").innerText;
}
// Function to close the editor modal
function closeEditorThree() {
    var modal = document.getElementById("editModalThree");
    modal.style.display = "none";
}
// Function to save changes made in the editor modal
function saveChangesThree() {
    var newHeadingThree = document.getElementById("editedHeadingThree").value;
    var newParagraphThree = document.getElementById("editedParagraphThree").value;
    document.querySelector("#titleThree").innerText = newHeadingThree;
    document.querySelector("#contentThree").innerText = newParagraphThree;
    closeEditorThree();
}
