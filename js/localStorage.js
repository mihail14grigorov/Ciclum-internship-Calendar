if(localStorage.getItem(1) === null){
    localStorage.setItem(1, JSON.stringify([]))
} else {   
    let eventArr = JSON.parse(localStorage.getItem(1));
    console.log(eventArr);

    document.querySelector('.choice-member').onclick = () => {
        let currentMember = document.querySelector('.choice-member').value;

        eventArr.forEach(element => {

            let cell = document.querySelector(element.className);
            let span = document.createElement('span');
            let spanClear = document.createElement('span');

            span.className = 'modal-show';
            span.id = '#sign-int';
            span.innerHTML = "&times";
    
            span.addEventListener( 'click', function showModal(){
                document.querySelector('.text-modal').innerHTML = 'Are you sure you want to delete "' + element.event + '" event?';
    
                document.querySelector('#wrap-modal').classList.remove('hide');
                document.querySelector("#sign-in").classList.remove('hide');
                document.onkeydown = function (event) {
                    if (event.keyCode == 27) {
                        document.querySelectorAll('.modal-wrap').forEach(function (element) {
                        element.classList.add('hide');
                        element.children[0].classList.add('hide');
                        document.onkeydown = null;
                    });
                }
            }
            document.querySelector('.yes').onclick = () =>{
                let remove_cell_class_name = "." + span.parentElement.className;
                for(i = 0; i < eventArr.length; i++){
                    if (remove_cell_class_name === eventArr[i].className){

                        if(currentMember === "All members"){
                            eventArr.splice(i, 1);
                        } else{
                            let index = eventArr[i].members.indexOf(currentMember);
                            eventArr[i].members.splice(index, 1);
                        }
                    
                        localStorage.setItem(1, JSON.stringify(eventArr));
                        eventArr = JSON.parse(localStorage.getItem(1));
                        window.location.reload();
                        break;
                    }
                }
            }
            });
    
            cell.innerHTML = "";
            cell.appendChild(spanClear);
            cell.style.backgroundColor = "#fff";

            if(currentMember === "All members") {
                cell.innerHTML = element.event;
                cell.appendChild(span);
                cell.style.backgroundColor = "#98FB98";
            } else {
                if(element.members.includes(currentMember)) {
                    cell.innerHTML = element.event;
                    cell.appendChild(span);
                    
                    cell.style.backgroundColor = "#98FB98";
                }
        
            }

        });
    }
    
    document.querySelectorAll('.modal-wrap').forEach(function (element) {
        element.onclick = closeModalWrap;
    });
    
    function closeModal() {
        let modalId = this.dataset.modal;
        document.querySelector(modalId).parentElement.classList.add('hide');
        document.querySelector(modalId).classList.add('hide');
        document.onkeydown = null;
    }
    
    function closeModalWrap() {
        this.classList.add('hide');
        this.children[0].classList.add('hide');
        document.onkeydown = null;
    }
    
    eventArr.forEach(element => {

        let cell = document.querySelector(element.className);
        let span = document.createElement('span');

        span.className = 'modal-show';
        span.id = '#sign-int';
        span.innerHTML = "&times";

        span.addEventListener( 'click', function showModal(){

            document.querySelector('.text-modal').innerHTML = 'Are you sure you want to delete "' + element.event + '" event?';

            document.querySelector('#wrap-modal').classList.remove('hide');
            document.querySelector("#sign-in").classList.remove('hide');
            document.onkeydown = function (event) {
                if (event.keyCode == 27) {
                    document.querySelectorAll('.modal-wrap').forEach(function (element) {
                    element.classList.add('hide');
                    element.children[0].classList.add('hide');
                    document.onkeydown = null;
                });
            }
        }
        document.querySelector('.yes').onclick = () =>{
            let remove_cell_class_name = "." + span.parentElement.className;
            for(i = 0; i < eventArr.length; i++){
                if (remove_cell_class_name === eventArr[i].className){
                    eventArr.splice(i, 1);
                    localStorage.setItem(1, JSON.stringify(eventArr));
                    eventArr = JSON.parse(localStorage.getItem(1));
                    window.location.reload();
                    break;
                }
            }
        }
        });

        cell.innerHTML = element.event;
        cell.appendChild(span);
        
        cell.style.backgroundColor = "#98FB98";
    });
}