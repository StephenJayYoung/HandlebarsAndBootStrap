var source = $("#some-template1").html(); 
var template = Handlebars.compile(source); 

var data = {
    users: [ {
        person: {
            firstName: "Charlie",
            lastName: "Young"
        },
        jobTitle: "Engineer",
        email: "CharlieYoung@gmail.com"
    }, {
        person: {
            firstName: "Nick",
            lastName: "Young"
        },
        jobTitle: "Doctor",
        email: "NickYoung@gmail.com"
    } ]
}; 

Handlebars.registerHelper('fullName', function(person) {
  return person.firstName + " " + person.lastName;
});

$('body').append(template(data));