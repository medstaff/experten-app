import {RepositoryImpl} from "../src/repository/repository"

let repo = new RepositoryImpl();


it("repository should create helper", async () => {
    expect.assertions(1);
    let helper = await repo.createHelper({ id: null, name: "foo", email: "me@example.org", postcode: "23560" });
    expect(helper.id).toEqual(1);
});

it("repository should return different amount for different location", async () => {
    const REICHSTAG = { latitude: 52.5186202, longitude: 13.3761872, requiredSkills: [] };
    const LUBECK = { latitude: 53.865467, longitude: 10.686559, requiredSkills: [] };

    let reichstagHelpers = await repo.findHelpers(REICHSTAG).then(helpers => helpers.count);
    let lubeckHelpers = await repo.findHelpers(LUBECK).then(helpers => helpers.count);
    expect(reichstagHelpers).not.toEqual(lubeckHelpers);
});
