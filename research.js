function ChangeSummary() {
    var pageInfo = document.getElementById("info");
    pageInfo.textContent = "This project involved the design and construction of a system to help people who are busy to do grocery shopping very fast and easy. The primary aim of the task was to collect data to see how users will do grocery shopping. Initially, team members brainstormed who our target users were and created an interview protocol of questions to follow. Following the development of the interview protocol, each member of the team interviewed three separate users’ who matched our target user. After interviewing, as a team we created an affinity diagram to find our discoveries. The significant themes that we found in our finding was that most of the users had a list of what to purchase and checked the price of each item based on their memory, which they bought last time. This report will outline the research question and goal, result of our data, and personas that represent our user archetypes.";
}

function ChangeResearch_question() {
    var pageInfo = document.getElementById("info");
    pageInfo.innerHTML = "<ul><li>How do users make a decision to do grocery shopping?\n</li>" +
        "<li>Their process of choosing stores and purchasing a product? \n</li>" +
        "<li>What is the ratio of fresh and daily necessities purchased by users each time?</li></ul>";
    ChangeHeader("<h1>Research Question</h1>")
}

function ChangeResearch_goal() {
    var pageInfo = document.getElementById("info");
    pageInfo.textContent = "Our goal is to understand and learn the experience of a user's grocery shopping. The conversation will be adjusted to the particle interviewee. But the goal is to gain information about how they will do grocery shopping and what they will do in different situations. The situation we are interested in is for example when the price of a product is expensive, when the product is out of stock, and what factor will affect their decision making of choosing a product.";
    ChangeHeader("<h1>Research Goal</h1>")
}

function ChangeMethods_findings() {
    var pageInfo = document.getElementById("info");
    // todo add text
    pageInfo.innerHTML = "<h3>Methods</h3>\n" +
        "\n" +
        "We collect data by interview, each one interviewing three users. First, we identify all the stakeholders of our system. Then we figure out our direct users. These people would be the best interviewee we choose. We ask many open-ended questions to get more information. We prepare follow-up questions as well. During the interview process, we take notes. After that, we use an affinity diagram below. First, we created post-its separately according to the key issues that seem important from interview notes. Then, we group similar notes together. Finally, we summarize the notes with a sentence that can represent the group.\n" +
        "<br>\n" +
        "\t\n" +
        "<br>" +
        "\n" +
        "\n" +
        "<h3>Finding: Price Comparison</h3>\n" +
        "\n" +
        "Some interviewees want to compare the price in different stores, however there is no way for them to do it. Nowadays, people receive less flyers or emails to know the promotion and price. Sometimes, interviewees find out the item is out of stock when arriving at the store. In this case, they need to go to stores again. So the functions of comparing price and showing stock are very needed. Also, many people are price sensitive. They are willing to spend a little more time for a better price.\n" +
        "\n" +
        "<h3>Finding: Go to different stores for different purposes</h3>\n" +
        "\n" +
        "Most of the interviewees indicated that they need to go to more than one store to purchase all items they want to buy. Most grocery stores have their own features, for example, Whole Foods Market is known for health products, Costco is known for products with large portions. Therefore, it is always a situation that the items on the list are available in different stores or the prices are distinctly different in those stores. To users, it would be better to get all stuff in one place and within a limited time.\n" +
        "\n" +
        "<h3>Finding: Having a List</h3>\n" +
        "\n" +
        "Most of the interviewees tend to have a list. They will check what is their needs and will create a mental list, written list, or in their phone. Also, some of the interviewees shop for groceries for their family and friends, which the list will help them to remember what to buy. Usually, the list they have will not change from time to time. \n" +
        "\n"+
        "<br>" +
        "<div class=\"img-with-text\"><img style=\"display:block; margin: 0 auto;\" border=\"0\" src=img/icon/miro_board.png width=\"304\" height=\"228\" align=center> </div>" +
        "<div style=\"display: flex; justify-content: center; align-items: center;\"><p>Click <a href=\"https://lucid.app/lucidspark/invitations/accept/inv_237836ea-cc9a-40eb-8f57-c0854632ce5e\" target=\"_blank\" rel=\"noopener noreferrer\">here</a> to see our Miro Board!</p></div>";
    ChangeHeader("<h1>Methods & Findings</h1>")
}

