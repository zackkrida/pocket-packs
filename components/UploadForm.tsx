import * as React from "react"
import { FormEventHandler } from "react"
import * as R from "ramda"
import fetch from "isomorphic-unfetch"
import { objectToFormData } from "../lib/objectToFormData"

export const UploadForm = () => {
  const [data, setData] = React.useState<IUpload>(null)
  const handleSubmit: FormEventHandler = async event => {
    event.preventDefault()
    const formResult = await fetch("/api/upload", {
      method: "POST",
      body: objectToFormData(data),
    })
    const json = await formResult.json()
  }

  const inputValue = R.path(["target", "value"])
  const inputFile = R.path(["target", "files", 0])
  const setFile = property => R.compose(setData, R.assoc(property), inputFile)
  const setText = property => R.compose(setData, R.assoc(property), inputValue)

  return (
    <form action="" onSubmit={handleSubmit}>
      <label htmlFor="title">
        <span>Title</span>
        <input name="title" onChange={setText("title")} type="text" />
      </label>
      <label htmlFor="description">
        <span>Description</span>
        <input
          name="description"
          onChange={setText("description")}
          type="text"
        />
      </label>
      <label htmlFor="sampleFile">
        <span>Sample File</span>
        <input type="file" onChange={setFile("sampleFile")} />
      </label>
      <label htmlFor="patchFile">
        <span>Patch File</span>
        <input type="file" onChange={setFile("patchFile")} />
      </label>
      <label htmlFor="tags">
        <span>Tags</span>
        <input name="tags" onChange={setText("tags")} type="tags" />
      </label>

      <button type="submit">Upload</button>
    </form>
  )
}

export interface IUpload {
  title: string
  description: string
  sampleFile: File
  patchFile: File
  tags: string
}

type FileHandler = (
  fileKey: string
) => React.ChangeEventHandler<HTMLInputElement>
