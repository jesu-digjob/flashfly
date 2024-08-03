import { Trans, Plural } from "@lingui/macro";
import { useGongoUserId, useGongoOne } from "gongo-client-react";

import { Box, Button, Grid } from "@mui/material";

import { /* isDev, */ REQUIRE_REGISTRATION } from "./lib/client-env";

export default function GoButton({
  disabled,
  // _dest,
  // _setDest,
  credits,
}: {
  disabled: boolean;
  // _dest: string;
  // _setDest: React.Dispatch<React.SetStateAction<string>>;
  credits: number;
}) {
  // const userId = useGongoUserId();
  // const user = useGongoOne((db) =>
  //   db.collection("users").find({ _id: userId })
  // );

  // const userCredits = user?.credits?.free + user?.credits?.paid;

  return (
    <>
      <Grid container sx={{ my: 1 }}>
        <Grid
          item
          xs={/*isDev ? 7 : */ 12}
          sm={/*isDev ? 8 : */ 12}
          md={/*isDev ? 9 : */ 12}
        >
          <Button
            variant="contained"
            fullWidth
            sx={{ my: 1 }}
            type="submit"
            disabled={disabled}
          >
            {(function () {
              return <Trans>立即生成 ￥0.01</Trans>;
            })()}
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
