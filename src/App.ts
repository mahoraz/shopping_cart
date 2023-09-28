import express from 'express';
import cors from 'cors';
import passport from './config/passport';

const App = express();


// setup middlwares
App.use(express.json());
App.use(express.urlencoded());
App.use(cors());
passport(App);

// routing

export default App;