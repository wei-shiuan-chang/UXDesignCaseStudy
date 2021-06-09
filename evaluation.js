function ChangeUser_evaluation() {
    var pageInfo = document.getElementById("info");
    pageInfo.innerHTML = "The following lists are some tasks we created to be used during our evaluations. <br> \
    <br>\
    <strong>Broad reflective task</strong> <br>\
    1. (On “details of a specific item page”) Could you take a look at the page and tell me what you can do on this page? <br>\
    2. (On “Shopping cart” screens) Could you take a look at the page and tell me what is the purpose of this page?<br>\
    <br>\
    <strong>Specific goal-oriented task</strong> <br> \
    1. Imagine that you want to find a fruit that has a discount now and add it to the list.<br> \
    2. Find out the quickest way to purchase all items in your shopping bag.<br> \
    <br> \
    <strong>Questions</strong><br>\
    1. What did you like about the system?<br>\
    2. What do you think could have been improved?<br>\
    3. Are there any features you think that can be added to the system?<br>";
    ChangeHeader("<h1>User Evaluation</h1>")
}

function ChangeHeuristic_evaluation() {
    var pageInfo = document.getElementById("info");
    pageInfo.innerHTML = '<p>We use <a href="https://www.nngroup.com/articles/ten-usability-heuristics/">Nielsen\'s 10 Heuristics \
    </a> as our tool to do the heuristic evaluation.</p><div style="background-color:gray; color:black; border:1px solid rgb(32, 31, 31); \
    margin-bottom: 1px; layout" class="row my-row  justify-content-center align-items-center"><div style="" class="col" width="20px">Visibility\
     of system status</div><div class="col">Match between system and the real world</div><div class="col">User control and freedom</div><div\
      class="col">Consistency and standards</div><div class="col">Error prevention</div></div><div style="background-color:gray; border: 1px;color:black;\
       border:1px solid rgb(32, 31, 31);" class="row my-row  justify-content-center align-items-center"><div class="col">Recognition rather than recall</div>\
       <div class="col">Flexibility and efficiency of use</div><div class="col">Aesthetic and minimalist design</div><div class="col">Help users recognize, diagnose, and recover from errors</div><div class="col">Help\
        and documentation</div></div>';
    ChangeHeader("<h1>Heuristic Evaluation</h1>")
}


function ChangeMockup() {
    // todo
    var pageInfo = document.getElementById("info");
    pageInfo.innerHTML = '<p>To look at the high-fidelity mockup please click <a href="https://www.figma.com/proto/Up7DcX5whUjZ0pi5dEKPAd/Revision-for-user-evaluation?node-id=1%3A159&scaling=min-zoom&page-id=0%3A1">here</a></p>';
    ChangeHeader("<h1>High-Fidelity Mockup</h1>")
}

function ChangeHeader(name) {
    var header = document.getElementById("header");
    header.innerHTML = name + '<div class="row justify-content-center align-items-center">\
    <div class="col">\
        Planning\
    </div>\
    <div class="col">\
        Analyzation\
    </div>\
    <div class="col">\
        Modifcation \
    </div>\
    </div>';
}

document.getElementById("user_evaluation").addEventListener("click", ChangeUser_evaluation);
document.getElementById("heuristic_evaluation").addEventListener("click", ChangeHeuristic_evaluation);
document.getElementById("mockup").addEventListener("click", ChangeMockup);