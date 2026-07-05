import fluidPixelStretch from "./fluid-pixel-stretch";
import mistyPrompt from "./misty-prompt";
import goldenSunset from "./golden-sunset";
import luminaPrompt from "./lumina-prompt";

export const prompts = [
    fluidPixelStretch,
    mistyPrompt,
    goldenSunset,
    luminaPrompt,
];

export function getPromptBySlug(slug: string) {
  return prompts.find((prompt) => prompt.slug === slug);
}