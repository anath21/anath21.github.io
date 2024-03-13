const submitRacoonForm = (e) => {
    e.preventDefault(); //dont refresh the page
    
    const form = e.target;
    const raccoonName = form.elements["raccoon-name"].value;
    const demeanor = form.elements["demeanor"].value;
    const termsChecked = form.elements["terms"].checked;
    const size = getRadioValue("size");

    console.log(raccoonName);
    console.log(demeanor);
    console.log(termsChecked);
    console.log(size);
};

const getRadioValue = (radioName) => {
    const radios = document.getElementsByName(radioName);

    for(let i in radios) {
        if(radios[i].checked) {
            return radios[i];
        }
    }

    return "";
};

document.getElementById("form-raccoon").onsubmit = submitRacoonForm;