function setActiveTab(tabName){
    const tab = tabName;
    const cssClassActiveMenuItem = 'tabs-data__menu-item--active';
    const cssClassActiveContentItem = 'tabs-data__tab-item--active';

    const newActiveTab = document.querySelector(".tabs-data__menu [data-name="+tab+"]");
    if(!newActiveTab) return false;

    const currentActiveTab = document.querySelector(".tabs-data__menu ."+cssClassActiveMenuItem)
    if(currentActiveTab){
        currentActiveTab.classList.remove(cssClassActiveMenuItem); //remove active from menu
        document.querySelector(".tabs-data__content-holder ."+cssClassActiveContentItem).classList.remove(cssClassActiveContentItem); //remove active from content
    }

    newActiveTab.classList.add(cssClassActiveMenuItem);
    document.querySelector(".tabs-data__content-holder [data-name="+tab+"]").classList.add(cssClassActiveContentItem);
}

function clickOnTab() {
    setActiveTab(this.getAttribute("data-name"));
}

const tabsMenuElements = document.getElementsByClassName("tabs-data__menu-item");

for (var i = 0; i < tabsMenuElements.length; i++) {
    tabsMenuElements[i].addEventListener('click', clickOnTab, false);
}

setActiveTab('paytable');


document.querySelector(".popup__close-btn").addEventListener('click', function(){
    alert('close screen');
}, false);