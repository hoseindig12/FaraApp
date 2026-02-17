import { Container, Grid } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RtlGrid from "./components/RtlGrid";
import {
  TextInput,
  ComboBox,
  ImageButton,
  TabControl,
  Barcode,
  TimePicker,
  IconButton,
} from "./components";

function Home() {
  const [value, setValue] = useState<Dayjs | null>(dayjs());
  const [txt, setTxt] = useState("");
  const [combo, setCombo] = useState("v2");
  const [activeImg, setActiveImg] = useState(false);

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

        <Grid size={12}>
          <h3>UI Components Demo</h3>
          <div style={{ display: "grid", gap: 12 }}>
            <TextInput
              label="Name"
              value={txt}
              onChange={setTxt}
              placeholder="Type name"
            />

            <ComboBox
              options={[
                { value: "v1", label: "Option One" },
                { value: "v2", label: "Option Two" },
                { value: "v3", label: "Third" },
              ]}
              value={combo}
              onChange={(v) => setCombo(v)}
              placeholder="Choose"
            />

            <div>
              <ImageButton
                src="/public/images/icons/1.png"
                label="ImageButton"
                active={activeImg}
                onClick={() => setActiveImg((s) => !s)}
              />
            </div>

            <TimePicker
              label="Time"
              value={undefined}
              onChange={(v) => console.log("time", v)}
            />

            <IconButton
              src="/public/icon/favicon.ico"
              label="With Icon"
              onClick={() => alert("clicked")}
            />

            <Barcode value={"123456789012"} />

            <TabControl
              tabs={[
                { id: "t1", title: "Tab 1", content: <div>Content 1</div> },
                { id: "t2", title: "Tab 2", content: <div>Content 2</div> },
              ]}
            />
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

function About() {
  return <div>صفحه درباره ما</div>;
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
