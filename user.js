const menu = {
    menuTitle: '',
};
const gridData = {
    title:'',
    gridOne:'',
    gridTwo:'',
    gridThree:'',
    gridFour:'',
    gridFive:'',
    gridSix:'',
    gridSeven:'',
    gridEight:'',
    gridNine:'',
};


fetch('user.json')
    .then(response => response.json())
    .then(data => {
        menu.menuTitle=data[0].menu.menuTitle;
        gridData.title=data[1].gridData.title;
        gridData.gridOne=data[1].gridData.gridOne;
        gridData.gridTwo=data[1].gridData.gridTwo;
        gridData.gridThree=data[1].gridData.gridThree;
        gridData.gridFour=data[1].gridData.gridFour;
        gridData.gridFive=data[1].gridData.gridFive;
        gridData.gridSix=data[1].gridData.gridSix;
        gridData.gridSeven=data[1].gridData.gridSeven;
        gridData.gridEight=data[1].gridData.gridEight;
        gridData.gridNine=data[1].gridData.gridNine;

        localStorage.setItem('menu', JSON.stringify(menu));
        localStorage.setItem('gridData', JSON.stringify(gridData));
    })
    .catch(error => console.error('Error fetching data:', error));


// JS to toggling the menu//

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const closeBtn = document.getElementById('close-btn');
    const menu = document.getElementById('menu');

    // Function to open the menu
    function openMenu() {
        menu.style.height = 'auto';
        menu.style.display = 'block';
        closeBtn.style.display = 'block';
        menuToggle.style.display = 'none';
    }

    // Function to close the menu
    function closeMenu() {
        menu.style.height = '0';
        menu.style.display = 'none';
        closeBtn.style.display = 'none';
        menuToggle.style.display = 'block';
    }

    // Event listener for menu toggle button
    menuToggle.addEventListener('click', function () {
        openMenu();
    });

    // Event listener for close button
    closeBtn.addEventListener('click', function () {
        closeMenu();
    });

    // Event listener for window resize to close menu
    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            closeMenu();
        }
    });
});


    


    

