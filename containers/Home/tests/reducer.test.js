import { UsersServices } from "../../../services/Users";
import { initialState, reducerHome } from "../redux/reducer";

describe("Analisis de Reducers de Home", () => {
  let userServices;
  const mockGetUser = [
    {
      firstName: "Pedro",
    },
  ];
  beforeEach(() => {
    userServices = new UsersServices(mockGetUser);
  });

  it("Prueba del reducerHome", () => {
    expect(reducerHome(initialState, {})).toEqual(initialState);
  });

  it("Prueba de Servicio", () => {
    expect(userServices.getUsers()).toEqual(mockGetUser);
  });
});
