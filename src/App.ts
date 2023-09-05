import express from 'express';
import cors from 'cors';

const App = express();


// setup middlwares
App.use(express.json());
App.use(express.urlencoded());
App.use(cors());

// routing

export default App;