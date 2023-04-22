const apiRoutes = {
    auth: {
      login: `http://localhost:3000/auth/login`,
      reffresh: `http://localhost:3000/auth/refresh`
    },
    patient: {
      base: `http://localhost:3000/patients`,
      patientById: `http://localhost:3000/patients?id=`,
    },
    user: {
      base: `http://localhost:3000/user`,
      userById: `http://localhost:3000/user?id=`,
    },
  };
  
  export default apiRoutes;