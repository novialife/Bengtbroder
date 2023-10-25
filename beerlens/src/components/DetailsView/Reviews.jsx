import React from "react";
import "./styles/Reviews.css";
import BigReviewCard from "./components/BigReviewCard";
import SmallReviewCard from "./components/SmallReviewCard";

const Reviews = () => {
  return (
    <div class="parent">
      <div class="div1">
        <BigReviewCard />
      </div>
      <div class="div2">
        <SmallReviewCard />
      </div>
      <div class="div3">
        <SmallReviewCard />
      </div>
      <div class="div4">
        <SmallReviewCard />
      </div>
      <div class="div5">
        {" "}
        <SmallReviewCard />
      </div>
    </div>
  );
};

export default Reviews;
