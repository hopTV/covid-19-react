import { FormControl, InputLabel, NativeSelect } from "@material-ui/core";
import React, { useEffect } from "react";
import getConutry from "../api/fetch";

const Country = ({ value, handleOnChange }) => {
  
  return (
    <FormControl>
      <InputLabel htmlFor="" shrink>
        Quốc Gia
      </InputLabel>
      <NativeSelect>
        value= {value}
        onChang={handleOnChange}
        inputProps =
        {{
          name: "country",
          id: "country-selector",
        }}
      </NativeSelect>
    </FormControl>
  );
};

export default Country;
