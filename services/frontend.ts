import {ComponentResource, CustomResourceOptions} from "@pulumi/pulumi";
import { FmBucket } from "./../resources/bucket";

type FmFrontendArgs = {
  Name: string;
  Product: string;
  Public?: boolean;
};
// // Export the name of the bucket
export class FmFrontend extends ComponentResource {
  constructor(args: FmFrontendArgs, opts?: CustomResourceOptions) {
    const { Name, Product, Public } = args;
    const resourceName = `${Product}-${Name}`;
    
    super("pkg:index:FmFrontend", resourceName, {}, opts);

    new FmBucket({
      Name,
      Product,
      Public: true,
    }, {parent: this});

    new FmBucket({
      Name: `${Name}-replica`,
      Product,
    }, {parent: this});




  };
}

