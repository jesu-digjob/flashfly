import * as React from "react";
import type { NextPage } from "next";
import { t, Trans } from "@lingui/macro";

import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  IconButton,
  InputAdornment,
  Switch,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Tooltip,
  Typography,
} from "@mui/material";

import Link from "../src/Link";
import MyAppBar from "../src/MyAppBar";
import Copyright from "../src/Copyright";
import { useGongoLive, useGongoSub } from "gongo-client-react";
import Starred from "../src/Starred";
import useOver18 from "../src/lib/useOver18";
import { useRouter } from "next/router";
import { Clear, GridView, Help, Splitscreen } from "@mui/icons-material";
import { NUM_REPORTS_UNTIL_REMOVAL } from "../src/lib/constants";

function TextFieldDebounced({
  currentValue,
  onChange,
}: {
  currentValue: string;
  onChange: (value: string) => void;
}) {
  const timeout = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const [value, setValue] = React.useState("");

  React.useEffect(() => {
    if (value !== currentValue) {
      console.log(1);
      if (timeout.current) {
        clearTimeout(timeout.current);
        timeout.current = null;
      }
      timeout.current = setTimeout(() => onChange(value), 750);
    }
    return () => {
      timeout.current && clearTimeout(timeout.current);
    };
  }, [onChange, value, currentValue]);

  return React.useMemo(
    () => (
      <TextField
        placeholder={t`智能公式`}
        size="small"
        fullWidth
        sx={{ mt: 1 }}
        value={value}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setValue(event.target.value)
        }
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {value != "" && (
                <IconButton onClick={() => setValue("")} edge="end">
                  <Clear />
                </IconButton>
              )}

              <Tooltip
                title={
                  <Box>
                    {/* <Trans>
                      Only show stars with matching prompts. More advanced
                      filters coming soon. Separate multiple terms with a pipe
                      (&quot;|&quot;) character.
                    </Trans> */}
                    <Trans>
                      暂时支持匹配的搜索结果. 后续会支持高级搜索功能. 
                      多个搜索项通过(&quot;|&quot;)字符进行分隔.
                    </Trans>
                  </Box>
                }
                enterDelay={0}
                enterTouchDelay={0}
                leaveDelay={0}
                leaveTouchDelay={4000}
              >
                <Help />
              </Tooltip>
            </InputAdornment>
          ),
        }}
      />
    ),
    [value]
  );
}

