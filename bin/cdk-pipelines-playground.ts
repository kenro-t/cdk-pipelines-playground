#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { CdkPipelinesPlaygroundStack } from "../lib/cdk-pipelines-playground-stack";

const app = new cdk.App();
new CdkPipelinesPlaygroundStack(app, "CdkPipelinesPlaygroundStack", {});
