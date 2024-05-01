class RouteURLS {
  static get Auth() {
    const AuthBaseUrl = "/auth";
    return {
      AuthBaseUrl,
      login:  "/login",
      register: '/register'
    };
  }
}
export default RouteURLS;
