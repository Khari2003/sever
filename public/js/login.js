function login(){
    const username = $('#username').val();
    const password = $('#password').val();
    $.ajax({
        url:'/user/login',
        type:'POST',
        data:{username,password}
    }).then((data)=>{
        console.log(data);
    }).catch((error)=>{
        console.log(error);
    })
}