const cron = require("node-cron");
const { checkPrice } = require("./helpers");


cron.schedule("*/15 * * * * *", async () => {
  const GAA = checkPrice(
    "https://ww2.manulife.com.sg/funds2/fund-detail.html?fund=Manulife%20Income%20Series%20-%20Global%20Asset%20Allocation%20Growth%20Fund",
    "Bid"
  );

  const APIGBF = checkPrice(
    "https://ww2.manulife.com.sg/funds2/fund-detail.html?fund=Manulife%20Income%20Series%20-%20Asia%20Pacific%20Investment%20Grade%20Bond%20Fund",
    "Bid"
  );

  const FSB = checkPrice(
    "https://ww2.manulife.com.sg/funds2/fund-detail.html?fund=First%20State%20Bridge%20Fund",
    "NAV"
  );

  await Promise.all([GAA, APIGBF, FSB]);

  await console.log(`
  
  
  
  
  
  `)
});
