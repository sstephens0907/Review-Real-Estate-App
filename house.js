class House {
    constructor(streetAddress, city, state, bedrooms, bathrooms, price) {
      this.streetAddress = streetAddress;
      this.city = city;
      this.state = state;
      this.bedrooms = bedrooms;
      this.bathrooms = bathrooms;
      this.price = price;
    }
  
    createNewHouse() {
      const entry = document.createElement("section");
      entry.className = "entry";
  
      const streetAddress = document.createElement("p");
      streetAddress.innerText = this.streetAddress;
      const city = document.createElement("p");
      city.innerText = this.city;
      const state = document.createElement("p");
      state.innerText = this.state;
      const bedrooms = document.createElement("p");
      bedrooms.innerText = this.bedrooms;
      const bathrooms = document.createElement("p");
      bathrooms.innerText = this.bathrooms;
      const price = document.createElement("p");
      price.innerText = this.price;
  
      entry.append(streetAddress, city, state, bedrooms, bathrooms, price);
      return entry;
    }
  }