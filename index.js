const form=document.getElementById("form");
form.addEventListener("submit",submitForm);

function submitForm(e){
    e.preventDefault();
    const name=document.getElementById("names");
    const files=document.getElementById("files");
    const formData=new FormData();
    formData.append("name",name.value);
    for(let i=0;i<files.files.length;i++){
        formData.append("files",files.files[i]);
    }
    fetch("http://localhost:5500/upload_files",{
        method:"POST",
        body:formData,
        // headers:{
        //     "Content-Type":"multipart/form-data"
        // }
    })
        .then((res)=>console.log(res))
        .catch((err)=>console.log(err.message));
}