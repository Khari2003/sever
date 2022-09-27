async function changeAvatar(){
    try {
        const link = window.location.href.split('/')
        const id = link[4]
        const form = $('form')[0]
        const formData = new FormData(form)
        const res = await $.ajax({
            url:`/user/${id}/avatar`,
            type:'PUT',
            data:formData,
            contentType:false,
            processData:false
        })
        console.log(res)
    } catch (error) {
        console.log(error);
    }
}