const Home: NextPage = () => {
  const router = useRouter();

  // const [nsfwFilter, setNsfwFilter] = React.useState(true);
  const nsfwFilter =
    !router.query.nsfwFilter || router.query.nsfwFilter === "true";
  const setNsfw = (nsfwFilter: boolean) =>
    router.replace(
      { pathname: "/", query: { ...router.query, nsfwFilter } },
      undefined,
      { shallow: true, scroll: false }
    );

  // const [show, setShow] = React.useState("recent");
  const show = router.query.show || "recent";
  const setShow = (show: string) =>
    router.replace(
      { pathname: "/", query: { ...router.query, show } },
      undefined,
      { shallow: true, scroll: false }
    );

  const explicit = router.query.explicit === "true" ? true : false;
  const setExplicit = (explicit: boolean) =>
    router.replace(
      { pathname: "/", query: { ...router.query, explicit } },
      undefined,
      { shallow: true, scroll: false }
    );

  const filter =
    typeof router.query.filter === "string" ? router.query.filter : "";
  const setFilter = React.useCallback(
    (filterOrEvent: string | React.ChangeEvent<HTMLInputElement>) => {
      const filter =
        typeof filterOrEvent === "string"
          ? filterOrEvent
          : filterOrEvent.target.value;
      router.replace(
        { pathname: "/", query: { ...router.query, filter } },
        undefined,
        { shallow: true, scroll: false }
      );
    },
    [router]
  );

  const over18 = useOver18();

  // const [useGrid, setUseGrid] = React.useState(true);
  const useGrid = !router.query.useGrid || router.query.useGrid === "true";
  const setUseGrid = (useGrid: boolean) =>
    router.replace(
      { pathname: "/", query: { ...router.query, useGrid } },
      undefined,
      { shallow: true, scroll: false }
    );

  const query: Record<string, unknown> = {};
  if (!router.query.showDeleted) query.deleted = { $ne: true };
  if (!router.query.showReported)
    query.$or = [
      { reports: { $exists: false } },
      { reports: { $lt: NUM_REPORTS_UNTIL_REMOVAL } },
    ];
  const sortField = show === "recent" ? "date" : "likes";
  if (nsfwFilter) query["callInputs.safety_checker"] = true;
  if (!nsfwFilter && !explicit)
    query["modelInputs.prompt"] = {
      $not: /tits|cum|dick|pussy|loli|sex|ejaculation|vagina|penis/i,
    };

  let items = useGongoLive(
    (db) => db.collection("stars").find(query).sort(sortField, "desc") //.limit(100)
  );
  let entry1 = {
    _id: "https://930-wps.oss-cn-shanghai.aliyuncs.com/doc/aaa_stars.png",
    filename: "https://930-wps.oss-cn-shanghai.aliyuncs.com/doc/aaa_stars.png",
    sha256: "",
    size: 123,
    type: "image",
    mimeType: "",
    createdAt: "",
    image: {
      format: "jpg",
      size: 1234,
      width: 184,
      height: 184,
    },
  }

  let entry2 = {
    _id: "https://930-wps.oss-cn-shanghai.aliyuncs.com/doc/recent_stars.png",
    filename: "https://930-wps.oss-cn-shanghai.aliyuncs.com/doc/recent_stars.png",
    sha256: "",
    size: 123,
    type: "image",
    mimeType: "",
    createdAt: "",
    image: {
      format: "jpg",
      size: 1234,
      width: 184,
      height: 184,
    },
  }

  items = [{
    _id: "aaa_stars",
    userId: "123123123123123123123121",
    date: new Date(),
    callInputs: {
      MODEL_ID: "1234",
      MODEL_URL: "aaa",
      MODEL_REVISION: "123",
      MODEL_PRECISION: "123",
      PROVIDER_ID: "CompVis/stable-diffusion-v1-4",
      PIPELINE: "StableDiffusionPipeline",
    },
    modelInputs: {
      prompt: "在办公室的魔法师",
      negative_prompt: "aaa",
      width: 512,
      height: 512,
      num_inference_steps:15,
      guidance_scale: 7.5,
      seed: 0,
      image: "123",
      mask_image: "123",
      strength: 1,
      MODEL_ID: "123",
      PROVIDER_ID: "123",
      sampler: "123",
    },
    files: {
      output: entry1._id,
    },
    likes: 10,
  },{
    _id: "recent_stars",
    userId: "123123123123123123123121",
    date: new Date(),
    callInputs: {
      MODEL_ID: "1234",
      MODEL_URL: "aaa",
      MODEL_REVISION: "123",
      MODEL_PRECISION: "123",
      PROVIDER_ID: "CompVis/stable-diffusion-v1-4",
      PIPELINE: "StableDiffusionPipeline",
    },
    modelInputs: {
      prompt: "智能公式, 用于买卖点分析",
      negative_prompt: "aaa",
      width: 512,
      height: 512,
      num_inference_steps:15,
      guidance_scale: 7.5,
      seed: 0,
      image: "123",
      mask_image: "123",
      strength: 1,
      MODEL_ID: "123",
      PROVIDER_ID: "123",
      sampler: "123",
    },
    files: {
      output: entry2._id,
    },
    likes: 10,
  }]

  // We don't do this as part of the gongo query because the regexp instance doesn't
  // serialize and breaks the hasQueryChanged check (TODO in gongo)
  const filteredItems = React.useMemo(() => {
    const reFilter = new RegExp(filter, "i");

    return items.filter((item) => {
      const prompt = item?.modelInputs?.prompt;
      if (prompt && prompt.match(reFilter)) return true;
    });
  }, [items, filter]);

  useGongoSub("stars");

  return (
    <>
      <MyAppBar title={t`首页`} />
      <Container maxWidth="lg" sx={{ my: 2 }}>
        <Box sx={{ textAlign: "center" }}>
          <Button variant="contained" component={Link} href="/start">
            <Trans>创作好内容</Trans>
          </Button>
        </Box>
        <br />

        {over18 && (
          <FormGroup sx={{ justifyContent: "center", flexDirection: "row" }}>
            <FormControlLabel
              control={
                <Switch
                  checked={nsfwFilter}
                  onChange={(event) => setNsfw(event.target.checked)}
                />
              }
              label={
                <Box>
                  <Trans>NSFW Filter</Trans>
                </Box>
              }
            />
            {!nsfwFilter && (
              <FormControlLabel
                control={
                  <Checkbox
                    checked={explicit}
                    onChange={(event) => setExplicit(event.target.checked)}
                  />
                }
                label={
                  <Box>
                    <Trans>Explicit</Trans>
                  </Box>
                }
              />
            )}
          </FormGroup>
        )}

        <Box sx={{ textAlign: "center" }}>
          <ToggleButtonGroup
            color="primary"
            value={show}
            exclusive
            size="small"
            onChange={(_event, newValue) => newValue && setShow(newValue)}
            aria-label="Platform"
            sx={{ fontSize: "80%" }}
          >
            <ToggleButton value="recent">
              <Trans>时间优先</Trans>
            </ToggleButton>
            <ToggleButton value="popular">
              <Trans>人气优先</Trans>
            </ToggleButton>
          </ToggleButtonGroup>{" "}
          <ToggleButtonGroup
            color="primary"
            value={useGrid ? "grid" : "nogrid"}
            exclusive
            size="small"
            onChange={(_event, newValue) => newValue && setUseGrid(!useGrid)}
            aria-label="Platform"
            sx={{ fontSize: "80%", position: "relative", top: 7 }}
          >
            <ToggleButton value="grid">
              <GridView sx={{ fontSize: "170%" }} />
            </ToggleButton>
            <ToggleButton value="nogrid">
              <Splitscreen sx={{ fontSize: "170%" }} />
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <TextFieldDebounced currentValue={filter} onChange={setFilter} />
        </Box>
        <Starred items={filteredItems} cols={useGrid ? undefined : 1} />
        <Copyright />
      </Container>
    </>
  );
};

export default Home;
