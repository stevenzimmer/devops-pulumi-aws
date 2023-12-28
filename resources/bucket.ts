import {ComponentResource, CustomResourceOptions, getStack} from "@pulumi/pulumi";
import {s3} from "@pulumi/aws";
// import * as awsx from "@pulumi/awsx";

type FmBucketArgs = {
  Name: string;
  Product: string;
  Public?: boolean;
};
// // Export the name of the bucket
// export const bucketName = bucket.id;
export class FmBucket extends ComponentResource {
  constructor(args: FmBucketArgs, opts?: CustomResourceOptions) {
      const { Name, Product, Public } = args;
      const resourceName = `${Product}-${Name}`;
      
      super("pkg:index:FmBucket", resourceName, {}, opts);

      const stack = getStack();
      const bucketName = `${resourceName}-${stack}`;

      const bucket = new s3.Bucket(Name, {
        acl: "private",
        bucket: bucketName,
        tags: {
            Environment: stack,
        },
      }, {
        parent: this,
      });

      if(!Public) {


      const BucketPublicAccessBlock = new s3.BucketPublicAccessBlock(Name, {
        bucket: bucket.id,
        blockPublicAcls: true,
        blockPublicPolicy: true,
        ignorePublicAcls: true,
        restrictPublicBuckets: true,
    }, {
      parent: this,
    });
  }


  }
}

