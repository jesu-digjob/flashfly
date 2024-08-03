import { t } from "@lingui/macro";
import { useGongoUserId, useGongoOne } from "gongo-client-react";
import { useRouter } from "next/router";

import { isDev, REQUIRE_REGISTRATION } from "../src/lib/client-env";
import useModelState, { modelStateValues } from "../src/sd/useModelState";

import { Container } from "@mui/material";

import MyAppBar from "../src/MyAppBar";
import React from "react";
import OutputImage from "../src/OutputImage";
import Controls, { randomizeSeedIfChecked } from "../src/sd/Controls_assist";
import useRandomPrompt from "../src/sd/useRandomPrompt";
import Footer from "../src/sd/Footer";
import sharedInputTextFromInputs from "../src/lib/sharedInputTextFromInputs";
import { outputImageQueue } from "../src/lib/sendQueue";
import fetchToOutput from "../src/lib/fetchToOutput";

const txt2imgState = [
  "prompt",
  "MODEL_ID",
  "PROVIDER_ID",
  "negative_prompt",
  "num_inference_steps",
  "guidance_scale",
  "width",
  "height",
  "seed",
  "randomizeSeed",
  "shareInputs",
  "safety_checker",
  "sampler",
];

export default function Txt2Img() {
  const [imgSrc, setImgSrc] = React.useState<string>("");
  const [nsfw, setNsfw] = React.useState(false);
  const [log, setLog] = React.useState([] as Array<string>);
  const [dest, setDest] = React.useState(
    isDev ? "banana-local" : "banana-remote"
  );
  const [requestStartTime, setRequestStartTime] = React.useState<number | null>(
    null
  );
  const [requestEndTime, setRequestEndTime] = React.useState<number | null>(
    null
  );
  const [historyId, setHistoryId] = React.useState("");

  const userId = useGongoUserId();
  const user = useGongoOne((db) =>
    db.collection("users").find({ _id: userId })
  );
  const router = useRouter();

  // TODO, move stuff to here
  const uiState = { dest: { value: dest, set: setDest } };

  const inputs = useModelState(txt2imgState);
  const sharedInputs = sharedInputTextFromInputs(inputs);
  // console.log(inputs);
  const randomPrompt = useRandomPrompt(inputs.MODEL_ID.value);


  let [url, setUrl] = React.useState<string>("");
  // url = "https://mty.titanplus.cn/?stockId=000001&type=index"

  url = "https://mty-test.titanplus.cn/";
  console.log("url1="+url)

  async function go(event: React.SyntheticEvent) {
    // 调用event.preventDefault方法,防止表单提交刷新整个页面
    event.preventDefault();
    // setUrl(randomUrls[Math.floor(Math.random() * randomUrls.length)]);
    // console.log("url2="+url)

    // randomUrls = [
    //   "https://mty.titanplus.cn/?stockId=300274&type=stock",
    //   "https://mty.titanplus.cn/?stockId=600519&type=stock",
    //   "https://mty.titanplus.cn/?stockId=600000&type=stock"
    // ]

    setUrl("https://mty-test.titanplus.cn/");
    
    // if (REQUIRE_REGISTRATION) {
    //   // TODO, record state in URL, e.g. #prompt=,etc
    //   if (!user) return router.push("/login?from=/txt2img");
    //   if (!(user.credits.free > 0 || user.credits.paid > 0))
    //     return router.push("/credits");
    // }

    // // setLog(["[WebUI] Executing..."]);
    // setImgSrc("/img/placeholder.png");
    // if (!inputs.prompt.value) inputs.prompt.setValue(randomPrompt);

    // setRequestStartTime(Date.now());
    // setRequestEndTime(null);

    // const modelInputs = modelStateValues(inputs);
    // const seed = randomizeSeedIfChecked(inputs);

    // await fetchToOutput(
    //   "dda",
    //   {
    //     ...modelInputs,
    //     prompt: inputs.prompt.value || randomPrompt,
    //     seed,
    //   },
    //   {
    //     PIPELINE: "lpw_stable_diffusion",
    //     custom_pipeline_method: "text2img",
    //     SCHEDULER: modelInputs.sampler,
    //   },
    //   {
    //     setLog,
    //     setImgSrc,
    //     setNsfw,
    //     setHistoryId,
    //   }
    // );

    // setRequestEndTime(Date.now());
  }

  React.useEffect(() => {
    setUrl("https://mty-test.titanplus.cn/");
  }, [url]);

  return (
    <>
      <MyAppBar title={t`智能助理`} />
      <Container maxWidth="lg">
        <iframe src={url}
          style={{ width: 1120, border: 0, height: 600 }}
        ></iframe>
        {/* <OutputImage
          text={sharedInputs}
          imgSrc={imgSrc}
          nsfw={nsfw}
          log={log} 
          requestStartTime={requestStartTime}
          requestEndTime={requestEndTime}
          historyId={historyId}
        /> */}
        <Controls
          go={go}
          inputs={inputs}
          randomPrompt={randomPrompt}
          uiState={uiState}
          requestStartTime={requestStartTime}
          requestEndTime={requestEndTime}
        />
        <Footer />
      </Container>
    </>
  );
}
