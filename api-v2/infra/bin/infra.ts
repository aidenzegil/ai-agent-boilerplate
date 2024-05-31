#!/usr/bin/env node
import { App } from 'aws-cdk-lib';
import { InfraStack } from '../lib/infra-stack';

const app = new App();
/**
 * TODO: staging and prod stacks
 */
new InfraStack(app, 'devexp');

app.synth();
