

describe('Test add text to page', function () {

    var container = document.createElement("div");

    before(function(){
        document.body.appendChild(container);
    });

    after(function(){
        document.body.removeChild(container);
    });

    it('should show what I input', function () {
        container.innerHTML = "<li>aaa</li>";
        chai.expect(container.innerHTML).to.equal("<li>aaa</li>");
        chai.assert.equal(1, 10);
    });

});

describe("Test capture event", function () {

    var button = document.createElement("button");
    button.id = "employee";
    button.text = "anthony";

    before(function () {
        document.body.appendChild(button);
    });

    after(function () {
        document.body.removeChild(button);
    });

    it("text click event on button", function (done) {
        var element = document.getElementById("employee");

        element.addEventListener("click", function (event) {
            //This is the recommended way: add assertion in event handler and call done() after that.
            chai.assert.equal("anthony", event.target.text);
            done();
        });

        element.dispatchEvent(new Event("click"));
    });

})
