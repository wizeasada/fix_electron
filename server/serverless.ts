import type { AWS } from '@serverless/typescript';
import { config } from 'dotenv';
config();

import { helloWorld } from './src/functions';

const serverlessConfiguration: AWS = {
  service: 'link-manage-app',
  frameworkVersion: '2',
  custom: {
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true
    }
  },
  useDotenv: true,
  plugins: ['serverless-webpack', 'serverless-dotenv-plugin', 'serverless-offline'],
  provider: {
    name: 'aws',
    region: 'ap-northeast-1',
    runtime: 'nodejs12.x',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    vpc: {
      securityGroupIds: ['sg-0a4f99c59665f871c'],
      subnetIds: ['subnet-0c9c5d554b9f53c85']
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
    },
    lambdaHashingVersion: '20201221',
  },
  functions: { helloWorld },
}

module.exports = serverlessConfiguration;
