import fluidPixelStretch from "./fluid-pixel-stretch";
import mistyPrompt from "./misty-prompt";

export const prompts = [
  fluidPixelStretch,
  mistyPrompt,
];

export function getPromptBySlug(slug: string) {
  return prompts.find((prompt) => prompt.slug === slug);
}