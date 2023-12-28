
import {FmFrontend} from "./services/frontend";

function main() {
  // const bucket = new FmBucket({
  //   Name: "example",
  //   Product: "devops-course",
  // });

  new FmFrontend({
    Name: "frontend-example",
    Product: "devops-course",
  });
}

main();
// type Bucket = string[];

// const bucketList: Bucket = ["example"];

// bucketList.forEach((bucketName,i) => {
//   new FmBucket({
//     Name: `${bucketName}-${i}`,
//     Product: "devops-course",
//   });
// });



// Export the name of the bucket
// export const bucketName = bucket.id;
