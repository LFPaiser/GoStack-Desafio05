import multer from 'multer';
import path from 'path';
import crypto from 'crypto';

const tmpAvatarsFolder = path.resolve(__dirname, '..', '..', 'tmp');

export default {
  directory: tmpAvatarsFolder,

  storage: multer.diskStorage({
    destination: tmpAvatarsFolder,
    filename(request, file, callback) {
      const fileHash = crypto.randomBytes(15).toString('HEX');
      const fileName = `${fileHash}-${file.originalname}`;

      return callback(null, fileName);
    },
  }),
};
