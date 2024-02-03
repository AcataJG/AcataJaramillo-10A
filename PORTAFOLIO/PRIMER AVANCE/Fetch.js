// var url = "http://api.stackexchange.com/2.2/questions?site=stackoverflow&tagged=javascript"

// var responseData = fetch(url).then(response => response.json());
// console.log(responseData)

// responseData.then(({items, has_more, quota_remaining}) => {
//     console.log("Quota Max: " + quota_max + "\n")
//     for (const {title, question_id, owner, reputation, user_id} of items) {
//         console.log(question_id + "title: " + title + "user: " + owner.display_name + "Reputation: " + reputation + "User ID: " + user_id)
//     }
// })

// var url = "https://jsonplaceholder.typicode.com/users"

// fetch().then(response => response.json())
// .then(response => {
//     response.forEach(element => {
//         console.log("user: " + element.username
//         + "city: " + element.address.city)
//     });
// })

// fetch(url, {
//     method: "POST",
//     headers: {
//         "content_type": "application/json"
//     },
//     body: JSON.stringify({
//         username: "Foo",
//         email: "foo@email.com",
//     })
// }).then(response => response.json())
//     .then(response => console.log(response))

var url = "https://jsonplaceholder.typicode.com/posts"

fetch(url).then(response => response.json())
    .then(response => {
        response.forEach(element => {
            console.log("ID: " + element.id + 
            "userID: " + element.userID + "post_title: "
            + element.title)
        });
    })

// fetch(url, {
//     method: "POST",
//     headers: {
//         "Content_type": "application/json"
//     },
//     body: JSON.stringify({
//         userID: 2,
//         title: "Lorem Ipsum ETC ETC"
//     })
// }).then(response => response.json())
//     .then.response