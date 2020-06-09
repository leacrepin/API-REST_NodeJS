const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server');

chai.use(chaiHttp);
chai.should();

describe("Fiber", () => {
    describe("GET /0/0", () => {

        // Test to get all fiber
        it("all Fiber near 0/0", (done) => {
            const x = 0;
            const y = 0;
            chai.request(app)
                .get(`/api/v1/fiber/${y}/${x}`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('Array');
                    done();
                });
        });

    });
});