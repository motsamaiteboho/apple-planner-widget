describe('The apple planner app', function () {

	it('should be able to set the number of apples', function () {
		const applePlanner = ApplePlanner();
		applePlanner.setAppleCount(20);
		assert.equal(20, applePlanner.getAppleCount());
	})
	it('should be able to set the packet size', function () {
		const applePlanner = ApplePlanner();
		applePlanner.setPacketSize(4);
		assert.equal(4, applePlanner.getPacketSize());
	})
	it('should be to calculate the number of packets ', function () {

		const applePlanner = ApplePlanner();

		applePlanner.setAppleCount(19);
		applePlanner.setPacketSize(4);
		assert.equal(4, applePlanner.packetsNumber());

	});

	it('should be able to set the number of packets', function () {
		const applePlanner = ApplePlanner();
		applePlanner.setPacketCount(10);
		assert.equal(10, applePlanner.getPacketCount());
	})

	it('should be able to set the packet size', function () {
		const applePlanner = ApplePlanner();
		applePlanner.setPacketSize(7);
		assert.equal(7, applePlanner.getPacketSize());
	})
	it('should be to calculate the number of apples needed ', function () {

		const applePlanner = ApplePlanner();

		applePlanner.setPacketCount(10);
		applePlanner.setPacketSize(4);
		assert.equal(40, applePlanner.applesNumber());

	});

	it('should be able to set the cost price size', function () {
		const applePlanner = ApplePlanner();
		applePlanner.setCostPrice(15);
		assert.equal(15, applePlanner.getCostPrice());
	})

	it('should be able to set the profit percentage', function () {
		const applePlanner = ApplePlanner();
		applePlanner.setProfit(20);
		assert.equal(20, applePlanner.getProfit());
	})

	it('should be to calculate the number of apples needed ', function () {
		const applePlanner = ApplePlanner();
		applePlanner.setCostPrice(10);
		applePlanner.setAppleCount(20);
		applePlanner.setPacketSize(4);
		applePlanner.setProfit(10);
		assert.equal(40, applePlanner.packectPrize());

	});
});