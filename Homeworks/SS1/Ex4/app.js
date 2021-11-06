const $btnAdd = document.querySelector('.btnAdd');
const $input = document.querySelector('.input');
const $status = document.querySelector('.status');
const $listGroup = document.querySelector('.listGroup');

$btnAdd.addEventListener('click', function() {
    var inputValue = $input.value;

    if (inputValue === '') {
        alert("You must write something!");
    } 
    else {
        let $div = document.createElement('div');

        let $check = document.createElement('input');
        $check.className = 'checkBox form-check-input me-2';
        $check.type = 'checkbox';
        
        let $span = document.createElement('span');
        $span.innerHTML = inputValue;
        
        let $btnDelete = document.createElement('button');
        $btnDelete.className = 'btnDelete btn btn-danger btn-sm';
        $btnDelete.innerHTML = 'Delete';

        let $li = document.createElement('li');
        $li.className = 'list-group-item d-flex justify-content-between align-items-center';
        
        $div.append($check, $span);
        $li.append($div, $btnDelete);
        $listGroup.appendChild($li);

        $input.value = '';
    }
});

// const $checkbox = document.getElementsByClassName('checkBox');
// function CountCheckbox() {
//     let count = 0;

//     for(let i=0;i<=$checkbox.length; i++)
//     {
//         if($checkbox[i].checked === true)
//         {
//             count++;
//         }
//     }
//     $status.innerHTML = 'There is ' + count + ' task to complete';
//     console.log(count);
// }

function deleteItem(eventClick){
	$listGroup.removeChild(eventClick.parentNode);
}

$listGroup.addEventListener('click', function() {
    let eventClick = event.target;
	if(eventClick.tagName === "LI"){
		// done(eventClick);
	}
	else if(eventClick.tagName === "BUTTON"){
		deleteItem(eventClick);
	}
});


