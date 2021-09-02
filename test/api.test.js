const request = require("supertest");
var should = require("should");
const app = require("../src/app");

/*
 * Testing app
 */
describe("test routes", () => {
  describe("test locations", () => {
    it("test request location status", (done) => {
      request(app)
        .get("/v1/location")
        .expect("Content-Type", /json/)
        .end((err, response) => {
          should.not.exist(err);
          response.status.should.be.equal(200);
          done();
        });
    });
    it("test request location status with error ", (done) => {
      request(app)
        .get("/v1/location/city")
        .expect("Content-Type", /json/)
        .end((err, response) => {
          response.status.should.be.equal(404);
          done();
        });
    });
  });
  describe("test current", () => {
    it("test request current status", (done) => {
      request(app)
        .get("/v1/current")
        .expect("Content-Type", /json/)
        .end((err, response) => {
          response.status.should.be.equal(200);
          done();
        });
    });
    it("test request current with city ", (done) => {
      request(app)
        .get("/v1/current/soledad")
        .expect("Content-Type", /json/)
        .end((err, response) => {
          response.status.should.be.equal(200);
          response.body.name.should.be.equal("Soledad");
          done();
        });
    });
    it("test request current with city not found ", (done) => {
      request(app)
        .get("/v1/current/ppppp")
        .expect("Content-Type", /json/)
        .end((err, response) => {
          response.status.should.be.equal(404);
          done();
        });
    });
  });
  describe("test forecast", () => {
    it("test request forecast status", (done) => {
      request(app)
        .get("/v1/forecast")
        .expect("Content-Type", /json/)
        .end((err, response) => {
          response.status.should.be.equal(200);
          done();
        });
    });
    it("test request forecast with city ", (done) => {
      request(app)
        .get("/v1/forecast/soledad")
        .expect("Content-Type", /json/)
        .end((err, response) => {
          response.status.should.be.equal(200);
          response.body.city.name.should.be.equal("Soledad");
          done();
        });
    });
    it("test request forecast with city not found ", (done) => {
      request(app)
        .get("/v1/forecast/ppppp")
        .expect("Content-Type", /json/)
        .end((err, response) => {
          should.not.exist(err);
          response.notFound.should.be.equal(true);
          done();
        });
    });
    it("test request forecast weather 5 days ", (done) => {
      request(app)
        .get("/v1/forecast/soledad")
        .expect("Content-Type", /json/)
        .end((err, response) => {
          should.not.exist(err);
          response.body.should.have.property("list").with.lengthOf(5);
          done();
        });
    });
  });
});
