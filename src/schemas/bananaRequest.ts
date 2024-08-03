import { object, date, string, InferType, boolean, number, mixed } from "yup";
import { ddaCallInputsSchema } from "./ddaCallInputs";
import { ddaModelInputsSchema } from "./ddaModelInputs";
import { upsampleModelInputsSchema } from "./upsampleModelInputs";
import { upsampleCallInputsSchema } from "./upsampleCallInputs";

const stepSchema = object({
  // name: string(),
  date: date(),
  value: object().optional(),
});

const bananaRequestSchema = object({
  _id: string(),
  bananaId: string(),
  message: string(),
  apiVersion: string(),
  createdAt: date().required(),
  modelKey: string(),
  startRequestId: string(),
  callID: string(),
  finished: boolean(),
  modelInputs: mixed().oneOf([ddaModelInputsSchema, upsampleModelInputsSchema]),
  callInputs: mixed().oneOf([ddaCallInputsSchema, upsampleCallInputsSchema]),
  steps: object({
    started: stepSchema.optional(),
    inference: stepSchema.optional(),
    finished: stepSchema.optional(),
  }),
  times: object({
    load: number(),
    init: number(),
    inference: number(),
  }).optional(),
  finishedTime: date(),
  totalTime: number(),
  credits: number(),
  paid: boolean(),
});

type BananaRequest = InferType<typeof bananaRequestSchema>;

export type { BananaRequest };
export { bananaRequestSchema };
export default bananaRequestSchema;
