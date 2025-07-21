import{y as S,Q as s,I as a,al as k,z as u,T as Ve,H as z,L as Ee,x as Se,r as h,k as Te,A as e,ax as be,a4 as ze,P as K,a6 as F,ay as ke,M as v,u as x,O as c,D as fe,K as ae,c as se,az as Ne,C as Re,V as Me,n as Ue,aA as qe,aB as He,au as Be,aC as Ke}from"./vue-DiCoY6rO.js";import{a as Fe,c as Je,m as We,p as Ge,b as Qe,E as b,r as Ye,d as he,v as ye,e as Xe,l as Ze,f as we,s as et,t as tt,u as st,g as at,h as lt,i as ot,j as nt}from"./elementPlus-Cy6PGvGY.js";(function(){const p=document.createElement("link").relList;if(p&&p.supports&&p.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))m(n);new MutationObserver(n=>{for(const f of n)if(f.type==="childList")for(const w of f.addedNodes)w.tagName==="LINK"&&w.rel==="modulepreload"&&m(w)}).observe(document,{childList:!0,subtree:!0});function y(n){const f={};return n.integrity&&(f.integrity=n.integrity),n.referrerPolicy&&(f.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?f.credentials="include":n.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function m(n){if(n.ep)return;n.ep=!0;const f=y(n);fetch(n.href,f)}})();const ge=(o,p)=>{const y=o.__vccOpts||o;for(const[m,n]of p)y[m]=n;return y},it={},rt={id:"app"};function ct(o,p){const y=k("router-view");return u(),S("div",rt,[s(y,null,{default:a(({Component:m,route:n})=>{var f;return[s(Ve,{name:((f=n.meta)==null?void 0:f.transition)||"fade",mode:"out-in",appear:""},{default:a(()=>[(u(),z(Ee(m),{key:n.path}))]),_:2},1032,["name"])]}),_:1})])}const dt=ge(it,[["render",ct]]),ut={class:"home-page"},pt={class:"navbar"},mt={class:"navbar-content"},vt={class:"auth-buttons"},ft={id:"home",class:"hero-section"},gt={class:"hero-content"},_t={class:"hero-search"},bt={class:"search-container"},ht={id:"features",class:"features-section"},yt={class:"section-content"},wt={class:"feature-icon"},St={class:"feature-title"},Tt={class:"feature-description"},kt={id:"benefits",class:"benefits-section"},$t={class:"section-content"},jt={class:"benefit-content"},Pt={class:"benefit-title"},Ct={class:"benefit-description"},It={class:"benefit-features"},xt={class:"benefit-visual"},Lt={class:"benefit-icon"},Dt={class:"benefit-subtitle"},At={class:"subjects-section"},Ot={class:"section-content"},Vt=["onClick"],Et={class:"subject-icon"},zt={class:"subject-name"},Nt={class:"subject-count"},Rt={class:"testimonials-section"},Mt={class:"section-content"},Ut={class:"testimonial-content"},qt={class:"testimonial-text"},Ht={class:"testimonial-author"},Bt={class:"author-avatar"},Kt={class:"author-info"},Ft={class:"author-name"},Jt={class:"author-title"},Wt={class:"testimonial-rating"},Gt={id:"getting-started",class:"getting-started-section"},Qt={class:"section-content"},Yt={class:"step-number"},Xt={class:"step-title"},Zt={class:"step-description"},es={class:"step-action"},ts={class:"faq-section"},ss={class:"section-content"},as={class:"faq-answer"},ls={id:"about",class:"contact-section"},os={class:"section-content"},ns={class:"contact-info"},is={class:"contact-item"},rs={class:"contact-item"},cs={class:"contact-item"},ds={class:"footer"},us={class:"footer-content"},ps=Se({__name:"Home",setup(o){const p=ke(),y=h(""),m=h(!1),n=h(!1),f=h(["1"]),w=h({name:"",email:"",message:""}),C=h([{id:1,title:"智能教案生成",description:"基于教学目标和课程内容自动生成详细教案，节省备课时间",emoji:"📝",buttonText:"开始创建"},{id:2,title:"PPT自动创建",description:"根据教案内容自动生成配套的PPT演示文稿，美观专业",emoji:"📊",buttonText:"生成PPT"},{id:3,title:"多学科支持",description:"覆盖语文、数学、英语、科学等多个学科领域",emoji:"📚",buttonText:"查看学科"},{id:4,title:"模板管理",description:"提供丰富的教案和PPT模板库，支持个性化定制",emoji:"🎨",buttonText:"浏览模板"}]),G=h([{title:"个性化定制",description:"根据不同年级、学科特点和教学风格，提供个性化的教案和PPT定制服务。系统会学习您的教学偏好，提供越来越符合您需求的内容。",emoji:"⚙️",subtitle:"智能适配教学需求",features:["自动适配年级特点","学习教学风格","个性化推荐","智能内容优化"]},{title:"团队协作",description:"支持教案和PPT的在线分享与协作编辑。团队成员可以实时协作，共同完善教学内容，提高教学质量和效率。",emoji:"🤝",subtitle:"团队协作共享",features:["实时协作编辑","版本历史管理","权限控制","评论反馈"]},{title:"资源管理",description:"海量教学资源库，包括教案模板、PPT模板、教学素材等。支持资源的分类管理、搜索和分享，让优质教学资源得到充分利用。",emoji:"📁",subtitle:"丰富的资源管理",features:["海量模板库","智能分类","快速搜索","资源分享"]}]),L=h([{id:1,name:"语文",emoji:"📖",count:5e3},{id:2,name:"数学",emoji:"🔢",count:4500},{id:3,name:"英语",emoji:"🗣️",count:4e3},{id:4,name:"科学",emoji:"🔬",count:3500},{id:5,name:"历史",emoji:"📜",count:3e3},{id:6,name:"地理",emoji:"🌍",count:2800},{id:7,name:"音乐",emoji:"🎵",count:2e3},{id:8,name:"美术",emoji:"🎨",count:2200},{id:9,name:"体育",emoji:"⚽",count:1800},{id:10,name:"信息技术",emoji:"💻",count:2500},{id:11,name:"道德与法治",emoji:"⚖️",count:1500},{id:12,name:"综合实践",emoji:"🔧",count:1200}]),I=h([{id:1,name:"张老师",title:"小学语文教师",content:"这个工具太棒了！以前备课需要花费大量时间，现在只需要输入主题，就能生成高质量的教案，大大提高了我的工作效率。",rating:5},{id:2,name:"李老师",title:"初中数学教师",content:"AI生成的PPT既美观又实用，学生们都很喜欢。而且还能根据我的教学风格进行调整，真的很智能。",rating:5},{id:3,name:"王老师",title:"高中英语教师",content:"团队协作功能特别好用，我们英语组的老师可以一起完善教案，分享优质资源，提高了整个团队的教学水平。",rating:5}]),V=h([{title:"注册账号",description:"使用邮箱注册账号，免费体验基础功能"},{title:"选择模板",description:"从丰富的模板库中选择适合的教案模板"},{title:"输入内容",description:"输入教学主题和要求，AI自动生成教案"},{title:"导出使用",description:"导出教案和PPT，直接用于课堂教学"}]),H=h([{id:"1",question:"如何开始使用AI教案工具？",answer:"首先注册账号，然后选择适合的模板，输入教学主题和要求，系统会自动为您生成教案和PPT。整个过程非常简单，只需几分钟即可完成。"},{id:"2",question:"生成的教案质量如何保证？",answer:"我们的AI系统基于大量优质教案数据训练，结合教育专家的经验，能够生成符合教学标准的高质量教案。同时支持人工调整和优化。"},{id:"3",question:"支持哪些学科和年级？",answer:"目前支持小学、初中、高中的语文、数学、英语、科学、历史、地理等主要学科，覆盖面广泛，持续增加更多学科支持。"},{id:"4",question:"如何进行团队协作？",answer:"您可以邀请同事加入您的团队，共同编辑和完善教案。系统支持实时协作、版本管理和权限控制，让团队合作更高效。"},{id:"5",question:"费用如何计算？",answer:"我们提供免费试用版本，包含基础功能。付费版本提供更多高级功能和模板，具体价格请联系客服咨询。"}]),R=()=>{b.info("登录功能开发中...")},T=()=>{b.info("注册功能开发中...")},M=P=>{const l={subject:"",grade:"",title:P,template:null},D=[{pattern:/(小学|一年级|二年级|三年级|四年级|五年级|六年级)/,grade:"小学"},{pattern:/(初中|初一|初二|初三|七年级|八年级|九年级)/,grade:"初中"},{pattern:/(高中|高一|高二|高三)/,grade:"高中"}];for(const j of D)if(j.pattern.test(P)){l.grade=j.grade;break}const B=[{pattern:/(语文|古诗|作文|阅读|汉语)/,subject:"语文"},{pattern:/(数学|算术|计算|几何|代数|函数|方程)/,subject:"数学"},{pattern:/(英语|English|单词|语法|口语)/,subject:"英语"},{pattern:/(物理|力学|电学|光学|热学|牛顿|能量)/,subject:"物理"},{pattern:/(化学|化合物|元素|反应|实验|分子|原子)/,subject:"化学"},{pattern:/(生物|植物|动物|细胞|遗传|生态)/,subject:"生物"},{pattern:/(历史|古代|近代|朝代|战争|文化)/,subject:"历史"},{pattern:/(地理|地球|气候|地形|国家|城市)/,subject:"地理"},{pattern:/(政治|法律|道德|思想|社会|公民)/,subject:"政治"}];for(const j of B)if(j.pattern.test(P)){l.subject=j.subject;break}const W=[{id:1,name:"小学语文课文阅读教案",subject:"语文",grade:"小学"},{id:2,name:"小学数学计算教学教案",subject:"数学",grade:"小学"},{id:3,name:"初中物理实验教学教案",subject:"物理",grade:"初中"},{id:4,name:"高中化学概念教学教案",subject:"化学",grade:"高中"},{id:5,name:"小学英语单词教学教案",subject:"英语",grade:"小学"}];return l.template=W.find(j=>j.subject===l.subject&&j.grade===l.grade)||W[0],l},E=async()=>{var P;if(!y.value.trim()){b.warning("请输入教学主题");return}m.value=!0;try{await new Promise(D=>setTimeout(D,800));const l=M(y.value);p.push({name:"generator",query:{content:y.value,subject:l.subject,grade:l.grade,templateId:((P=l.template)==null?void 0:P.id.toString())||"1"}})}catch{b.error("跳转失败，请重试")}finally{m.value=!1}},Q=P=>{b.info(`${P.title}功能开发中...`)},$=P=>{b.info(`${P.name}学科模板开发中...`)},U=()=>{b.info("演示功能开发中...")},Y=async()=>{if(!w.value.name||!w.value.email||!w.value.message){b.warning("请填写完整信息");return}n.value=!0;try{await new Promise(P=>setTimeout(P,1500)),b.success("消息发送成功，我们会尽快回复您！"),w.value={name:"",email:"",message:""}}catch{b.error("发送失败，请重试")}finally{n.value=!1}},X=P=>{const l=document.getElementById(P);l&&l.scrollIntoView({behavior:"smooth"})};return Te(()=>{document.querySelectorAll(".nav-links a").forEach(l=>{l.addEventListener("click",D=>{D.preventDefault();const B=l.getAttribute("href");B&&B.startsWith("#")&&X(B.substring(1))})})}),(P,l)=>{const D=k("el-button"),B=k("el-input"),W=k("el-card"),j=k("el-col"),J=k("el-row"),Z=k("el-icon"),ie=k("el-rate"),re=k("el-collapse-item"),ce=k("el-collapse"),ee=k("el-form-item"),de=k("el-form"),ue=k("el-backtop");return u(),S("div",ut,[e("nav",pt,[e("div",mt,[l[7]||(l[7]=be('<div class="logo" data-v-a8536593><div class="logo-icon" data-v-a8536593>AI</div><span data-v-a8536593>智能教案</span></div><ul class="nav-links" data-v-a8536593><li data-v-a8536593><a href="#home" class="active" data-v-a8536593>首页</a></li><li data-v-a8536593><a href="#features" data-v-a8536593>功能</a></li><li data-v-a8536593><a href="#benefits" data-v-a8536593>特性</a></li><li data-v-a8536593><a href="#getting-started" data-v-a8536593>开始使用</a></li><li data-v-a8536593><a href="#about" data-v-a8536593>关于我们</a></li></ul>',2)),e("div",vt,[s(D,{onClick:R,class:"nav-auth-btn"},{default:a(()=>l[5]||(l[5]=[v("登录")])),_:1,__:[5]}),s(D,{type:"primary",onClick:T,class:"nav-auth-btn nav-auth-btn-primary"},{default:a(()=>l[6]||(l[6]=[v("注册")])),_:1,__:[6]})])])]),e("section",ft,[e("div",gt,[l[8]||(l[8]=e("h1",{class:"hero-title"},"AI智能教案工具",-1)),l[9]||(l[9]=e("p",{class:"hero-subtitle"},"基于人工智能的教案生成与PPT制作平台，让教学更高效、更智能",-1)),e("div",_t,[e("div",bt,[s(B,{modelValue:y.value,"onUpdate:modelValue":l[0]||(l[0]=r=>y.value=r),size:"large",placeholder:"输入教学主题，如：初一物理牛顿第一定律...",class:"search-input",onKeyup:ze(E,["enter"])},{suffix:a(()=>[s(D,{onClick:E,loading:m.value,class:"search-arrow-btn",icon:x(Fe)},null,8,["loading","icon"])]),_:1},8,["modelValue"])])]),l[10]||(l[10]=be('<div class="hero-stats" data-v-a8536593><div class="stat-item" data-v-a8536593><span class="stat-number" data-v-a8536593>50K+</span><span class="stat-label" data-v-a8536593>教案模板</span></div><div class="stat-item" data-v-a8536593><span class="stat-number" data-v-a8536593>100K+</span><span class="stat-label" data-v-a8536593>用户使用</span></div><div class="stat-item" data-v-a8536593><span class="stat-number" data-v-a8536593>20+</span><span class="stat-label" data-v-a8536593>学科支持</span></div><div class="stat-item" data-v-a8536593><span class="stat-number" data-v-a8536593>95%</span><span class="stat-label" data-v-a8536593>满意度</span></div></div>',1))])]),e("section",ht,[e("div",yt,[l[11]||(l[11]=e("div",{class:"section-header"},[e("h2",{class:"section-title"},"核心功能"),e("p",{class:"section-subtitle"},"全面的教学辅助工具，助力现代化教学")],-1)),s(J,{gutter:30,class:"features-grid"},{default:a(()=>[(u(!0),S(K,null,F(C.value,r=>(u(),z(j,{xs:24,sm:12,md:6,key:r.id},{default:a(()=>[s(W,{class:"feature-card",onClick:q=>Q(r)},{default:a(()=>[e("div",wt,c(r.emoji),1),e("h3",St,c(r.title),1),e("p",Tt,c(r.description),1),s(D,{type:"primary",plain:""},{default:a(()=>[v(c(r.buttonText),1)]),_:2},1024)]),_:2},1032,["onClick"])]),_:2},1024))),128))]),_:1})])]),e("section",kt,[e("div",$t,[l[12]||(l[12]=e("div",{class:"section-header"},[e("h2",{class:"section-title"},"产品特性"),e("p",{class:"section-subtitle"},"为教师提供全方位的教学支持")],-1)),(u(!0),S(K,null,F(G.value,(r,q)=>(u(),S("div",{class:fe(["benefit-item",{reverse:q%2===1}]),key:q},[e("div",jt,[e("h3",Pt,c(r.title),1),e("p",Ct,c(r.description),1),e("div",It,[(u(!0),S(K,null,F(r.features,(pe,me)=>(u(),S("div",{key:me,class:"benefit-feature-item"},[s(Z,{class:"feature-check"},{default:a(()=>[s(x(Je))]),_:1}),e("span",null,c(pe),1)]))),128))])]),e("div",xt,[e("div",Lt,c(r.emoji),1),e("p",Dt,c(r.subtitle),1)])],2))),128))])]),e("section",At,[e("div",Ot,[l[13]||(l[13]=e("div",{class:"section-header"},[e("h2",{class:"section-title"},"学科支持"),e("p",{class:"section-subtitle"},"覆盖全学段、全学科的教学内容生成")],-1)),s(J,{gutter:20,class:"subjects-grid"},{default:a(()=>[(u(!0),S(K,null,F(L.value,r=>(u(),z(j,{xs:12,sm:8,md:4,key:r.id},{default:a(()=>[e("div",{class:"subject-card",onClick:q=>$(r)},[e("div",Et,c(r.emoji),1),e("h4",zt,c(r.name),1),e("p",Nt,c(r.count)+"+ 模板",1)],8,Vt)]),_:2},1024))),128))]),_:1})])]),e("section",Rt,[e("div",Mt,[l[14]||(l[14]=e("div",{class:"section-header"},[e("h2",{class:"section-title"},"用户评价"),e("p",{class:"section-subtitle"},"来自一线教师的真实反馈")],-1)),s(J,{gutter:30,class:"testimonials-grid"},{default:a(()=>[(u(!0),S(K,null,F(I.value,r=>(u(),z(j,{xs:24,md:8,key:r.id},{default:a(()=>[s(W,{class:"testimonial-card"},{default:a(()=>[e("div",Ut,[e("p",qt,'"'+c(r.content)+'"',1),e("div",Ht,[e("div",Bt,c(r.name.charAt(0)),1),e("div",Kt,[e("h5",Ft,c(r.name),1),e("p",Jt,c(r.title),1)])]),e("div",Wt,[s(ie,{modelValue:r.rating,"onUpdate:modelValue":q=>r.rating=q,disabled:"","show-score":"","text-color":"#ff9900","score-template":"{value}"},null,8,["modelValue","onUpdate:modelValue"])])])]),_:2},1024)]),_:2},1024))),128))]),_:1})])]),e("section",Gt,[e("div",Qt,[l[17]||(l[17]=e("div",{class:"section-header"},[e("h2",{class:"section-title"},"快速开始"),e("p",{class:"section-subtitle"},"简单四步，即可开始使用AI教案工具")],-1)),s(J,{gutter:30,class:"steps-container"},{default:a(()=>[(u(!0),S(K,null,F(V.value,(r,q)=>(u(),z(j,{xs:24,sm:12,md:6,key:q},{default:a(()=>[s(W,{class:"step-card"},{default:a(()=>[e("div",Yt,c(q+1),1),e("h3",Xt,c(r.title),1),e("p",Zt,c(r.description),1),e("div",es,[q===0?(u(),z(D,{key:0,type:"primary",onClick:T,class:"step-register-btn"},{default:a(()=>l[15]||(l[15]=[v("立即注册")])),_:1,__:[15]})):q===3?(u(),z(D,{key:1,type:"success",onClick:U,class:"step-demo-btn"},{default:a(()=>l[16]||(l[16]=[v("体验演示")])),_:1,__:[16]})):ae("",!0)])]),_:2},1024)]),_:2},1024))),128))]),_:1})])]),e("section",ts,[e("div",ss,[l[18]||(l[18]=e("div",{class:"section-header"},[e("h2",{class:"section-title"},"常见问题"),e("p",{class:"section-subtitle"},"解答您关心的问题")],-1)),s(ce,{modelValue:f.value,"onUpdate:modelValue":l[1]||(l[1]=r=>f.value=r),class:"faq-collapse"},{default:a(()=>[(u(!0),S(K,null,F(H.value,r=>(u(),z(re,{key:r.id,title:r.question,name:r.id},{default:a(()=>[e("p",as,c(r.answer),1)]),_:2},1032,["title","name"]))),128))]),_:1},8,["modelValue"])])]),e("section",ls,[e("div",os,[s(J,{gutter:60},{default:a(()=>[s(j,{xs:24,md:12},{default:a(()=>[e("div",ns,[l[22]||(l[22]=e("h2",{class:"section-title"},"联系我们",-1)),l[23]||(l[23]=e("p",{class:"section-subtitle"},"我们很乐意为您提供帮助",-1)),e("div",is,[s(Z,{class:"contact-icon"},{default:a(()=>[s(x(We))]),_:1}),l[19]||(l[19]=e("div",{class:"contact-details"},[e("h4",null,"邮箱支持"),e("p",null,"support@aithub.com")],-1))]),e("div",rs,[s(Z,{class:"contact-icon"},{default:a(()=>[s(x(Ge))]),_:1}),l[20]||(l[20]=e("div",{class:"contact-details"},[e("h4",null,"电话咨询"),e("p",null,"400-888-8888")],-1))]),e("div",cs,[s(Z,{class:"contact-icon"},{default:a(()=>[s(x(Qe))]),_:1}),l[21]||(l[21]=e("div",{class:"contact-details"},[e("h4",null,"在线客服"),e("p",null,"工作日 9:00-18:00")],-1))])])]),_:1}),s(j,{xs:24,md:12},{default:a(()=>[s(W,{class:"contact-form-card"},{default:a(()=>[l[25]||(l[25]=e("h3",null,"快速咨询",-1)),s(de,{model:w.value,"label-position":"top"},{default:a(()=>[s(ee,{label:"姓名"},{default:a(()=>[s(B,{modelValue:w.value.name,"onUpdate:modelValue":l[2]||(l[2]=r=>w.value.name=r),placeholder:"请输入您的姓名"},null,8,["modelValue"])]),_:1}),s(ee,{label:"邮箱"},{default:a(()=>[s(B,{modelValue:w.value.email,"onUpdate:modelValue":l[3]||(l[3]=r=>w.value.email=r),placeholder:"请输入您的邮箱"},null,8,["modelValue"])]),_:1}),s(ee,{label:"消息"},{default:a(()=>[s(B,{modelValue:w.value.message,"onUpdate:modelValue":l[4]||(l[4]=r=>w.value.message=r),type:"textarea",rows:4,placeholder:"请描述您的问题或需求"},null,8,["modelValue"])]),_:1}),s(ee,null,{default:a(()=>[s(D,{type:"primary",onClick:Y,loading:n.value,class:"contact-submit-btn"},{default:a(()=>l[24]||(l[24]=[v(" 发送消息 ")])),_:1,__:[24]},8,["loading"])]),_:1})]),_:1},8,["model"])]),_:1,__:[25]})]),_:1})]),_:1})])]),e("footer",ds,[e("div",us,[s(J,{gutter:40},{default:a(()=>[s(j,{xs:24,sm:6},{default:a(()=>l[26]||(l[26]=[e("div",{class:"footer-section"},[e("div",{class:"footer-logo"},[e("div",{class:"logo-icon"},"AI"),e("span",null,"智能教案")]),e("p",{class:"footer-description"}," 专业的AI教案生成平台，让教学更智能、更高效。 ")],-1)])),_:1,__:[26]}),s(j,{xs:12,sm:6},{default:a(()=>l[27]||(l[27]=[e("div",{class:"footer-section"},[e("h4",null,"产品功能"),e("ul",null,[e("li",null,[e("a",{href:"#features"},"教案生成")]),e("li",null,[e("a",{href:"#features"},"PPT制作")]),e("li",null,[e("a",{href:"#features"},"模板管理")]),e("li",null,[e("a",{href:"#features"},"资源库")])])],-1)])),_:1,__:[27]}),s(j,{xs:12,sm:6},{default:a(()=>l[28]||(l[28]=[e("div",{class:"footer-section"},[e("h4",null,"帮助支持"),e("ul",null,[e("li",null,[e("a",{href:"#getting-started"},"使用指南")]),e("li",null,[e("a",{href:"#faq"},"常见问题")]),e("li",null,[e("a",{href:"#contact"},"技术支持")]),e("li",null,[e("a",{href:"#contact"},"联系我们")])])],-1)])),_:1,__:[28]}),s(j,{xs:24,sm:6},{default:a(()=>l[29]||(l[29]=[e("div",{class:"footer-section"},[e("h4",null,"关于我们"),e("ul",null,[e("li",null,[e("a",{href:"#about"},"公司介绍")]),e("li",null,[e("a",{href:"#about"},"团队成员")]),e("li",null,[e("a",{href:"#about"},"隐私政策")]),e("li",null,[e("a",{href:"#about"},"服务条款")])])],-1)])),_:1,__:[29]})]),_:1}),l[30]||(l[30]=e("div",{class:"footer-bottom"},[e("p",null,"© 2024 AI智能教案工具. 保留所有权利.")],-1))])]),s(ue,{right:40,bottom:40})])}}}),ms=ge(ps,[["__scopeId","data-v-a8536593"]]),vs="sk-b64d4e1a04e340bca704843eb776ab4e",fs="https://api.deepseek.com/v1/chat/completions";function gs(o,p){const m={1:{prompt:`请为《{lesson_title}》生成一份{grade}{subject}新授课教案：

课程信息：
- 年级：{grade}
- 学科：{subject}
- 课时：{class_hours}
- 教学内容：{content}

教学要求：
1. 教学目标要具体明确，符合学生认知特点
2. 重点难点要突出，并有相应的突破策略
3. 教学过程要层次清晰，活动设计有趣有效
4. 注重学生主体地位，体现师生互动
5. 板书设计要简洁明了，突出重点
6. 作业布置要有层次性和针对性

请确保教案：
- 结构完整，格式规范
- 内容实用，可操作性强
- 符合教学规律和学科特点
- 体现新课程理念

请按照以下格式生成教案：

# 《{lesson_title}》教案

## 一、教学目标
### 1. 知识与技能
### 2. 过程与方法
### 3. 情感态度价值观

## 二、教学重点
## 三、教学难点
## 四、教学准备
## 五、教学过程
### 导入新课
### 新知学习
### 巩固练习
### 课堂小结

## 六、板书设计
## 七、作业布置
## 八、教学反思`},2:{prompt:`请为《{lesson_title}》生成一份{grade}{subject}复习课教案：

复习信息：
- 年级：{grade}
- 学科：{subject}
- 复习范围：{review_scope}
- 复习类型：{review_type}
- 课时：{class_hours}

复习要求：
1. 突出重点知识，构建知识网络
2. 分析易错易混点，针对性突破
3. 设计典型例题，提升解题能力
4. 分层练习设计，照顾不同层次学生
5. 注重方法指导，提高学习效率

请确保教案：
- 知识体系清晰完整
- 重难点突出明确
- 练习设计有针对性
- 体现复习课特点

# 《{lesson_title}》复习课教案

## 一、复习目标
## 二、复习重点
## 三、复习难点
## 四、复习过程
### 知识回顾
### 系统梳理
### 重点突破
### 综合练习
### 总结提升

## 五、知识网络图
## 六、典型例题
## 七、易错点分析
## 八、练习设计`},3:{prompt:`请为《{lesson_title}》生成一份{grade}{subject}实验课教案：

实验信息：
- 年级：{grade}
- 学科：{subject}
- 实验类型：{experiment_type}
- 实验目的：{experiment_purpose}
- 课时：{class_hours}

实验要求：
1. 实验原理阐述清楚
2. 操作步骤详细具体
3. 安全注意事项全面
4. 数据记录表格合理
5. 结果分析科学准确
6. 培养科学探究精神

请确保教案：
- 安全措施到位
- 操作步骤清晰
- 注重过程体验
- 培养科学思维

# 《{lesson_title}》实验课教案

## 一、实验目标
## 二、实验原理
## 三、实验器材
## 四、实验过程
### 实验准备
### 实验操作
### 数据记录
### 结果分析
### 实验总结

## 五、实验步骤
## 六、数据记录表
## 七、注意事项
## 八、实验结论
## 九、思考问题`},4:{prompt:`请根据以下信息为小学语文课文《{lesson_title}》生成一份详细的教案：

课文信息：
- 年级：{grade}
- 课时安排：{class_hours}
- 学科：{subject}

教学要求：
1. 教学目标要符合小学生认知特点，包含知识技能、过程方法、情感态度三维目标
2. 重点难点要突出，符合年级特点
3. 教学过程要生动有趣，包含导入、初读、精读、拓展、小结五个环节
4. 每个环节要有具体的教学活动和预估时间
5. 板书设计要简洁明了，突出重点
6. 作业布置要有层次性，包含基础和拓展两类

请确保生成的教案：
- 语言简洁明了
- 活动设计符合小学生特点
- 时间分配合理
- 重点突出，难点分散
- 体现学生为主体的教学理念
- 格式规范，层次分明
- 内容实用，可操作性强

请按照以下格式生成教案：

# 《{lesson_title}》教案

## 一、教学目标
### 1. 知识与技能目标
### 2. 过程与方法目标  
### 3. 情感态度价值观目标

## 二、教学重点
## 三、教学难点
## 四、教学准备
### 1. 教师准备
### 2. 学生准备

## 五、教学过程
### 1. 导入新课（5分钟）
### 2. 初读感知（10分钟）
### 3. 精读理解（20分钟）
### 4. 拓展延伸（8分钟）
### 5. 课堂小结（2分钟）

## 六、板书设计
## 七、作业布置
### 1. 基础作业
### 2. 拓展作业

## 八、教学反思`},5:{prompt:`请为小学数学《{lesson_title}》生成一份计算教学教案：

教学信息：
- 年级：{grade}
- 课时：{class_hours}
- 学科：{subject}

教学要求：
1. 教学目标要体现数学核心素养，包含知识技能、数学思考、问题解决等方面
2. 重点要突出计算方法和算理
3. 难点要针对学生易错点设计突破策略
4. 教学过程要体现"复习铺垫→探索新知→巩固练习→课堂小结"的结构
5. 探索新知环节要设计具体的数学活动，体现算理推导过程
6. 练习设计要有梯度，从基础到提高再到拓展
7. 板书要体现计算方法和关键步骤

请确保教案：
- 符合小学生认知规律
- 体现数学思维过程
- 突出算理与算法结合
- 练习设计由易到难
- 格式规范，条理清晰

请按照以下格式生成教案：

# 《{lesson_title}》教案

## 一、教学内容
## 二、教学目标
### 1. 知识与技能
### 2. 数学思考
### 3. 问题解决
### 4. 情感态度

## 三、教学重点
## 四、教学难点
## 五、教学准备

## 六、教学过程
### 1. 复习铺垫（5分钟）
### 2. 探索新知（25分钟）
### 3. 巩固练习（8分钟）
### 4. 课堂小结（2分钟）

## 七、练习设计
### 1. 基础练习
### 2. 提高练习
### 3. 拓展练习

## 八、板书设计`},6:{prompt:`请为小学数学应用题《{lesson_title}》生成教案：

题目信息：
- 年级：{grade}
- 课时：{class_hours}
- 学科：{subject}

教学要求：
1. 重点培养学生的数学建模能力
2. 解题过程要体现分析→列式→解答→检验的完整步骤
3. 注重解题策略的渗透
4. 设计多种变式练习
5. 体现数学来源于生活，服务于生活

# 《{lesson_title}》教案

## 一、教学内容
## 二、教学目标
## 三、教学重难点
## 四、教学过程
### 复习导入
### 探究新知
### 解题训练
### 总结反思

## 五、解题策略
## 六、变式练习`},7:{prompt:`请为小学英语单词教学《{lesson_title}》生成教案：

教学信息：
- 年级：{grade}
- 课时：{class_hours}
- 学科：{subject}

教学要求：
1. 教学目标要包含语言知识、语言技能、学习策略、文化意识四个方面
2. 遵循听说领先、读写跟上的原则
3. 教学过程采用PPPPS模式（Presentation-Practice-Production-Summary）
4. 活动设计要生动有趣，符合小学生特点
5. 注重语音教学，包含单词发音指导
6. 创设真实语言情境，让学生在语境中学习
7. 体现任务型教学理念

请确保教案：
- 活动设计丰富多样
- 体现交际性和实用性
- 注重语言输入和输出平衡
- 评价方式多元化
- 格式规范，层次清晰

请按照以下格式生成教案：

# 《{lesson_title}》教案

## 一、Teaching Objectives
### 1. Language Knowledge
### 2. Language Skills
### 3. Learning Strategies
### 4. Cultural Awareness

## 二、Key Points
## 三、Difficult Points
## 四、Teaching Aids
## 五、Teaching Procedures
### Step 1: Warm-up (5 mins)
### Step 2: Presentation (15 mins)
### Step 3: Practice (15 mins)
### Step 4: Production (8 mins)
### Step 5: Summary (2 mins)

## 六、Blackboard Design
## 七、Homework`},8:{prompt:`请为初中语文古诗词《{lesson_title}》生成教案：

诗词信息：
- 年级：{grade}
- 课时：{class_hours}
- 学科：{subject}

教学要求：
1. 注重朗读指导，培养语感
2. 引导学生理解诗词意境
3. 分析诗词的艺术特色
4. 体会诗人的思想感情
5. 传承优秀传统文化

# 《{lesson_title}》教案

## 一、教学目标
### 朗读背诵
### 理解鉴赏
### 情感体验
### 文化传承

## 二、教学重点
## 三、教学难点
## 四、教学过程
### 导入新课
### 初读感知
### 品读鉴赏
### 诵读体验
### 拓展延伸

## 五、诗词赏析
## 六、写作背景
## 七、艺术特色`},9:{prompt:`请为初中物理实验《{lesson_title}》生成教案：

实验信息：
- 年级：{grade}
- 课时：{class_hours}
- 学科：{subject}

教学要求：
1. 体现科学探究过程，培养学生科学思维
2. 重点突出实验原理和实验方法
3. 难点要有具体的突破策略
4. 实验设计要科学合理，操作性强
5. 注重实验安全，强调规范操作
6. 数据处理要科学，结论要客观
7. 体现从生活走向物理，从物理走向社会的理念

请确保教案：
- 实验步骤清晰明了
- 安全提示全面到位
- 数据记录表格科学合理
- 体现物理学科特点
- 格式规范，层次分明

请按照以下格式生成教案：

# 《{lesson_title}》教案

## 一、教学目标
### 1. 知识与技能
### 2. 过程与方法
### 3. 情感态度与价值观

## 二、教学重点
## 三、教学难点
## 四、实验器材
## 五、教学过程
### 1. 创设情境，引入新课（5分钟）
### 2. 科学探究，获取新知（25分钟）
### 3. 实验操作，验证规律（12分钟）
### 4. 分析讨论，总结规律（3分钟）

## 六、实验步骤
## 七、数据记录表
## 八、注意事项
## 九、课堂小结`},10:{prompt:`请为高中化学概念教学《{lesson_title}》生成教案：

教学信息：
- 年级：{grade}
- 课时：{class_hours}
- 学科：{subject}

教学要求：
1. 目标要体现化学核心素养，包含宏观辨识、微观探析、变化观念、平衡思想、证据推理、模型认知等
2. 概念建构要体现从宏观到微观、从定性到定量的认知过程
3. 重点要突出概念的本质特征和应用
4. 难点要设计具体的突破策略
5. 教学方法要多样化，体现启发式教学
6. 要有概念图帮助学生理解概念之间的关系
7. 例题和练习要有针对性和层次性

请确保教案：
- 概念阐述准确科学
- 逻辑结构清晰
- 体现化学学科特点
- 注重思维能力培养
- 格式规范，条理清楚

请按照以下格式生成教案：

# 《{lesson_title}》教案

## 一、教学目标
### 1. 核心素养目标
### 2. 知识与技能目标
### 3. 过程与方法目标
### 4. 情感态度价值观目标

## 二、教学重点
## 三、教学难点
## 四、教学方法
## 五、教学过程
### 1. 情境导入（5分钟）
### 2. 概念建构（20分钟）
### 3. 概念理解（10分钟）
### 4. 概念应用（8分钟）
### 5. 反思总结（2分钟）

## 六、概念图
## 七、典型例题
## 八、课堂练习
## 九、课后作业`},11:{prompt:`请为高中历史专题《{lesson_title}》生成教案：

教学信息：
- 年级：{grade}
- 课时：{class_hours}
- 学科：{subject}

教学要求：
1. 体现历史学科核心素养，包含史料实证、历史解释、时空观念、唯物史观、家国情怀
2. 以史料为载体，培养学生史料实证能力
3. 重点突出历史事件的原因、过程、结果和影响
4. 难点要通过史料分析和问题探究来突破
5. 教学过程要体现论从史出、史论结合的原则
6. 问题设计要有层次性，引导学生深入思考
7. 注重培养学生的历史思维和批判精神

请确保教案：
- 史料选择典型、可信
- 问题设计有启发性
- 历史解释客观准确
- 体现价值观引领

# 《{lesson_title}》教案

## 一、教学目标
### 史料实证
### 历史解释
### 时空观念
### 唯物史观
### 家国情怀

## 二、教学重点
## 三、教学难点
## 四、史料准备
## 五、教学过程
### 情境导入，激发兴趣
### 史料研读，获取信息
### 问题探究，深入分析
### 历史解释，形成认识
### 拓展延伸，升华情感

## 六、史料分析
## 七、问题设计
## 八、课堂小结
## 九、课后思考`},12:{prompt:`请为高中英语阅读理解《{lesson_title}》生成教案：

文章信息：
- 年级：{grade}
- 课时：{class_hours}
- 学科：{subject}

教学要求：
1. 体现英语学科核心素养
2. 培养学生的阅读策略
3. 注重批判性思维培养
4. 提高语言运用能力
5. 增强文化意识

# 《{lesson_title}》教案

## 一、Teaching Objectives
### Language Competence
### Learning Ability
### Thinking Quality
### Cultural Awareness

## 二、Key Points & Difficulties
## 三、Teaching Procedures
### Step 1: Lead-in
### Step 2: Pre-reading
### Step 3: While-reading
### Step 4: Post-reading
### Step 5: Summary & Homework

## 四、Reading Strategies
## 五、Language Focus
## 六、Critical Thinking`}}[o];return m?m.prompt.replace(/{lesson_title}/g,p.title).replace(/{grade}/g,p.grade).replace(/{subject}/g,p.subject).replace(/{class_hours}/g,p.duration):`请为《${p.title}》生成一份${p.grade}${p.subject}教案，课时${p.duration}。要求内容详细、结构清晰、格式规范。`}async function*_s(o){var p,y,m,n,f;try{const w=await fetch("http://localhost:8080/api/ai/generate/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});if(!w.ok)throw new Error(`API请求失败: ${w.status} ${w.statusText}`);const C=(p=w.body)==null?void 0:p.getReader();if(!C)throw new Error("无法获取响应流");const G=new TextDecoder;let L="";for(;;){const{done:I,value:V}=await C.read();if(I){yield{content:"",done:!0};break}L+=G.decode(V,{stream:!0});const H=L.split(`
`);L=H.pop()||"";for(const R of H)if(R.startsWith("data: ")){const T=R.slice(6).trim();if(T==="[DONE]"){yield{content:"",done:!0};return}try{const E=JSON.parse(T).content||"";E&&(yield{content:E,done:!1})}catch(M){console.warn("解析SSE数据失败:",M,"Data:",T);continue}}}}catch(w){console.error("后端API调用失败:",w);const C=gs(o.templateId,o),G=o.additionalRequirements?`${C}

额外要求：${o.additionalRequirements}`:C;try{const L=await fetch(fs,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${vs}`},body:JSON.stringify({model:"deepseek-chat",messages:[{role:"system",content:"你是一位专业的教学设计专家，擅长制作高质量的教案。请根据用户提供的信息，生成结构清晰、内容详实、格式规范的教案。教案应该具有很强的实用性和可操作性。输出格式使用Markdown，确保层次分明、条理清楚。"},{role:"user",content:G}],stream:!0,temperature:.7,max_tokens:4e3})});if(!L.ok){const M=await L.text();throw new Error(`API请求失败: ${L.status} ${L.statusText}. ${M}`)}const I=(y=L.body)==null?void 0:y.getReader();if(!I)throw new Error("无法获取响应流");const V=new TextDecoder;let H="",R=0;const T=3;for(;;)try{const{done:M,value:E}=await I.read();if(M){yield{content:"",done:!0};break}H+=V.decode(E,{stream:!0});const Q=H.split(`
`);H=Q.pop()||"";for(const $ of Q)if($.startsWith("data: ")){const U=$.slice(6).trim();if(U==="[DONE]"){yield{content:"",done:!0};return}try{const X=((f=(n=(m=JSON.parse(U).choices)==null?void 0:m[0])==null?void 0:n.delta)==null?void 0:f.content)||"";X&&(yield{content:X,done:!1})}catch(Y){console.warn("解析SSE数据失败:",Y,"Data:",U);continue}}R=0}catch(M){if(console.error("读取流数据失败:",M),R++,R>=T)throw new Error(`读取流数据失败，已重试${T}次`);await new Promise(E=>setTimeout(E,1e3))}}catch(L){console.error("生成教案流失败:",L),yield{content:"",done:!0,error:L instanceof Error?L.message:"生成过程中发生未知错误"}}}}function bs(o){if(!o||typeof o!="string")return"";o.length>5e4&&(o=o.substring(0,5e4)+"...");try{return o=o.replace(/^# (.*$)/gm,"<h1>$1</h1>"),o=o.replace(/^## (.*$)/gm,"<h2>$1</h2>"),o=o.replace(/^### (.*$)/gm,"<h3>$1</h3>"),o=o.replace(/^#### (.*$)/gm,"<h4>$1</h4>"),o=o.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>"),o=o.replace(/\*(.*?)\*/g,"<em>$1</em>"),o=o.replace(/^(\d+)\. (.*)$/gm,"<li>$2</li>"),o=o.replace(/^- (.*)$/gm,"<li>$1</li>"),o=o.replace(/\n\n/g,"</p><p>"),o=o.replace(/\n/g,"<br>"),o=`<p>${o}</p>`,o=o.replace(/<p><\/p>/g,""),o=o.replace(/<p><br><\/p>/g,""),o=o.replace(/<p>\s*<\/p>/g,""),o=o.replace(/(<br>\s*){3,}/g,"<br><br>"),o}catch(p){return console.error("Error formatting lesson content:",p),o}}function hs(o,p,y){const m={templateId:o.templateId,title:o.title,grade:o.grade,subject:o.subject,duration:o.duration,content:p,generationTime:y,timestamp:new Date().toISOString()},n=JSON.parse(localStorage.getItem("lessonRecords")||"[]");n.unshift(m),n.length>50&&n.splice(50),localStorage.setItem("lessonRecords",JSON.stringify(n))}const ys="http://localhost:8080/api";async function $e(o,p={}){const y={headers:{"Content-Type":"application/json",...p.headers},...p};try{const m=await fetch(`${ys}${o}`,y);if(!m.ok)throw new Error(`HTTP error! status: ${m.status}`);const n=await m.json();if(n&&typeof n=="object"){if("code"in n&&"data"in n&&"message"in n)return{success:n.code===200,data:n.data,message:n.message};if("code"in n&&"data"in n&&"message"in n)return{success:n.code===200,data:n.data,message:n.message}}return n}catch(m){throw console.error("API request failed:",m),m}}function ws(o){const p=new URLSearchParams;o!=null&&o.subject&&p.append("subject",o.subject),o!=null&&o.grade&&p.append("grade",o.grade),o!=null&&o.templateType&&p.append("templateType",o.templateType);const y=p.toString(),m=y?`/ai/templates?${y}`:"/ai/templates";return $e(m)}function Ss(o){return $e(`/ai/templates/${o}`)}const Ts={class:"ai-generator generator-page"},ks={class:"navbar"},$s={class:"navbar-content"},js={class:"auth-buttons"},Ps={class:"generator-main"},Cs={class:"left-panel"},Is={class:"panel-header"},xs={class:"template-filters"},Ls={class:"filter-item"},Ds={class:"filter-item"},As={class:"template-list"},Os={key:0,class:"template-loading"},Vs={key:1,class:"template-loading"},Es={key:2,class:"template-list-scroll"},zs=["onClick"],Ns={class:"card-icon-mini"},Rs={class:"card-content-mini"},Ms=["title"],Us={class:"card-tags-mini"},qs=["title"],Hs={class:"card-stats-mini"},Bs={class:"stat-mini"},Ks={class:"stat-mini"},Fs={class:"center-panel"},Js={class:"panel-header"},Ws={class:"generation-form"},Gs={class:"generation-actions"},Qs={class:"chat-history"},Ys={class:"chat-header"},Xs={class:"chat-actions"},Zs={class:"page-info"},ea={class:"chat-messages"},ta={class:"message-avatar"},sa={class:"message-content"},aa={class:"message-text"},la={class:"message-time"},oa={key:0,class:"empty-state"},na={class:"right-panel"},ia={class:"panel-header"},ra={class:"editor-actions"},ca={class:"editor-toolbar"},da={class:"editor-container"},ua={key:0,class:"editor-placeholder"},pa=["innerHTML"],ma={class:"document-stats"},va={class:"stats-item"},fa={class:"stats-value"},ga={class:"stats-item"},_a={class:"stats-value"},ba={class:"stats-item"},ha={class:"stats-value"},ya={key:0,class:"template-detail-compact"},wa={class:"detail-header-compact"},Sa={class:"detail-tags-compact"},Ta={class:"detail-section-compact"},ka={class:"detail-desc"},$a={class:"detail-section-compact"},ja={class:"stats-row"},Pa={class:"stat-item-compact"},Ca={class:"stat-item-compact"},Ia={class:"stat-item-compact"},xa={key:0,class:"detail-section-compact"},La={class:"tags-compact"},Da={class:"detail-section-compact"},Aa={class:"prompt-preview"},Oa={class:"dialog-footer-compact"},Va=Se({__name:"Generator",setup(o){const p=Ne(),y=ke(),m=h(""),n=h(""),f=h(null),w=h(!1),C=h(""),G=h("14px"),L=h(""),I=h([]),V=h(1),H=h(3),R=h(null),T=h({title:"",grade:"",duration:"40分钟",keyPoints:"",studentLevel:"",specialRequirements:""}),M=h(["语文","数学","英语","物理","化学","生物","历史","地理","政治","科学","通用","理科","道法","音乐","美术","体育","信息技术","综合实践"]);h(["小学","初中","高中"]);const E=h([]),Q=h(!1),$=h(null),U=h(!1),Y=se(()=>E.value.filter(g=>{const t=!m.value||g.subject===m.value,_=!n.value||g.gradeLevel===n.value;return t&&_})),X=se(()=>Y.value.length>0?Y.value:E.value),P=se(()=>C.value?C.value.replace(/<[^>]*>/g,"").length:0),l=se(()=>C.value?C.value.split(/\n\s*\n/).filter(g=>g.trim()).length:0),D=se(()=>Math.max(1,Math.ceil(I.value.length/H.value))),B=se(()=>{const g=(V.value-1)*H.value,t=g+H.value;return I.value.slice(g,t)}),W=g=>{f.value=g,b.success(`已选择模板：${g.templateName}`)},j=async g=>{try{const t=await Ss(g.id);t.success?($.value=t.data,U.value=!0):b.error("获取模板详情失败")}catch(t){console.error("获取模板详情失败:",t),$.value=g,U.value=!0}},J=async()=>{var g,t,_;try{Q.value=!0;const d=await ws({subject:m.value,grade:n.value});d.success?E.value=d.data:b.error("获取模板列表失败")}catch(d){console.error("获取模板列表失败:",d),b.error("获取模板列表失败，请检查网络连接"),(((g=d.message)==null?void 0:g.includes("Network"))||((t=d.message)==null?void 0:t.includes("timeout"))||((_=d.message)==null?void 0:_.includes("fetch")))&&(E.value=Z(),b.warning({message:"网络连接失败，当前使用演示数据",duration:3e3,showClose:!0}));const N={timestamp:new Date().toISOString(),type:errorType,message:d.message,url:window.location.href,userAgent:navigator.userAgent};try{const O=JSON.parse(localStorage.getItem("errorLogs")||"[]");O.unshift(N),O.length>10&&O.splice(10),localStorage.setItem("errorLogs",JSON.stringify(O))}catch(O){console.warn("无法保存错误日志到本地存储:",O)}}finally{Q.value=!1}},Z=()=>[{id:1,templateName:"小学语文课文阅读教案",subject:"语文",gradeLevel:"小学",templateType:"课文阅读",templateContent:"",aiPrompt:"请根据以下信息为小学语文课文生成一份详细的教案...",description:"适用于小学语文课文阅读教学的标准教案模板，包含完整的教学环节设计",tags:"小学,语文,课文阅读,教案模板,标准格式",usageCount:1250,rating:4.8,isActive:1,createTime:new Date().toISOString(),updateTime:new Date().toISOString()},{id:2,templateName:"小学数学计算教学教案",subject:"数学",gradeLevel:"小学",templateType:"计算教学",templateContent:"",aiPrompt:"请为小学数学计算教学生成一份详细的教案...",description:"适用于小学数学计算教学的教案模板，注重算理推导和思维培养",tags:"小学,数学,计算教学,算理,思维培养",usageCount:980,rating:4.7,isActive:1,createTime:new Date().toISOString(),updateTime:new Date().toISOString()},{id:3,templateName:"初中物理实验教学教案",subject:"物理",gradeLevel:"初中",templateType:"实验教学",templateContent:"",aiPrompt:"请为初中物理实验教学生成一份详细的教案...",description:"适用于初中物理实验教学的教案模板，注重科学探究过程",tags:"初中,物理,实验教学,科学探究,安全操作",usageCount:756,rating:4.9,isActive:1,createTime:new Date().toISOString(),updateTime:new Date().toISOString()},{id:4,templateName:"高中化学概念教学教案",subject:"化学",gradeLevel:"高中",templateType:"概念教学",templateContent:"",aiPrompt:"请为高中化学概念教学生成一份详细的教案...",description:"适用于高中化学概念教学的教案模板，注重核心素养培养",tags:"高中,化学,概念教学,核心素养,思维培养",usageCount:623,rating:4.6,isActive:1,createTime:new Date().toISOString(),updateTime:new Date().toISOString()},{id:5,templateName:"小学英语单词教学教案",subject:"英语",gradeLevel:"小学",templateType:"单词教学",templateContent:"",aiPrompt:"请为小学英语单词教学生成一份详细的教案...",description:"适用于小学英语单词教学的教案模板，遵循PPPPS教学模式",tags:"小学,英语,单词教学,PPPPS,交际教学",usageCount:890,rating:4.5,isActive:1,createTime:new Date().toISOString(),updateTime:new Date().toISOString()},{id:6,templateName:"通用新授课教案模板",subject:"通用",gradeLevel:"全学段",templateType:"新授课",templateContent:"",aiPrompt:"请生成一份新授课教案...",description:"适用于各学科新授课的通用教案模板，结构完整，易于使用",tags:"通用,新授课,教案模板,全学段,基础模板",usageCount:1563,rating:4.8,isActive:1,createTime:new Date().toISOString(),updateTime:new Date().toISOString()},{id:7,templateName:"通用复习课教案模板",subject:"通用",gradeLevel:"全学段",templateType:"复习课",templateContent:"",aiPrompt:"请生成一份复习课教案...",description:"适用于各学科复习课的通用教案模板，注重知识梳理和能力提升",tags:"通用,复习课,知识梳理,查漏补缺,考试复习",usageCount:1123,rating:4.6,isActive:1,createTime:new Date().toISOString(),updateTime:new Date().toISOString()},{id:8,templateName:"初中语文古诗词教学教案",subject:"语文",gradeLevel:"初中",templateType:"古诗词教学",templateContent:"",aiPrompt:"请为初中语文古诗词教学生成一份详细的教案...",description:"初中语文古诗词教学专用模板，注重朗读、理解、鉴赏、体验",tags:"初中,语文,古诗词,鉴赏,朗读,传统文化",usageCount:567,rating:4.7,isActive:1,createTime:new Date().toISOString(),updateTime:new Date().toISOString()},{id:9,templateName:"高中英语阅读理解教案",subject:"英语",gradeLevel:"高中",templateType:"阅读理解",templateContent:"",aiPrompt:"请为高中英语阅读理解教学生成一份详细的教案...",description:"高中英语阅读理解专用教案模板，注重核心素养和思维品质培养",tags:"高中,英语,阅读理解,核心素养,批判思维",usageCount:445,rating:4.8,isActive:1,createTime:new Date().toISOString(),updateTime:new Date().toISOString()},{id:5,templateName:"初中物理实验教学教案",subject:"物理",gradeLevel:"初中",templateType:"实验课",templateContent:"",aiPrompt:"请生成一份初中物理实验教学教案...",description:"适用于初中物理实验教学的教案模板，注重科学探究过程",tags:"物理,初中,实验",usageCount:756,rating:4.9,isActive:1,createTime:new Date().toISOString(),updateTime:new Date().toISOString()},{id:6,templateName:"高中化学概念教学教案",subject:"化学",gradeLevel:"高中",templateType:"概念课",templateContent:"",aiPrompt:"请生成一份高中化学概念教学教案...",description:"适用于高中化学概念教学的教案模板，注重核心素养培养",tags:"化学,高中,概念",usageCount:623,rating:4.6,isActive:1,createTime:new Date().toISOString(),updateTime:new Date().toISOString()},{id:7,templateName:"通用新授课教案模板",subject:"通用",gradeLevel:"全学段",templateType:"新授课",templateContent:"",aiPrompt:"请为新授课生成一份教案...",description:"适用于各学科新授课的通用教案模板，结构完整，易于使用",tags:"通用,新授课,教案模板,全学段,基础模板",usageCount:1563,rating:4.8,isActive:1,createTime:new Date().toISOString(),updateTime:new Date().toISOString()},{id:8,templateName:"通用复习课教案模板",subject:"通用",gradeLevel:"全学段",templateType:"复习课",templateContent:"",aiPrompt:"请为复习课生成一份教案...",description:"适用于各学科复习课的通用教案模板，注重知识梳理和能力提升",tags:"通用,复习课,知识梳理,查漏补缺,考试复习",usageCount:1123,rating:4.6,isActive:1,createTime:new Date().toISOString(),updateTime:new Date().toISOString()},{id:9,templateName:"初中语文古诗词教学教案",subject:"语文",gradeLevel:"初中",templateType:"古诗词教学",templateContent:"",aiPrompt:"请为初中语文古诗词生成教案...",description:"初中语文古诗词教学专用模板，注重朗读、理解、鉴赏、体验",tags:"初中,语文,古诗词,鉴赏,朗读,传统文化",usageCount:567,rating:4.7,isActive:1,createTime:new Date().toISOString(),updateTime:new Date().toISOString()},{id:10,templateName:"高中英语阅读理解教案",subject:"英语",gradeLevel:"高中",templateType:"阅读理解",templateContent:"",aiPrompt:"请为高中英语阅读理解生成教案...",description:"高中英语阅读理解专用教案模板，注重核心素养和思维品质培养",tags:"高中,英语,阅读理解,核心素养,批判思维",usageCount:445,rating:4.8,isActive:1,createTime:new Date().toISOString(),updateTime:new Date().toISOString()}],ie=async()=>{if(!f.value){b.warning("请先选择一个教案模板");return}if(!T.value.title){b.warning("请输入课程标题");return}w.value=!0;const g=Date.now();I.value.push({type:"user",content:`生成《${T.value.title}》的教案`,time:new Date().toLocaleTimeString()}),C.value="";try{const t={templateId:f.value.id,title:T.value.title,grade:T.value.grade,subject:m.value,duration:T.value.duration,additionalRequirements:T.value.specialRequirements};let _="";for await(const A of _s(t)){if(A.error)throw new Error(A.error);if(A.content&&(_+=A.content,C.value=bs(_),await Ue(),R.value&&(R.value.scrollTop=R.value.scrollHeight)),A.done)break}const d=(Date.now()-g)/1e3;hs(t,_,d),I.value.push({type:"ai",content:`教案生成完成！用时 ${d.toFixed(1)} 秒。您可以在右侧编辑器中查看和修改内容。`,time:new Date().toLocaleTimeString()}),b.success("教案生成成功！")}catch(t){console.error("生成失败:",t),b.error(`生成失败：${t instanceof Error?t.message:"未知错误"}`),I.value.push({type:"ai",content:"抱歉，生成过程中出现错误，请检查网络连接后重试。",time:new Date().toLocaleTimeString()})}finally{w.value=!1}},re=()=>{J(),b.info("模板列表已刷新")},ce=()=>{I.value=[],V.value=1,b.success("对话记录已清空")},ee=()=>{V.value<D.value&&V.value++},de=()=>{V.value>1&&V.value--},ue=()=>{b.info("登录功能开发中...")},r=()=>{b.info("注册功能开发中...")},q=()=>{y.push({name:"home"})},pe=()=>{b.info("预览功能开发中...")},me=()=>{b.info("导出功能开发中...")},je=async()=>{try{await lt.confirm("确定要清空编辑器内容吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}),C.value="",b.success("编辑器已清空")}catch{}},Pe=async g=>{try{if(navigator.clipboard)await navigator.clipboard.writeText(g),b.success("AI提示词已复制到剪贴板");else{const t=document.createElement("textarea");t.value=g,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),b.success("AI提示词已复制到剪贴板")}}catch(t){console.error("复制失败:",t),b.error("复制失败，请手动复制")}},ve=g=>{document.execCommand(g,!1,void 0)},Ce=g=>{const t=g.target;C.value=t.innerHTML};return Te(async()=>{await J();const{content:g,subject:t,grade:_,templateId:d}=p.query;if(g&&(T.value.title=g,I.value.push({type:"user",content:`我想生成《${g}》的教案`,time:new Date().toLocaleTimeString()}),I.value.push({type:"ai",content:"已为您识别教学内容并预选模板，请完善生成参数后点击生成按钮。",time:new Date().toLocaleTimeString()})),t&&(m.value=t),_){n.value=_;const A={小学:"三年级",初中:"七年级",高中:"高一"};T.value.grade=A[_]||""}if(d){const A=parseInt(d),N=E.value.find(O=>O.id===A);N&&(f.value=N)}}),(g,t)=>{const _=k("el-button"),d=k("el-option"),A=k("el-select"),N=k("el-icon"),O=k("el-tag"),Ie=k("InfoFilled"),xe=k("el-input"),oe=k("el-form-item"),ne=k("el-col"),_e=k("el-row"),Le=k("el-form"),De=k("el-button-group"),Ae=k("el-dialog");return u(),S("div",Ts,[e("nav",ks,[e("div",$s,[t[20]||(t[20]=e("div",{class:"logo"},[e("div",{class:"logo-icon"},"AI"),e("span",null,"智能教案")],-1)),e("ul",{class:"nav-links"},[e("li",null,[e("a",{onClick:q,class:"nav-link"},"首页")]),t[14]||(t[14]=e("li",null,[e("a",{href:"#",class:"nav-link active"},"AI生成")],-1)),t[15]||(t[15]=e("li",null,[e("a",{href:"#",class:"nav-link"},"功能介绍")],-1)),t[16]||(t[16]=e("li",null,[e("a",{href:"#",class:"nav-link"},"使用指南")],-1)),t[17]||(t[17]=e("li",null,[e("a",{href:"#",class:"nav-link"},"关于我们")],-1))]),e("div",js,[s(_,{onClick:ue,class:"nav-auth-btn"},{default:a(()=>t[18]||(t[18]=[v("登录")])),_:1,__:[18]}),s(_,{type:"primary",onClick:r,class:"nav-auth-btn nav-auth-btn-primary"},{default:a(()=>t[19]||(t[19]=[v("注册")])),_:1,__:[19]})])])]),e("div",Ps,[e("div",Cs,[e("div",Is,[t[22]||(t[22]=e("h3",null,"教案模板",-1)),s(_,{size:"small",text:"",onClick:re,icon:x(Ye),loading:Q.value},{default:a(()=>t[21]||(t[21]=[v("刷新")])),_:1,__:[21]},8,["icon","loading"])]),e("div",xs,[e("div",Ls,[t[23]||(t[23]=e("label",null,"学科筛选",-1)),s(A,{modelValue:m.value,"onUpdate:modelValue":t[0]||(t[0]=i=>m.value=i),placeholder:"选择学科",size:"small",style:{width:"100%"},clearable:"",onChange:J},{default:a(()=>[s(d,{label:"全部",value:""}),(u(!0),S(K,null,F(M.value,i=>(u(),z(d,{key:i,label:i,value:i},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),e("div",Ds,[t[24]||(t[24]=e("label",null,"年级筛选",-1)),s(A,{modelValue:n.value,"onUpdate:modelValue":t[1]||(t[1]=i=>n.value=i),placeholder:"选择年级",size:"small",style:{width:"100%"},clearable:"",onChange:J},{default:a(()=>[s(d,{label:"全部",value:""}),s(d,{label:"小学",value:"小学"}),s(d,{label:"初中",value:"初中"}),s(d,{label:"高中",value:"高中"}),s(d,{label:"全学段",value:"全学段"})]),_:1},8,["modelValue"])])]),e("div",As,[Q.value?(u(),S("div",Os,[s(N,{class:"is-loading"},{default:a(()=>[s(x(Ze))]),_:1}),t[25]||(t[25]=e("span",{style:{"margin-left":"8px"}},"加载中...",-1))])):X.value.length===0?(u(),S("div",Vs,[s(N,null,{default:a(()=>[s(x(we))]),_:1}),t[26]||(t[26]=e("p",null,"暂无模板数据",-1)),t[27]||(t[27]=e("p",{style:{"font-size":"12px",color:"#909399","margin-top":"8px"}}," 请检查网络连接或刷新页面 ",-1))])):(u(),S("div",Es,[(u(!0),S(K,null,F(X.value,i=>{var te;return u(),S("div",{key:i.id,class:fe(["template-card-compact",{active:((te=f.value)==null?void 0:te.id)===i.id}]),onClick:Oe=>W(i)},[e("div",Ns,[s(N,{size:16},{default:a(()=>[s(x(we))]),_:1})]),e("div",Rs,[e("h4",{class:"card-title-mini",title:i.templateName},c(i.templateName),9,Ms),e("div",Us,[s(O,{size:"small",type:"primary",effect:"plain"},{default:a(()=>[v(c(i.subject),1)]),_:2},1024),s(O,{size:"small",type:"success",effect:"plain"},{default:a(()=>[v(c(i.gradeLevel),1)]),_:2},1024)]),e("p",{class:"card-desc-mini",title:i.description},c(i.description),9,qs),e("div",Hs,[e("span",Bs,[s(N,{size:"12"},{default:a(()=>[s(x(ye))]),_:1}),e("span",null,c(i.usageCount),1)]),e("span",Ks,[s(N,{size:"12"},{default:a(()=>[s(x(et))]),_:1}),e("span",null,c(i.rating),1)]),s(_,{size:"small",text:"",onClick:Me(Oe=>j(i),["stop"]),class:"detail-btn-mini"},{default:a(()=>[s(N,{size:"12"},{default:a(()=>[s(Ie)]),_:1}),t[28]||(t[28]=v(" 详情 "))]),_:2,__:[28]},1032,["onClick"])])])],10,zs)}),128))]))])]),e("div",Fs,[e("div",Js,[t[29]||(t[29]=e("h3",null,"AI智能生成",-1)),f.value?(u(),z(O,{key:0,type:"success",size:"small"},{default:a(()=>[v(c(f.value.templateName),1)]),_:1})):ae("",!0)]),e("div",Ws,[s(Le,{model:T.value,"label-position":"top",class:"compact-form"},{default:a(()=>[s(_e,{gutter:16},{default:a(()=>[s(ne,{span:24},{default:a(()=>[s(oe,{label:"课程标题",class:"form-item-compact"},{default:a(()=>[s(xe,{modelValue:T.value.title,"onUpdate:modelValue":t[2]||(t[2]=i=>T.value.title=i),placeholder:"请输入课程标题，如：分数的加减法",size:"default"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),s(_e,{gutter:16},{default:a(()=>[s(ne,{span:8},{default:a(()=>[s(oe,{label:"年级",class:"form-item-compact"},{default:a(()=>[s(A,{modelValue:T.value.grade,"onUpdate:modelValue":t[3]||(t[3]=i=>T.value.grade=i),placeholder:"选择年级",size:"default",style:{width:"100%"}},{default:a(()=>[s(d,{label:"一年级",value:"一年级"}),s(d,{label:"二年级",value:"二年级"}),s(d,{label:"三年级",value:"三年级"}),s(d,{label:"四年级",value:"四年级"}),s(d,{label:"五年级",value:"五年级"}),s(d,{label:"六年级",value:"六年级"}),s(d,{label:"七年级",value:"七年级"}),s(d,{label:"八年级",value:"八年级"}),s(d,{label:"九年级",value:"九年级"}),s(d,{label:"高一",value:"高一"}),s(d,{label:"高二",value:"高二"}),s(d,{label:"高三",value:"高三"})]),_:1},8,["modelValue"])]),_:1})]),_:1}),s(ne,{span:8},{default:a(()=>[s(oe,{label:"科目",class:"form-item-compact"},{default:a(()=>[s(A,{modelValue:m.value,"onUpdate:modelValue":t[4]||(t[4]=i=>m.value=i),placeholder:"选择科目",size:"default",style:{width:"100%"}},{default:a(()=>[(u(!0),S(K,null,F(M.value,i=>(u(),z(d,{key:i,label:i,value:i},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),s(ne,{span:8},{default:a(()=>[s(oe,{label:"课时",class:"form-item-compact"},{default:a(()=>[s(A,{modelValue:T.value.duration,"onUpdate:modelValue":t[5]||(t[5]=i=>T.value.duration=i),size:"default",style:{width:"100%"}},{default:a(()=>[s(d,{label:"40分钟",value:"40分钟"}),s(d,{label:"45分钟",value:"45分钟"}),s(d,{label:"50分钟",value:"50分钟"}),s(d,{label:"90分钟",value:"90分钟"})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),e("div",Gs,[s(_,{type:"primary",size:"large",onClick:ie,loading:w.value,disabled:!f.value||!T.value.title,style:{width:"100%"},class:"generate-btn"},{default:a(()=>[s(N,null,{default:a(()=>[s(x(tt))]),_:1}),v(" "+c(w.value?"AI正在生成中...":"开始生成教案"),1)]),_:1},8,["loading","disabled"])])]),_:1},8,["model"])]),e("div",Qs,[e("div",Ys,[e("span",null,"生成记录 ("+c(I.value.length)+"条)",1),e("div",Xs,[s(_,{size:"small",text:"",onClick:de,disabled:V.value===1},{default:a(()=>t[30]||(t[30]=[v("上一页")])),_:1,__:[30]},8,["disabled"]),e("span",Zs,c(V.value)+"/"+c(D.value),1),s(_,{size:"small",text:"",onClick:ee,disabled:V.value===D.value},{default:a(()=>t[31]||(t[31]=[v("下一页")])),_:1,__:[31]},8,["disabled"]),s(_,{size:"small",text:"",onClick:ce,icon:x(he)},{default:a(()=>t[32]||(t[32]=[v("清空")])),_:1,__:[32]},8,["icon"])])]),e("div",ea,[(u(!0),S(K,null,F(B.value,(i,te)=>(u(),S("div",{key:te,class:fe(["chat-message",i.type])},[e("div",ta,[i.type==="user"?(u(),z(N,{key:0},{default:a(()=>[s(x(st))]),_:1})):(u(),z(N,{key:1},{default:a(()=>[s(x(at))]),_:1}))]),e("div",sa,[e("div",aa,c(i.content),1),e("div",la,c(i.time),1)])],2))),128)),I.value.length===0?(u(),S("div",oa,t[33]||(t[33]=[e("p",null,"暂无生成记录",-1),e("p",{class:"empty-hint"},"请先选择模板并填写参数开始生成",-1)]))):ae("",!0)])])]),e("div",na,[e("div",ia,[t[37]||(t[37]=e("h3",null,"教案编辑器",-1)),e("div",ra,[s(_,{size:"small",text:"",onClick:pe,icon:x(ye)},{default:a(()=>t[34]||(t[34]=[v("预览")])),_:1,__:[34]},8,["icon"]),s(_,{size:"small",text:"",onClick:me,icon:x(Xe)},{default:a(()=>t[35]||(t[35]=[v("导出")])),_:1,__:[35]},8,["icon"]),s(_,{size:"small",text:"",onClick:je,icon:x(he)},{default:a(()=>t[36]||(t[36]=[v("清空")])),_:1,__:[36]},8,["icon"])])]),e("div",ca,[s(De,{size:"small"},{default:a(()=>[s(_,{onClick:t[6]||(t[6]=i=>ve("bold"))},{default:a(()=>t[38]||(t[38]=[v("粗体")])),_:1,__:[38]}),s(_,{onClick:t[7]||(t[7]=i=>ve("italic"))},{default:a(()=>t[39]||(t[39]=[v("斜体")])),_:1,__:[39]}),s(_,{onClick:t[8]||(t[8]=i=>ve("underline"))},{default:a(()=>t[40]||(t[40]=[v("下划线")])),_:1,__:[40]})]),_:1}),s(A,{modelValue:G.value,"onUpdate:modelValue":t[9]||(t[9]=i=>G.value=i),size:"small",style:{width:"100px","margin-left":"8px"}},{default:a(()=>[s(d,{label:"12px",value:"12px"}),s(d,{label:"14px",value:"14px"}),s(d,{label:"16px",value:"16px"}),s(d,{label:"18px",value:"18px"}),s(d,{label:"20px",value:"20px"})]),_:1},8,["modelValue"])]),e("div",da,[e("div",{ref_key:"editor",ref:R,class:"rich-editor",contenteditable:"true",onInput:Ce,style:Re({fontSize:G.value}),spellcheck:"false"},[C.value?(u(),S("div",{key:1,innerHTML:C.value},null,8,pa)):(u(),S("div",ua," AI生成的教案内容将显示在这里，您可以直接编辑修改... "))],36)]),e("div",ma,[e("div",va,[t[41]||(t[41]=e("span",{class:"stats-label"},"字数：",-1)),e("span",fa,c(P.value),1)]),e("div",ga,[t[42]||(t[42]=e("span",{class:"stats-label"},"段落：",-1)),e("span",_a,c(l.value),1)]),e("div",ba,[t[43]||(t[43]=e("span",{class:"stats-label"},"最后保存：",-1)),e("span",ha,c(L.value||"未保存"),1)])])])]),s(Ae,{modelValue:U.value,"onUpdate:modelValue":t[13]||(t[13]=i=>U.value=i),title:"模板详情",width:"500px","before-close":()=>U.value=!1,class:"compact-dialog"},{footer:a(()=>{var i;return[e("div",Oa,[s(_,{size:"small",onClick:t[11]||(t[11]=te=>U.value=!1)},{default:a(()=>t[52]||(t[52]=[v("取消")])),_:1,__:[52]}),$.value&&((i=f.value)==null?void 0:i.id)!==$.value.id?(u(),z(_,{key:0,type:"primary",size:"small",onClick:t[12]||(t[12]=te=>{W($.value),U.value=!1})},{default:a(()=>t[53]||(t[53]=[v(" 使用模板 ")])),_:1,__:[53]})):ae("",!0)])]}),default:a(()=>[$.value?(u(),S("div",ya,[e("div",wa,[e("h4",null,c($.value.templateName),1),e("div",Sa,[s(O,{size:"small",type:"primary",effect:"plain"},{default:a(()=>[v(c($.value.subject),1)]),_:1}),s(O,{size:"small",type:"success",effect:"plain"},{default:a(()=>[v(c($.value.gradeLevel),1)]),_:1}),s(O,{size:"small",type:"info",effect:"plain"},{default:a(()=>[v(c($.value.templateType),1)]),_:1})])]),e("div",Ta,[t[44]||(t[44]=e("div",{class:"section-title"},"描述",-1)),e("p",ka,c($.value.description),1)]),e("div",$a,[t[48]||(t[48]=e("div",{class:"section-title"},"使用统计",-1)),e("div",ja,[e("span",Pa,[e("strong",null,c($.value.usageCount),1),t[45]||(t[45]=v(" 次使用 "))]),e("span",Ca,[e("strong",null,c($.value.rating),1),t[46]||(t[46]=v(" 分 "))]),e("span",Ia,[e("strong",null,c(new Date($.value.createTime).toLocaleDateString()),1),t[47]||(t[47]=v(" 创建 "))])])]),$.value.tags?(u(),S("div",xa,[t[49]||(t[49]=e("div",{class:"section-title"},"标签",-1)),e("div",La,[(u(!0),S(K,null,F($.value.tags.split(","),i=>(u(),z(O,{key:i,size:"small",type:"warning",effect:"light"},{default:a(()=>[v(c(i.trim()),1)]),_:2},1024))),128))])])):ae("",!0),e("div",Da,[t[51]||(t[51]=e("div",{class:"section-title"},"AI提示词",-1)),e("div",Aa,[v(c($.value.aiPrompt.substring(0,100))+"... ",1),s(_,{size:"small",text:"",type:"primary",onClick:t[10]||(t[10]=i=>Pe($.value.aiPrompt))},{default:a(()=>t[50]||(t[50]=[v(" 复制 ")])),_:1,__:[50]})])])])):ae("",!0)]),_:1},8,["modelValue","before-close"])])}}}),Ea=ge(Va,[["__scopeId","data-v-2cda5fd7"]]),za=qe({history:He(),routes:[{path:"/",name:"home",component:ms,meta:{transition:"slide-left"}},{path:"/generator",name:"generator",component:Ea,meta:{transition:"slide-right"}}],scrollBehavior(o,p,y){return y||{top:0}}}),le=Be(dt);le.use(Ke());le.use(za);le.use(ot);for(const[o,p]of Object.entries(nt))le.component(o,p);le.mount("#app");
