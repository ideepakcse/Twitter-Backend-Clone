const express=require('express');

const bodyParser = require('body-parser');

const passport = require('passport');

const {DatabaseConfig,ServerConfig,PassportJsConfig}=require('./config');

const apiRoutes=require('./routes');

const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(passport.initialize());
PassportJsConfig.passportAuth(passport);

app.use('/api',apiRoutes);

app.listen(ServerConfig.PORT, async () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
    await DatabaseConfig.connect();
    console.log('Mongo-db connected');
});


