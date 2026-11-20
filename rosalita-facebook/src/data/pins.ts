import { Image as RNImage } from "react-native";

export type Pin = {
  id: string;
  title: string;
  image: number; // result of require("...")
  ratio: number; // width / height
  creator: { name: string; avatarUrl: string };
};

const CREATOR = {
  name: "hunny",
  avatarUrl: "https://picsum.photos/seed/hunny-avatar/96/96",
};

function getAssetRatio(asset: number): number {
  const imageModule = (RNImage as any)?.default ?? RNImage;
  const resolveAssetSource = imageModule?.resolveAssetSource;

  if (typeof resolveAssetSource === "function") {
    const source = resolveAssetSource(asset);
    if (source && typeof source.width === "number" && typeof source.height === "number" && source.height > 0) {
      return source.width / source.height;
    }
  }

  return 1;
}

function makePin(id: string, file: number, title: string): Pin {
  return { id, title, image: file, ratio: getAssetRatio(file), creator: CREATOR };
}

// ADD YOUR OWN PICTURES HERE: [require(...), "Title"]
const PICTURES: [number, string][] = [
  [require("../../assets/images/4c7a7755-0a2a-41b0-a384-48453748ab9b.jpg"), "KAAMULAN"],
  [require("../../assets/images/6f09fdde-9bf4-48d4-a2cf-ddba576bdc0a.jpg"), "DAGAT"],
  [require("../../assets/images/61c8c8da-c49d-4d1a-ae06-b94e3bacca3b.jpg"), "CHRISTMAS"],
  [require("../../assets/images/715eb3e4-a35d-4bb1-90db-0a24c4a202b5.jpg"), "PHOTO BOOOTH"],
  [require("../../assets/images/9091c25e-0e87-42a6-9ba1-e012d66ebbcc.jpg"), "PIXIEBOX"],
  [require("../../assets/images/bb6c3c71-c273-4ae9-b169-8d50c80ee606.jpg"), "BUKIDNON"],
];

export const BASE_PINS: Pin[] = PICTURES.map(([file, title], i) =>
  makePin(String(i + 1), file, title)
);

/** Page 0 is your list; later pages repeat it (rotated) so the feed keeps scrolling. */
export function makePage(page: number): Pin[] {
  if (page === 0) return BASE_PINS;
  const n = page % BASE_PINS.length;
  return [...BASE_PINS.slice(n), ...BASE_PINS.slice(0, n)].map((p) => ({
    ...p,
    id: `${p.id}~${page}`,
  }));
}
