
        // function validateForm() {

        //     let roll = document.getElementById("101").value;
        //     let  studentName = document.getElementById("102").value;
        //     let fatherName = document.getElementById("103").value;
        //     let dob = document.getElementById("104").value;
        //     let mobile = document.getElementById("105").value;
        //     let email = document.getElementById("106").value;
        //     let password = document.getElementById("107").value;
        //     let Gender = document.getElementById("108").value;
        //     let Department = document.getElementById("109").value;
        //     let city = document.getElementById("110").value;
        //     let Address = document.getElementById("111").value;
        //     let pincode = document.getElementById("112").value;
        //     if(roll==""||studentName==""||fatherName==""||dob==""||mobile==""||email==""||password==""||Gender==""|| Department==""||city==""||Address==""||pincode=="")
        //         {
        //             alert("All fields are mandatory");
        //             return false;
        //         }
                

        //         else if(isNaN(mobile)){
        //             alert("Only Numbers are allowed ! Please enter valid Number")
        //             return false;
        //         }
        //         else
        //         {
        //             true;
        //         }


        //         if(mobile.length<10||mobile.length>10){
        //             alert("Number should be of 10 digits ! Please enter your valid Number")
        //             return false;
        //         }
        //     }
           
        
function validateForm() {

    let rollNo = document.getElementById("rollNo").value;
    let studentName = document.getElementById("studentName").value;
    let fatherName = document.getElementById("fatherName").value;
    let dob = document.getElementById("dob").value;
    let mobile = document.getElementById("mobile").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let city = document.getElementById("city").value;
    let address = document.getElementById("address").value;
    let pincode = document.getElementById("pincode").value;

    let gender = document.querySelector('input[name="gender"]:checked');
    let dept = document.querySelectorAll('input[name="dept"]:checked');

    if (isNaN(rollNo)) {
    alert("Roll No must be a number");
    return false;
}
    if (studentName == "") {
        alert("Student Name is required");
        return false;
    }
    if (fatherName == "") {
        alert("Father's Name is required");
        return false;
    }

    if (dob == "") {
        alert("Date of Birth is required");
        return false;
    }
    if (mobile == "" || mobile.length != 10 || isNaN(mobile)) {
        alert("Enter valid 10-digit Mobile Number");
        return false;
    }

 if (!email.includes("@")) {
    alert("Enter valid Email");
    return false;
}

    if (password.length < 6) {
        alert("Password must be at least 6 characters");
        return false;
    }
    if (gender == null) {
        alert("Please select Gender");
        return false;
    }
    if (dept.length == 0) {
        alert("Please select at least one Department");
        return false;
    }
    if (city == "") {
        alert("City is required");
        return false;
    }

    if (address == "") {
        alert("Please enter your address");
        return false;
    }

    // Pincode
    if (pincode.length != 6 || isNaN(pincode)) {
        alert("Enter valid 6-digit Pincode");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}






    

