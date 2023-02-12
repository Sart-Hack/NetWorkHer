// Uninque Firebase Object
var firebaseConfig = {
    apiKey: "AIzaSyCGoleGzitFyd7Mnw1NAZzwhWQE-uks0os",
    authDomain: "networkher-20928.firebaseapp.com",
    projectId: "networkher-20928",
    storageBucket: "networkher-20928.appspot.com",
    messagingSenderId: "327226614649",
    appId: "1:327226614649:web:ff9c9b31b71da85c9e45a8",
    measurementId: "G-M91D7ZGTZP"
};

// Initialize the firebase server
firebase.initializeApp(firebaseConfig);

var firestore = firebase.firestore();

// letiable to access database collection
const db = firestore.collection("formData");

// Get Resume Form
let submitButton = document.getElementById('submit');

// Create Event Listeners to allow form Submission
submitButton.addEventListener("click", (e) => {
    // prevent default form submission behaviour
    e.preventDefault();

    // Get values
    let nameVal = document.getElementById('resume_name').value;
    let contactEmail = document.getElementById('resume_contact_email').value;
    let avatarVal = document.getElementById('resume_avatar').value;
    let titleVal = document.getElementById('resume_title').value;
    let contactTelephone = document.getElementById('resume_contact_telephone').value;
    let contactAddress = document.getElementById('resume_contact_address').value;
    let headerContactInfo = document.getElementById('resume_header_contact_info').value;
    let displayHeaderContactInfo = document.getElementById('display_header_contact_info').value;
    let headerIntro = document.getElementById('resume_header_intro').value;
    let lookingWork = document.getElementById('resume_looking_for_work').value;
    let selectWork = document.getElementById('resume_select_for_work').value;
    let sectionExperience = document.getElementById('resume_section_experience').value;
    let sectionProjects = document.getElementById('resume_section_projects').value;
    let sectionEducation = document.getElementById('resume_section_education').value;
    let sectionSkills = document.getElementById('resume_section_skills').value;
    let sectionRecognition = document.getElementById('resume_section_recognition').value;
    let sectionLinks = document.getElementById('resume_section_links').value;
    let sectionAssociations = document.getElementById('resume_section_associations').value;
    let githubUrl = document.getElementById('resume_github_url').value;
    let twitterUrl = document.getElementById('resume_twitter_url').value;
    let linkedinUrl = document.getElementById('resume_linkedin_url').value;
    
    let data ={
        nameVal: nameVal,
        contactEmail: contactEmail,
        avatarVal: avatarVal,
        titleVal: titleVal,
        contactTelephone: contactTelephone,
        contactAddress: contactAddress,
        headerContactInfo: headerContactInfo,
        displayHeaderContactInfo: displayHeaderContactInfo,
        headerIntro: headerIntro,
        lookingWork: lookingWork,
        selectWork: selectWork,
        sectionExperience: sectionExperience,
        sectionProjects: sectionProjects,
        sectionEducation: sectionEducation,
        sectionSkills: sectionSkills,
        sectionRecognition: sectionRecognition,
        sectionLinks: sectionLinks,
        sectionAssociations: sectionAssociations,
        githubUrl: githubUrl,
        twitterUrl: twitterUrl,
        linkedinUrl: linkedinUrl,
    };

    //save data into firestore
    db.doc("bKGrNWuD58rfDxlWWYD9").set(data)
    .then(function() {
      console.log("Form data successfully written!");
    })
    .catch(function(error) {
      console.error("Error writing form data: ", error);
    });

    // alert 
    alert("Your Form has been Submitted Successfully");

    // clear form after submission
    function clearForm(){
        document.getElementById("ResumeForm").reset();
    }

    clearForm()
});