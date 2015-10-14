var source = $("#some-template").html(); 
var template = Handlebars.compile(source); 

var data = {
    users: [ {
        person: {
            firstName: "Steve",
            lastName: "Young"
        },
        jobTitle: "Jr Front End Developer",
        email: "stephenjayyoung@gmail.com"
    }, {
        person: {
            firstName: "Mike",
            lastName: "Tomato"
        },
        jobTitle: "Sr Front End Developer",
        email: "miketom@gmail.com"
    }, {
        person: {
            firstName: "Mary", 
            lastName: "Smith"
        },
        jobTitle: "Sr Back End Developer",
        email: "Msmith@gmail.com"
    } ]
}; 

Handlebars.registerHelper('fullName', function(person) {
  return person.firstName + " " + person.lastName;
});

$('body').append(template(data));