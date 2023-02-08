// import React, { useEffect } from "react";
import axios from "axios";

const getConutry = () => {
  axios.get("https://api.covid19api.com/countries");
};

export default getConutry;
