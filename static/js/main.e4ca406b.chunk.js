(this["webpackJsonplights-out-game-app"]=this["webpackJsonplights-out-game-app"]||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},17:function(t,e,n){},18:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var r=n(1),a=n.n(r),s=n(8),c=n.n(s),i=(n(14),n(2)),o=n(3),l=n(6),h=n(5),u=n(9),d=n(4),j=n(21),p=(n(15),n(0)),b=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(t){var r;return Object(i.a)(this,n),(r=e.call(this,t)).handleClick=r.handleClick.bind(Object(d.a)(r)),r}return Object(o.a)(n,[{key:"handleClick",value:function(){this.props.flipCellsAroundMe(this.props.id)}},{key:"render",value:function(){var t="Cell"+(this.props.isLit?" Cell-lit":"");return Object(p.jsx)("td",{className:t,onClick:this.handleClick})}}]),n}(r.Component),O=(n(17),function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(t){var r;return Object(i.a)(this,n),(r=e.call(this,t)).state={hasWon:!1,board:r.createBoard()},r.flipCellsAround=r.flipCellsAround.bind(Object(d.a)(r)),r}return Object(o.a)(n,[{key:"createBoard",value:function(){for(var t=[],e=0;e<this.props.nRows;e++){for(var n=Array.from({length:this.props.nCols}),r=0;r<n.length;r++)Math.random()<this.props.chanceLightStartsOn?n[r]=!0:n[r]=!1;t.push(n)}return t}},{key:"renderBoard",value:function(){for(var t=[],e=0;e<this.props.nRows;e++){for(var n=Array.from({length:this.props.nCols}),r=0;r<n.length;r++){var a=this.state.board[e][r];n[r]=Object(p.jsx)(b,{isLit:a,flipCellsAroundMe:this.flipCellsAround,id:"".concat(e,"-").concat(r)},Object(j.a)())}t.push(Object(p.jsx)("tr",{children:n},Object(j.a)()))}return t}},{key:"flipCellsAround",value:function(t){var e=this.props,n=e.nCols,r=e.nRows,a=this.state.board,s=t.split("-").map(Number),c=Object(u.a)(s,2),i=c[0],o=c[1];function l(t,e){e>=0&&e<n&&t>=0&&t<r&&(a[t][e]=!a[t][e])}l(i-1,o),l(i,o-1),l(i,o),l(i,o+1),l(i+1,o),this.setState({board:a});for(var h=0;h<r;h++)for(var d=0;d<n;d++)if(a[h][d])return;this.setState({hasWon:!0})}},{key:"render",value:function(){var t=this.renderBoard();return this.state.hasWon?Object(p.jsx)("h1",{className:"neon-orange",children:"NICE, YOU WON!"}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("h1",{children:[Object(p.jsx)("span",{className:"neon-orange",children:"Lights"}),Object(p.jsx)("br",{}),Object(p.jsx)("span",{className:"neon-blue",children:"Out"})]}),Object(p.jsx)("div",{id:"Lights-out-container",children:Object(p.jsx)("table",{children:Object(p.jsx)("tbody",{children:t})})})]})}}]),n}(r.Component));O.defaultProps={nRows:5,nCols:5,chanceLightStartsOn:.15};var f=O,v=(n(18),function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(f,{})})}}]),n}(r.Component)),C=v;c.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(C,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.e4ca406b.chunk.js.map