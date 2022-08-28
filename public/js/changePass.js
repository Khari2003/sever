function changePass(){
    let username = $('#username').val();
    let password = $('#password').val();
    let newpassword = $('#newpassword').val();
    let idUser = window.location.href.split('/')[4];
    $.ajax({
        url:'/user/'+idUser,
        type:'PUT',
        data:{
            username: username,
            password: password,
            newpassword: newpassword
        }
    }).then((data)=>{
        console.log(data);
    }).catch((error)=>{
        console.log(error);
    })
}