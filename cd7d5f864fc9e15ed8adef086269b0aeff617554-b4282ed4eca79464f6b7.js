(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"6Gk8":function(e,t,a){"use strict";a("0mN4");var r=a("r3O1"),i=a("q1tI"),n=a.n(i),s=a("Wbzz"),o=a("9eSz"),d=a.n(o);var l="2452627939";t.a=function(){return n.a.createElement(s.StaticQuery,{query:l,render:function(e){var t=e.site.siteMetadata,a=t.author,r=t.social;return n.a.createElement("div",{style:{display:"flex"}},n.a.createElement(d.a,{fixed:e.avatar.childImageSharp.fixed,alt:a,style:{marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),n.a.createElement("p",null,"Site by ",n.a.createElement("strong",null,a),"."," ",n.a.createElement("a",{href:"https://github.com/"+r.github},"You should find him on GitHub")))},data:r})}},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("INYr"),a("0mN4");var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),s=r(a("VbXa")),o=r(a("8OQS")),d=r(a("pVnL")),l=r(a("q1tI")),u=r(a("17x9")),c=function(e){var t=(0,d.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},A=function(e){var t=e.fluid,a=e.fixed;return g(t||a).src},g=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},h=Object.create({}),p=function(e){var t=c(e),a=A(t);return h[a]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,E=b&&window.IntersectionObserver,v=new WeakMap;function y(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},r&&l.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),l.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function S(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function w(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function R(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function B(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var I=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),v.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),v.set(e,t)),function(){a.unobserve(e),v.delete(e)}},j=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?B(e,!0):"")+B(e)})).join("")+"<img "+l+s+o+a+r+t+n+i+d+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},L=l.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,s=e.ariaHidden,o=l.default.createElement(Q,(0,d.default)({ref:t,src:a},n,{ariaHidden:s}));return r.length>1?l.default.createElement("picture",null,i(r),o):o})),Q=l.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,u=e.onError,c=e.loading,f=e.draggable,A=e.ariaHidden,g=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,d.default)({"aria-hidden":A,sizes:a,srcSet:r,src:i},g,{onLoad:s,onError:u,ref:t,loading:c,draggable:f,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));Q.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var x=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=b&&p(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!m&&E&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||b&&(m||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=l.default.createRef(),a.placeholderRef=t.placeholderRef||l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=I(e,(function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=c(e),a=A(t),h[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=c(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,u=e.placeholderStyle,f=void 0===u?{}:u,A=e.placeholderClassName,h=e.fluid,p=e.fixed,m=e.backgroundColor,b=e.durationFadeIn,E=e.Tag,v=e.itemProp,S=e.loading,B=e.draggable,I=!1===this.state.fadeIn||this.state.imgLoaded,x=!0===this.state.fadeIn&&!this.state.imgCached,O=(0,d.default)({opacity:I?1:0,transition:x?"opacity "+b+"ms":"none"},o),C="boolean"==typeof m?"lightgray":m,N={transitionDelay:b+"ms"},k=(0,d.default)({opacity:this.state.imgLoaded?0:1},x&&N,{},o,{},f),z={title:t,alt:this.state.isVisible?"":a,style:k,className:A,itemProp:v};if(h){var Y=h,V=g(h);return l.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(V.srcSet)},l.default.createElement(E,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/V.aspectRatio+"%"}}),C&&l.default.createElement(E,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:C,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},x&&N)}),V.base64&&l.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:V.base64,spreadProps:z,imageVariants:Y,generateSources:R}),V.tracedSVG&&l.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:V.tracedSVG,spreadProps:z,imageVariants:Y,generateSources:w}),this.state.isVisible&&l.default.createElement("picture",null,y(Y),l.default.createElement(Q,{alt:a,title:t,sizes:V.sizes,src:V.src,crossOrigin:this.props.crossOrigin,srcSet:V.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:S,draggable:B})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:j((0,d.default)({alt:a,title:t,loading:S},V,{imageVariants:Y}))}}))}if(p){var H=p,P=g(p),D=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:P.width,height:P.height},n);return"inherit"===n.display&&delete D.display,l.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:D,ref:this.handleRef,key:"fixed-"+JSON.stringify(P.srcSet)},C&&l.default.createElement(E,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:C,width:P.width,opacity:this.state.imgLoaded?0:1,height:P.height},x&&N)}),P.base64&&l.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:P.base64,spreadProps:z,imageVariants:H,generateSources:R}),P.tracedSVG&&l.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:P.tracedSVG,spreadProps:z,imageVariants:H,generateSources:w}),this.state.isVisible&&l.default.createElement("picture",null,y(H),l.default.createElement(Q,{alt:a,title:t,width:P.width,height:P.height,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:S,draggable:B})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:j((0,d.default)({alt:a,title:t,loading:S},P,{imageVariants:H}))}}))}return null},t}(l.default.Component);x.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var O=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),C=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string});x.propTypes={resolutions:O,sizes:C,fixed:u.default.oneOfType([O,u.default.arrayOf(O)]),fluid:u.default.oneOfType([C,u.default.arrayOf(C)]),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var N=x;t.default=N},EK0E:function(e,t,a){"use strict";var r,i=a("dyZX"),n=a("CkkT")(0),s=a("KroJ"),o=a("Z6vF"),d=a("czNK"),l=a("ZD67"),u=a("0/R4"),c=a("s5qY"),f=a("s5qY"),A=!i.ActiveXObject&&"ActiveXObject"in i,g=o.getWeak,h=Object.isExtensible,p=l.ufstore,m=function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},b={get:function(e){if(u(e)){var t=g(e);return!0===t?p(c(this,"WeakMap")).get(e):t?t[this._i]:void 0}},set:function(e,t){return l.def(c(this,"WeakMap"),e,t)}},E=e.exports=a("4LiD")("WeakMap",m,b,l,!0,!0);f&&A&&(d((r=l.getConstructor(m,"WeakMap")).prototype,b),o.NEED=!0,n(["delete","has","get","set"],(function(e){var t=E.prototype,a=t[e];s(t,e,(function(t,i){if(u(t)&&!h(t)){this._f||(this._f=new r);var n=this._f[e](t,i);return"set"==e?this:n}return a.call(this,t,i)}))})))},INYr:function(e,t,a){"use strict";var r=a("XKFU"),i=a("CkkT")(6),n="findIndex",s=!0;n in[]&&Array(1)[n]((function(){s=!1})),r(r.P+r.F*s,"Array",{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),a("nGyu")(n)},OGtf:function(e,t,a){var r=a("XKFU"),i=a("eeVq"),n=a("vhPU"),s=/"/g,o=function(e,t,a,r){var i=String(n(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),o+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),r(r.P+r.F*i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},ZD67:function(e,t,a){"use strict";var r=a("3Lyj"),i=a("Z6vF").getWeak,n=a("y3w9"),s=a("0/R4"),o=a("9gX7"),d=a("SlkY"),l=a("CkkT"),u=a("aagx"),c=a("s5qY"),f=l(5),A=l(6),g=0,h=function(e){return e._l||(e._l=new p)},p=function(){this.a=[]},m=function(e,t){return f(e.a,(function(e){return e[0]===t}))};p.prototype={get:function(e){var t=m(this,e);if(t)return t[1]},has:function(e){return!!m(this,e)},set:function(e,t){var a=m(this,e);a?a[1]=t:this.a.push([e,t])},delete:function(e){var t=A(this.a,(function(t){return t[0]===e}));return~t&&this.a.splice(t,1),!!~t}},e.exports={getConstructor:function(e,t,a,n){var l=e((function(e,r){o(e,l,t,"_i"),e._t=t,e._i=g++,e._l=void 0,null!=r&&d(r,a,e[n],e)}));return r(l.prototype,{delete:function(e){if(!s(e))return!1;var a=i(e);return!0===a?h(c(this,t)).delete(e):a&&u(a,this._i)&&delete a[this._i]},has:function(e){if(!s(e))return!1;var a=i(e);return!0===a?h(c(this,t)).has(e):a&&u(a,this._i)}}),l},def:function(e,t,a){var r=i(n(t),!0);return!0===r?h(e).set(t,a):r[e._i]=a,e},ufstore:h}},r3O1:function(e){e.exports=JSON.parse('{"data":{"avatar":{"childImageSharp":{"fixed":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAUEAQL/xAAWAQEBAQAAAAAAAAAAAAAAAAACAAH/2gAMAwEAAhADEAAAAeYq88OY9GKAsyCz/8QAHRAAAQQCAwAAAAAAAAAAAAAAAQACAxEEEhAhMv/aAAgBAQABBQIepWtHAaN5a3pNJByO1S//xAAWEQADAAAAAAAAAAAAAAAAAAABEDH/2gAIAQMBAT8BEQi//8QAFhEBAQEAAAAAAAAAAAAAAAAAARAx/9oACAECAQE/AXYz/8QAHBAAAgICAwAAAAAAAAAAAAAAAQIQEQAhQVFh/9oACAEBAAY/AiM1cMQ+zxhDtQPUr6Lj/8QAGhAAAwEBAQEAAAAAAAAAAAAAAAERITFRQf/aAAgBAQABPyFHFktcpqvS7hTpgvHg7PDHUsHDc1elSnqPB9BB/9oADAMBAAIAAwAAABCcBwH/xAAXEQEAAwAAAAAAAAAAAAAAAAAAEBEx/9oACAEDAQE/EHbaP//EABkRAAIDAQAAAAAAAAAAAAAAAAABEBExQf/aAAgBAgEBPxDoUjSj/8QAHRABAAICAwEBAAAAAAAAAAAAAQARITFBUXFhgf/aAAgBAQABPxASlMFZQ6JeqNegL4ll3BaHg2Wby/ktkDcg8iCwGgafsUuEw9ZiA0DaHLdS7s8n/9k=","width":50,"height":50,"src":"/static/6f6a986f3fd72174a4cbf10b26c6fbfa/99438/profile-pic.jpg","srcSet":"/static/6f6a986f3fd72174a4cbf10b26c6fbfa/99438/profile-pic.jpg 1x,\\n/static/6f6a986f3fd72174a4cbf10b26c6fbfa/aba1d/profile-pic.jpg 1.5x,\\n/static/6f6a986f3fd72174a4cbf10b26c6fbfa/b315d/profile-pic.jpg 2x"}}},"site":{"siteMetadata":{"author":"Brady Lambert","social":{"github":"lambertbrady"}}}}}')}}]);
//# sourceMappingURL=cd7d5f864fc9e15ed8adef086269b0aeff617554-b4282ed4eca79464f6b7.js.map