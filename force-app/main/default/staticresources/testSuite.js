describe("Lightning Component Testing Examples", function () {
    afterEach(function () {
        $T.clearRenderedTestComponents();
    });
    
    describe("A suite that tests the obvious", function() {
        it("spec that verifies that true is true", function() {
            expect(true).toBe(true);
        });
    });

    describe("A suite that tests the obvious 2", function() {
        it("spec that verifies that false is false", function() {
            expect(false).toBe(false);
        });
    });
});