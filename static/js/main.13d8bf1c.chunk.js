(this["webpackJsonphuman-music"]=this["webpackJsonphuman-music"]||[]).push([[0],{69:function(t,i){},74:function(t,i,e){},84:function(t,i,e){},85:function(t,i,e){},86:function(t,i,e){"use strict";e.r(i);var s=e(36),a=e.n(s),n=e(2),r=e.n(n),o=e(3),u=e(4),h=e(6),l=e.n(h),c=e(1),d=e(0),b=function(){function t(i,e,s,a,n,r){Object(d.a)(this,t),this.states=void 0,this.size=void 0,this.radius=void 0,this.rule=void 0,this._state=void 0,this.tempState=void 0,this.neighbourhoodCode=void 0,this.lookupTable=void 0,this.states=i,this.size=e,this.radius=s,this.rule=a,this._state=n,this.lookupTable=r,this.tempState=Array.from({length:e}),this.neighbourhoodCode=Array.from({length:e})}return Object(c.a)(t,[{key:"state",get:function(){return this._state}},{key:"evolve",value:function(){var t=this;this.state.forEach((function(i,e){t.evolveCellAt(e)}));var i=this.tempState;this.tempState=this._state,this._state=i}},{key:"evolveCellAt",value:function(t){var i=this.lookupTable.length-this.computeCodeFor(t)-1;this.tempState[t]=i>=0?this.lookupTable[i]:0}},{key:"computeCodeFor",value:function(t){var i,e=Math.pow(this.states,2*this.radius),s=0;if(0===t)for(var a=-this.radius;a<=this.radius;a++)i=this.wrappedIndex(a),s+=e*this._state[i],e/=this.states;else{i=this.wrappedIndex(t-this.radius-1);var n=e*this._state[i];i=this.wrappedIndex(t+this.radius);var r=this._state[i];s=(this.neighbourhoodCode[t-1]-n)*this.states+r}return this.neighbourhoodCode[t]=s,s}},{key:"wrappedIndex",value:function(t){return t<0?t+this.size:t>=this.size?t-this.size:t}}]),t}();b.Builder=function(){function t(){Object(d.a)(this,t),this.states=2,this.size=100,this.rule=0,this.randomInitialConfiguration=!1}return Object(c.a)(t,[{key:"withStates",value:function(t){if(t<1)throw new Error("Number of states must be greater than 1");return this.states=t,this}},{key:"withSize",value:function(t){if(this.size=t,t<=10)throw new Error("Size of cellular automata must be greater than 10");return this}},{key:"withRule",value:function(t){if(this.rule=t,t<0)throw new Error("Rule must be a positive number");return this}},{key:"withRandomInitialConfiguration",value:function(){return this.randomInitialConfiguration=!0,this}},{key:"build",value:function(){for(var t=this,i=Array.from(BigInt(this.rule).toString(this.states)),e=Array.from({length:i.length}),s=0;s<i.length;s++){var a=i[s];e[s]=a>="0"&&a<="9"?+i[s]-0:+i[s]-NaN}var n=this.randomInitialConfiguration?Array.from({length:this.size},(function(){return Math.round(Math.random())})):Array.from({length:this.size},(function(i,e){return e===Math.floor(t.size/2)?1:0}));return new b(this.states,this.size,1,this.rule,n,e)}}]),t}();var E,I,m=function(){function t(i,e,s,a,n,r){Object(d.a)(this,t),this.states=void 0,this.size=void 0,this.radius=void 0,this.rule=void 0,this._state=void 0,this.tempState=void 0,this.neighbourhoodCode=void 0,this.lookupTable=void 0,this.states=i,this.size=e,this.radius=s,this.rule=a,this._state=n,this.lookupTable=r,this.tempState=Array.from({length:e}),this.neighbourhoodCode=Array.from({length:e})}return Object(c.a)(t,[{key:"state",get:function(){return this._state}},{key:"evolve",value:function(){var t=this;this.state.forEach((function(i,e){t.evolveCellAt(e)}));var i=this.tempState;this.tempState=this._state,this._state=i}},{key:"evolveCellAt",value:function(t){var i=this.lookupTable.length-this.computeCodeFor(t)-1;this.tempState[t]=i>=0?this.lookupTable[i]:0}},{key:"computeCodeFor",value:function(t){var i,e=2*this.radius+1,s=0;if(0===t)for(var a=-this.radius;a<e;a++)i=this.wrappedIndex(a),s+=this._state[i];else{i=this.wrappedIndex(t-this.radius-1);var n=this._state[i];i=this.wrappedIndex(t+this.radius);var r=this._state[i];s=this.neighbourhoodCode[t-1]-n+r}return this.neighbourhoodCode[t]=s,s}},{key:"wrappedIndex",value:function(t){return t<0?t+this.size:t>=this.size?t-this.size:t}}]),t}();!function(t){t[t.UNIDIMENSIONAL=0]="UNIDIMENSIONAL",t[t.BIDIMENSIONAL=1]="BIDIMENSIONAL"}(E||(E={})),function(t){t[t.TOTALISTIC=0]="TOTALISTIC",t[t.ELEMENTARY=1]="ELEMENTARY"}(I||(I={}));var f=function t(){Object(d.a)(this,t)};f.Builder=function(){function t(){Object(d.a)(this,t),this.dimensions=E.UNIDIMENSIONAL,this.type=I.ELEMENTARY,this.states=2,this.size=100,this.rule=0,this.randomInitialConfiguration=!1}return Object(c.a)(t,[{key:"withDimensions",value:function(t){if(t===E.BIDIMENSIONAL)throw new Error("Bi-dimensional automata not implemented yet");return this.dimensions=t,this}},{key:"withType",value:function(t){return this.type=t,this}},{key:"withStates",value:function(t){if(t<1)throw new Error("Number of states must be greater than 1");return this.states=t,this}},{key:"withSize",value:function(t){if(this.size=t,t<=10)throw new Error("Size of cellular automata must be greater than 10");return this}},{key:"withRule",value:function(t){if(this.rule=t,t<0)throw new Error("Rule must be a positive number");return this}},{key:"withRandomInitialConfiguration",value:function(){return this.randomInitialConfiguration=!0,this}},{key:"build",value:function(){return this.type===I.TOTALISTIC?this.buildTotallistic1D():this.buildElementary1D()}},{key:"buildTotallistic1D",value:function(){for(var t=this,i=Array.from(BigInt(this.rule).toString(this.states)),e=Array.from({length:i.length}),s=0;s<i.length;s++)e[s]=+i[s]-0;var a=this.randomInitialConfiguration?Array.from({length:this.size},(function(){return Math.round(Math.random())})):Array.from({length:this.size},(function(i,e){return e===Math.floor(t.size/2)?1:0}));return new m(this.states,this.size,1,this.rule,a,e)}},{key:"buildElementary1D",value:function(){for(var t=this,i=Array.from(BigInt(this.rule).toString(this.states)),e=Array.from({length:i.length}),s=0;s<i.length;s++){var a=i[s];e[s]=a>="0"&&a<="9"?+i[s]-0:+i[s]-NaN}var n=this.randomInitialConfiguration?Array.from({length:this.size},(function(){return Math.round(Math.random())})):Array.from({length:this.size},(function(i,e){return e===Math.floor(t.size/2)?1:0}));return new b(this.states,this.size,1,this.rule,n,e)}}]),t}();var A=(new f.Builder).withDimensions(E.UNIDIMENSIONAL).withType(I.ELEMENTARY).withSize(101).withRule(0).withStates(2).build(),x=l.a.createContext(A),v=e(37),g=(e(74),["#000000","#e8b354","#568140"]),C=function(){function t(i,e){Object(d.a)(this,t),this.step=0,this.cellSize=void 0,this.sketch=void 0,this.automata=void 0,this.sketch=i,this.automata=e,this.cellSize=this.sketch.width/e.size/window.devicePixelRatio}return Object(c.a)(t,[{key:"updateAutomata",value:function(t){this.step=0,this.automata=t,this.cellSize=this.sketch.width/t.size/window.devicePixelRatio}},{key:"draw",value:function(){for(var t=0;t<this.automata.size;t++)this.sketch.noStroke(),this.sketch.fill(g[this.automata.state[t]]),this.sketch.rect(this.cellSize*t,this.step*this.cellSize,this.cellSize,this.cellSize);this.step++}}]),t}();C.Builder=function(){function t(){Object(d.a)(this,t),this.sketch=void 0,this.automata=void 0}return Object(c.a)(t,[{key:"withSketch",value:function(t){return this.sketch=t,this}},{key:"withAutomata",value:function(t){return this.automata=t,this}},{key:"build",value:function(){if(null===this.automata)throw new Error("Must pass a cellular automata upon building");if(null===this.sketch)throw new Error("Must pass a p5 sketch upon building");return new C(this.sketch,this.automata)}}]),t}();var p=e(11),Y=function(){function t(i,e){Object(d.a)(this,t),this.note="R",this.lastNote="R",this.notes=["R","B2","C3","D3","E3","F3","G3","A3","B3","C4"],this.instrument=void 0,this.automata=void 0,this.instrument=i,this.automata=e}return Object(c.a)(t,[{key:"updateAutomata",value:function(t){this.automata=t,this.instrument.triggerRelease(this.lastNote),this.note="R",this.lastNote="R"}},{key:"play",value:function(){var t=this.automata.state.filter((function(t){return 0!==t})).length;this.note=this.notes[t%this.notes.length],this.note!==this.lastNote&&(this.instrument.triggerRelease(this.lastNote,p.c()),"R"!==this.note&&this.instrument.triggerAttack(this.note,p.c())),this.lastNote=this.note}}]),t}();Y.Builder=function(){function t(){Object(d.a)(this,t),this.automata=void 0}return Object(c.a)(t,[{key:"withAutomata",value:function(t){return this.automata=t,this}},{key:"build",value:function(){var t=Object(o.a)(r.a.mark((function t(){var i;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!==this.automata){t.next=2;break}throw new Error("Must pass a cellular automata upon building");case 2:return i=new p.a({urls:{A1:"A1.mp3",A2:"A2.mp3"},baseUrl:"https://tonejs.github.io/audio/casio/"}).toDestination(),t.next=5,p.b();case 5:return t.abrupt("return",new Y(i,this.automata));case 6:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()}]),t}();var w,y,N,j=e(5);function S(){return(S=Object(o.a)(r.a.mark((function t(i){var e,s,a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=A,s=(new C.Builder).withSketch(i).withAutomata(e).build(),t.next=4,(new Y.Builder).withAutomata(e).build();case 4:return a=t.sent,t.abrupt("return",{initialAutomata:e,painter:s,player:a});case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var k=function(t){var i=!1,e=document.getElementById("sketch"),s=e?e.clientWidth*window.devicePixelRatio:0,a=e?e.clientHeight*window.devicePixelRatio:0;t.setup=function(){t.createCanvas(s,a),t.frameRate(5),function(t){return S.apply(this,arguments)}(t).then((function(t){var e=t.initialAutomata,s=t.painter,a=t.player;w=e,y=s,N=a,i=!0}))},t.updateWithProps=function(e){var s,a;e.automata&&i&&(w=e.automata,null===(s=y)||void 0===s||s.updateAutomata(w),null===(a=N)||void 0===a||a.updateAutomata(w),t.clear());t.draw=function(){var t,i,e;null===(t=y)||void 0===t||t.draw(),null===(i=N)||void 0===i||i.play(),null===(e=w)||void 0===e||e.evolve()}}};function O(){return Object(j.jsx)(x.Consumer,{children:function(t){return Object(j.jsx)("div",{className:"CellularAutomataSketch",id:"sketch",children:Object(j.jsx)(v.a,{customClass:"canvas",sketch:k,automata:t})})}})}e(84);function L(){var t=Object(h.useState)(!1),i=Object(u.a)(t,2),e=i[0],s=i[1],a=Object(h.useState)(0),n=Object(u.a)(a,2),l=n[0],c=n[1],d=Object(h.useState)(A),b=Object(u.a)(d,2),m=b[0],v=b[1];function g(){return(g=Object(o.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.d();case 2:s(!0),C();case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function C(){return Y.apply(this,arguments)}function Y(){return Y=Object(o.a)(r.a.mark((function t(){var i;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i=Math.round(255*Math.random()),c(i),v((new f.Builder).withDimensions(E.UNIDIMENSIONAL).withType(I.ELEMENTARY).withStates(2).withSize(101).withRule(i).build());case 3:case"end":return t.stop()}}),t)}))),Y.apply(this,arguments)}return Object(j.jsx)(x.Provider,{value:m,children:Object(j.jsxs)("div",{className:"Euterpe",children:[Object(j.jsx)(O,{}),Object(j.jsxs)("div",{className:"Panel",children:[Object(j.jsxs)("div",{className:"Headers",children:[Object(j.jsx)("img",{src:"data:image/png;base64,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",className:"EarthRadioLogo",alt:"Earth"}),Object(j.jsx)("h1",{className:"Title",children:"Human Music"}),Object(j.jsx)("h2",{className:"Subtitle",children:"by Earth Radio"})]}),Object(j.jsxs)("div",{className:"Controllers",children:[Object(j.jsx)("p",{className:"PlayingRule",children:e?"Playing rule: "+l:"--"}),e?Object(j.jsx)("button",{className:"ruleButton",onClick:C,children:"Randomise Rule"}):Object(j.jsx)("button",{className:"startButton",onClick:function(){return g.apply(this,arguments)},children:"Start"})]})]})]})})}e(85);a.a.render(Object(j.jsx)(L,{}),document.getElementById("root"))}},[[86,1,2]]]);
//# sourceMappingURL=main.13d8bf1c.chunk.js.map