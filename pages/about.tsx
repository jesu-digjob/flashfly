import * as React from "react";
import type { NextPage } from "next";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { t, Trans } from "@lingui/macro";

import Link from "../src/Link";
import Copyright from "../src/Copyright";
import MyAppBar from "../src/MyAppBar";

const About: NextPage = () => {
  return (
    <>
      <MyAppBar title={t`关于我们`} />
      <Container maxWidth="lg">
        <Box
          sx={{
            my: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" component="h1" gutterBottom>
            有数投研云
          </Typography>
          <Box maxWidth="sm" sx={{ textAlign: "justify" }}>
            <p>
              <Trans>
              金融视频内容服务平台
              在金融视频领域
              打通人货场运营边界
              构建AIGC内容服务闭环

              愿景:应用型AIGC内容市场领先者 
              </Trans>
            </p>

            
          </Box>

          <Typography variant="h6" component="h1" gutterBottom>
            <Trans>致谢</Trans>
          </Typography>

          <p>
            <Trans>
              感谢如下的机构帮助我们构建了内容服务的结构.
            </Trans>
          </p>

          <Box>
            <ul>
              <li>
                <Trans>
                  <a href="https://stability.ai">Stability.Ai</a> - 感谢他们在创建StableDiffusion方面付出的难以置信的时间、工作和努力，同样如此，他们决定以开源许可证公开发布它。
                </Trans>
              </li>
              <br />
              <li>
                <Trans>
                  <a href="https://huggingface.co/">HuggingFace</a> - 感谢他们的热情和灵感，让开发人员更容易访问机器学习，尤其是他们的Diffusers库。
                </Trans>
              </li>
              <li>
                <Trans>
                  <a href="https://www.titanplus.cn/">有数投研</a> - Alex, Thomas, Hertz, Jerry。
                </Trans>
              </li>
              <br />
            </ul>
          </Box>

          <Copyright />
        </Box>
      </Container>
    </>
  );
};

export default About;
