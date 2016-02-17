var bio = {
    "name": "Kipp Berdiansky",
    "role": "Systems Engineer",
    "contacts": {
        "mobile": "408-555-1212",
        "email": "kipp_jobs@yahoo.com",
        "github": "git git",
        "twitter": "#kipp",
        "location": "Los Gatos"
    },
    "welcomeMessage": "Currently I'm an SE in Security, and trying to advance my skills with Web Development",
    "skills": [
        "HTML", "CSS", "Java Script"
    ],
    "biopic": "./images/bear.jpg",
    "display": "function()"
};

var work = {
    "jobs": [{
        "employer": "Corero",
        "title": "Sr Systems Engineer",
        "location": "Los Gatos, California",
        "dates": "2010 - present",
        "description": "Pre-sales SE"
    }, {
        "employer": "BT",
        "title": "Sr Systems Engineer",
        "location": "Los Gatos, California",
        "dates": "2008 - 2010",
        "description": "Pre-sales SE"
    }, ],
    "display": [{
        "display": "function()"
    }]
};

var projects = {
    "projects": [{
        "title": "Udacity Online Portfolio Project",
        "dates": "Feb 2016",
        "description": "Using HTML and CSS and Bootstrap",
        "images": "./images/portfolio.jpg",
        "display": "function()"
    }, {
        "title": "Udacity Online Resume Project",
        "dates": "Feb 2016",
        "description": "Intro to JavaScript",
        "images": "./images/resume.jpg",
        "display": "function()"
    }]
};


var education = {
    "schools": [{
        "name": "Cal State University Northridge",
        "location": "Northridge, California",
        "degree": "BSEE",
        "majors": "Electrical Engineering",
        "dates": "1990",
        "url": "http://www.csun.edu"
    }, ],
    "onlineCourse": [{
        "title": "Front End Web Programmer",
        "school": "Udacity",
        "date": "2016",
        "url": "https://www.udacity.com"
    }, ],
        "display": "function()"
};



bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(formattedBioPic);
    $("#header").append(formattedWelcomeMessage);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);

        var x;
        for (x in bio.skills) {
            $("#skills").append(HTMLskills.replace("%data%", bio.skills[x]));
        }
    }

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);
    $("#footerContacts").append(formattedMobile);

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedEmail);
    $("#footerContacts").append(formattedEmail);

    var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedGitHub);
    $("#footerContacts").append(formattedGitHub);

    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts").append(formattedTwitter);
    $("#footerContacts").append(formattedTwitter);

    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedLocation);
    $("#footerContacts").append(formattedLocation);
};

bio.display();



work.display = function() {

    for (var job = 0; job < work.jobs.length; job++) {

        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);

        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        $(".work-entry:last").append(formattedEmployer + formattedTitle);

        var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDate);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
};

work.display();

projects.display = function() {
    for (var project = 0; project < projects.projects.length; project++) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
        $(".project-entry:last").append(formattedImage);
    }
};

projects.display();

education.display = function() {
    for (var ed = 0; ed < education.schools.length; ed++) {
        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%", education.schools[ed].name);

        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[ed].degree);
        $(".education-entry:last").append(formattedName + formattedDegree);

        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[ed].location);
        $(".education-entry:last").append(formattedLocation);

        var formattedYearsGraduated = HTMLschoolDates.replace("%data%", education.schools[ed].dates);
        $(".education-entry:last").append(formattedYearsGraduated);

        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[ed].majors);
        $(".education-entry:last").append(formattedMajor);

        var formattedUrl = HTMLschoolURL.replace("%data%", education.schools[ed].url);
        $(".education-entry:last").append(formattedUrl);
    }

    if (education.onlineCourse.length > 0) {
        $("#education").append(HTMLonlineClasses);

        for (var onlineCourse = 0; onlineCourse < education.onlineCourse.length; onlineCourse++) {
            $("#education").append(HTMLschoolStart);

            var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourse[onlineCourse].title);

            var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourse[onlineCourse].school);
            $(".education-entry:last").append(formattedTitle + formattedSchool);

            var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourse[onlineCourse].date);
            $(".education-entry:last").append(formattedDates);

            var formattedUrl2 = HTMLonlineURL.replace("%data%", education.onlineCourse[onlineCourse].url);
            $(".education-entry:last").append(formattedUrl2);
        }
    }
};


education.display();

$("#mapDiv").append(googleMap);