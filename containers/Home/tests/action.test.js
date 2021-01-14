import { initialRequestHomeStart } from "../redux/actions";

describe("Prueba para los actions", () => {
  let getAction;
  const suma = 2 + 2;
  const valueNull = null;
  const flotingPoint = 0.16 + 0.14;
  const email = "pedro@test.com";
  const students = ["Angel", "Fernando", "Victor"];

  beforeEach(() => {
    getAction = {
      payload: "PRUEBA TESTING",
      type: "INITIAL_REQUEST_HOME_START",
    };
  });

  it("Prueba para el action Start", () => {
    expect(initialRequestHomeStart("PRUEBA TESTING")).toEqual(getAction);
  });

  it("Verificar si  2 + 2 es igual a 4", () => {
    expect(suma).toBe(4);
    expect(suma).toEqual(4);
    expect(suma).not.toBe(5);
  });

  // Thruthiness

  it("Verificación con Thruthiness", () => {
    expect(valueNull).toBeNull();
    expect(valueNull).not.toBeUndefined();
    expect(valueNull).toBeDefined();
    expect(valueNull).not.toBeTruthy();
    expect(valueNull).toBeFalsy();
  });

  // Number

  it("VErificación de números", () => {
    expect(suma).toBeGreaterThan(3);
    expect(suma).toBeGreaterThanOrEqual(4);
    expect(suma).toBeLessThan(6);
    expect(suma).toBeLessThanOrEqual(9);
    expect(suma).toBe(4);
    expect(suma).toEqual(4);
    expect(flotingPoint).toBeCloseTo(0.3);
  });

  // String

  it("Verificación con String", () => {
    expect(email).toMatch(/\S+@\S+\.\S+/);
    expect(email).toBe("pedro@test.com");
    expect(email).toEqual("pedro@test.com");
  });

  // Array

  it("Verificar con un Array", () => {
    expect(students).not.toContain("Angelll");
    expect(students).not.toHaveLength(4);
  });
});
