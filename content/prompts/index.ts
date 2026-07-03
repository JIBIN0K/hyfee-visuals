import fluidPixelStretch from "./fluid-pixel-stretch";
import mistyPrompt from "./misty-prompt";
import goldenSunset from "./golden-sunset";

export const prompts = [
    fluidPixelStretch,
    mistyPrompt,
    goldenSunset,
];

export function getPromptBySlug(slug: string) {
  return prompts.find((prompt) => prompt.slug === slug);
}