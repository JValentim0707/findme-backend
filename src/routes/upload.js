import express from "express";
// import path from 'path'
// import { google } from "googleapis";
// import multer from "multer";
// import stream from 'stream'
// // import validateJWT from '../../middleware/validateJWT'

// // import fsPromises from 'fs/promises'

// require('dotenv').config()

// // Utility Functions
// import { createApproves } from '../controllers/userApproves'

// // Controller Function
// import credFile from '../config/cred.json'

const router = express.Router();

// const upload = multer()

// const SCOPE = ["https://www.googleapis.com/auth/drive"]

// router.post("/documents", upload.any(), async (req, res) => {
//   try {

//     const clientGoogle = await authenticateGoogle()
//     const { body, files } = req;

//     const folderId = await createFolder(body.userId, clientGoogle)

//     for (let f = 0; f < files.length; f += 1) {
//         await uploadFile(files[f], folderId, clientGoogle);
//     }

//     await createApproves({ user_id: body.userId, status: 'pending', description: 'Wating to Revial' })

//     return res.status(200).send("Form Submitted");
//   } catch (error) {
//     console.log('error', error)
//   }
// });

// const authenticateGoogle = async () => {
//   const jwtClient = new google.auth.JWT(credFile.client_email, null, credFile.private_key, SCOPE)

//   jwtClient.authorize()

//   return jwtClient
// }

// const createFolder = async (userId, clientGoogle) => {

//   const { data } = await google.drive({ version: "v3", auth: clientGoogle }).files.create({
//     requestBody: {
//       parents: ["1yScMPiPSg3jeShV79S3Fjh_vzrFAfqft"],
//       name: userId,
//       mimeType: 'application/vnd.google-apps.folder',
//     },
//     fields: "id",
//   });

//   return data.id

// }

// const uploadFile = async (fileObject, folderId, clientGoogle) => {
//   const bufferStream = new stream.PassThrough();

//   bufferStream.end(fileObject.buffer);

//   const { data } = await google.drive({ version: "v3", auth: clientGoogle }).files.create({
//       media: {
//           mimeType: fileObject.mimeType,
//           body: bufferStream,
//       },
//       requestBody: {
//           name: fileObject.originalname,
//           parents: [`${folderId}`],
//       },
//       fields: "id,name",
//   });

//   console.log(`Uploaded file ${data.name} ${data.id}`);
// };

module.exports = router;