const apiRoutes = {
    auth: {
      login: `http://localhost:8080/auth/login`,
      reffresh: `http://localhost:8080/auth/refresh`
    },
    student: {
      base: `http://localhost:8080/student`,
      studentById: `http://localhost:8080/student/`,
      balance: `http://localhost:8080/student/balance/`, 
    },
    partner: {
      base: `http://localhost:8080/partner`,
      partnerById: `http://localhost:8080/partner/`,
    },
    professor: {
      base: `http://localhost:8080/professor`,
      professorById: `http://localhost:8080/professor/`,
    },
    coin: {
      base: `http://localhost:8080/coin`
    },
    benefit: {
      base: `http://localhost:8080/benefit`,
      benefitById: `http://localhost:8080/benefit/`,
    },
    benefitStudent: {
      base: `http://localhost:8080/benefitStudent`
    },
    extract: {
      base: `http://localhost:8080/pdf`
    }
  };
  
  export default apiRoutes;