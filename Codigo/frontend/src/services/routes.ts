const apiRoutes = {
    auth: {
      login: `http://localhost:3000/auth/login`,
      reffresh: `http://localhost:3000/auth/refresh`
    },
    student: {
      base: `http://localhost:80/students`,
      studentById: `http://localhost:80/students?id=`,
    },
    partner: {
      base: `http://localhost:80/partner`,
      partnerById: `http://localhost:80/partner?id=`,
    },
  };
  
  export default apiRoutes;