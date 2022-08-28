let updateId
let totalData

$.ajax({
    url:'http://localhost:4000/user',
    type:'GET'
}).then((data)=>{
    data.map((value,index)=>{
        $('.listUser').append(`
            <tr>
                <th>${index+1}</th>
                <th>${value.username}</th>
                <th>${value.password}</th>
            </tr>
        `)
    })
}).catch((err)=>{
    console.log(err);
})

function addUser(){
    let username = $('#username').val()
    let password = $('#password').val()
    $.ajax({
        url:'/user',
        type: 'POST',
        data:{
            username: username,
            password: password
        }
    }).then((data)=>{
        console.log(data);
    }).catch((err)=>{
        console.log(err);
    })
}

function renderListPost(skip,limit){
    $.ajax({
        url:`/post?skip=${skip}&limit=${limit}`,
        type:'GET',
    }).then((data)=>{
        $('.listPost').html('')
        for(let i=0; i<data.length; i++) {
            $('.listPost').append(`
                <div>
                    <h3>${data[i].title}</h3>
                    <p>${data[i].content} <button onclick='getID("${data[i]._id}")' data-bs-toggle="modal" data-bs-target="#exampleModal">update</button> </p>
                </div>
            `)
        }
    }).catch((err)=>{
        console.log(err);
    })
}

function renderListButton(total){
    $('.listButton').html('')
    for(let i=1; i<=total; i++) {
        $('.listButton').append(`
            <button onclick="next(${i})">${i}</button>
        `)
    }
}

renderListPost(0,3)

$.ajax({
    url:'post',
    type:'GET'
}).then((data)=>{
    totalData = data.length
    let total = Math.ceil(data.length/3)
    renderListButton(total)
}).catch((err)=>{
    console.log(err);
})

function getID(id) {
    updateId = id;
    console.log(updateId);
}

function save(){
    let title = $('#title').val();
    let content = $('#content').val();
    $.ajax({
        url:'/post/'+updateId,
        type: 'PUT',
        data:{title:title,content:content}
    }).then((data) => {console.log(data)})
    .catch((error) => {console.log(error)})
}

function next(page){
    let limit = $('#limit').val();
    let skip = (page - 1) * limit
    renderListPost(skip, limit)
}

function changeView(){
    let limit = $('#limit').val();
    let totalButton = Math.ceil(totalData / limit)
    renderListButton(totalButton)
    renderListPost(0,limit)
}