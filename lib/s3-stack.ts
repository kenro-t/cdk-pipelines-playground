import * as cdk from "aws-cdk-lib";
import * as s3 from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";

export class S3Stack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const bucket = new s3.Bucket(this, "TestBucket", {
      versioned: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY, 
      autoDeleteObjects: true,
    });

    const bucket2 = new s3.Bucket(this, "TestBucket2", {
      versioned: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY, 
      autoDeleteObjects: true,
    });
  }
}
