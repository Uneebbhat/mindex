export interface IKPICards {
  title: string;
  value: number;
  footer: string;
  progress?: number;
}

export type UploadType = "video" | "pdf" | "website";

export type UploadCardProps = {
  type: UploadType;
  url: string;
  title: string;
  time: string;
};

export type RecentUpload = UploadCardProps & {
  id: number;
};
