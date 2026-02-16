import { Container, Grid } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RtlGrid from "./components/RtlGrid";

function Home() {
  const [value, setValue] = useState<Dayjs | null>(dayjs());

  return (
    <Container maxWidth="md">
      <Grid container spacing={2} mt={4}>
        <Grid size={12}>
          <DatePicker
            label="تاریخ"
            format="YYYY/MM/DD"
            value={value}
            onChange={(newValue) => setValue(newValue)}
            slotProps={{
              textField: { fullWidth: true },
            }}
          />
        </Grid>

        <Grid size={12}>
          <RtlGrid />
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
