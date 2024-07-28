import '@babel/polyfill';
import './setupJest-dom';
import { configure } from 'jest';

configure({
  sequelize: true,
  setupFilesAfterEnv: ['./setup-after-env.js'],
});