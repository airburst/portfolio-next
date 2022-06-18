class GoogleBucket {
  bucketName: string;
  projectId: string;

  constructor(bucketName: string, projectId: string) {
    this.bucketName = bucketName;
    this.projectId = projectId;
  }

  getBucketName() {
    return this.bucketName;
  }

  getProjectId() {
    return this.projectId;
  }
}

export default GoogleBucket;