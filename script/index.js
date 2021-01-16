const btnCheck = document.querySelector(".check");
const successGif = document.querySelector(".success-gif");
const failGif = document.querySelector(".fail-gif");
const dob = document.querySelector("#dob");
const luckyNumber = document.querySelector("#luckyNumber");
const cancel = document.querySelector(".cancel");
const privacyConsent = document.querySelector(".privacy-consent");

const handleSuccess = () => {
    console.log("here in success");
    failGif.style.display = "none";
    successGif.style.display = "block";
    successGif.scrollIntoView();
};

const handleFail = () => {
    console.log("here in fail");
    successGif.style.display = "none";
    failGif.style.display = "block";
    failGif.scrollIntoView();
};

const handleCancel = () => {
    privacyConsent.style.display = "none";
};
const handleClick = () => {
    let dates, sum = 0;
    dates = dob.value.split("-").map(digit => parseInt(digit));
    for(let digit of dates){
        sum += digit;
    }
    if(sum % luckyNumber.value === 0){
        handleSuccess();
    }else{
        handleFail();
    }
};

btnCheck.addEventListener("click", handleClick);
cancel.addEventListener("click", handleCancel);