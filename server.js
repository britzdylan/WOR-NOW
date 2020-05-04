const next = require( 'next' );
const express = require( 'express' );
const wooConfig = require( './wooConfig' );

const  WooCommerceAPI = require('woocommerce-api');

const WooCommerce = new WooCommerceAPI({
	url: wooConfig.siteUrl,
	consumerKey: wooConfig.consumerKey,
	consumerSecret: wooConfig.consumerSecret,
	wpAPI: true,
	version: 'wc/v3',
	// queryStringAuth: true
});

const port = 8080;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
	.then( () => {
		const server = express();

		server.get( '/products', ( req, response ) => {
			WooCommerce.get('/products', function(err, data, res) {
				res.send(res);
			});
		} );

		server.get( '*', ( req, res ) => {
			return handle( req, res );
		} );

		server.listen( port, err => {
			if ( err ) {
				throw err;
			}
			console.log( `Ready on ${port}` );
		} )

	} )
	.catch(ex => {
	console.error(ex.stack);
	process.exit(1);
});;