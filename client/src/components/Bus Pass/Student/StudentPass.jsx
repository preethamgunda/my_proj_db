import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Radio from "@mui/joy/Radio";
const initialState = {
  name: "",
  father_name: "",
};
const StudentPass = () => {
  const [formData, setFormData] = useState(initialState);
  const [value, setValue] = React.useState(dayjs("2022-04-17"));
  const [selectedValue, setSelectedValue] = React.useState("a");
  useEffect(() => {
    if (id) {
      const singleTour = userTours.find((tour) => tour._id === id);
      console.log(singleTour);
      setFormData({ ...singleTour });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <div style={{ marginTop: "150px" }}>
      <h5>Applicant Details </h5>
      <p>
        Name<span color="#fc0b03">*</span>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </p>

      <p>
        Date Of Birth
        <span color="">*</span>
      </p>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          value={value}
          defaultValue={dayjs("2022-04-17")}
          onChange={(newValue) => setValue(newValue)}
        />
      </LocalizationProvider>
      <p>
        Father's / Guardian's Name <span color="">*</span>
      </p>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <p>
        Gender<span color="">*</span>
        <p>
          Female
          <Radio
            checked={selectedValue === "a"}
            onChange={handleChange}
            value="a"
            name="radio-buttons"
            slotProps={{ input: { "aria-label": "A" } }}
          />
        </p>
        <p>
          Male
          <Radio
            checked={selectedValue === "b"}
            onChange={handleChange}
            value="b"
            name="radio-buttons"
            slotProps={{ input: { "aria-label": "B" } }}
          />
        </p>
      </p>
      <p>
        Age
        <TextField />
      </p>
      <p>
        Email Id<span color="">*</span>
      </p>
      <p>
        Upload Aadhar
        <TextField id="outlined-basic" variant="outlined" type="file" />
      </p>
      <p>
        College Id
        <TextField id="outlined-basic" variant="outlined" type="file" />
      </p>
      <h5>Pass Type</h5>
      <p>
        City
        <TextField
          id="outlined-basic"
          variant="outlined"
          defaultValue={"Hyderabad"}
        />
      </p>
      <p></p>
    </div>
  );
};

export default StudentPass;
