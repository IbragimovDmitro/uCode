'use strict'; 

function myfunc(title, leader, members, memberCount, agenda, isEvil) {
    title = prompt("Name of the Team");
    leader = prompt("Leader name");
    alert("Next enter the names separated by a comma, please.")
    members = prompt("Members of the Team")
    memberCount = members.match(/(\w+)/g).length + 1; 
    agenda = prompt("Goals and ideas of the team")
    
    
    if (confirm("Evil Team? Yes/No")) {
        isEvil = "Yes"
    } else {
        isEvil = "No"
    }
    alert("Here's the team:\n" + 
    "name - " + title + 
    "\n leader - " +leader + 
    "\n members - " +members +
    "\n memberCount - " +memberCount +
    "\n agenda - " +agenda +
    "\n isEvil - " +isEvil)

    
}
myfunc();