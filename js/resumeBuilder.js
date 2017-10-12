/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    name: "Claudio Felis",
    role: "Front-end Developer",
    contacts: {
        mobile: "+55 81 995 148 008",
        email: "felis.claudio@gmail.com",
        github: "claudiofelis",
        twitter: "@syutokimihiro",
        location: "São Paulo - SP"
    },
    welcomeMessage: "Hey! Take a look at my curriculum.",
    skills: [
        "HTML + CCS + JavaScript Combo Development",
        "React Development",
        "NodeJs Development"
    ],
    biopic: "images/bio.jpg",
    display: function() {
        var bio = this;
        $('#header').prepend(
            HTMLheaderName.replace('%data%', bio.name) +
            HTMLheaderRole.replace('%data%', bio.role)
        );

        $('#topContacts, #footerContacts').append(
            HTMLmobile.replace('%data%', bio.contacts.mobile) +
            HTMLemail.replace('%data%', bio.contacts.email) +
            HTMLtwitter.replace('%data%', bio.contacts.twitter) +
            HTMLgithub.replace('%data%', bio.contacts.github) +
            HTMLlocation.replace('%data%', bio.contacts.location)
        );

        $('#header').append(
            HTMLbioPic.replace('%data%', bio.biopic) +
            HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage) +
            HTMLskillsStart
        );

        $('#skills').append(bio.skills.map(function(item) {
            return HTMLskills.replace('%data%', item);
        }).join(""));
    }
};

var education = {
    schools: [{
        name: "Unibratec",
        location: "Recife",
        degree: "Técnico em Computação Gráfica, Tecnologia da Informação",
        majors: ["CS"],
        dates: "2008 - 2010",
        url: "http://www.unibratec.edu.br"
    }],
    onlineCourses: [{
        school: "Udacity",
        title: "Javascript Crash Course",
        dates: "2014",
        url: "https://br.udacity.com/course/javascript-basics--ud804"
    }],

    display: function() {
        var education = this;
        $("#education").append(
            education.schools.map(function(item) {
                return (
                    $(HTMLschoolStart).append(
                        HTMLschoolName.replace('%data%', item.name) +
                        HTMLschoolDegree.replace('%data%', item.degree) +
                        HTMLschoolDates.replace('%data%', item.dates) +
                        HTMLschoolLocation.replace('%data%', item.location) +
                        item.majors.map(function(major) {
                            return HTMLschoolMajor.replace('%data%', major);
                        }).join("")
                    )
                );
            }),
            HTMLonlineClasses,
            education.onlineCourses.map(function(item) {
                return (
                    $(HTMLschoolStart).append(
                        HTMLonlineTitle.replace('%data%', item.title) +
                        HTMLonlineSchool.replace('%data%', item.school) +
                        HTMLonlineDates.replace('%data%', item.dates) +
                        HTMLonlineURL.replace('%data%', item.url)
                    )
                );
            })
        );
    }

};

var work = {
    jobs: [{
            employer: "Lins Artes gráficas",
            title: "Arte-Finalista",
            location: "Recife",
            dates: "02/2010 - 7/2010",
            description: "Desenvolvi várias artes para marcas de âmbito regional, além de trabalhar com a produção de papelaria, cartões de visita e casamento, entre outros tipos de trabalhos gráficos."
        },
        {
            employer: "Prática",
            title: "Front-End",
            location: "Recife",
            dates: "10/2010 - 7/2011",
            description: "Trabalhei no desenvolvimento e manutenção de sites, para clientes de âmbito regional."
        },
        {
            employer: "Ogilvy & Mather",
            title: "Front-end engineer",
            location: "Recife",
            dates: "03/2012 - 9/2014",
            description: "Na Ogilvy eu tive a oportunidade de trabalhar com alguns dos melhores profissionais do recife além de desenvolver e manter soluções para grandes empresas de nível internacional. Lá trabalhei com várias tecnologias, e pude desenvolver projetos e experiencias usando não só tecnologias web mas também arduino em experimentos para inovação."
        },
        {
            employer: "Accenture Brasil",
            title: "Analyst",
            location: "Recife",
            dates: "12/2014 - 10/2015",
            description: ""
        },
        {
            employer: "Tempest Security Intelligence",
            title: "Analista de desenvolvimento",
            location: "Recife",
            dates: "9/2015 - 6/2017",
            description: "Desenvolvi várias artes para marcas de âmbito regional, além de trabalhar com a produção de papelaria, cartões de visita e casamento, entre outros tipos de trabalhos gráficos."
        },
        {
            employer: "El Pescador Phishing",
            title: "Analista de desenvolvimento",
            location: "Recife",
            dates: "6/2017 - in progress",
            description: "Desenvolvi várias artes para marcas de âmbito regional, além de trabalhar com a produção de papelaria, cartões de visita e casamento, entre outros tipos de trabalhos gráficos."
        }
    ],
    display: function() {
        var work = this;
        $("#workExperience").append(
            work.jobs.map(function(item) {
                return (
                    $(HTMLworkStart).append(
                        HTMLworkEmployer.replace('%data%', item.employer) +
                        HTMLworkTitle.replace('%data%', item.title) +
                        HTMLworkDates.replace('%data%', item.dates) +
                        HTMLworkLocation.replace('%data%', item.location) +
                        HTMLworkDescription.replace('%data%', item.description)
                    )
                );
            })
        );
    }
};

var projects = {
    projects: [{
        title: "Sample Project 1",
        dates: "2016",
        description: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração evarrônica, permanecendo essencialmente inalterado. ",
        images: ["images/197x148.gif"],
    }],
    display: function() {
        var projects = this;
        $("#projects").append(
            projects.projects.map(function(item) {
                return (
                    $(HTMLprojectStart).append(
                        HTMLprojectTitle.replace('%data%', item.title) +
                        HTMLprojectDates.replace('%data%', item.dates) +
                        HTMLprojectDescription.replace('%data%', item.description) +
                        item.images.map(function(image) {
                            return HTMLprojectImage.replace('%data%', image);
                        }).join("")
                    )
                );
            })
        );
    }
};



bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);