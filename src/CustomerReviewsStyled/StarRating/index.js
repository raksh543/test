import { StarRateSharp } from "@material-ui/icons";
import React from "react";
import Stars from "./Stars";

function StarRating({rating}) {
  return <Stars stars={rating} />;
}

export default StarRating;
