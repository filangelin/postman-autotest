// autotest for method host https://swapi.dev

//{{host}}/api/people/10
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Body matches string", function () {
    pm.expect(pm.response.text()).to.include("birth_year");
});

pm.test("Response time is less than 200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(600);
});

//{{host}}/api/planets/7/
pm.test("Content-Type is present", function () {
    pm.response.to.have.header("Strict-Transport-Security");
    });
pm.test("Status code name has string", function () {
    pm.response.to.have.status("OK");
    });
pm.test("Successful GET request", function () {
    pm.expect(pm.response.code).to.be.oneOf([200,202]);
    });

//{{host}}/api/starships/5/
pm.test("length", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.length).to.eql("38");
});

pm.test("Body matches string", function () {
    pm.expect(pm.response.text()).to.include("crew");
});

pm.test("name", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.name).to.eql("Sentinel-class landing craft");
});