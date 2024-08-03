import dynamic from "next/dynamic";

const Inpaint = dynamic(() => import("../src/Img2img"), {
  ssr: false,
});

import React from "react";
import { t } from "@lingui/macro";

import { Container } from "@mui/material";

import MyAppBar from "../src/MyAppBar";

export default function Img2img() {
  return (
    <>
      <MyAppBar title={t`智能助理`} />
      <Container maxWidth="lg" sx={{ my: 2 }}>
        <Inpaint />
      </Container>
    </>
  );
}
