const Logout = () => {
  const tokenKey = localStorage.getItem("x-auth-token");
  if (!tokenKey) {
    return (window.location.href = "/login");
  }
  return (
    <div>
      <h1>Logout</h1>
      <button
        onClick={() => {
          localStorage.removeItem("x-auth-token");
          window.location.href = "/";
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
