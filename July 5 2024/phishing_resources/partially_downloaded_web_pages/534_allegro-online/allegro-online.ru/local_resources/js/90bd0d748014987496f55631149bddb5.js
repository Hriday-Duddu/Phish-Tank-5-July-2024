function addYndexMetrika(uid) {
    if (document.querySelector("#yandex_metrics") != null) {
        return;
    }

    var s = document.createElement("script");
    s.setAttribute("id", "yandex_metrics");
    s.innerHTML = `
        (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

ym(${uid}, "init", {
     clickmap:true,
     trackLinks:true,
     accurateTrackBounce:true,
     webvisor:true,
     ecommerce:"dataLayer"
});`;

    var ns = document.createElement("noscript");
    var div = document.createElement("div");
    var img = document.createElement("img");
    img.setAttribute("src", `https://mc.yandex.ru/watch/${uid}`);
    img.setAttribute("style", `position:absolute; left:-9999px;`);

    div.appendChild(img);
    ns.appendChild(div);

    document.body.appendChild(s);
    document.body.appendChild(ns);
}

function addGoogleAnalytics(gaid) {
    if (document.querySelector("#google_tag_manager") != null) {
        return;
    }
    var s = document.createElement("script");
    s.setAttribute(
        "src",
        `https://www.googletagmanager.com/gtag/js?id=${gaid}`
    );
    s.setAttribute("strategy", `afterInteractive`);

    var ss = document.createElement("script");
    ss.setAttribute("id", `google_tag_manager`);
    ss.setAttribute("strategy", `afterInteractive`);
    ss.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){window.dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', '${gaid}', { page_path: window.location.pathname });
    `;

    document.body.appendChild(s);
    document.body.appendChild(ss);
}

function addLiveInternet() {
    new Image().src = "https://counter.yadro.ru/hit;lidopad?r" +
        escape(document.referrer) + ((typeof (screen) == "undefined") ? "" :
            ";s" + screen.width + "*" + screen.height + "*" + (screen.colorDepth ?
                screen.colorDepth : screen.pixelDepth)) + ";u" + escape(document.URL) +
        ";h" + escape(document.title.substring(0, 150)) +
        ";" + Math.random();
}

function addRsyaBlock(blockId) {
    window.yaContextCb = window.yaContextCb || [];

    var s = document.createElement("script");
    s.setAttribute(
        "src",
        `https://yandex.ru/ads/system/context.js`
    );
    s.setAttribute("async", true);
    document.body.appendChild(s);

    const el = document.querySelector('.breadcrumbs-style__StyledBreadcrumbs-sc-e9891dd6-0.enPyHQ');
    if (el) {
        const div = document.createElement('div');
        div.setAttribute('id', 'rsya-block');
        div.setAttribute('style', 'margin-bottom: 24px;');
        el.parentNode.insertBefore(div, el);

        window.yaContextCb.push(() => {
            Ya.Context.AdvManager.render({
                "blockId": blockId,
                "renderTo": "rsya-block"
            })
        })
    }
}

function addBanner() {
    const el = document.querySelector('.breadcrumbs-style__StyledBreadcrumbs-sc-e9891dd6-0.enPyHQ');
    if (el) {
        const div = document.createElement('div');
        div.setAttribute('id', 'banner-block');
        div.setAttribute('style', 'margin-bottom: 24px;');
        
        const { width } = el.getBoundingClientRect();

        fetch(`https://cpa.revoluterra.ru/banner`, {
            headers: { width }
        }).then((response) => {
            return response.json();
        }).then((banner) => {
            div.innerHTML = `<a href="${banner.url}" target="_blank"><img src="${banner.image}" /></a>`;
            el.parentNode.insertBefore(div, el);
        })
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const { host } = window.location;

    const domainParts = host.split('.');
    const domain = domainParts.length > 2 ? domainParts.slice(1).join('.') : domainParts.join('.');

    fetch(`https://tag.live.revoluterra.ru?domain=${domain}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            data.forEach((item) => {
                switch (item.name) {
                    case "google.analytics":
                        addGoogleAnalytics(item.value);
                        break;
                    case "yandex.metrika":
                        addYndexMetrika(item.value);
                        break;
                    case "rsya":
                        addRsyaBlock(item.value);
                        break;
                    default:
                        break;
                }
            });
        });

    addLiveInternet();
    // addBanner();
});