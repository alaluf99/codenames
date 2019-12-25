import * as express from 'express';
import * as cors from 'cors';
import * as bodyparser from 'body-parser';

import { requestLoggerMiddleware } from './request.logger.middleware';
import './Controller/users.controller';

import { RegisterRoutes } from './routes';

const app = express();
app.use(cors());
app.use(bodyparser.json());

app.use(requestLoggerMiddleware);
RegisterRoutes(app);

try {

} catch (err) {
	console.error('Unable to read swagger.json', err);
}

export { app };
