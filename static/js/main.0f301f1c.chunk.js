(window["webpackJsonpmy-app"]=window["webpackJsonpmy-app"]||[]).push([[0],[,,,,,function(e,t,a){e.exports=a(14)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),s=a.n(r),i=(a(10),a(11),a(4)),c=a(1),o=(a(12),function(e){var t=e.col,a=e.isFinish,n=e.isStart,r=e.isWall,s=e.onMouseDown,i=e.onMouseEnter,c=e.onMouseUp,o=e.row,m=a?"node-finish":n?"node-start":r?"node-wall":"";return l.a.createElement("div",{id:"node-".concat(o,"-").concat(t),className:"node ".concat(m),onMouseDown:function(){return s(o,t)},onMouseEnter:function(){return i(o,t)},onMouseUp:function(){return c()}})});function m(e,t,a){var n=[];t.distance=0;for(var l=function(e){var t=[],a=!0,n=!1,l=void 0;try{for(var r,s=e[Symbol.iterator]();!(a=(r=s.next()).done);a=!0){var i=r.value,c=!0,o=!1,m=void 0;try{for(var u,d=i[Symbol.iterator]();!(c=(u=d.next()).done);c=!0){var h=u.value;t.push(h)}}catch(p){o=!0,m=p}finally{try{c||null==d.return||d.return()}finally{if(o)throw m}}}}catch(p){n=!0,l=p}finally{try{a||null==s.return||s.return()}finally{if(n)throw l}}return t}(e);l.length;){u(l);var r=l.shift();if(!r.isWall){if(r.distance===1/0)return n;if(r.isVisited=!0,n.push(r),r===a)return n;d(r,e)}}}function u(e){e.sort((function(e,t){return e.distance-t.distance}))}function d(e,t){var a=function(e,t){var a=[],n=e.col,l=e.row;l>0&&a.push(t[l-1][n]);l<t.length-1&&a.push(t[l+1][n]);n>0&&a.push(t[l][n-1]);n<t[0].length-1&&a.push(t[l][n+1]);return a.filter((function(e){return!e.isVisited}))}(e,t),n=!0,l=!1,r=void 0;try{for(var s,i=a[Symbol.iterator]();!(n=(s=i.next()).done);n=!0){var c=s.value;c.distance=e.distance+1,c.previousNode=e}}catch(o){l=!0,r=o}finally{try{n||null==i.return||i.return()}finally{if(l)throw r}}}a(13);function h(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var p=function(){for(var e=[],t=0;t<20;t++){for(var a=[],n=0;n<50;n++)a.push(E(n,t));e.push(a)}return e},E=function(e,t){return{col:e,row:t,isStart:0===t&&0===e,isFinish:19===t&&49===e,distance:1/0,isVisited:!1,isWall:!1,previousNode:null}},f=function(e,t,a){var n=e.slice(),l=n[t][a],r=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?h(a,!0).forEach((function(t){Object(i.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):h(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},l,{isWall:!l.isWall});return n[t][a]=r,n},g=function(){var e=Object(n.useState)(p()),t=Object(c.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)(!1),i=Object(c.a)(s,2),u=i[0],d=i[1],h=function(e){for(var t=function(t){setTimeout((function(){var a=e[t];document.getElementById("node-".concat(a.row,"-").concat(a.col)).className="node node-shortest-path"}),50*t)},a=0;a<e.length;a++)t(a)},E=function(){var e=a[0][0],t=a[19][49];!function(e,t){for(var a=function(a){if(a===e.length)return setTimeout((function(){h(t)}),10*a),{v:void 0};setTimeout((function(){var t=e[a];document.getElementById("node-".concat(t.row,"-").concat(t.col)).className="node node-visited"}),10*a)},n=0;n<=e.length;n++){var l=a(n);if("object"===typeof l)return l.v}}(m(a,e,t),function(e){for(var t=[],a=e;null!==a;)t.unshift(a),a=a.previousNode;return t}(t))};return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null," Dijksatra's Algorithm visualized: draw blocks by clicking/dragging on the grid!"),l.a.createElement("p",null,"Fergal Hennessy"),l.a.createElement("button",{onClick:function(){return E()}},"Visualize Dijkstra's Algorithm"),l.a.createElement("div",{className:"grid"},a.map((function(e,t){return l.a.createElement("div",{key:t},e.map((function(e,t){var n=e.row,s=e.col,i=e.isFinish,c=e.isStart,m=e.isWall;return l.a.createElement(o,{key:t,col:s,isFinish:i,isStart:c,isWall:m,mouseIsPressed:u,onMouseDown:function(e,t){return function(e,t){var n=f(a,e,t);r(n),d(!0)}(e,t)},onMouseEnter:function(e,t){return function(e,t){if(u){var n=f(a,e,t);r(n)}}(e,t)},onMouseUp:function(){d(!1)},row:n})})))}))),l.a.createElement("h1",null,"Dijkstra's Algorithm"),l.a.createElement("p",null,"Dijkstra\u2019s algorithm finds a shortest path tree from a single source node, by building a set of nodes that have minimum distance from the source."),l.a.createElement("img",{src:"https://ds055uzetaobb.cloudfront.net/brioche/uploads/ydOEDFABWr-graph1.png?width=1200",srcset:"https://ds055uzetaobb.cloudfront.net/brioche/uploads/ydOEDFABWr-graph1.png?width=1200 1x,https://ds055uzetaobb.cloudfront.net/brioche/uploads/ydOEDFABWr-graph1.png?width=2400 2x,https://ds055uzetaobb.cloudfront.net/brioche/uploads/ydOEDFABWr-graph1.png?width=3600 3x",alt:"Graph  "}),l.a.createElement("p",null,"The graph has the following:"),l.a.createElement("ul",{align:"left"},l.a.createElement("li",null,"vertices, or nodes, denoted in the algorithm by ",l.a.createElement("span",{class:"katex"},l.a.createElement("span",{class:"katex-mathml"},l.a.createElement("math",null,l.a.createElement("semantics",null,l.a.createElement("mrow",null,l.a.createElement("mi",null,"v")),l.a.createElement("annotation",{encoding:"application/x-tex"},"v")))),l.a.createElement("span",{class:"katex-html","aria-hidden":"true"},l.a.createElement("span",{class:"base"},l.a.createElement("span",{class:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),l.a.createElement("span",{class:"mord mathdefault",style:{marginRight:"0.03588em"}},"v"))))," or ",l.a.createElement("span",{class:"katex"},l.a.createElement("span",{class:"katex-mathml"},l.a.createElement("math",null,l.a.createElement("semantics",null,l.a.createElement("mrow",null,l.a.createElement("mi",null,"u")),l.a.createElement("annotation",{encoding:"application/x-tex"},"u")))),l.a.createElement("span",{class:"katex-html","aria-hidden":"true"},l.a.createElement("span",{class:"base"},l.a.createElement("span",{class:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),l.a.createElement("span",{class:"mord mathdefault"},"u")))),";"),l.a.createElement("li",null,"weighted edges that connect two nodes: (",l.a.createElement("span",{class:"katex"},l.a.createElement("span",{class:"katex-mathml"},l.a.createElement("math",null,l.a.createElement("semantics",null,l.a.createElement("mrow",null,l.a.createElement("mi",null,"u"),l.a.createElement("mo",{separator:"true"},","),l.a.createElement("mi",null,"v")),l.a.createElement("annotation",{encoding:"application/x-tex"},"u,v")))),l.a.createElement("span",{class:"katex-html","aria-hidden":"true"},l.a.createElement("span",{class:"base"},l.a.createElement("span",{class:"strut",style:{height:"0.625em",verticalAlign:"-0.19444em"}}),l.a.createElement("span",{class:"mord mathdefault"},"u"),l.a.createElement("span",{class:"mpunct"},","),l.a.createElement("span",{class:"mspace",style:{marginRight:"0.16666666666666666em"}}),l.a.createElement("span",{class:"mord mathdefault",style:{marginRight:"0.03588em"}},"v")))),") denotes an edge, and ",l.a.createElement("span",{class:"katex"},l.a.createElement("span",{class:"katex-mathml"},l.a.createElement("math",null,l.a.createElement("semantics",null,l.a.createElement("mrow",null,l.a.createElement("mi",null,"w"),l.a.createElement("mo",{stretchy:"false"},"("),l.a.createElement("mi",null,"u"),l.a.createElement("mo",{separator:"true"},","),l.a.createElement("mi",null,"v"),l.a.createElement("mo",{stretchy:"false"},")")),l.a.createElement("annotation",{encoding:"application/x-tex"},"w(u,v)")))),l.a.createElement("span",{class:"katex-html","aria-hidden":"true"},l.a.createElement("span",{class:"base"},l.a.createElement("span",{class:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),l.a.createElement("span",{class:"mord mathdefault",style:{marginRight:"0.02691em"}},"w"),l.a.createElement("span",{class:"mopen"},"("),l.a.createElement("span",{class:"mord mathdefault"},"u"),l.a.createElement("span",{class:"mpunct"},","),l.a.createElement("span",{class:"mspace",style:{marginRight:"0.16666666666666666em"}}),l.a.createElement("span",{class:"mord mathdefault",style:{marginRight:"0.03588em"}},"v"),l.a.createElement("span",{class:"mclose"},")"))))," denotes its weight. In the diagram on the right, the weight for each edge is written in gray.")),l.a.createElement("p",null,"This is done by initalizing three values:"),l.a.createElement("ul",{align:"left"},l.a.createElement("li",null,l.a.createElement("em",null,"dist"),", an array of distances from the source node ",l.a.createElement("em",null,"s")," to each node in the graph, initialized the following way: ",l.a.createElement("em",null,"dist(s)")," = 0; and for all other nodes ",l.a.createElement("em",null,"v, dist(v) = \u221e"),". This is done at the beginning, as the algorith proceeds, dist is recalculated for each v and only finalized once shortest distance is found."),l.a.createElement("li",null,"Q, a ",l.a.createElement("em",null,"queue")," of all nodes in the graph. At the end of the algorithm's progress, ",l.a.createElement("em",null,"Q")," will be empty."),l.a.createElement("li",null,l.a.createElement("em",null,"S"),", an empty list indicating which nodes the algorithm has visited: at the end of the algorithm ",l.a.createElement("em",null,"S")," will contain all the nodes of the graph.")),l.a.createElement("p",null,"Algorithm proceeds as follows:"),l.a.createElement("ul",{align:"left"},l.a.createElement("li",null,"While ",l.a.createElement("em",null,"Q")," is not empty, pop the node ",l.a.createElement("em",null,"v")," not already in S from ",l.a.createElement("em",null,"Q")," with the smallest ",l.a.createElement("em",null,"dist(v)"),". In the first run, source node ",l.a.createElement("em",null,"s")," will be chosen because ",l.a.createElement("em",null,"dist(s)")," is initialized to 0. In following runs, next smallest ",l.a.createElement("em",null,"dist")," value is chosen."),l.a.createElement("li",null,"Add node ",l.a.createElement("em",null,"v")," to ",l.a.createElement("em",null,"S")," to indicate ",l.a.createElement("em",null,"v")," has been visited"),l.a.createElement("li",null,"Update ",l.a.createElement("em",null,"dist")," values of adjacent nodes of the current node ",l.a.createElement("em",null,"v")," as follows: for each new adjacent node ",l.a.createElement("em",null,"u"),",",l.a.createElement("ol",null,l.a.createElement("li",null,"if ",l.a.createElement("em",null,"dist(v) ","+"," weight(u,v) ","<"," dist(u)"),", there is a new minimal distance found for ",l.a.createElement("em",null,"u"),", so update ",l.a.createElement("em",null,"dist(u)")," to the new minimal distance value;"),l.a.createElement("li",null,"otherwise, no updates are made to ",l.a.createElement("em",null,"dist(u)"),".")))),l.a.createElement("p",null,"The algorithm has visited all nodes in the graph and found the smallest distance to each node. ",l.a.createElement("em",null," dist")," now contains the shortest path tree from source ",l.a.createElement("em",null,"s"),"."),l.a.createElement("p",null,"Note the weight of an edge(u, v) is taken from the value associated with (u, v) on the graph."))};var v=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(g,null))};s.a.render(l.a.createElement(v,null),document.getElementById("root"))}],[[5,1,2]]]);
//# sourceMappingURL=main.0f301f1c.chunk.js.map