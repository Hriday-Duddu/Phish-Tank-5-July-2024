(function (pendoConfig) {
	(function(apiKey){
		if (!apiKey) {
			return null;
		}

		(function(p,e,n,d,o){var v,w,x,y,z;o=p[d]=p[d]||{};o._q=[];
			v=['initialize','identify','updateOptions','pageLoad'];for(w=0,x=v.length;w<x;++w)(function(m){
				o[m]=o[m]||function(){o._q[m===v[0]?'unshift':'push']([m].concat([].slice.call(arguments,0)));};})(v[w]);
			// Create a `<script>` tag linked to your application-specific Agent build from our CDN...
			y=e.createElement(n);y.async=!0;y.src='https://cdn.pendo.io/agent/static/'+apiKey+'/pendo.js';
			z=e.getElementsByTagName(n)[0];z.parentNode.insertBefore(y,z);
		})(window,document,'script','pendo');

		pendo.initialize({
			visitor: pendoConfig.visitor,
			account: pendoConfig.account
		});
	})(pendoConfig.apiKey);
})(window.AcPendoConfig);
