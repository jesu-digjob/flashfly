import dynamic from "next/dynamic";

const Inpaint = dynamic(() => import("../src/Inpaint"), {
  ssr: false,
});

import React from "react";
import { t } from "@lingui/macro";

import { Container } from "@mui/material";

import MyAppBar from "../src/MyAppBar";

export default function Inpainting() {
  return (
    <>
      <MyAppBar title={t`Inpainting`} />
      <Container maxWidth="lg" sx={{ my: 2 }}>
        <Inpaint />
      </Container>
    </>
  );
}
