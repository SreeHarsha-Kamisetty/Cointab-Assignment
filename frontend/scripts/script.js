const allUsers = document.getElementById("allUsers")
const container = document.getElementById("container")
allUsers.addEventListener("click", async() => {
    try {
        let res = await fetch("https://jsonplaceholder.typicode.com/users")
        let data = await res.json();
        console.log(data);
        data.forEach(element => {
            let cards = createCard(element)
            container.append(cards);
        });
    } catch (error) {
        console.log(error);
    }
})

{/* <div class="card">
            <h2 class="id">id : 1</h2>
            <p class="name">name: Leanne</p>
            <p class="username">username : Bret</p>
            <p class="email">Email:</p>
            <p class="street">street : Kulas Light</p>
            <p class="suite">suite: Apt. 556</p>
            <p class="city">city : Gwenborough</p>
            <p class="zipcode">zipcode: 92998-3874</p>
            <p class="lat">lat: -37.3159</p>
            <p class="lng">lng: 81.1496</p>
            <p class="phone">phone : 1-770-736-8031 x56442</p>
            <p class="website">website : hildegard.org</p>
            <p class="company_name">company_name: Romaguera-Crona</p>
            <p class="catch_phrase">Catch_phrase: Multi-layered client server neural-net</p>
            <p class="bs">bs : harness real-time e-markets</p>
            <button class="add">Add</button>
            <button class="open">Open</button>
        </div> */}

function createCard(item){
    let card = document.createElement("div")
    card.className="card"

    let id = document.createElement('h2')
    id.innerText = `ID: ${item.id}`
    id.setAttribute("class", "id")

    let name = document.createElement("p")
    name.innerText = `Name: ${item.name}`
    // name.setAttribute("class", "name")

    let username = document.createElement("p")
    username.innerText = `Username: ${item.username}`
    // username.setAttribute("class", "username")

    let email = document.createElement("p")
    email.innerText=`Email: ${item.email}`

    let street = document.createElement("p")
    // street.setAttribute("class", "street")
    street.innerText = `Street: ${item.address.street}`

    let suite = document.createElement("p")
    suite.innerText = `Suite: ${item.address.suite}`

    let city = document.createElement("p")
    city.innerText = `City: ${item.address.city}`

    let zipcode = document.createElement("p")
    zipcode.innerText = `zipcode: ${item.address.zipcode}`

    let lat = document.createElement("p")
    lat.innerText = `Latitude: ${item.address.geo.lat}`

    let lng = document.createElement("p")
    lng.innerText = `Longitude: ${item.address.geo.lng}`

    let phone = document.createElement("p")
    phone.innerText = `Phone: ${item.phone}`

    let website = document.createElement("p")
    website.innerText = `Website: ${item.website}`

    let company = document.createElement("p")
    company.innerText = `Company Name: ${item.company.name}`

    let catch_phrase=document.createElement("p")
    catch_phrase.innerText = `Catch Phrase: ${item.company.catchPhrase}`

    let bs = document.createElement("p")
    bs.innerText = `Business Strategy: ${item.company.bs}`

    let addBtn = document.createElement("button")
    addBtn.className="add"
    addBtn.innerText = "ADD"
    addBtn.addEventListener("click", ()=>{
        addData(item)
    })
    let openBtn = document.createElement("button")
    openBtn.className="open"
    openBtn.innerText = "OPEN"
    card.append(id, name, username, email, street,suite, city, zipcode, lat, lng,phone, website, company, catch_phrase, bs,addBtn, openBtn)

    return card
}

async function addData(item){
    try {
        let res = await fetch("http://localhost:8080/users/",{
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id:item.id,
                name:item.name,
                username:item.username,
                email:item.email,
                street:item.address.street,
                city:item.address.city,
                zipcode:item.address.zipcode,
                suite:item.address.suite,
                city:item.address.city,
                lat:item.address.geo.lat,
                lng:item.address.geo.lng,
                phone:item.phone,
                website:item.website,
                company_name:item.company.name,
                catchPhrase:item.company.catchPhrase,
                bs:item.company.bs,
            })
        
        })
        let data = await res.json();
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}