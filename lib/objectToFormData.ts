export const objectToFormData = obj => {
  const body = new FormData()
  for (const [key, value] of Object.entries(obj)) {
    body.append(key, value as string | Blob)
  }
  return body
}
