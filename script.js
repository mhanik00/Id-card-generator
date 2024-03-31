
function generateID(){
    console.log("Generating id card");

    const name = document.getElementById("name").value;
    const fatherName = document.getElementById("fatherName").value;
    const motherName = document.getElementById("motherName").value;
    const Class = document.getElementById("class").value;
    const roll = document.getElementById("roll").value;
    const session = document.getElementById("session").value;
    const section = document.getElementById("section").value;
    const birthday = document.getElementById("birthday").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const issueDate=new Date().toLocaleDateString();
    // const image = document.getElementById("image").value;

    

    const Id= document.getElementById("idCard");
    Id.innerHTML = `
    <div class="generated-id-card">
    <div class="generate-img"><div><h3>Momena Ali Biggan School</h3>Ullapara,Sirajgong <h5>Contact: 017450361744</h5></div>
    <img src="./images/th.jpeg" alt="image" class="generated-img"></div>
    <h4 style="text-align: center;">Id Card</h4>
    <div class=" generated-id-card-container">
    

    <div class="generated-id-card-details">
    <h4>Name :<span> ${name}</span></h4> 
    <h4>Father Name :<span> ${fatherName}</span></h4> 
    <h4>Mother Name :<span> ${motherName}</span></h4> 
    <h4>Class :<span> ${Class}</span></h4> 
    <h4>Date of Birth :<span> ${birthday}</span></h4> 
    
     </div>
    <div>
    <h4>Session :<span> ${session}</span></h4> 
    <h4>Section :<span> ${section}</span></h4> 
    <h4>Roll :<span> ${roll}</span></h4>
    <h4>Gender :<span> ${gender}</span></h4>
    <h4>Issue Date :<span> ${issueDate}</span></h4>
    </div> 
    
    </div>
    </div>
    `;
}