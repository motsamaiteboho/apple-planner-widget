function ApplePlanner(){

    let appleCount = 0;
    let packetSize = 0;
    let packetCount = 0;
    let costPrice =0;
    let profit = 0;

    function setAppleCount(_appleCount){
        appleCount = _appleCount;
    }
    function getAppleCount(){
        return appleCount;
    }
    function setPacketSize(_packetSize){
        packetSize = _packetSize;
    }
    function getPacketSize(){
        return packetSize;
    }
    function setPacketCount(_packetCount){
         packetCount = _packetCount;
    }
    function getPacketCount(){
        return packetCount
    }
    function setCostPrice(_costPrice){
        costPrice = _costPrice;
    }
    function getCostPrice(){
        return costPrice;
    }
    function setProfit(_profit){
        profit = _profit;
    }
    function getProfit(){
        return profit;
    }
    function packetsNumber(){
        let packetNumber = 0;
        if(packetSize > 0)
             packetNumber = Math.floor(appleCount / packetSize)
        return packetNumber;
    }
    function applesNumber(){
        return packetSize * packetCount;
    }
    function costPricePerApple(){
        return costPrice / appleCount;
    }

    function costPricePacket(){
        return costPrice / packetSize;
    }
    function packetPrice(){
        return  costPricePacket() - (costPricePacket()* (profit/100));
    }
    return{
        setAppleCount,
        getAppleCount,
        setPacketSize,
        getPacketSize,
        packetsNumber,
        setPacketCount,
        getPacketCount,
        applesNumber,
        setCostPrice,
        getCostPrice,
        setProfit,
        getProfit,
        packetPrice,
        costPricePerApple,
        costPricePacket,
    }
}