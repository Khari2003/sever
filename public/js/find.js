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

var listColor = []
$('.color').on('change', function() {
    const val = $(this).val()
    if($(this).prop('checked')){
        listColor.push(val);
        console.log(listColor);
    }else{
        listColor = listColor.filter(function(value){
            return value !== val
        })
        console.log(listColor);
    }
})

async function find(){
    try {
        const res = await $.ajax({
            url:`/product/findColor?color=${listColor.join(',')}`,
            type:'GET',
        })
        console.log(res)
    } catch (error) {
        console.log(error);
    }
}