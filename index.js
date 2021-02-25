
const select = document.querySelector(".js-select");

function handleChange(){
    const selected = select.value;
    localStorage.setItem("country", selected);

}




function loadCountries() {
    const selected = localStorage.getItem("country");
    if(selected){
        const option = document.querySelector(`select.js-select option[value=${selected}]`)
        option.selected = True;
    }
}

loadCountries();
select.addEventListener("change", handleChange);
