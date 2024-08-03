import { ModelState } from "../sd/useModelState";

interface RequiredInputs {
  prompt: { value: string };
  shareInputs: { value: boolean };
  guidance_scale: { value: number };
  num_inference_steps: { value: number };
  seed: { value: number };
  negative_prompt: { value: string };
}

export default function sharedInputTextFromInputs(
  inputs: ModelState | RequiredInputs,
  always = false,
  separator = ", ",
  includePromptLabel = false
) {
  const prompt = inputs.prompt.value;
  if (!(always || inputs.shareInputs.value)) return prompt;

  return (
    (includePromptLabel ? "Prompt: " : "") +
    prompt +
    separator +
    "CFG: " +
    inputs.guidance_scale.value +
    separator +
    "steps: " +
    inputs.num_inference_steps.value +
    separator +
    "seed: " +
    inputs.seed.value +
    separator +
    "negative_prompt: " +
    inputs.negative_prompt.value
  );
}
