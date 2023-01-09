

/**
 * starter info - address, bedrooms, bathrooms, favorite option, comment field
 *  - search by options
 *  - sort options (state)
 * button to add house (event listener)
 * then form fields appear on click
 * button to submit (event listener)
 * house gets added to homeData array
 * add field for comments (make sure comments persist)
 * 
 */

const site = new Website("Let's Buy and Sell Houses!");
for (let i = 0; i < homeData.length; i++) {
  const houseInfo = homeData[i];
  const entry = new House(
    houseInfo.streetAddress,
    houseInfo.city,
    houseInfo.state,
    houseInfo.bedrooms,
    houseInfo.bathrooms,
    houseInfo.price
  );
  site.putHouseOnSite(entry);
}
site.render();

const finalSite = new Website();
const addToSite = new House();
finalSite.putHouseOnSite(addToSite);

finalSite.render();