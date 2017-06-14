import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import { platformServer, renderModuleFactory } from '@angular/platform-server'
import { enableProdMode } from '@angular/core'
import { AppServerModule } from './app/app.server.module'
import { AppServerModuleNgFactory } from '../dist/ngfactory/src/app/app.server.module.ngfactory'
import * as express from 'express';
import { ngExpressEngine } from '@nguniversal/express-engine';

const PORT = process.env.PORT || 4000;

enableProdMode();

const app = express();

// Set the engine
app.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory // Give it a module to bootstrap
}));

app.set('view engine', 'html');

app.use('/', express.static('dist', {index: false}));

app.get('*', (req, res) => {
  res.render('../dist/index', {
    req,
    res
  });
});


app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}!`);
});