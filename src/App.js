import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import PassContext from "./utils/PassContext";
import "./App.css";

import LandingComp from "./imports/LandingComponents";
import CandidateComp from "./imports/CandidateComponents";
import CompanyComp from "./imports/CompanyComponents";

function App() {
  const [loggedUser, setLoggedUser] = useState(null);
  const handleReturningUser = () => {
    if (localStorage.getItem("tokenXHIRE")) {
      const decodedToken = jwtDecode(localStorage.getItem("tokenXHIRE"));
      setLoggedUser({
        id: decodedToken.id,
        role: decodedToken.role,
      });
    }
  };
  useEffect(() => {
    handleReturningUser();
  }, []);
  return (
    <PassContext.Provider value={{ loggedUser, setLoggedUser }}>
      <Routes>
        <Route path="/" element={<LandingComp.Header />}>
          <Route path="" element={<LandingComp.Home />} />
          <Route path="createacc" element={<LandingComp.CreateAccount />} />
          <Route path="candidatereg" element={<LandingComp.CandidateReg />} />
          <Route path="candidatelogin" element={<LandingComp.UsersLogin />} />
          <Route path="companyreg" element={<LandingComp.CompanyReg />} />
          <Route path="companylogin" element={<LandingComp.CompanyLogin />} />
        </Route>
        <Route path="/users" element={<CandidateComp.UserHeader />}>
          <Route path="jobs">
            <Route path="" element={<CandidateComp.Home />} />
            <Route path="list" element={<CandidateComp.JobsLists />} />
            <Route path=":jobId/apply" element={<CandidateComp.JobsApply />} />
            <Route path=":jobId" element={<CandidateComp.JobDescription />} />
          </Route>
          <Route path="company">
            <Route path="" element={<CandidateComp.CompanyHome />} />
            <Route path=":companyId" element={<CandidateComp.CompanyPage />} />
          </Route>
          <Route path="myjobs">
            <Route path="" element={<CandidateComp.JobsMy />} />
          </Route>
          <Route path="messages">
            <Route path="" element={<CandidateComp.Messages />} />
          </Route>
          <Route path="profile">
            <Route path="" element={<CandidateComp.Profile />} />
            <Route path="plans" element={<CandidateComp.ProfilePlans />} />
          </Route>
        </Route>
        <Route path="company" element={<CompanyComp.CompanyHeader />}>
          <Route path="jobs">
            <Route path="" element={<CompanyComp.CompanyHome />} />
            <Route path="create" element={<CompanyComp.CompanyCreateJob />} />
            <Route
              path="selecttemp"
              element={<CompanyComp.CompanySelectTemplate />}
            />
          </Route>
          <Route path="candidates">
            <Route path="" element={<CompanyComp.CompanyCandidates />} />
          </Route>
          <Route path="messages">
            <Route path="" element={<CompanyComp.CompanyMessages />} />
          </Route>
          <Route path="profile">
            <Route path="" element={<CompanyComp.CompanyProfile />} />
          </Route>
        </Route>
        <Route path="/services" element={<h1>Services</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
      </Routes>
      <LandingComp.Footer />
    </PassContext.Provider>
  );
}

export default App;
