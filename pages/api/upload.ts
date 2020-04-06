import { NextApiRequest, NextApiResponse } from "next"
import { IUpload } from "../../components/UploadForm"
import multer from "multer"

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, result => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const uploader = multer({ dest: process.cwd() + "/uploads" })
  await runMiddleware(req, res, uploader.any())
  console.info(req.body)
  console.info(`Files are:`, (req as any).files)
  res.status(200).json({ success: true })
}

export const config = {
  api: {
    bodyParser: false,
  },
}
