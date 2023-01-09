/**
 * @param {House[]} house
 */
class Website {
    constructor(name) {
      this.name = name;
      this.houses = [];
    }
    putHouseOnSite(house) {
      this.houses.push(house);
    }
  
    render() {
      const title = document.createElement("h1");
      title.textContent = this.name;
  
      const siteList = document.createElement("section");
      siteList.className = "container";
      for (let i = 0; i < this.houses.length; i++) {
        const siteEntry = this.houses[i].createNewHouse();
        siteList.append(siteEntry);
      }
      const main = document.querySelector("main");
      main.className = "main";
      main.append(title, siteList);
    }
  }
  