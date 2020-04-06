import * as React from "react";
import { FormEventHandler } from "react";
import fetch from "isomorphic-unfetch";

export const UploadForm = () => {
  const handleSubmit: FormEventHandler = async (event) => {
    event.preventDefault();
    const body = new FormData();

    for (const [key, value] of Object.entries(data)) {
      body.set(key, value);
    }

    const formResult = fetch("/api/upload", { method: "POST", body });
  };

  const fileHandler: FileHandler = (fileKey) => (event) => {
    console.log(event.target.files[0]);
    setData({ ...data, [fileKey]: event.target.files[0] });
  };

  const [data, setData] = React.useState<Upload>(null);
  return (
    <form action="" onSubmit={handleSubmit}>
      <label htmlFor="title">
        <span>Title</span>
        <input type="text" />
      </label>
      <label htmlFor="description">
        <span>Description</span>
        <input type="text" />
      </label>
      <label htmlFor="sampleFile">
        <span>Sample File</span>
        <input type="file" onChange={fileHandler("sampleFile")} />
      </label>
      <label htmlFor="patchFile">
        <span>Patch File</span>
        <input type="file" onChange={fileHandler("patchFile")} />
      </label>
      <label htmlFor="tags">
        <span>Tags</span>
        <input type="tags" />
      </label>

      <button type="submit">Upload</button>
    </form>
  );
};

interface Upload {
  title: string;
  description: string;
  sampleFile: string;
  patchFile: string;
  tags: string;
}

type FileHandler = (
  fileKey: string
) => React.ChangeEventHandler<HTMLInputElement>;
