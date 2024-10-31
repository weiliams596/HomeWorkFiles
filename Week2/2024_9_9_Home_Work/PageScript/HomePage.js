function _DropDonwToggleListeners(){
    const selections = window.location.search.substring(1).split('=')[1]/*.split('=')[1]*/;
    let selectionElemnt=null;
    if(selections=='2'){
        document.getElementById('home-kazakh').classList.remove('display-none');
        document.getElementById('home-chinese').classList.add('display-none');
        document.getElementById('home-english').classList.add('display-none');
        selectionElemnt=document.getElementById('home-kazakh');
    }
    else if(selections=='3'){
        document.getElementById('home-chinese').classList.remove('display-none');
        document.getElementById('home-english').classList.add('display-none');
        document.getElementById('home-kazakh').classList.add('display-none');
        selectionElemnt=document.getElementById('home-chinese');
    }
    else{
        document.getElementById('home-english').classList.remove('display-none');
        document.getElementById('home-kazakh').classList.add('display-none');
        document.getElementById('home-chinese').classList.add('display-none');
        selectionElemnt=document.getElementById('home-english');
    }
    const dropdownToggle=selectionElemnt.querySelector('.dropdown-toggle');
    const dropdownMenu=selectionElemnt.querySelector('.dropdown-menu');
    dropdownToggle.addEventListener('click',()=>{
        dropdownMenu.classList.toggle('show'); 
    });
    dropdownMenu.computedStyleMap.width=dropdownToggle.offsetWidth + 'px';
}

function _DropdownMenuListeners(event){
   if (!event.target.matches('.dropdown-toggle')) {
    const dropdownMenu=document.querySelector('.dropdown-menu');
            if (dropdownMenu.classList.contains('show')) {
                dropdownMenu.classList.remove('show');
            }
    }
}


function OnLoad(){
    _DropDonwToggleListeners();
    document.addEventListener('click',(event)=>{_DropdownMenuListeners(event);});
}