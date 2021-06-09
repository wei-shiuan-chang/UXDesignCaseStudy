function ChangeSummary() {
    var pageInfo = document.getElementById("info");
    pageInfo.textContent = "People all go grocery shopping. The average time Americans spend on groceries is about 60 hours per year. Many shoppers want stores to share the inventory information, like availability and price. Also, grocery habits have dramatically changed since the pandemic. More and more people start shopping online than drive to the grocery store. Our group proposes to design a new system that can provide product availability, product price, and delivery service to people with a better shopping experience.";
}

function ChangeDescription() {
    var pageInfo = document.getElementById("info");
    pageInfo.innerHTML = "People share the same experience of standing in front of the shelf without the product on their shopping list, and they sometimes cannot find the product in several grocery stores. Most customers spend lots of time collecting all items they want and comparing the price in different places which make grocery shopping a time consuming work. To solve this problem, we first clarified user need: <br>\n \
    <br>1. Product availability<br> \
    &emsp;To know the product availability can prevent unnecessary attempts for customers finding nothing in the store.<br> \
        <br>2. Product price <br> \
    &emsp;When the product is not just available in one place, it is good for customers to buy it with the lowest price.<br> \
        <br>3. Delivery service<br> \
    &emsp;It is good for customers to get all products in the convenient way they want, including curbside pickup, in-store pickup or delivery.";
    ChangeHeader("<h1>Description</h1>")
}

function ChangeTest() {
    var pageInfo = document.getElementById("info");
    pageInfo.textContent = "The developing stages will start with sketches and then move to higher-fidelity prototypes. The design of user interfaces will mostly focus on usability, accessibility, privacy, security, robustness, and speed. User interface should be easy to understand and use for the users. One of the goals is to don't make users go through a maze to find a product they have in mind. Our system will be required to create an account using a verified email address therefore accounts information will be kept confidential and secure. Moreover, the system should work all the time in any circumstance. If there is a failure, user information must be secure.\
    The idea in early stages is that the system will be implemented as a phone application for both IOS and Android. The idea is to notify the user as soon as the item is available and can be used at any circumstance. Thus, as developers, we are thinking of creating a phone application. \
    There is a time constraint that we are facing which is eight weeks. During this time, we are going to have user interaction with potential users for the system. The data we are going to collect will have a major impact on developing the user interface. Also, when there is a version of a prototype available for the user interface, we are going to interact with users to get feedback.   Finally, the final product will be at prototype development.";
    ChangeHeader("<h1>Develop and Test</h1>")
}

function ChangeAnalysis() {
    var pageInfo = document.getElementById("info");
    pageInfo.innerHTML = '<div style="padding-left: 250px" class="container"><div class="row" justify-content-center><div class="col"><img style="padding-left:50px; padding-top:50px;" src="img/icon/HotStockLogo.png" height="200" width="200"></div><div style="padding-top:150px; font-size:40px" class="col">HotStock</div></div><div class="row" justify-content-center><div class="col"><img style="padding-left:20px; padding-top:50px;" src="img/icon/AmazonFreshLogo.png" height="200" width="230" ></div><div style="padding-top:100px; font-size:40px" class="col">Amazon Fresh</div></div><div class="row" justify-content-center align-items-center><div class="col"><img style="padding-left:50px; padding-top:50px;" src="img/icon/InstacartLogo.png" height="200" width="200"></div><div style="padding-top:100px; font-size:40px" class="col" align-self-center>InstaCart</div></div></div>';
    ChangeHeader("<h1>Competitor Analysis</h1>")
}

function ChangeHeader(name) {
    var header = document.getElementById("header");
    header.innerHTML = name
}

document.getElementById("summary").addEventListener("click", ChangeSummary);
document.getElementById("description").addEventListener("click", ChangeDescription);
document.getElementById("test").addEventListener("click", ChangeTest);
document.getElementById("analysis").addEventListener("click", ChangeAnalysis);