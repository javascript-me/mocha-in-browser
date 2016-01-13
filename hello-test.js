var container = document.createElement("div");

describe('#innerHTML', function () {

  before(function(){
    document.body.appendChild(container)
  })

  after(function(){
    document.body.removeChild(container)
  })

  it('should show what I input', function () {
    container.innerHTML = "<li>aaa</li>"
    chai.expect(container.innerHTML).to.equal("<li>aaa</li>");
    chai.assert.equal(1, 1);
  });

});
