const loaderContainer = document.createElement("div");
document.body.appendChild(loaderContainer);
const loader = document.createElement("div");
loader.classList.add("loader");
loaderContainer.appendChild(loader);
const container = document.createElement("div");
document.body.appendChild(container);
container.classList.add("container");

const getData = async () => {
  try {
    loaderContainer.classList.add("show");
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const result = await data.json();
    result.forEach((person) => {
      const dataContainer = document.createElement("div");
      dataContainer.classList.add("data-container");
      container.appendChild(dataContainer);
      const personName = document.createElement("h2");
      personName.textContent = person.name;
      dataContainer.appendChild(personName);
      const userName = document.createElement("p");
      userName.classList.add("user-name");
      userName.textContent = person.username;
      dataContainer.appendChild(userName);
      const mobileNumber = document.createElement("p");
      mobileNumber.classList.add("mobile-number");
      mobileNumber.textContent = person.phone;
      dataContainer.appendChild(mobileNumber);
      const email = document.createElement("a");
      email.setAttribute("href", `mailto:${person.email}`);
      email.textContent = `click to send mail ${person.email}`;
      dataContainer.appendChild(email);
      const address = document.createElement("p");
      address.classList.add("address");
      address.textContent = `${person.address.city} ${person.address.street} ${person.address.suite} ${person.address.zipcode}`;
      dataContainer.appendChild(address);
    });
    loaderContainer.classList.remove("show");
    loader.classList.remove("loader");
  } catch (error) {
    console.log(error, "error");
  }
};
getData();
