export interface Amiibo {
  amiiboSeries: string;
  character: string;
  gameSeries: string;
  head: string;
  image: string;
  name: string;
  release: Release[];
  tail: string;
  type: string;
}
interface Release {
  au: Date | null;
  eu: Date | null;
  jp: Date | null;
  na: Date | null;
}
