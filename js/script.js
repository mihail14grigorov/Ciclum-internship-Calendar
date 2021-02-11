let day = document.querySelector('.event-day').value;
let time = document.querySelector('.event-time').value;


document.querySelector('.event-day').onclick = () => {
    day = document.querySelector('.event-day').value;
}
document.querySelector('.event-time').onclick = () => {
    time = document.querySelector('.event-time').value;
}

const arrEvent = [];

let daysOfWeek = {};
daysOfWeek["Monday"] = "mon";
daysOfWeek["Tuesday"] = "tue";
daysOfWeek["Wednesday"] = "wed";
daysOfWeek["Thursday"] = "thu";
daysOfWeek["Friday"] = "fri";

let times = {};
times["10:00"] = "10";
times["11:00"] = "11";
times["12:00"] = "12";
times["13:00"] = "13";
times["14:00"] = "14";
times["15:00"] = "15";
times["16:00"] = "16";
times["17:00"] = "17";
times["18:00"] = "18";

let button = document.querySelector('.btn-create');
button.onclick = () => {
    let personEvent = document.querySelector('#multiple-sel');
    let members = Array.from(personEvent.selectedOptions).map(option => option.value);


    let name = document.querySelector('.event-name').value;
    let className = '';

    let temp = {};

    temp.members = members;

    let localArr = JSON.parse(localStorage.getItem(1));
    
    className = "." + daysOfWeek[day] + "-" + times[time];
    
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
