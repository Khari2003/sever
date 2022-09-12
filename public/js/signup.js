async function signup(){
    const username = $('#username').val();
    const password = $('#password').val();
    try {
        const res = await $.ajax({
            url: '/user',
            type: 'POST',
            data:{username,password}
        })
        console.log(res)
    } catch (error) {
        console.log(error)
    }
}