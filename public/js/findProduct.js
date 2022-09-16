async function findByName(){
    const name = $('#name').val();
    try {
        const res = await $.ajax({
            url:`/product?name=`+name,
            type: 'GET',
        })
        console.log(res)
    } catch (error) {
        console.log(error);
    }
}

async function findByPrice(){
    const high = $('#high').val();
    const low = $('#low').val();
    try {
        const res = await $.ajax({
            url:`/product?high=${high}&low=${low}`,
            type:'GET',
        })
        console.log(res)
    } catch (error) {
        console.log(error);
    }
}