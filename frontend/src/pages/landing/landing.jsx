import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";


// Components
import { Navigation, SEO, Footer } from "../../components";
import Loader from '../loader/loader';
// Pages
const Home = lazy(() => import("./home/home"));
const Blog = lazy(() => import("./blog/blog"));
const NoMatch = lazy(() => import("../../components/no-match/no-match"));


// coming soon page
const ComingSoon = lazy(() => import("../coming_soon/coming_soon"));

function Landing() {
  return (
    <>
      <SEO
        title="Home | Empowered Blockchain"
        description="We educate on the latest blockchain and tech related topics."
        type="article"
      />

      {/* Navigation */}
      <Navigation />

      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route index element={<Home className="dark bg-white dark:bg-slate-800" />} />
          <Route path="/blog" element={<ComingSoon />} />
          <Route path="/cohort" element={<ComingSoon />} />
          {/*<Route path="/blog" element={<Blog />} />*/}
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Suspense>

      <Footer />
    </>
  );
}

export default Landing;
