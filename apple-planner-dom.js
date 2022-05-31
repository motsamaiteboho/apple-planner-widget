const appleCount = document.querySelector(".apple-count");
const packetsize = document.querySelector(".packet-size");
const no_packets= document.querySelector(".number-packets");
const calculateBtn = document.querySelector(".calculate-packets");

var applePlanner = ApplePlanner();

function calPacketsNumber(){
    if (!isNaN(appleCount.value) && !isNaN(packetsize.value)) {
        applePlanner.setAppleCount(appleCount.value);
        applePlanner.setPacketSize(packetsize.value);
        no_packets.innerHTML = "" + applePlanner.packetsNumber();
    }
}
calculateBtn.addEventListener('click', calPacketsNumber)

const packetsCount = document.querySelector(".apple-count-need");
const packetsize2 = document.querySelector(".packet-size-need");
const no_apples= document.querySelector(".number-apple");
const calculateApplesBtn = document.querySelector(".calculate-apples");

function calAppleNumber(){
    if (!isNaN(packetsCount.value) && !isNaN(packetsize2.value)) {
        applePlanner.setPacketCount(packetsCount.value);
        applePlanner.setPacketSize(packetsize2.value);
        no_apples.innerHTML = "" + applePlanner.applesNumber();
    }
}
calculateApplesBtn.addEventListener('click', calAppleNumber)


const costPrice = document.querySelector(".cost-price");
const  appleCount2 = document.querySelector(".no-apples-box");
const  packectPrize3= document.querySelector(".sold");
const  profit = document.querySelector(".profit");
const calculatePriceBtn = document.querySelector(".calculateRetail");


const retailPriceElem = document.querySelector(".recommended");
const packetNumElem = document.querySelector(".calcu-packets");
const costPriceAppleElem = document.querySelector(".cost-price-apple");
const costPricePacketElem = document.querySelector(".cost-price-packet");

function calRetailPrice(){
    if (!isNaN(costPrice.value) && !isNaN(appleCount2.value) && !isNaN(packectPrize3.value && !isNaN(profit.value))) {
        applePlanner.setCostPrice(costPrice.value);
        applePlanner.setAppleCount(appleCount2.value);
        applePlanner.setProfit(profit.value);
        applePlanner.setPacketSize(packectPrize3.value);

        packetNumElem.innerHTML= "" + applePlanner.getPacketSize();
        costPricePacketElem.innerHTML = "R" + applePlanner.costPricePacket().toFixed(2);
        costPriceAppleElem.innerHTML = "R" +applePlanner.costPricePerApple().toFixed(2);
        retailPriceElem.innerHTML = "R" + applePlanner.packetPrice().toFixed(2);
    }
}
calculatePriceBtn.addEventListener('click', calRetailPrice)