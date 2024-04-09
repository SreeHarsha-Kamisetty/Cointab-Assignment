console.log("hello")

{/* <div class="card">
            <h2>UserId : 1</h2>
            <h2>id : 1</h2>
            <p>Title : sunt aut facere repellat provident occaecati excepturi optio reprehenderit </p>
            <p>Body : quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto</p>
        </div> */}

function createCard(item){
    let card = document.createElement("div")
    card.className="card"

    let userid = document.createElement("h2")
    userid.innerText=`UserId: ${item.userId}`

    let id = document.createElement("h2")
    id.innerText=`id: ${item.id}`
    

}