function ChangePersonas() {
    var pageInfo = document.getElementById("info");
    // todo add text
    pageInfo.innerHTML = "<style type=\"text/css\">\n" +
        ".tg  {border-collapse:collapse;border-spacing:0;}\n" +
        ".tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n" +
        "  overflow:hidden;padding:10px 5px;word-break:normal;}\n" +
        ".tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n" +
        "  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n" +
        ".tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}\n" +
        "</style>\n" +
        "<table class=\"tg\">\n" +
        "<thead>\n" +
        "  <tr>\n" +
        "    <th class=\"tg-0pky\"></th>\n" +
        "    <th class=\"tg-0pky\"><img src=\"https://lh5.googleusercontent.com/JjsrexwDWm4HbsRswZtLecXlJIXiF2egkRI4mVUxlldtaup0VPZQZCBMGDXe1KHLWtJJqSH9SwoNj5qRjuYc0aMyFDh3BAmcweZewAxKnaKH2jXX-8t2qZS8SPXHOTitsEOltEsr\" width=\"298\" height=\"272\"></th>\n" +
        "    <th class=\"tg-0pky\"><img src=\"https://lh4.googleusercontent.com/EhEzYjF_5jHotbyw_8WmgYaapqLJDN3Ia_UC0KB-wgWwnv4TdoJObF-SYAyJW3Wd0W0crJH14y5a6wD2kHPj_6L0XppXNnbBLeNTmtinjChi8D89o64o16R94UemjvPWCaXu7q1C\" width=\"298\" height=\"272\"></th>\n" +
        "    <th class=\"tg-0pky\"><img src=\"https://lh4.googleusercontent.com/MhaBXufIZvNSn8l-WXSyCN5qrpNV86XiphDSP5pUNJYlz-6HgoSaRN39eXzFPwepAOr0Gbrm3Gx5oRhs8Ds3-pIsBy8Ftce0JNqOnPByL5x9d4umNDePJnNiFdUid6ktXVmcugAX\" width=\"298\" height=\"272\"></th>\n" +
        "  </tr>\n" +
        "</thead>\n" +
        "<tbody>\n" +
        "  <tr>\n" +
        "    <td class=\"tg-0pky\"><span style=\"font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">Name</span></td>\n" +
        "    <td class=\"tg-0pky\"><span style=\"font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">Jessica Chen</span></td>\n" +
        "    <td class=\"tg-0pky\"><span style=\"font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">Cindy Fu</span></td>\n" +
        "    <td class=\"tg-0pky\"><span style=\"font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">Benjamin Grey</span></td>\n" +
        "  </tr>\n" +
        "  <tr>\n" +
        "    <td class=\"tg-0pky\"><span style=\"font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">Gender</span></td>\n" +
        "    <td class=\"tg-0pky\"><span style=\"font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">Female</span></td>\n" +
        "    <td class=\"tg-0pky\"><span style=\"font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">Female</span></td>\n" +
        "    <td class=\"tg-0pky\"><span style=\"font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">Male</span></td>\n" +
        "  </tr>\n" +
        "  <tr>\n" +
        "    <td class=\"tg-0pky\"><span style=\"font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">Age</span></td>\n" +
        "    <td class=\"tg-0pky\"><span style=\"font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">28</span></td>\n" +
        "    <td class=\"tg-0pky\"><span style=\"font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">23</span></td>\n" +
        "    <td class=\"tg-0pky\"><span style=\"font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">36</span></td>\n" +
        "  </tr>\n" +
        "  <tr>\n" +
        "    <td class=\"tg-0pky\"><span style=\"font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">Occupation</span></td>\n" +
        "    <td class=\"tg-0pky\"><span style=\"font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">Engineer</span></td>\n" +
        "    <td class=\"tg-0pky\"><span style=\"font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">Student</span></td>\n" +
        "    <td class=\"tg-0pky\"><span style=\"font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">Bank Agent</span></td>\n" +
        "  </tr>\n" +
        "  <tr>\n" +
        "    <td class=\"tg-0pky\"><span style=\"font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">Location</span></td>\n" +
        "    <td class=\"tg-0pky\"><span style=\"font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">Bay Area</span></td>\n" +
        "    <td class=\"tg-0pky\"><span style=\"font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">Irvine</span></td>\n" +
        "    <td class=\"tg-0pky\"><span style=\"font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">Buffalo, NY</span></td>\n" +
        "  </tr>\n" +
        "  <tr>\n" +
        "    <td class=\"tg-0pky\"><span style=\"font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">Personality traits</span></td>\n" +
        "    <td class=\"tg-0pky\"><span style=\"font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">Ambitious, Active, Easy-going </span></td>\n" +
        "    <td class=\"tg-0pky\"><span style=\"font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">Outgoing, enthusiasm, enjoys challenge</span></td>\n" +
        "    <td class=\"tg-0pky\"><span style=\"font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">Friendly, Familial</span></td>\n" +
        "  </tr>\n" +
        "  <tr>\n" +
        "    <td class=\"tg-0pky\"><span style=\"font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">Goals and needs</span></td>\n" +
        "    <td class=\"tg-0pky\"><span style=\"font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">Spend less time on grocery shopping.</span><br><span style=\"font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">Buy food with higher quality that doesn't need to be </span><br><span style=\"font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">picked during grocery shopping.</span><br><span style=\"font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">Don’t want to go too far from home just for groceries.</span><br><span style=\"font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">Do product comparison in a smarter way that she doesn’t </span><br><span style=\"font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">need to grab all products from shelves..</span></td>\n" +
        "    <td class=\"tg-0pky\"><span style=\"font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">Try different foods</span><br><span style=\"font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">Be willing to go a little farther if the item is cheaper</span><br><span style=\"font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">Cares about the quality of foods</span></td>\n" +
        "    <td class=\"tg-0pky\"><span style=\"font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">Buy healthy food for his family</span><br><span style=\"font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">Some less processed snacks </span><br><span style=\"font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">Buy all stuff in the same place if possible</span></td>\n" +
        "  </tr>\n" +
        "  <tr>\n" +
        "    <td class=\"tg-0pky\"><span style=\"font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">Personal environment</span></td>\n" +
        "    <td class=\"tg-0pky\"><span style=\"font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">Just graduated from school for about 3 years and lives near </span><br><span style=\"font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">her workplace alone.</span><span style=\"color:#000;background-color:transparent\"> She is quite busy and aggressive on her working </span><br><span style=\"color:#000;background-color:transparent\">performance. Price is important for her but she doesn’t want to take too </span><br><span style=\"color:#000;background-color:transparent\">much time on anything that doesn’t benefit her career life.</span></td>\n" +
        "    <td class=\"tg-0pky\"><span style=\"font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">A graduate student from last year, now studying remotely. </span><br><span style=\"font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">Live alone and cooks for herself. Usually cares about the price </span><br><span style=\"font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">and wants to buy cost-effective foods.</span></td>\n" +
        "    <td class=\"tg-0pky\"><span style=\"font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">A family man who lives with his wife and two children. </span><br><span style=\"font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">Usually go grocery shopping with the whole family and </span><br><span style=\"font-weight:400;font-style:normal;text-decoration:none;color:#000;background-color:transparent\">purchase all items on the list in several places.</span></td>\n" +
        "  </tr>\n" +
        "</tbody>\n" +
        "</table>";
    ChangeHeader("<h1>Personas & Demographic Tables</h1>")
}

