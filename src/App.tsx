import { Container, Grid, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Home() {
  const [value, setValue] = useState<Dayjs | null>(dayjs());

  return (
    <Container>
      <Grid container spacing={2} mt={4}>
        <Grid item xs={12} md={6}>
          <DatePicker
            dis
            label="تاریخ"
            value={value}
            format="YYYY/MM/DD"
            onChange={(newValue) => setValue(newValue)}
            slotProps={{
              textField: {
                fullWidth: true,
              },
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

function About() {
  return <div>About Page</div>;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
