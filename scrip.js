let name1 = document.getElementById('name')
let email = document.getElementById('email')
let phone = document.getElementById('phone')
let pass = document.getElementById('pass')

let form = document.getElementById('form')


let errorname = document.getElementById('nameerror')
let erroremail = document.getElementById('emailerror')
let phoneerror = document.getElementById('phonerror')
let passerror = document.getElementById('passerror')

let toglebtn = document.getElementById('toggle')

toglebtn.addEventListener('click' , (e)=>{
    const type = pass.getAttribute("type") === "password" ? "text" : "password";
            pass.setAttribute("type", type);
            if(type === 'text'){

                toglebtn.innerHTML='hide Password'
            }
            else{
                toglebtn.innerHTML='show Password'

            }
            
            // toggle the icon
            // this.classList.toggle("Hide- Pass");
})



form.addEventListener('submit',(e)=>{
    if(name1.value === '' || name1.value == null){
        e.preventDefault();
        errorname.innerHTML="Name is required!"

    }
    else{
        errorname.innerHTML=""

    }
    if(email.value === ''){
        e.preventDefault();
        erroremail.innerHTML = "Valid Email is Required!"

    }
    else{
        erroremail.innerHTML = ""

    }
    if(pass.value === '' || pass.value == null){
        e.preventDefault();
        passerror.innerHTML = "Password Required"


    }
    else if(pass.value.length <= 8){
        e.preventDefault();

        passerror.innerHTML = "Password Must be 8 character!"

    }
    else{
        passerror.innerHTML = ""

    }
    if(phone.value == ""){
        e.preventDefault();

        phoneerror.innerHTML="Phone Number is required!"

    }
    else{
        phoneerror.innerHTML=""

    }
})
