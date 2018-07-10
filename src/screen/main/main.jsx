import React from "react";
import Backsplash from "./backsplash2";
import About from "./about";
import Why from "./why";
import Price from "./price";
import Faq from "./faq";
import FaqMain from "./faqMain";
import Contact from "./contact";
import Insta from "./insta";

const Main = props => {
  let { handleChangeFaq, showFaq } = props;
  return (
    <div>
      <Backsplash />
      {!showFaq && (
        <div>
          <About />
          <Why />
          <Faq handleChangeFaq={handleChangeFaq} />
          <Price />
          <Contact />
          <Insta />
        </div>
      )}
      {showFaq && <FaqMain />}
    </div>
  );
};

export default Main;