function ChangeAppendix() {
    var pageInfo = document.getElementById("info");
    pageInfo.innerHTML = "<h3>Interview Protocol</h3>\n" +
        "<ul type=\"disc\"> \n" +
        "<li>How often do you go grocery shopping?</li>\n" +
        "<ul type=\"disc\"> \n" +
        "<li>Do you buy your own stuff or for friends and family?</li>\n" +
        "<li>Do you go grocery shopping alone? - who does grocery shopping with?</li>\n" +
        "<li>How long do you take for grocery shopping?</li>\n" +
        "<li>Do you make a list before grocery shopping?</li>\n" +
        "</ul>\n" +
        "<li>How do you decide which grocery store you are going to?</li>\n" +
        "<ul type=\"disc\"> \n" +
        "<li>Have you ever gone to several grocery stores at once?</li>\n" +
        "<li>Do you go grocery shopping alone? - who does grocery shopping with?</li>\n" +
        "<li>What to do if the item you want to buy is out of stock,(do you ask for help or go to another store)?</li>\n" +
        "<li>Have you ever gone grocery shopping just for the promotion of something?</li>\n" +
        "</ul>\n" +
        "<li>Do you compare the price between different stores?</li>\n" +
        "<ul type=\"disc\"> \n" +
        "<li>How do you compare the price?</li>\n" +
        "<li>Do you watch the grocery flyer?</li>\n" +
        "<li>What if the store with a lower price product is far from you?</li>\n" +
        "<li>Tell me about the time when the price of the product was expensive?</li>\n" +
        "</ul>\n" +
        "<li>What are your considerations when there are more than one choice on the shelf?(Price, health, brand, quality, quantity, eco-friendly, ...)</li>\n" +
        "<ul type=\"disc\"> \n" +
        "<li>Would you like to try new released products?</li>\n" +
        "</ul>\n" +
        "<li>Do you buy organic stuff?</li>\n" +
        "<ul type=\"disc\"> \n" +
        "<li>By stuff for e.g fruits, egg, vegetables...</li>\n" +
        "</ul>\t\n" +
        "<li>Tell me last time you did grocery shopping?</li>\n" +
        "<li>Tell me about the worst experience you have had of grocery shopping.</li>\n" +
        "<li>Do you use instacart or other online grocery service? What’s the experience?</li>\n" +
        "<ul type=\"disc\"> \n" +
        "<li>What features do you like?</li>\n" +
        "<li>What features do you NOT like?</li>\n" +
        "</ul>\t\n" +
        "</ul>\n" +
        "\n";
    ChangeHeader("<h1>Personas</h1>")
}

function ChangeHeader(name) {
    var header = document.getElementById("header");
    header.innerHTML = name
}

document.getElementById("summary").addEventListener("click", ChangeSummary);
document.getElementById("research_question").addEventListener("click", ChangeResearch_question);
document.getElementById("research_goal").addEventListener("click", ChangeResearch_goal);
document.getElementById("methods_findings").addEventListener("click", ChangeMethods_findings);
document.getElementById("personas").addEventListener("click", ChangePersonas);
document.getElementById("appendix").addEventListener("click", ChangeAppendix);