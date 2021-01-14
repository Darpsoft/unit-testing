import { initialRequestHomeStart } from "../redux/actions";

describe("Prueba para los actions", () => {
  let getAction;

  beforeEach(() => {
    getAction = {
      payload: "PRUEBA TESTING",
      type: "INITIAL_REQUEST_HOME_START",
    };
  });

  it("Prueba para el action Start", () => {
    expect(initialRequestHomeStart("PRUEBA TESTING")).toEqual(getAction);
  });
});
