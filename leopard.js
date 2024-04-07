const banner = {
    pageTitle: '',
};
const intro = {
    title: '',
    paraOne: '',
    paraTwo: '',
    parkOneTitle: '',
    parkOneContent: '',
    parkTwoTitle: '',
    parkTwoContent: '',
    parkThreeTitle: '',
    parkThreeContent: '',
};
const threats= {
    title: '',
    subTitleOne: '',
    harm:'',
    subTitleTwo: '',
    actions:'',
};

fetch('leopard.json')
    .then(response => response.json())
    .then(data => {
        banner.pageTitle = data[0].banner.pageTitle;
        intro.title = data[1].intro.title;
        intro.paraOne = data[1].intro.paraOne;
        intro.paraTwo = data[1].intro.paraTwo;
        intro.parkOneTitle=data[1].intro.parkOneTitle;
        intro.parkOneContent=data[1].intro.parkOneContent;
        intro.parkTwoTitle=data[1].intro.parkTwoTitle;
        intro.parkTwoContent=data[1].intro.parkTwoContent;
        intro.parkThreeTitle=data[1].intro.parkThreeTitle;
        intro.parkThreeContent=data[1].intro.parkThreeContent;
        threats.title=data[2].threats.title;
        threats.subTitleOne=data[2].threats.subTitleOne;
        threats.harm=data[2].threats.harm;
        threats.subTitleTwo=data[2].threats.subTitleTwo;
        threats.actions=data[2].threats.actions;

        localStorage.setItem('banner', JSON.stringify(banner));
        localStorage.setItem('intro', JSON.stringify(intro));
        localStorage.setItem('threats', JSON.stringify(threats));
    })
    .catch(error => console.error('Error fetching data:', error));

//Edit button One
function openEditorOne() {
    var modal = document.getElementById("editModalOne");
    modal.style.display = "block";
    // Populate text areas with current content
    document.getElementById("editedHeadingOne").value = document.querySelector("#titleOne").innerText;
    document.getElementById("editedParaOne").value = document.querySelector("#paraOne").innerText;
    document.getElementById("editedParkHeadingOne").value = document.querySelector(".sub-title-one").innerText;
    document.getElementById("editedParkParaOne").value = document.querySelector("#paraTwo").innerText;
    document.getElementById("editedParkHeadingTwo").value = document.querySelector(".sub-title-two").innerText;
    document.getElementById("editedParkParaTwo").value = document.querySelector("#paraThree").innerText;
    document.getElementById("editedParkHeadingThree").value = document.querySelector(".sub-title-three").innerText;
    document.getElementById("editedParkParaThree").value = document.querySelector("#paraFour").innerText;
}
// Function to close the editor modal
function closeEditorOne() {
    var modal = document.getElementById("editModalOne");
    modal.style.display = "none";
}
// Function to save changes made in the editor modal
function saveChangesOne() {
    var newHeadingOne = document.getElementById("editedHeadingOne").value;
    var newParagraph = document.getElementById("editedParaOne").value;
    var newParkTitleOne = document.getElementById("editedParkHeadingOne").value;
    var newParkParaOne = document.getElementById("editedParkParaOne").value;
    var  newParkTitleTwo = document.getElementById("editedParkHeadingTwo").value;
    var newParkParaTwo = document.getElementById("editedParkParaTwo").value;
    var  newParkTitleThree = document.getElementById("editedParkHeadingThree").value;
    var newParkParaThree = document.getElementById("editedParkParaThree").value;

    document.querySelector("#titleOne").innerText = newHeadingOne;
    document.querySelector("#paraOne").innerText = newParagraph;
    document.querySelector(".sub-title-one").innerText = newParkTitleOne;
    document.querySelector("#paraTwo").innerText = newParkParaOne;
    document.querySelector(".sub-title-two").innerText = newParkTitleTwo;
    document.querySelector("#paraThree").innerText = newParkParaTwo;
    document.querySelector(".sub-title-three").innerText = newParkTitleThree;
    document.querySelector("#paraFour").innerText = newParkParaThree;

    closeEditorOne();
}

//Edit button Two
function openEditorTwo() {
    var modal = document.getElementById("editModalTwo");
    modal.style.display = "block";
    // Populate text areas with current content
    document.getElementById("editedHeadingTwo").value = document.querySelector("#titleTwo").innerText;
    document.getElementById("editedSubHeadingOne").value = document.querySelector("#subTitleOne").innerText;
    var listOne = "";
    var listOneItems = document.querySelectorAll("#listOne li");
    listOneItems.forEach(function(item) {
        listOne += item.textContent + "\n";
    });
    document.getElementById("editedListOne").value = listOne;
    document.getElementById("editedSubHeadingTwo").value = document.querySelector("#subTitleTwo").innerText;
    var listTwo = "";
    var listTwoItems = document.querySelectorAll("#listTwo li");
    listTwoItems.forEach(function(item) {
        listTwo += item.textContent + "\n";
    });
    document.getElementById("editedListTwo").value = listTwo;
}
// Function to close the editor modal
function closeEditorTwo() {
    var modal = document.getElementById("editModalTwo");
    modal.style.display = "none";
}
// Function to save changes made in the editor modal
function saveChangesTwo() {
    var newHeadingOne = document.getElementById("editedHeadingTwo").value;
    var newSubHeadingOne = document.getElementById("editedSubHeadingOne").value;
    var newListOne = document.getElementById("editedListOne").value.trim();
    var newSubHeadingTwo = document.getElementById("editedSubHeadingTwo").value;
    var newListTwo = document.getElementById("editedListTwo").value.trim();


    document.querySelector("#titleTwo").innerText = newHeadingOne;
    document.querySelector("#subTitleOne").innerText = newSubHeadingOne;
    var listOneItems = newListOne.split('\n').map(function(item) {
        return "<li>" + item + "</li>";
    }).join('');
    document.getElementById("listOne").innerHTML = listOneItems;
    document.querySelector("#subTitleTwo").innerText = newSubHeadingTwo;
    var listTwoItems = newListTwo.split('\n').map(function(item) {
        return "<li>" + item + "</li>";
    }).join('');
    document.getElementById("listTwo").innerHTML = listTwoItems;

    closeEditorTwo();
}