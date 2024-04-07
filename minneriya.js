const banner = {
    pageTitle: '',
};
const intro = {
    mainTitle: '',
    content: '',
    minneriya: '',

};
const tableData = {
    tabletitle: '',
    headerOne: '',
    headerTwo: '',
    headerThree: '',
    animalOne: '',
    animalOneData: '',
    animalTwo: '',
    animalTwoData: '',
    animalThree: '',
    animalThreeData: '',
    source: '',
};

fetch('minneriya.json')
    .then(response => response.json())
    .then(data => {
        banner.pageTitle=data[0].banner.pageTitle;
        intro.mainTitle=data[1].intro.mainTitle;
        intro.content=data[1].intro.content;
        intro.minneriya=data[1].intro.minneriya;
        tableData.tabletitle=data[2].tableData.tabletitle;
        tableData.headerOne=data[2].tableData.headerOne;
        tableData.headerTwo=data[2].tableData.headerTwo;
        tableData.headerThree=data[2].tableData.headerThree;
        tableData.animalOne=data[2].tableData.animalOne;
        tableData.animalOneData=data[2].tableData.animalOneData;
        tableData.animalTwo=data[2].tableData.animalTwo;
        tableData.animalTwoData=data[2].tableData.animalTwoData;
        tableData.animalThree=data[2].tableData.animalThree;
        tableData.animalThreeData=data[2].tableData.animalThreeData;
        tableData.source=data[2].tableData.source;

        localStorage.setItem('banner', JSON.stringify(banner));
        localStorage.setItem('intro', JSON.stringify(intro));
        localStorage.setItem('tableData', JSON.stringify(tableData));
    })
    .catch(error => console.error('Error fetching data:', error));

//Edit button One
function openEditorOne() {
    var modal = document.getElementById("editModalOne");
    modal.style.display = "block";
    // Populate text areas with current content
    document.getElementById("editedHeading").value = document.querySelector(".main-title").innerText;
    document.getElementById("editedParagraph").value = document.querySelector("p").innerText;
    var listContent = "";
    var listItems = document.querySelectorAll("#list li");
    listItems.forEach(function(item) {
        listContent += item.textContent + "\n";
    });
    document.getElementById("editedList").value = listContent;
}
// Function to close the editor modal
function closeEditorOne() {
    var modal = document.getElementById("editModalOne");
    modal.style.display = "none";
}
// Function to save changes made in the editor modal
function saveChangesOne() {
    var newHeading = document.getElementById("editedHeading").value;
    var newParagraph = document.getElementById("editedParagraph").value;
    var newList = document.getElementById("editedList").value.trim();
    document.querySelector(".main-title").innerText = newHeading;
    document.querySelector("p").innerText = newParagraph;
    var listItems = newList.split('\n').map(function(item) {
        return "<li>" + item + "</li>";
    }).join('');
    document.getElementById("list").innerHTML = listItems;
    closeEditorOne();
}


//Edit button Two
function openEditorTwo() {
    var modal = document.getElementById("editModalTwo");
    modal.style.display = "block";
    // Populate text areas with current content
    document.getElementById("editedMainHeading").value = document.querySelector("#tbTitle").innerText;
    document.getElementById("editedTbColHeadingOne").value = document.querySelector("#tbTitleOne").innerText;
    document.getElementById("editedTbColHeadingTwo").value = document.querySelector("#tbTitleTwo").innerText;
    document.getElementById("editedTbRowHeadingOne").value = document.querySelector(".nameOne").innerText;
    var listOneContent = "";
    var listOneItems = document.querySelectorAll("#tbListOne li");
    listOneItems.forEach(function(item) {
        listOneContent += item.textContent + "\n";
    });
    document.getElementById("editedListOne").value = listOneContent;
    document.getElementById("editedTbRowHeadingTwo").value = document.querySelector(".nameTwo").innerText;
    var listTwoContent = "";
    var listTwoItems = document.querySelectorAll("#tbListTwo li");
    listTwoItems.forEach(function(item) {
        listTwoContent += item.textContent + "\n";
    });
    document.getElementById("editedListTwo").value = listTwoContent;
    document.getElementById("editedTbRowHeadingThree").value = document.querySelector(".nameThree").innerText;
    var listThreeContent = "";
    var listThreeItems = document.querySelectorAll("#tbListThree li");
    listThreeItems.forEach(function(item) {
        listThreeContent += item.textContent + "\n";
    });
    document.getElementById("editedListThree").value = listThreeContent;
    document.getElementById("editedTbFooter").value = document.querySelector(".t-footer").innerText;
}
// Function to close the editor modal
function closeEditorTwo() {
    var modal = document.getElementById("editModalTwo");
    modal.style.display = "none";
}
// Function to save changes made in the editor modal
function saveChangesTwo() {
    var newTbHeading = document.getElementById("editedMainHeading").value;
    var newColHeadingThree = document.getElementById("editedTbColHeadingOne").value;
    var newColHeadingTwo = document.getElementById("editedTbColHeadingTwo").value;
    var newRowHeadingOne = document.getElementById("editedTbRowHeadingOne").value;
    var newTbListOne = document.getElementById("editedListOne").value.trim();
    var newRowHeadingTwo = document.getElementById("editedTbRowHeadingTwo").value;
    var newTbListTwo = document.getElementById("editedListTwo").value.trim();
    var newRowHeadingThree = document.getElementById("editedTbRowHeadingThree").value;
    var newTbListThree = document.getElementById("editedListThree").value.trim();
    var newTbFooter = document.getElementById("editedTbFooter").value;


    document.querySelector("#tbTitle").innerText = newTbHeading;
    document.querySelector("#tbTitleOne").innerText = newColHeadingThree;
    document.querySelector("#tbTitleTwo").innerText = newColHeadingTwo;
    document.querySelector(".nameOne").innerText = newRowHeadingOne;
    
    var listOneItems = newTbListOne.split('\n').map(function(item) {
        return "<li>" + item + "</li>";
    }).join('');
    document.getElementById("tbListOne").innerHTML = listOneItems;

    document.querySelector(".nameTwo").innerText = newRowHeadingTwo;

    var listTwoItems = newTbListTwo.split('\n').map(function(item) {
        return "<li>" + item + "</li>";
    }).join('');
    document.getElementById("tbListTwo").innerHTML = listTwoItems;

    document.querySelector(".nameThree").innerText = newRowHeadingThree;

    var listThreeItems = newTbListThree.split('\n').map(function(item) {
        return "<li>" + item + "</li>";
    }).join('');
    document.getElementById("tbListThree").innerHTML = listThreeItems;

    document.querySelector(".t-footer").innerText = newTbFooter;

    closeEditorTwo();
}
