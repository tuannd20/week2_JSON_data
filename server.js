let listCard = document.getElementById("list_card");

// fetch function
fetch("http://localhost:3000/travel")
  .then((res) => res.json())
  .then((json) => {
    json.map((data) => {
      console.log(data);
      listCard.append(list_card(data));
    });
  });
// Create table data json
function list_card({ id, location, activity, date, image, price }) {
  let card = document.createElement("div");
  card.innerHTML = `
  <div class="card" style="width: 18rem">
                <img
                  class="card-img-top"
                  src="${image}"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <p class="card-text">ID: ${id}</p>
                  <h5 class="card-title">Location: ${location}</h5>
                  <p class="card-text">Activity: ${activity}</p>
                  <p class="card-text">Date: ${date}</p>
                  <p class="card-text">Price: ${price} VNĐ</p>
                  <a href="#" class="btn bg-success">Explore</a>
                </div>
              </div>
  `;
  return card;
}
