const apiRoutes = {
    auth: {
      login: `http://localhost:3000/auth/login`,
      reffresh: `http://localhost:3000/auth/refresh`
    },
    student: {
      base: `http://localhost:8080/student`,
      studentById: `http://localhost:8080/student/`,
    },
    partner: {
      base: `http://localhost:8080/partner`,
      partnerById: `http://localhost:8080/partner/`,
    },
  };
  
  export default apiRoutes;