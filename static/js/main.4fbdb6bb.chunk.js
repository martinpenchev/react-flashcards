(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,t,a){e.exports=a(46)},42:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n,r=a(0),o=a.n(r),i=a(19),c=a.n(i),s=a(8),l=a(31),u=a(18),p=a(16),d=a(10);!function(e){e.UPLOAD_CONTENT="UPLOAD_CONTENT",e.START_QUIZ="START_QUIZ",e.QUIT_QUIZ="QUIT_QUIZ",e.SHOW_BACK_SIDE="SHOW_BACK_SIDE",e.HIDE_BACK_SIDE="HIDE_BACK_SIDE",e.START_TIMER="START_TIMER",e.STOP_TIMER="STOP_TIMER",e.ADD_POINTS="ADD_POINTS",e.NEW_QUIZ="NEW_QUIZ"}(n||(n={}));var m=function(e){return{type:n.UPLOAD_CONTENT,payload:e}},h=function(){return{type:n.START_QUIZ,payload:!0}};var f=Object(d.c)({cards:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,a=t.type,r=t.payload;switch(a){case n.UPLOAD_CONTENT:return Object(p.a)(r);case n.NEW_QUIZ:return Object(p.a)(function(e){for(var t=Object(p.a)(e),a=t.length-1;a>0;a--){var n=Math.floor(Math.random()*(a+1)),r=[t[n],t[a]];t[a]=r[0],t[n]=r[1]}return t}(e));default:return e}},quizMode:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0,a=t.type,r=t.payload;switch(a){case n.START_QUIZ:case n.QUIT_QUIZ:return r;default:return e}},showBack:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0,a=t.type,r=t.payload;switch(a){case n.SHOW_BACK_SIDE:case n.HIDE_BACK_SIDE:return r;case n.NEW_QUIZ:return!1;default:return e}},timer:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0,a=t.type,r=t.payload;switch(a){case n.START_TIMER:case n.STOP_TIMER:return r;case n.NEW_QUIZ:return!0;default:return e}},points:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0,a=t.type,r=t.payload;switch(a){case n.ADD_POINTS:return e+r;case n.NEW_QUIZ:return 0;default:return e}}}),b=(a(41),a(42),a(3)),v=a(4),g=a(6),y=a(5),E=a(7),O=a(15),N=a(2),j=function(e){function t(){return Object(b.a)(this,t),Object(g.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){var e=this.props.quizMode?"text-warning":"";return o.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark mb-4"},o.a.createElement("div",{className:"container-fluid"},o.a.createElement(O.b,{to:"/",className:"navbar-brand ".concat(e)},"FLASHCARDS"),o.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation"},o.a.createElement("span",{className:"navbar-toggler-icon"})),this.props.quizMode?null:o.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarCollapse"},o.a.createElement("ul",{className:"navbar-nav ml-auto mb-2 mb-md-0"},o.a.createElement("li",{className:"nav-item"},o.a.createElement(O.b,{to:"/help",className:"nav-link"},"Instructions"))))))}}]),t}(r.Component),I=Object(s.b)(function(e){return{quizMode:e.quizMode}})(j),k=a(25),S=a.n(k),T=a(29),C=function(e){function t(){var e,a;Object(b.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(g.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).dragCounter=0,a.dropRef=o.a.createRef(),a.state={dragging:!1},a.handleDrag=function(e){e.preventDefault(),e.stopPropagation()},a.handleDragIn=function(e){e.preventDefault(),e.stopPropagation(),a.dragCounter++,e.dataTransfer&&e.dataTransfer.items&&e.dataTransfer.items.length>0&&a.setState({dragging:!0})},a.handleDragOut=function(e){e.preventDefault(),e.stopPropagation(),a.dragCounter--,a.dragCounter>0||a.setState({dragging:!1})},a.handleDrop=function(e){e.preventDefault(),e.stopPropagation(),e.dataTransfer&&e.dataTransfer.files&&e.dataTransfer.files.length>0&&(a.props.handleDrop(e.dataTransfer.files[0]),a.setState({dragging:!1}))},a}return Object(E.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){this.dragCounter=0;var e=this.dropRef.current;e&&(e.addEventListener("dragenter",this.handleDragIn),e.addEventListener("dragleave",this.handleDragOut),e.addEventListener("dragover",this.handleDrag),e.addEventListener("drop",this.handleDrop))}},{key:"componentWillUnmount",value:function(){var e=this.dropRef.current;e&&(e.removeEventListener("dragenter",this.handleDragIn),e.removeEventListener("dragleave",this.handleDragOut),e.removeEventListener("dragover",this.handleDrag),e.removeEventListener("drop",this.handleDrop))}},{key:"render",value:function(){return o.a.createElement("div",{style:{display:"inline-block",position:"relative"},ref:this.dropRef},this.state.dragging&&o.a.createElement("div",{style:{border:"dashed grey 2px",backgroundColor:"rgba(255,255,255,.8)",position:"absolute",top:0,bottom:0,left:0,right:0,zIndex:9999}},o.a.createElement("div",{style:{position:"absolute",top:"50%",right:0,left:0,textAlign:"center"}})),this.props.children)}}]),t}(o.a.Component),D=function(e){function t(){var e,a;Object(b.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(g.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(o)))).FileInputRef=r.createRef(),a.ReadFile=function(e){return new Promise(function(t,a){var n=new FileReader;n.readAsText(e),n.onload=function(){return t(n.result)},n.onerror=function(e){return a(e)}})},a.handleDrop=function(){var e=Object(T.a)(S.a.mark(function e(t){var n,r,o;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("application/json"!==t.type){e.next=8;break}return e.next=3,a.ReadFile(t);case 3:n=e.sent,r=JSON.parse(n),o=a.shuffleArray(r),a.props.UploadContent(o),a.props.StartQuiz();case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.handleFileInputChange=function(e){e.currentTarget.files&&e.currentTarget.files.length>0&&"application/json"===e.currentTarget.files[0].type&&a.ReadFile(e.currentTarget.files[0]).then(function(e){var t=JSON.parse(e),n=a.shuffleArray(t);a.props.UploadContent(n),a.props.StartQuiz()})},a.handleFileUploadClick=function(){a.FileInputRef.current&&a.FileInputRef.current.click()},a}return Object(E.a)(t,e),Object(v.a)(t,[{key:"shuffleArray",value:function(e){for(var t=Object(p.a)(e),a=t.length-1;a>0;a--){var n=Math.floor(Math.random()*(a+1)),r=[t[n],t[a]];t[a]=r[0],t[n]=r[1]}return t}},{key:"render",value:function(){return r.createElement(C,{handleDrop:this.handleDrop},r.createElement("div",{className:"row no-gutters",style:{height:400,width:500,border:"2px solid #e1e1e1"}},r.createElement("div",{className:"col-12 h4 align-self-end mb-0"},"Drag and drop your file here"),r.createElement("div",{className:"col-12 h4 align-self-center mb-0"},"or"),r.createElement("div",{className:"col-12 align-self-start mb-0"},r.createElement("input",{type:"file",id:"fileInput",ref:this.FileInputRef,onChange:this.handleFileInputChange,hidden:!0}),r.createElement("button",{className:"btn btn-secondary px-5",onClick:this.handleFileUploadClick},"Upload"))))}}]),t}(r.Component),w=Object(s.b)(null,{UploadContent:m,StartQuiz:h})(D),x=function(e){function t(){var e,a;Object(b.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(g.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).sampleQuiz=function(e){a.props.UploadContent(e),a.props.StartQuiz()},a}return Object(E.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){var e=this,t=[{front:"What are the different data types present in javascript?",back:"String, Number, BigInt, Boolean, Undefined, Null, Symbol, Object"},{front:"What is hoisting in javascript?",back:"Hoisting is a default behaviour of javascript where all the variable and function declarations are moved on top."},{front:"What is the difference between \u201c == \u201c and \u201c === \u201c operators?",back:"The latter checks also for the same type."},{front:"What is Implicit Type Coercion in javascript?",back:"Implicit type coercion in javascript is automatic conversion of value from one data type to another. It takes place when the operands of an expression are of different data types."},{front:"Is javascript a statically typed or a dynamically typed language?",back:"JavaScript is a dynamically typed language. In a dynamically typed language, the type of a variable is checked during run-time in contrast to statically typed language, where the type of a variable is checked during compile-time."},{front:"What is NaN property in JavaScript?",back:"NaN property represents \u201cNot-a-Number\u201d value. It indicates a value which is not a legal number."},{front:"What is an Immediately Invoked Function in JavaScript?",back:"An Immediately Invoked Function ( known as IIFE and pronounced as IIFY) is a function that runs as soon as it is defined."},{front:"What is currying in JavaScript?",back:"Currying is an advanced technique to transform a function of arguments n, to n functions of one or less arguments."},{front:"What are object prototypes?",back:"A prototype is a blueprint of an object. Prototype allows us to use properties and methods on an object even if the properties and methods do not exist on the current object."},{front:"What are callbacks?",back:"Functions that are used as an argument to another function are called callback functions."}];return r.createElement("div",{className:"container"},r.createElement(w,null),r.createElement("div",{className:"row my-4"},r.createElement("button",{className:"btn btn-warning px-4 mx-auto",onClick:function(){return e.sampleQuiz(t)}},"Try sample cards!")))}}]),t}(r.Component),_=Object(s.b)(null,{UploadContent:m,StartQuiz:h})(x),A=function(e){function t(){return Object(b.a)(this,t),Object(g.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"h1"},"Instructions"),o.a.createElement("div",{className:"h3 text-muted my-3"},"1. Create a json file from your flashcards using any online editor."),o.a.createElement("div",{className:"h3 text-muted my-3"},"2. The file must consist of a list of flashcard objects:",o.a.createElement("code",{className:"d-block my-3"},"{",'"front" : "text", "back" : "text"',"}")),o.a.createElement("div",{className:"h3 text-muted my-3"},"3. Drop your file or upload it."),o.a.createElement("div",{className:"h3 text-muted my-3"},"4. Test you knowledge and learn!"))}}]),t}(o.a.Component),Q=function(e){function t(){return Object(b.a)(this,t),Object(g.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){var e=this,t=this.props.showBackSide?"":"invisible";return o.a.createElement("div",{className:"container w-50"},o.a.createElement("div",{className:"row my-0"},o.a.createElement("div",{className:"flashcard-side py-5 mx-auto"},this.props.front)),o.a.createElement("div",{className:"row ".concat(t)},o.a.createElement("hr",{className:"w-100"})),o.a.createElement("div",{className:"row my-0 ".concat(t)},o.a.createElement("div",{className:"flashcard-side py-5 mx-auto"},this.props.back)),this.props.showBackSide?o.a.createElement("div",{className:"row d-flex justify-content-center"},o.a.createElement("button",{className:"btn btn-danger btn-sm px-5 py-2 mr-3",onClick:function(){return e.props.nextCard("Difficult")}},"Difficult"),o.a.createElement("button",{className:"btn btn-warning btn-sm px-5 py-2 mr-3",onClick:function(){return e.props.nextCard("Again")}},"Again"),o.a.createElement("button",{className:"btn btn-success btn-sm px-5 py-2",onClick:function(){return e.props.nextCard("Easy")}},"Easy")):o.a.createElement("div",{className:"row d-flex justify-content-center"},o.a.createElement("button",{className:"btn btn-secondary px-5",onClick:function(){return e.props.ShowBackSide()}},"Show backside")))}}]),t}(o.a.Component),U=Object(s.b)(function(e){return{showBackSide:e.showBack}},{ShowBackSide:function(){return{type:n.SHOW_BACK_SIDE,payload:!0}}})(Q),R=a(30),z=function(e){var t=Math.floor(e/60);return e%=60,"".concat(t.toString().padStart(2,"0"),":").concat(e.toString().padStart(2,"0"))},M=function(e){var t=e.stop,a=Object(r.useState)(0),n=Object(R.a)(a,2),i=n[0],c=n[1];return Object(r.useEffect)(function(){if(!t){var e=setInterval(function(){c(function(e){return e+1})},1e3);return function(){clearInterval(e),c(0)}}},[t]),o.a.createElement(o.a.Fragment,null,z(i))},F=function(e){function t(){return Object(b.a)(this,t),Object(g.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"position-absolute fixed-top vh-100",style:{width:"200px",backgroundColor:"rgba(255, 255, 255, 0.5)",paddingTop:"56px"}},o.a.createElement("ul",{className:"flex-column list-unstyled"},o.a.createElement("li",{className:"py-3 mb-3"},o.a.createElement("div",{className:"h1"},o.a.createElement(M,{stop:!this.props.timer})),o.a.createElement("div",{className:"text-muted"},"Time elapsed")),o.a.createElement("li",{className:"py-3 mb-3"},this.props.done?o.a.createElement("div",{className:"h1"},"Done!"):o.a.createElement("div",{className:"h1"},"".concat(this.props.current,"\\").concat(this.props.total)),o.a.createElement("div",{className:"text-muted"},"Flashcards")),o.a.createElement("li",{className:"py-3 mb-3"},o.a.createElement("div",{className:"h1"},this.props.points),o.a.createElement("div",{className:"text-muted"},"Current score")),o.a.createElement("li",{className:"py-3 mb-3"},o.a.createElement("button",{className:"btn btn-danger btn-sm px-5",onClick:function(){return e.props.QuitQuiz()}},"Quit"))))}}]),t}(o.a.Component),P=Object(s.b)(null,{QuitQuiz:function(){return{type:n.QUIT_QUIZ,payload:!1}}})(F),W=function(e){function t(e){var a;return Object(b.a)(this,t),(a=Object(g.a)(this,Object(y.a)(t).call(this,e))).NextCard=function(e){if(a.state.counter<a.state.length-1){switch(e){case"Easy":a.props.AddPoints(10);break;case"Again":a.props.AddPoints(5);break;case"Difficult":a.props.AddPoints(0)}a.props.HideBackSide(),a.setState({counter:a.state.counter+1})}else a.props.StopTimer()},a.restartQuiz=function(){a.props.newQuiz(),a.setState({counter:0})},a.state={counter:0,length:0},a}return Object(E.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){this.props.StartTimer(),this.setState({length:this.props.cards.length})}},{key:"render",value:function(){var e=this,t=this.props.cards.map(function(t,a){return o.a.createElement(U,{id:a,front:t.front,back:t.back,nextCard:e.NextCard})});return o.a.createElement(o.a.Fragment,null,this.props.quizMode?null:o.a.createElement(N.a,{to:"/"}),o.a.createElement(P,{current:this.state.counter+1,total:this.state.length,timer:this.props.timer,points:this.props.points,done:!this.props.timer}),this.props.timer?t[this.state.counter]:o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"h1 text-dark px-5 mx-auto"},"Final score ","".concat(this.props.points," / ").concat(10*this.state.length)),o.a.createElement("button",{className:"btn btn-secondary btn-sm px-5",onClick:function(){return e.restartQuiz()}},"Try again ?")))}}]),t}(o.a.Component),B=Object(s.b)(function(e){return{cards:e.cards,quizMode:e.quizMode,timer:e.timer,points:e.points}},{HideBackSide:function(){return{type:n.HIDE_BACK_SIDE,payload:!1}},StartTimer:function(){return{type:n.START_TIMER,payload:!0}},StopTimer:function(){return{type:n.STOP_TIMER,payload:!1}},AddPoints:function(e){return{type:n.ADD_POINTS,payload:e}},newQuiz:function(){return{type:n.NEW_QUIZ}}})(W),Z=function(e){function t(){return Object(b.a)(this,t),Object(g.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return o.a.createElement(O.a,{basename:"/react-flashcards"},this.props.quizMode?o.a.createElement(N.a,{to:"/quiz"}):null,o.a.createElement(I,null),o.a.createElement(N.b,{exact:!0,path:"/",component:_}),o.a.createElement(N.b,{exact:!0,path:"/help",component:A}),o.a.createElement(N.b,{exact:!0,path:"/quiz",component:B}))}}]),t}(r.Component),q=Object(s.b)(function(e){return{quizMode:e.quizMode}})(Z),L=Object(l.a)({reducer:f,middleware:[u.a]});c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(s.a,{store:L},o.a.createElement(q,null))),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.4fbdb6bb.chunk.js.map