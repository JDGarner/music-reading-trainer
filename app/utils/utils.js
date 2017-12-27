import { TOTAL_WHITE_NOTES_DISPLAYED } from "../appconfig";

export function getWhiteKeyWidth(screenDimensions) {
  const { height, width } = screenDimensions;
  const maxDimension = Math.max(height, width);
  return maxDimension / TOTAL_WHITE_NOTES_DISPLAYED;
}