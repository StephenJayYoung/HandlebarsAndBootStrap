var source1 = $("#some-template1").html(); 
var template1 = Handlebars.compile(source1); 

var data1 = {
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

$('body').append(template1(data1));