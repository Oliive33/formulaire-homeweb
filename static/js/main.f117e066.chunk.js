(this["webpackJsonpform-react"]=this["webpackJsonpform-react"]||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),c=n(4),s=n.n(c),r=(n(9),n(2)),l=n.p+"static/media/logo-avatar.20732ab9.png",i=n(0),m=function(){var e=Object(a.useState)(""),t=Object(r.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(""),s=Object(r.a)(c,2),m=s[0],u=s[1],d=Object(a.useState)(""),j=Object(r.a)(d,2),p=j[0],b=j[1],g=Object(a.useState)(""),y=Object(r.a)(g,2),f=y[0],v=y[1],h=Object(a.useState)(""),O=Object(r.a)(h,2),x=O[0],C=O[1],E=function(e){var t=document.querySelector(".form-message");t.innerHTML=e,t.style.opacity="1",t.style.background="#c04141",document.getElementById("name").classList.add("error"),document.getElementById("email").classList.add("error"),document.getElementById("message").classList.add("error")},B=function(e,t){window.emailjs.send("service_fsmr6tt",e,t).then((function(e){!function(){var e=document.querySelector(".form-message");e.innerHTML="Message envoy\xe9 ! Je vous recontacterai tr\xe8s vite.",e.style.background="#18dcff",e.style.opacity="1",document.getElementById("name").classList.remove("error"),document.getElementById("email").classList.remove("error"),document.getElementById("message").classList.remove("error"),setTimeout((function(){e.style.opacity="0"}),5e3)}(),o(""),u(""),b(""),v(""),C("")})).catch((function(e){E("Une erreur s'est produite, veuillez r\xe9essayer.")}))};return Object(i.jsxs)("form",{className:"contact-form",children:[Object(i.jsx)("img",{className:"logo",src:l,alt:"logo homeweb"}),Object(i.jsx)("h2",{children:"Formulaire de Contact"}),Object(i.jsx)("span",{children:"Contactez-moi Pour Vos Projets web"}),Object(i.jsxs)("div",{className:"form-content",children:[Object(i.jsx)("input",{type:"text",id:"name",name:"name",onChange:function(e){return o(e.target.value)},placeholder:"nom *",value:n,autoComplete:"off"}),Object(i.jsx)("input",{type:"text",id:"company",name:"company",onChange:function(e){return u(e.target.value)},placeholder:"soci\xe9t\xe9",value:m}),Object(i.jsx)("input",{type:"text",id:"phone",name:"phone",onChange:function(e){return b(e.target.value)},placeholder:"t\xe9l\xe9phone",value:p}),Object(i.jsxs)("div",{className:"email-content",children:[Object(i.jsx)("label",{id:"not-mail",children:"Email non valide"}),Object(i.jsx)("input",{type:"mail",id:"email",name:"email",onChange:function(e){return v(e.target.value)},placeholder:"email *",value:f,autoComplete:"off"})]}),Object(i.jsx)("textarea",{id:"message",name:"message",onChange:function(e){return C(e.target.value)},placeholder:"message *",value:x})]}),Object(i.jsx)("input",{className:"button",type:"button",value:"Envoyer",onClick:function(e){e.preventDefault(),n&&function(){var e=document.getElementById("not-mail");return f.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)?(e.style.display="none",!0):(e.style.display="block",e.style.animation="dongle 1s",setTimeout((function(){e.style.animation="none"}),1e3),!1)}()&&x?B("template_9muiz7k",{name:n,company:m,phone:p,email:f,message:x}):E("Merci de remplir correctement les champs requis *")}}),Object(i.jsx)("div",{className:"form-message"})]})};s.a.render(Object(i.jsx)(o.a.StrictMode,{children:Object(i.jsx)(m,{})}),document.getElementById("root"))},9:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.f117e066.chunk.js.map