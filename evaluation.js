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
    </a> as our tool to do the heuristic evaluation.</p><div class="row my-row  justify-content-center align-items-center" ><embed height="500px" width="300px"  src="https://media.nngroup.com/media/articles/attachments/Heuristic_Summary1_Letter-compressed.pdf#toolbar=0&navpanes=0&scrollbar=0&view=fit"></embed></div>';
    ChangeHeader("<h1>Heuristic Evaluation</h1>")
}


function ChangeMockup() {
    // todo
    var pageInfo = document.getElementById("info");
    pageInfo.innerHTML = '<p>If it doesn\'t load successfully, please click <a href="https://www.figma.com/proto/Up7DcX5whUjZ0pi5dEKPAd/Revision-for-user-evaluation?node-id=1%3A159&scaling=min-zoom&page-id=0%3A1">here</a></p><div class="row my-row  justify-content-center align-items-center" ><iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FUp7DcX5whUjZ0pi5dEKPAd%2FRevision-for-user-evaluation%3Fnode-id%3D1%253A159%26scaling%3Dcontain%26page-id%3D0%253A1" allowfullscreen></iframe></div>';
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