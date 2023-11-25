const Faq = () => {
  const styles = {
    loginCard: {
      backgroundImage:
        'url("https://source.unsplash.com/1200x800?abstract,soft")',
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      filter: "blur(0.5px)",
      opacity: 0.7,
    },

    loginForm: {
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      padding: "2rem",
      borderRadius: "1rem",
      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
    },

    loginFormHeading: {
      color: "#fff",
      textAlign: "center",
      marginBottom: "2rem",
    },

    loginInput: {
      backgroundColor: "transparent",
      border: "none",
      borderBottom: "1px solid #fff",
      color: "#fff",
      padding: "0.5rem",
      marginBottom: "1rem",
      outline: "none",
    },

    loginButton: {
      backgroundColor: "#007bff",
      color: "#fff",
      padding: "0.5rem 1rem",
      border: "none",
      borderRadius: "0.5rem",
      cursor: "pointer",
    },
  };

  return (
    <div className="container mx-auto p-4">
      <div style={styles.loginCard}>
        <div style={styles.loginForm}>
          <h1 style={styles.loginFormHeading}>Login</h1>

          <form className="mt-4">
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email address
              </label>

              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                style={styles.loginInput}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Password
              </label>

              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter password"
                style={styles.loginInput}
              />
            </div>

            <div className="form-group">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="rememberMe"
                  value="rememberMe"
                />
                <label className="form-check-label">Remember me</label>
              </div>
            </div>

            <button className="btn btn-primary mt-4" style={styles.loginButton}>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Faq;
