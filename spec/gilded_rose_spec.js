describe("Gilded Rose", function() {

  it("should foo", function() {
    items = [ new Item("foo", 0, 0) ];
    update_quality();
    expect(items[0].name).toEqual("foo");
  });

  it("'Aged Brie' items should increase in quality", function() {
    items = [ new Item("Aged Brie", 0, 0) ];
    update_quality();
    expect(items[0].quality).toEqual(2)
  });

  it("The sell_in should decrease by one everytime update quality is run", function() {
    items = [ new Item("Iron Arrow", 1, 0) ];
    update_quality();
    expect(items[0].sell_in).toEqual(0)
  });

  it("The quality should decrease by one everytime update quality is run", function() {
    items = [ new Item("Iron Arrow", 0, 1) ];
    update_quality();
    expect(items[0].quality).toEqual(0)
  });

  it("Backstage passes should increase in quality by 1", function() {
    items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 11, 0) ];
    update_quality();
    expect(items[0].quality).toEqual(1)
  });

  it("Backstage passes should increase in quality by 2 when there are 10 days left", function() {
    items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 10, 0) ];
    update_quality();
    expect(items[0].quality).toEqual(2)
  });

  it("Backstage passes should increase in quality by 3 when there are 5 days left", function() {
    items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 5, 0) ];
    update_quality();
    expect(items[0].quality).toEqual(3)
  });

  it("Backstage passes should drop their quality to zero when sell in date is less than 0", function() {
    items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 0, 5) ];
    update_quality();
    expect(items[0].quality).toEqual(0)
  });


});
