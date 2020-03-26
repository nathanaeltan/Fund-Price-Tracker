const Nightmare = require("nightmare");

exports.checkPrice = async (url, priceType) => {
  let price;
  let fundName;

  if (priceType === "Bid") {
    await new Nightmare()
      .goto(url)
      .wait(".data--content")
      .evaluate(() => document.querySelectorAll(".data--content")[1].innerText)
      .end()
      .then(res => {
        price = parseFloat(res);
      });
  } else if (priceType === "NAV") {
    await new Nightmare()
      .goto(url)
      .wait(".data--content")
      .evaluate(() => document.querySelectorAll(".data--content")[0].innerText)
      .end()
      .then(res => {
        price = parseFloat(res);
      });
  }

  await new Nightmare()
    .goto(url)
    .wait(".fund-name")
    .evaluate(() => document.querySelector(".fund-name").innerText)
    .end()
    .then(res => {
      fundName = res;
    });

  if (
    price === "NaN" ||
    fundName === null ||
    fundName === undefined ||
    fundName === "" ||
    isNaN(price)
  ) {
    console.log(`Error In getting prices`);
  } else {
    console.log(
      "*****************************************************************************************************************"
    );
    console.log("");
    console.log(
      `${fundName} ${
        priceType === "Bid" ? "Bid Price" : "NAV"
      } is currently $${price}`
    );
    console.log("");
    console.log(
      "*****************************************************************************************************************"
    );
  }
};
