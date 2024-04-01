function generateID() {
    console.log("Generating id card");

    const Name = document.getElementById("name").value.trim();
    name.value = "";

    const FatherName = document.getElementById("fatherName").value.trim();
    fatherName.value = "";

    const MotherName = document.getElementById("motherName").value.trim();
    motherName.value = "";

    const Class = document.getElementById("ClassNumber").value;
    ClassNumber.value = "";
    
    if (Class <= 0) {
        alert("Enter valid class");
        return;
    }

    const Roll = document.getElementById("roll").value;
    roll.value = "";
    if (roll <= 0) {
        alert("Enter valid roll");
        return;
    }

    const Session = document.getElementById("session").value;
    session.value = "";
    if (session <= 0) {
        alert("Enter valid session");
        return;
    }

    const Section = document.getElementById("section").value.trim();
    section.value = "";

    const Birthday = document.getElementById("birthday").value;
    birthday.value = "";

    const gender = document.querySelector('input[name="gender"]:checked').value;
    const issueDate = new Date().toLocaleDateString();

    const inputs = document.querySelectorAll('input');

    // const image = document.getElementById("image").value;

    const Id = document.getElementById("idCard");
    Id.innerHTML = `
    <div class="generated-id-card">
    <div class="generate-img"><div><h3>Your school Name</h3>Ullapara,Sirajgong <h5>Contact: 017450361744</h5></div>
    <img src="./images/th.jpeg" alt="image" class="generated-img"></div>
    <h4 style="text-align: center;">Id Card</h4>
    <div class=" generated-id-card-container">
    <div class="generated-id-card-details">
    <h4>Name :<span> ${Name}</span></h4>
    <h4>Father Name :<span> ${FatherName}</span></h4>
    <h4>Mother Name :<span> ${MotherName}</span></h4>
    <h4>Class :<span> ${Class}</span></h4>
    <h4>Date of Birth :<span> ${Birthday}</span></h4>
    </div>
    <div>
    <h4>Session :<span> ${Session}</span></h4>
    <h4>Section :<span> ${Section}</span></h4>
    <h4>Roll :<span> ${Roll}</span></h4>
    <h4>Gender :<span> ${gender}</span></h4>
    <h4>Issue Date :<span> ${issueDate}</span></h4>
    </div>
    </div>
    </div>
    `;
}