'use strict';
const Koa = require("koa");
const ip = require('ip');
const { v4: uuidv4 } = require('uuid');
const koaMount = require("koa-mount");
const axios = require('axios').default;

const ipAddress = ip.address();
const app = new Koa();

app.use(koaMount("/pvg/sha", async (ctx) => {
	const response = await axios.get('http://sunxufei-sha:81');
	ctx.body = {
		from: response.data
	};
}));

app.use(async (ctx) => {
	ctx.body = {
		a: {
			ip: ipAddress,
			uuid: uuidv4(),
			name: "PVG",
		},		
		env: process.env,
		request: ctx.request
	};
});

const port = process.env.PORT || 3000;
app.listen(port);