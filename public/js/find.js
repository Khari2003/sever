function findData() {
    const username = $('#username').val();
    $.ajax({
        url: `/post/user?username=`+username,
        type: 'GET',
    }).then((data)=>{
        console.log(data);
    }).catch((err)=>{
        console.log(err);
    })
}