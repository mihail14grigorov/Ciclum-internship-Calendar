let day = document.querySelector('.event-day').value;
let time = document.querySelector('.event-time').value;


document.querySelector('.event-day').onclick = () => {
    day = document.querySelector('.event-day').value;
}
document.querySelector('.event-time').onclick = () => {
    time = document.querySelector('.event-time').value;
}
let personEvent = document.querySelector('.mul-select').value;
document.querySelector('.mul-select').onclick = () => {
    personEvent = document.querySelector('.mul-select').value;
    console.log(personEvent);
}



const arrEvent = [];

let button = document.querySelector('.btn-create');
button.onclick = () => {
    let personEvent = document.querySelector('#multiple-sel');
    let members = Array.from(personEvent.selectedOptions).map(option => option.value);


    let name = document.querySelector('.event-name').value;
    let className = '';

    let temp = {};

    temp.members = members;

    let localArr = JSON.parse(localStorage.getItem(1));

    if(day === "Monday" && time === "10:00"){
        className = '.mon-10';
    }
    else if(day === "Monday" && time === "11:00"){
        className = '.mon-11';
    }
    else if(day === "Monday" && time === "12:00"){
        className = '.mon-12';
    }
    else if(day === "Monday" && time === "13:00"){
        className = '.mon-13';
    }
    else if(day === "Monday" && time === "14:00"){
        className = '.mon-14';
    }
    else if(day === "Monday" && time === "15:00"){
        className = '.mon-15';
    }
    else if(day === "Monday" && time === "16:00"){
        className = '.mon-16';
    }
    else if(day === "Monday" && time === "17:00"){
        className = '.mon-17';
    }
    else if(day === "Monday" && time === "18:00"){
        className = '.mon-18';
    }
    else if(day === "Tuesday" && time === "10:00"){
        className = '.tue-10';
    }
    else if(day === "Tuesday" && time === "11:00"){
        className = '.tue-11';
    }
    else if(day === "Tuesday" && time === "12:00"){
        className = '.tue-12';
    }
    else if(day === "Tuesday" && time === "13:00"){
        className = '.tue-13';
    }
    else if(day === "Tuesday" && time === "14:00"){
        className = '.tue-14';
    }
    else if(day === "Tuesday" && time === "15:00"){
        className = '.tue-15';
    }
    else if(day === "Tuesday" && time === "16:00"){
        className = '.tue-16';
    }
    else if(day === "Tuesday" && time === "17:00"){
        className = '.tue-17';
    }
    else if(day === "Tuesday" && time === "18:00"){
        className = '.tue-18';
    }
    else if(day === "Wednesday" && time === "10:00"){
        className = '.wed-10';
    }
    else if(day === "Wednesday" && time === "11:00"){
        className = '.wed-11';
    }
    else if(day === "Wednesday" && time === "12:00"){
        className = '.wed-12';
    }
    else if(day === "Wednesday" && time === "13:00"){
        className = '.wed-13';
    }
    else if(day === "Wednesday" && time === "14:00"){
        className = '.wed-14';
    }
    else if(day === "Wednesday" && time === "15:00"){
        className = '.wed-15';
    }
    else if(day === "Wednesday" && time === "16:00"){
        className = '.wed-16';
    }
    else if(day === "Wednesday" && time === "17:00"){
        className = '.wed-17';
    }
    else if(day === "Wednesday" && time === "18:00"){
        className = '.wed-18';
    }
    else if(day === "Thursday" && time === "10:00"){
        className = '.thu-10';
    }
    else if(day === "Thursday" && time === "11:00"){
        className = '.thu-11';
    }
    else if(day === "Thursday" && time === "12:00"){
        className = '.thu-12';
    }
    else if(day === "Thursday" && time === "13:00"){
        className = '.thu-13';
    }
    else if(day === "Thursday" && time === "14:00"){
        className = '.thu-14';
    }
    else if(day === "Thursday" && time === "15:00"){
        className = '.thu-15';
    }
    else if(day === "Thursday" && time === "16:00"){
        className = '.thu-16';
    }
    else if(day === "Thursday" && time === "17:00"){
        className = '.thu-17';
    }
    else if(day === "Thursday" && time === "18:00"){
        className = '.thu-18';
    }
    else if(day === "Friday" && time === "10:00"){
        className = '.fri-10';
    }
    else if(day === "Friday" && time === "11:00"){
        className = '.fri-11';
    }
    else if(day === "Friday" && time === "12:00"){
        className = '.fri-12';
    }
    else if(day === "Friday" && time === "13:00"){
        className = '.fri-13';
    }
    else if(day === "Friday" && time === "14:00"){
        className = '.fri-14';
    }
    else if(day === "Friday" && time === "15:00"){
        className = '.fri-15';
    }
    else if(day === "Friday" && time === "16:00"){
        className = '.fri-16';
    }
    else if(day === "Friday" && time === "17:00"){
        className = '.fri-17';
    }
    else if(day === "Friday" && time === "18:00"){
        className = '.fri-18';
    }
    
    temp.className = className;

    if (name !== "") {
        temp.event = name;
    } else {
        alert('Заполните все поля!!!');
        return false;
    }

    for(i = 0; i < localArr.length; i++){
        if (localArr[i].className == temp.className){
            if (localArr[i].name !== ""){
                alert("Event already exist!");
                return false;
            }
        }
    }

    localArr.push(temp);
    
    localStorage.setItem(1, JSON.stringify(localArr));
    localStorage.setItem('className', className);
    window.location.href = 'index.html';
};
