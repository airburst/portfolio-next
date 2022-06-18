// Imports the Google Cloud client library
const { Storage } = require('@google-cloud/storage');
import credentials from "../service.json";

// Creates a client
const storage = new Storage({credentials});

class GoogleBucket {
  bucketName: string;

  constructor(bucketName: string) {
    this.bucketName = bucketName;
  }

  async listFolders() {
    // Lists folders in the bucket
    const [files] = await storage.bucket(this.bucketName).getFiles();

    return files
      .filter((file: File) => file.name.endsWith("/"))
      .map((file: File) => file.name.slice(0,-1))
  }

  async listFiles(folder = "") {
    // Lists files in the bucket
    let options = undefined;
    if (folder) {
      options = { prefix: `${folder}/`, delimiter: '/' }
    }
    const [files] = await storage.bucket(this.bucketName).getFiles(options);

    return files.map((file: File) => file.name)
  }
}

export default GoogleBucket;

