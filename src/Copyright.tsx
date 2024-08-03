import * as React from "react";
import Typography from "@mui/material/Typography";
import MuiLink from "@mui/material/Link";
import { Trans } from "@lingui/macro";

import Link from "./Link";

export default function Copyright() {
  return (
    <div>
      <Typography variant="body2" color="text.secondary" align="center">
        Copyright © 2023
        <br />
        上海复猫网络科技有限公司
        <br />
        <MuiLink
          color="inherit"
          href="https://beian.miit.gov.cn/"
          target="_blank"
        >
          沪ICP备 20008729号-2
        </MuiLink>
      </Typography>
    </div>
  );
}
