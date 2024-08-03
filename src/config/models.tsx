export interface Model {
  MODEL_ID: string;
  MODEL_PRECISION?: "" | "fp16";
  MODEL_REVISION?: string;
  MODEL_URL?: string;
  description: string;
  notes?: JSX.Element;
  defaults?: Record<string, unknown>;
  randomPrompts?: string[] | { $from: string };
  safety_checker?: boolean;
  modelKeys?: {
    [key: string]: Record<string, unknown>;
  };
  tags?: string[];
}

const models: Record<string, Model> = {
  "stabilityai/stable-diffusion-2-1-base": {
    MODEL_ID: "stabilityai/stable-diffusion-2-1-base",
    description: "Latest Stable Diffusion, Dec 6th. (512x512)",
    randomPrompts: { $from: "CompVis/stable-diffusion-v1-4" },
    safety_checker: false,
  },
  "stabilityai/stable-diffusion-2-1": {
    MODEL_ID: "stabilityai/stable-diffusion-2-1",
    description: "Latest Stable Diffusion, Dec 6th. (768x768)",
    randomPrompts: { $from: "CompVis/stable-diffusion-v1-4" },
    safety_checker: false,
    defaults: {
      width: 768,
      height: 768,
    },
  },
  "stabilityai/stable-diffusion-2-base": {
    MODEL_ID: "stabilityai/stable-diffusion-2-base",
    description: "Stable Diffusion from Nov 24th. (512x512)",
    randomPrompts: { $from: "CompVis/stable-diffusion-v1-4" },
    safety_checker: false,
  },
  "stabilityai/stable-diffusion-2": {
    MODEL_ID: "stabilityai/stable-diffusion-2",
    description: "Stable Diffusion from Nov 24th. (768x768)",
    randomPrompts: { $from: "CompVis/stable-diffusion-v1-4" },
    safety_checker: false,
    defaults: {
      width: 768,
      height: 768,
    },
  },
  "runwayml/stable-diffusion-v1-5": {
    MODEL_ID: "runwayml/stable-diffusion-v1-5",
    description: "Stable Diffusion from Oct 20th.",
    randomPrompts: { $from: "CompVis/stable-diffusion-v1-4" },
  },
  "runwayml/stable-diffusion-inpainting": {
    MODEL_ID: "runwayml/stable-diffusion-inpainting",
    description: "Fine-tuned SD; Best for Inpainting.",
    randomPrompts: { $from: "CompVis/stable-diffusion-v1-4" },
    notes: (
      <div style={{ color: "red" }}>
        {" "}
        Warning! Currently breaks easily on non-standard image sizes.
      </div>
    ),
  },
  "prompthero/openjourney-v2": {
    MODEL_ID: "prompthero/openjourney-v2",
    MODEL_PRECISION: "",
    MODEL_REVISION: "",
    description: "SDv1.5 finetuned on Midjourney",
    randomPrompts: [
      "retro serie of different cars with different colors and shapes",
    ],
    notes: (
      <a href="https://huggingface.co/prompthero/openjourney-v2">
        Openjourney by PromptHero, Model Card
      </a>
    ),
  },
  "ICBINP-v7": {
    MODEL_ID: "ICBINP-v7",
    MODEL_PRECISION: "fp16",
    MODEL_REVISION: "",
    // CHECKPOINT_URL: "https://civitai.com/api/download/models/76459?type=Model&format=PickleTensor&size=pruned&fp=fp16",
    description: "I Can't Believe It's Not Photography",
    tags: [
      "portrait",
      "photo",
      "hyperrealistic character portraits",
      "photography",
    ],
    notes: (
      <a href="https://civitai.com/models/28059/icbinp-i-cant-believe-its-not-photography">
        ICBINP page on CivitAI
      </a>
    ),
    randomPrompts: [
      "dark and gloomy, 8k, a close up photo of the joker with flames behind him , lifelike texture, dynamic composition, Fujifilm XT2, 85mm F1.2, 1/80 shutter speed, (bokeh), high contrast",
      "1 woman((upper body selfie, happy)), masterpiece, best quality, ultra-detailed, solo, outdoors, (night), mountains, nature, (stars, moon) cheerful, happy, backpack, sleeping bag, camping stove, water bottle, mountain boots, gloves, sweater, hat, flashlight, forest, rocks, river, wood, smoke, shadows, contrast, clear sky, analog style (look at viewer:1.2) (skin texture) (film grain:1.3), (warm hue, warm tone) :1.2), close up, cinematic light, sidelighting, ultra high res, best shadow, RAW, upper body",
      "anime, Portrait photo of muscular bearded guy in a worn mech suit, ((light bokeh)), intricate, (steel metal [rust]), elegant, sharp focus, photo by greg rutkowski, soft lighting, vibrant colors, masterpiece, ((streets)), detailed face",
      "realistic photo, a realistic photo of 18yo girl in a sundress, blonde hair, beach, (1girl), (extremely detailed CG unity 8k wallpaper), photo of the most beautiful artwork in the world, professional majestic (photography by Steve McCurry), 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3 sharp focus, f 5.6, High Detail, Sharp focus, dramatic, (looking at viewer:1.2), (detailed pupils:1.3), (natural light),",
      "(masterpiece, photorealistic, raw,:1.4), (extremely low angle of stunning 25 year old woman wearing a beret and mohair jacket in 1969 Paris, looking away from camera, portrait taken by David Lazar, portrait by Joel Santos, Portrait by Steve McCurry :1.2), close up, cinematic light, sidelighting, ultra high res, best shadow, RAW, upper body, old man, wearing pullover",
      "((half body)) RAW photo of a man in a suit in a park",
      "Unparalleled masterpiece, (photorealistic:1.4), best quality, beautiful lighting, (hot spring), (extremely detailed 8k wallpaper), full shot landscape photo of the most beautiful artwork in the world, cloudy sky background lush landscape house and trees illustration concept art",
      "a close up photograph of a beautiful older woman, award winning photo, best quality, portrait, by lee jeffries ,nikon d850 ,film ,stock photograph, kodak 400, f1.6 lens ,(rich colors:1.1) ,hyper realistic, lifelike texture, natural lighting unreal engine, cinestill 800, (100mm lens)",
      "(dark shot:1.1), epic realistic, portrait of halo, sunglasses, blue eyes, tartan scarf, white hair by atey ghailan, by greg rutkowski, by greg tocchini, by james gilleard, by joe fenton, by kaethe butcher, gradient yellow, black, brown and magenta color scheme, grunge aesthetic!!! graffiti tag wall background, art by greg rutkowski and artgerm, soft cinematic light, adobe lightroom, photolab, hdr, intricate, highly detailed, (depth of field:1.4), faded, (neutral colors:1.2), (hdr:1.4), (muted colors:1.2), hyperdetailed, (artstation:1.4), cinematic, warm lights, dramatic light, (intricate details:1.1), complex background, (rutkowski:0.66), (teal and orange:0.4)",
      "(8k, best quality, masterpiece:1.2),(best quality:1.0), (ultra highres:1.0), RAW photo of a beautiful woman, shoulder, hair ribbons, by agnes cecile, half body portrait, extremely luminous bright design, pastel colors, (ink:1.3), autumn lights",
      "close up of a european woman, ginger hair, winter forest, natural skin texture, 24mm, 4k textures, soft cinematic light, RAW photo, photorealism, photorealistic, intricate, elegant, highly detailed, sharp focus, ((((cinematic look)))), soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded",
    ],
    defaults: {
      width: 768,
      height: 768,
      negative_prompt:
        "(semi-realistic, cgi, 3d, render, sketch, cartoon, drawing, anime:1.4, monochrome), text, close up, cropped, out of frame, worst quality, low quality, jpeg artifacts, ugly, duplicate, morbid, mutilated, extra fingers, mutated hands, poorly drawn hands, poorly drawn face, mutation, deformed, blurry, dehydrated, bad anatomy, bad proportions, extra limbs, cloned face, disfigured, gross proportions, malformed limbs, missing arms, missing legs, extra arms, extra legs, fused fingers, too many fingers, long neck, watermark",
    },
  },
  "A-Zovya_Photoreal_V1": {
    MODEL_ID: "A-Zovya_Photoreal_V1",
    MODEL_PRECISION: "fp16",
    MODEL_REVISION: "",
    // CHECKPOINT_URL: "https://civitai.com/api/download/models/61727?type=Model&format=SafeTensor&size=pruned&fp=fp16",
    description: "Photorealistic, emphasis on skin texture and details.",
    tags: [
      "photorealistic",
      "realism",
      "photography",
      "photorealism",
      "realistic",
    ],
    notes: (
      <a href="https://civitai.com/models/57319?modelVersionId=61727">
        A-Zovya Photoreal page on CivitAI
      </a>
    ),
    randomPrompts: [
      "closeup portrait of beautiful (80s cyberpunk:1.3) woman lips pressed (serious:1.2) look (bright side light rim light:1.2) deep dark shadows dramatic camera angle high contrast color grading (masterpiece:1.2) (photorealistic:1.2) (bokeh:1.2) (best quality) (detailed skin:1.3) (intricate details) (8k) (HDR) (cinematic lighting) (sharp focus)",
      "closeup zoomed in tight crop portrait beautiful woman sitting at a (table on a seaside boardwalk cafe bar drinks cocktails:1.2) wearing a (button shirt:1.3) (drinks on table:1.3) (Lighting-Gold:1.2) foreground objects background details (masterpiece:1.2) (photorealistic:1.2) (bokeh:1.2) (best quality) (color grading) (detailed skin:1.3) (intricate) (8k) (HDR) (cinematic lighting:1.3) (sharp focus)",
      "2girls women sitting at a kitchen table drinking coffee in large modern luxury home casual clothing love warmth caring compassion loving smiling Lighting-Gold dusty (masterpiece:1.2) (photorealistic:1.2) (bokeh) (best quality) (detailed skin) (intricate) (8k) (HDR) (cinematic lighting) (sharp focus)",
      "cars around abandoned gas station sign made from a rocket beautiful blue sky, (masterpiece:1.2) (photorealistic:1.2) (bokeh) (best quality) (detailed skin) (intricate) (8k) (HDR) (cinematic lighting) (sharp focus)",
      "product photography food photography from_above closeup contrast lighting roasted coffee beans mint leaves decorative porcelain cup milk decanter coffee grinder coffee cup rustic wooden tabletop leather bound journal Lighting-Gold dusty (masterpiece:1.2) (photorealistic:1.2) (bokeh) (best quality) (detailed skin) (intricate) (8k) (HDR) (cinematic lighting) (sharp focus)",
      "bright sunny day beautiful cloudy sky sunset sports car racing down cyberpunk Miami city streets neon signs and crowds confetti debris dust wind volumetric fog exciting epic action camera, (masterpiece:1.2) (photorealistic:1.2) (bokeh) (best quality) (detailed skin) (intricate) (8k) (HDR) (cinematic lighting) (sharp focus)",
      "beautiful western RPG character brunette hair upsweep updo button shirt at a cantina sitting bar tequila liquor bottles, Lighting-Gold (dark moody ambience:1.2) (masterpiece:1.2) (photorealistic:1.2) (bokeh) (best quality) (detailed skin:1.2) (intricate details) (8k) (HDR) (cinematic lighting) (sharp focus)",
      "beach party (bright sunny morning) (Style-Luxury:0.7) (tropical beach home bedroom:1.1) (masterpiece:1.1) (best quality) (detailed) (intricate) (8k) (HDR) (cinematic lighting) (sharp focus:1.1)",
      "CEO portrait stock photo middle-aged man in luxurious office sitting at desk overlooking city (masterpiece:1.2) (photorealistic:1.2) (bokeh) (best quality) (detailed skin) (intricate) (8k) (HDR) (cinematic lighting) (sharp focus)",
    ],
    defaults: {
      negative_prompt:
        "child nude cleavage (monochrome) (bad hands) (disfigured) (grain) (Deformed) (poorly drawn) (mutilated) (lowres) (deformed) (dark) (lowpoly) (CG) (3d) (blurry) (duplicate) (watermark) (label) (signature) (frames) (text)",
    },
  },
  "hakurei/wd-1-5-illusion-beta3": {
    MODEL_ID: "hakurei/wd-1-5-illusion-beta3",
    MODEL_PRECISION: "fp16",
    description: "Waifu Diffusion v1.5, Beta 3, Illusion",
    randomPrompts: [
      "arknights, click (arknights), 1girl, baseball cap, black headwear, black jacket, blue eyes, grey hair, hand on headwear, hand up, hat, jacket, long sleeves, looking at viewer, open clothes, open jacket, shirt, short hair, simple background, smile, solo, upper body, white background, yellow shirt (exceptional, best aesthetic, new, newest, best quality, masterpiece, extremely detailed, anime, waifu:1.2)",
    ],
    notes: (
      <a href="https://saltacc.notion.site/WD-1-5-Beta-3-Release-Notes-1e35a0ed1bb24c5b93ec79c45c217f63">
        WD 1.5 Beta 3 - Release Notes and Prompt Hints
      </a>
    ),
    defaults: {
      width: 768,
      height: 768,
      negative_prompt:
        "lowres, ((bad anatomy)), ((bad hands)), text, missing finger, extra digits, fewer digits, blurry, ((mutated hands and fingers)), (poorly drawn face), ((mutation)), ((deformed face)), (ugly), ((bad proportions)), ((extra limbs)), extra face, (double head), (extra head), ((extra feet)), monster, logo, cropped, worst quality, jpeg, humpbacked, long body, long neck, ((jpeg artifacts)), deleted, old, oldest, ((censored)), ((bad aesthetic)), (mosaic censoring, bar censor, blur censor)",
    },
  },
  "hakurei/wd-1-5-ink-beta3": {
    MODEL_ID: "hakurei/wd-1-5-ink-beta3",
    MODEL_PRECISION: "fp16",
    description: "Waifu Diffusion v1.5, Beta 3, Ink",
    randomPrompts: [
      "genshin impact, 1girl, aqua dress, blue hair, blunt bangs, blunt tresses, brown headwear, bug, butterfly, butterfly hair ornament, closed eyes, closed mouth, cowboy shot, dress, english text, flower, hair ornament, light blue hair, long sleeves, multicolored clothes, multicolored dress, neck tassel, official alternate costume, official alternate hairstyle, skirt basket, skirt hold, smile, solo, white dress, white flower (exceptional, best aesthetic, new, newest, best quality, masterpiece, extremely detailed, anime, waifu:1.2), city, village, houses, power lines, street",
    ],
    notes: (
      <a href="https://saltacc.notion.site/WD-1-5-Beta-3-Release-Notes-1e35a0ed1bb24c5b93ec79c45c217f63">
        WD 1.5 Beta 3 - Release Notes and Prompt Hints
      </a>
    ),
    defaults: {
      width: 768,
      height: 768,
      negative_prompt:
        "lowres, ((bad anatomy)), ((bad hands)), missing finger, extra digits, fewer digits, blurry, ((mutated hands and fingers)), (poorly drawn face), ((mutation)), ((deformed face)), (ugly), ((bad proportions)), ((extra limbs)), extra face, (double head), (extra head), ((extra feet)), monster, logo, cropped, worst quality, jpeg, humpbacked, long body, long neck, ((jpeg artifacts)), deleted, old, oldest, ((censored)), ((bad aesthetic)), (mosaic censoring, bar censor, blur censor)",
    },
  },
  "hakurei/wd-1-5-mofu-beta3": {
    MODEL_ID: "hakurei/wd-1-5-mofu-beta3",
    MODEL_PRECISION: "fp16",
    description: "Waifu Diffusion v1.5, Beta 3, Mofu",
    randomPrompts: [
      "1girl, black shirt, black sleeves, school uniform, sailor uniform, serafuku, red neckerchief, sailor collar, collarbone, black hair, short hair, grey eyes, closed mouth, fox ears, fox girl, animal ears, animal ear fluff (exceptional, best aesthetic, new, newest, best quality, masterpiece, extremely detailed, anime, waifu:1.2), city, village, houses, power lines, street",
    ],
    notes: (
      <a href="https://saltacc.notion.site/WD-1-5-Beta-3-Release-Notes-1e35a0ed1bb24c5b93ec79c45c217f63">
        WD 1.5 Beta 3 - Release Notes and Prompt Hints
      </a>
    ),
    defaults: {
      width: 768,
      height: 768,
      negative_prompt:
        "lowres, ((bad anatomy)), ((bad hands)), missing finger, extra digits, fewer digits, blurry, ((mutated hands and fingers)), (poorly drawn face), ((mutation)), ((deformed face)), (ugly), ((bad proportions)), ((extra limbs)), extra face, (double head), (extra head), ((extra feet)), monster, logo, cropped, worst quality, jpeg, humpbacked, long body, long neck, ((jpeg artifacts)), deleted, old, oldest, ((censored)), ((bad aesthetic)), (mosaic censoring, bar censor, blur censor)",
    },
  },
  "hakurei/wd-1-5-radiance-beta3": {
    MODEL_ID: "hakurei/wd-1-5-radiance-beta3",
    MODEL_PRECISION: "fp16",
    description: "Waifu Diffusion v1.5, Beta 3, Radiance",
    randomPrompts: [
      "1girl, arms at sides, black hair, black sailor collar, black skirt, black sleeves, city, closed eyes, closed mouth, collarbone, neckerchief, outdoors, pleated skirt, red neckerchief, sailor collar, scenery, school uniform, serafuku, short hair, short sleeves, skirt, sky, solo, split mouth, upper body, cat ears, animal ears, animal ear fluff (exceptional, best aesthetic, new, newest, best quality, masterpiece, extremely detailed, anime:1.2)",
    ],
    notes: (
      <a href="https://saltacc.notion.site/WD-1-5-Beta-3-Release-Notes-1e35a0ed1bb24c5b93ec79c45c217f63">
        WD 1.5 Beta 3 - Release Notes and Prompt Hints
      </a>
    ),
    defaults: {
      width: 768,
      height: 768,
      negative_prompt:
        "lowres, ((bad anatomy)), ((bad hands)), missing finger, extra digits, fewer digits, blurry, ((mutated hands and fingers)), (poorly drawn face), ((mutation)), ((deformed face)), (ugly), ((bad proportions)), ((extra limbs)), extra face, (double head), (extra head), ((extra feet)), monster, logo, cropped, worst quality, jpeg, humpbacked, long body, long neck, ((jpeg artifacts)), deleted, old, oldest, ((censored)), ((bad aesthetic)), (mosaic censoring, bar censor, blur censor)",
    },
  },

  "wd-1-4-anime_e1": {
    MODEL_ID: "wd-1-4-anime_e1",
    MODEL_URL: "s3:///diffusers/models--wd-1-4-anime_e1.tar.zst",
    MODEL_PRECISION: "",
    MODEL_REVISION: "",
    description: "Waifu Diffusion v1.4, Epoch 1, Dec 31",
    randomPrompts: [
      "masterpiece, best quality, 1girl, black eyes, black hair, black sweater, blue background, bob cut, closed mouth, glasses, medium hair, red-framed eyewear, simple background, solo, sweater, upper body, wide-eyed",
      "masterpiece, best quality, 1girl, aqua eyes, baseball cap, blonde hair, closed mouth, earrings, green background, hat, hoop earrings, jewelry, looking at viewer, shirt, short hair, simple background, solo, upper body, yellow shirt",
      "masterpiece, best quality, 1girl, black bra, black hair, black panties, blush, borrowed character, bra, breasts, cleavage, closed mouth, gradient hair, hair bun, heart, large breasts, lips, looking at viewer, multicolored hair, navel, panties, pointy ears, red hair, short hair, sweat, underwear",
      "masterpiece, best quality, high quality, yakumo ran, touhou, 1girl, :d, animal ears, blonde hair, breasts, cowboy shot, extra ears, fox ears, fox shadow puppet, fox tail, head tilt, large breasts, looking at viewer, multiple tails, no headwear, short hair, simple background, smile, solo, tabard, tail, white background, yellow eyes",
      "masterpiece, best quality, high quality, scenery, japanese shrine, no humans, absurdres",
    ],
    notes: (
      <a href="https://gist.github.com/harubaru/8581e780a1cf61352a739f2ec2eef09b">
        WD 1.4 Release Notes and Prompt Hints
      </a>
    ),
  },
  "hakurei/waifu-diffusion-v1-3": {
    MODEL_ID: "hakurei/waifu-diffusion-v1-3",
    description: "Best for Anime.  Final Release.  Oct 6",
    randomPrompts: [
      "1girl, witch, purple hair, facing the viewer, night sky, big moon, highly detailed",
      "chen, arknights, 1girl, animal ears, brown hair, cat ears, cat tail, closed mouth, earrings, face, hat, jewelry, lips, multiple tails, nekomata, painterly, red eyes, short hair, simple background, solo, tail, white background",
      "yakumo ran, arknights, 1girl, :d, animal ears, blonde hair, breasts, cowboy shot, extra ears, fox ears, fox shadow puppet, fox tail, head tilt, large breasts, looking at viewer, multiple tails, no headwear, short hair, simple background, smile, solo, tabard, tail, white background, yellow eyes",
    ],
    notes: (
      <a href="https://gist.github.com/harubaru/f727cedacae336d1f7877c4bbe2196e1">
        WD 1.3 Release Notes and Prompt Hints
      </a>
    ),
  },
  "Linaqruf/anything-v3.0": {
    MODEL_ID: "Linaqruf/anything-v3.0",
    description: "Anime Anything V3 (added Jan 2nd)",
    randomPrompts: [
      "1girl, brown hair, green eyes, colorful, autumn, cumulonimbus clouds, lighting, blue sky, falling leaves, garden",
      "1boy, medium hair, blonde hair, blue eyes, bishounen, colorful, autumn, cumulonimbus clouds, lighting, blue sky, falling leaves, garden",
      "scenery, shibuya tokyo, post-apocalypse, ruins, rust, sky, skyscraper, abandoned, blue sky, broken window, building, cloud, crane machine, outdoors, overgrown, pillar, sunset",
    ],
    notes: (
      <a href="https://gist.github.com/harubaru/f727cedacae336d1f7877c4bbe2196e1">
        WD 1.3 Release Notes and Prompt Hints
      </a>
    ),
  },
  "CompVis/stable-diffusion-v1-4": {
    MODEL_ID: "CompVis/stable-diffusion-v1-4",
    description: "Original model, best for most cases.",
    randomPrompts: [
      "300274 买卖点",
      "600519 买卖点",
      "600000 买卖点"
    ],
  },
  "hakurei/waifu-diffusion": {
    MODEL_ID: "hakurei/waifu-diffusion",
    description: "Anime.  Original, previous model (v1.2)",
    randomPrompts: [
      "贵州茅台的业务护城河",
      // @leemengtaiwan
      // https://www.reddit.com/r/StableDiffusion/comments/x8un2h/testing_waifu_diffusion_see_prompt_comparison/
      "贵州茅台2023年7月24日股价",
    ],
  },
  "rinna/japanese-stable-diffusion": {
    MODEL_ID: "rinna/japanese-stable-diffusion",
    description: "Japanese / Japanglish prompt input, style",
    randomPrompts: [
      // https://prtimes.jp/main/html/rd/p/000000035.000070041.html
      "生成IPO招股说明书",
      "300274 每日研报",
      "生成某企业关于Oil Sale的报告",
      "生成某基金的产品分析报告",
    ],
  },
  "OrangeMix/AbyssOrangeMix2": {
    MODEL_ID: "OrangeMix/AbyssOrangeMix2",
    MODEL_PRECISION: "fp16",
    MODEL_REVISION: "",
    description: "Anime.  Highly detailed, realistic illustrations.",
    randomPrompts: [
      "(masterpiece:1,2), best quality, masterpiece, highres, original, extremely detailed wallpaper, looking at viewer, (sitting:1.4), (A robotic girl stands in the center holding a bouquet of orange flowers.:1.4).,(1humanoid cyborg girl:1.0), (happy, closed eye smile:1.6), (mechanical hand:1.05), [[cyborg]], metallic mixture, drawing, paintbrush, beret, (glowing_eyes:0.95), (separate sleeves), silver long_hair, hair_between_eyes, sigma 135mm lens, (Lots of oldman male researchers in white coats standing aside:1.2), 👨‍💻👨‍🔬,(cowboy shot:1.2), upper body,perfect lighting,(extremely detailed CG:1.2),(8k:1.1},(happy:1.3), :d, group of male researchers surrounding a female-shaped AI cyborg, smiling and laughing. cyborg cute girl sitting in the center of the group of male human researchers.The human male researchers are all smiling and laughing, (Group photo, commemorative photo, :1.4)",
    ],
    notes: (
      <a href="https://huggingface.co/WarriorMama777/OrangeMixs#abyssorangemix2-aom2">
        AbyssOrangeMix2 (AOM2) notes
      </a>
    ),
  },
  "OrangeMix/ElyOrangeMix": {
    MODEL_ID: "OrangeMix/ElyOrangeMix",
    MODEL_PRECISION: "fp16",
    MODEL_REVISION: "",
    description: "Improves Elysium_AnimeV2; 3d thick paint style.",
    notes: (
      <a href="https://huggingface.co/WarriorMama777/OrangeMixs#elyorangemix-elom">
        ElyOrangeMix (ELOM) notes
      </a>
    ),
  },
  "OrangeMix/EerieOrangeMix": {
    MODEL_ID: "OrangeMix/EerieOrangeMix",
    MODEL_PRECISION: "fp16",
    MODEL_REVISION: "",
    description: "Improves Elysium_AnimeV2",
    randomPrompts: [
      "((masterpiece)), best quality, perfect anatomy, (1girl, solo focus:1.4), pov, looking at viewer, flower trim,(perspective, sideway, From directly above ,lying on water, open hand, palm, :1.3),(Accurate five-fingered hands, Reach out, hand focus, foot focus, Sole, heel, ball of the thumb:1.2), (outdoor, sunlight:1.2),(shiny skin:1.3),,(masterpiece, white border, outside border, frame:1.3), (motherhood, aged up, mature female, medium breasts:1.2), (curvy:1.1), (single side braid:1.2), (long hair with queue and braid, disheveled hair, hair scrunchie, tareme:1.2), (light Ivory hair:1.2), looking at viewer, Calm, Slight smile, (anemic, dark, lake, river,puddle, Meadow, rock, stone, moss, cliff, white flower, stalactite, Godray, ruins, ancient, eternal, deep ,mystic background,sunlight,plant,lily,white flowers, Abyss, :1.2), (orange fruits, citrus fruit, citrus fruit bearing tree:1.4), volumetric lighting,good lighting,, masterpiece, best quality, highly detailed,extremely detailed cg unity 8k wallpaper,illustration,((beautiful detailed face)), best quality, (((hyper-detailed ))), high resolution illustration ,high quality, highres, sidelighting, ((illustrationbest)),highres,illustration, absurdres, hyper-detailed, intricate detail, perfect, high detailed eyes,perfect lighting, (extremely detailed CG:1.2)",
      "street, 130mm f1.4 lens, ,(shiny skin:1.3),, (teen age, school uniform:1.2), (glasses, black hair, medium hair with queue and braid, disheveled hair, hair scrunchie, tareme:1.2), looking at viewer,, Calm, Slight smile",
    ],
    notes: (
      <a href="https://huggingface.co/WarriorMama777/OrangeMixs#eerieorangemix-eom">
        EerieOrangeMix (EOM) notes
      </a>
    ),
  },
  "OrangeMix/BloodOrangeMix": {
    MODEL_ID: "OrangeMix/BloodOrangeMix",
    MODEL_PRECISION: "fp16",
    MODEL_REVISION: "",
    description: "Improves AnythingV3, paint style, popular in JP.",
    notes: (
      <a href="https://huggingface.co/WarriorMama777/OrangeMixs#bloodorangemix-bom">
        BloodOrangeMix (BOM)
      </a>
    ),
  },
};

export default models;
