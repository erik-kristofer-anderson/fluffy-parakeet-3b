
document.addEventListener('DOMContentLoaded', (e) => {
    console.log("DOM FULLY LOADED AND PARSED IN 'page-views.js'");
    incrementPageViews();
    displayPageViews();
    document.getElementById("page-view-reset").addEventListener("click", resetPageViews);
});





function displayPageViews() {
    document.getElementById("page-views-display").textContent = 'Tracking: you have visited this page ' +
        getPageViews() + ' times.'

}

function resetPageViews() {
    localStorage.clear();
    document.getElementById("page-views-display").textContent =  'Tracking: you have visited this page ' +
        '0 times.'
    document.getElementById("page-view-reset").textContent = 'Tracking data deleted. Have a nice day!'

}


function incrementPageViews () {
    let num;
    let pageViews = localStorage.getItem("numPageViews");
    if (pageViews) {
        num = getPageViews() + 1;
    } else {
        num = 1
    }
    setPageViews(num)
}

function getPageViews() {
    let strVal = localStorage.getItem("numPageViews");
    return parseInt(strVal);
}

function setPageViews(num) {
    localStorage.setItem("numPageViews", num);
}







/**
 * Need to do:
 * - Add a new page view & timestamp
 * - list the page views & timestamps
 */

const pageViewsKeyName = "pageviews";
// const moment = require('moment')


/**
 * Add the current page path + timestamp to the pageviews entry in local storage
 */
function addPageView() {
    /**
     * In order to add a page view,
     * we have to first check if there are any page views set
     * and if not, then we need to create the array first
     * afterward, or if the array already existed, we want to append to the array
     */
    let pageViews = localStorage.getItem(pageViewsKeyName);
    let arr = [];
    console.log(pageViews)
    if (pageViews && pageViews.length > 0) {
        // get the array stored in local storage at pageViewsKeyName
        arr = JSON.parse(pageViews);
    }

    // now we're able to insert an item in the page view data
    let newPageData = {
        "path": window.location.pathname,
        "timestamp": moment()
    };

    // now add new page data to the array
    arr.push(newPageData);
    console.log(arr);

    // finally, we want to update our storage with the most up to date array
    localStorage.setItem(pageViewsKeyName, arr.toString());
}

function listPageViews() {

}
