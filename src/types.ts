export interface GeneratedQR {
  value: string;
  dateCreated: Date;
  color: string;
  bgColor: string;
}

export type ColorOption = {
  name: string;
  value: string;
};

export type FormatOption = 'png' | 'svg' | 'jpg' | 'pdf';