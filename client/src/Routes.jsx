import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const License = React.lazy(() => import("pages/License"));
const PrivacyPolicy = React.lazy(() => import("pages/PrivacyPolicy"));
const FAQ = React.lazy(() => import("pages/FAQ"));
const Error = React.lazy(() => import("pages/Error"));
const BlogDetails = React.lazy(() => import("pages/BlogDetails"));
const BlogPage = React.lazy(() => import("pages/BlogPage"));
const ContactPage = React.lazy(() => import("pages/ContactPage"));
const AgentProfile = React.lazy(() => import("pages/AgentProfile"));
const AgentList = React.lazy(() => import("pages/AgentList"));
const PropertyDetails = React.lazy(() => import("pages/PropertyDetails"));
const ListingMapView = React.lazy(() => import("pages/ListingMapView"));
const Listing = React.lazy(() => import("pages/Listing"));
const AboutUs = React.lazy(() => import("pages/AboutUs"));
const LandingPage = React.lazy(() => import("pages/LandingPage"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/listing" element={<Listing />} />
          <Route path="/listingmapview" element={<ListingMapView />} />
          <Route path="/propertydetails" element={<PropertyDetails />} />
          <Route path="/agentlist" element={<AgentList />} />
          <Route path="/agentprofile" element={<AgentProfile />} />
          <Route path="/contactpage" element={<ContactPage />} />
          <Route path="/blogpage" element={<BlogPage />} />
          <Route path="/blogdetails" element={<BlogDetails />} />
          <Route path="/error" element={<Error />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/license" element={<License />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
