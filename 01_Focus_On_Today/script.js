const checkboxList=document.querySelectorAll('.custom-checkbox');
const inputFields=document.querySelectorAll('.input-goal');
const errorLabel=document.querySelector('.error-label');
const progressBar=document.querySelector('.progress-bar');
const progressValue=document.querySelector('.progress-value');

checkboxList.forEach((checkbox)=>{
    checkbox.addEventListener('click',(e)=>{
        const allGoalsAdded=[...inputFields].every((input)=>{
              return input.value;
        })
        if(allGoalsAdded){
        checkbox.parentElement.classList.toggle('completed');
        }else {
          progressBar.classList.add('show-error')
        }
    })
})

inputFields.forEach((input)=>{
    input.addEventListener('focus',()=>{
        progressBar.classList.remove('show-error');
    })
})
