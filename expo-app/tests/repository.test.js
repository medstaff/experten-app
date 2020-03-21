import {RepositoryImpl} from "../src/repository/repository"

let repo = new RepositoryImpl();


it("repository should create helper", async () => {
    expect.assertions(1);
    let helper = await repo.createHelper({ id: null, name: "foo", email: "me@example.org", postcode: "23560" });
    expect(helper.id).toEqual(1);
});
