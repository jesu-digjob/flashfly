import { object, string, boolean, InferType } from "yup";
import models from "../config/models";
import Providers from "../config/providers";

const ddaCallInputsSchema = object({
  MODEL_ID: string().oneOf(Object.keys(models)),
  MODEL_URL: string(),
  MODEL_REVISION: string(),
  MODEL_PRECISION: string(),
  PROVIDER_ID: string().oneOf(Providers.map((p) => p.id)),
  // .default("CompVis/stable-diffusion-v1-4"),
  PIPELINE: string().oneOf([
    "StableDiffusionPipeline",
    "StableDiffusionImg2ImgPipeline",
    "StableDiffusionInpaintPipeline",
    "StableDiffusionInpaintPipelineLegacy",
    "JapaneseStableDiffusionPipeline",
    "JapaneseStableDiffusionImg2ImgPipeline",
    "JapaneseStableDiffusionInpaintPipeline",
    "lpw_stable_diffusion",
  ]),
  // .default("StableDiffusionPipeline"),
  custom_pipeline_method: string(),
  SCHEDULER: string().oneOf([
    "PNDM", // backcompat
    "DDIM", // backcompat
    "LMS", // backcompat
    "LMSDiscreteScheduler",
    "DDIMScheduler",
    "PNDMScheduler",
    "EulerAncestralDiscreteScheduler",
    "EulerDiscreteScheduler",
    "DPMSolverMultistepScheduler",
  ]), // .default("DDIM"),
  startRequestId: string(),
  safety_checker: boolean(),
});

type ddaCallInputs = InferType<typeof ddaCallInputsSchema>;

export type { ddaCallInputs };
export { ddaCallInputsSchema };
export default ddaCallInputsSchema;
