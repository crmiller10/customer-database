let templateCustomers;
let cardInfo = '';
for (let i = 0; i < customers.results.length; i++) {

  let templateCustomers = `

    <div class="card">
      <img src="${customers.results[i].picture.large}">
      <p class="name">
        ${customers.results[i].name.first}
        ${customers.results[i].name.last}
      </p>
      <a class="email" href="mailto:#">
        ${customers.results[i].email}
      </a>
      <address>
        ${customers.results[i].location.street}<br>
        ${customers.results[i].location.city},
        ${customers.results[i].location.state}
        ${customers.results[i].location.postcode} <br>
        ${customers.results[i].phone}
      </address>
  </div>
  `;
  cardInfo += templateCustomers;
}

document.querySelector('main').innerHTML = cardInfo;
