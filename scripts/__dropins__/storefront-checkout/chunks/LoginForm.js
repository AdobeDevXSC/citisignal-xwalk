import"@dropins/tools/event-bus.js";import{i as M,l as T,n as z}from"./getStoreConfig.js";import{i as V,s as $}from"./setGuestEmailOnCart.js";import{Field as j,Input as q,Divider as G}from"@dropins/tools/components.js";import{jsx as o,jsxs as m,Fragment as O}from"@dropins/tools/preact-jsx-runtime.js";import{H as P,p as w}from"./ToggleButton.js";import{useState as f,useEffect as R}from"@dropins/tools/preact-hooks.js";import{classes as N}from"@dropins/tools/lib.js";/* empty css                     */import{useText as k,Text as F}from"@dropins/tools/i18n.js";import{L as U}from"./constants2.js";const J=({value:r,error:l,hint:a,onChange:c,onBlur:u,onInvalid:n})=>{const i=k({LoginFormLabel:"Checkout.LoginForm.ariaLabel",LoginFormFloatingLabel:"Checkout.LoginForm.floatingLabel",LoginFormPlaceholder:"Checkout.LoginForm.placeholder"});return o(j,{size:"medium",error:l,hint:a,children:o(q,{id:"customer-email",name:"customer-email",type:"email",value:r,autocomplete:"email",placeholder:i.LoginFormPlaceholder,floatingLabel:i.LoginFormFloatingLabel,onChange:c,onBlur:u,onInvalid:n,required:!0,"aria-label":i.LoginFormLabel,"aria-required":!0})})},K=({onSignInClick:r,email:l})=>m("div",{className:"checkout-login-form__sign-in",children:[o(F,{id:"Checkout.LoginForm.account"}),o("a",{"data-testid":"sign-in-link",className:"checkout-login-form__link",href:"#",target:"_blank",rel:"noreferrer",onClick:a=>{a.preventDefault(),r==null||r(l)},children:o(F,{id:"Checkout.LoginForm.signIn"})})]}),Q=({name:r,className:l,currentEmail:a,hint:c,error:u=null,onEmailChange:n,onEmailBlur:i,onEmailInvalid:g,onSignInClick:L,onSignOutClick:v,isAuthenticated:p,customer:e,...h})=>{const d=k({Title:"Checkout.LoginForm.title"});return m("div",{...h,className:N(["checkout-login-form",l]),"data-testid":"checkout-login-form",children:[m("div",{className:"checkout-login-form__heading",children:[o(P,{level:2,className:"checkout-login-form__title",children:d.Title}),p?o(W,{onSignOutClick:v}):o(K,{onSignInClick:L,email:a})]}),e?m("div",{className:"checkout-login-form__customer-details",children:[o("div",{className:"checkout-login-form__customer-name",children:`${e==null?void 0:e.firstName} ${e==null?void 0:e.lastName}`}),o("div",{className:"checkout-login-form__customer-email",children:e==null?void 0:e.email})]}):o("div",{className:"checkout-login-form__content",children:m("form",{className:N(["dropin-login-form__form",l]),name:r,noValidate:!0,children:[o("button",{type:"submit",disabled:!0,style:"display: none","aria-hidden":"true"}),o(J,{value:a||void 0,error:u||"",hint:c,onChange:n,onBlur:i,onInvalid:g})]})}),o(G,{variant:"primary"})]})},W=({onSignOutClick:r})=>m("p",{className:"checkout-login-form__sign-out",children:[o(F,{id:"Checkout.LoginForm.switch"}),o("a",{className:"checkout-login-form__link",href:"#",target:"_blank",rel:"noreferrer",onClick:l=>{l.preventDefault(),r==null||r()},children:o(F,{id:"Checkout.LoginForm.signOut"})})]}),X=r=>w.email.test(r),Y=1e3,me=({className:r,email:l=null,onSignInClick:a,onSignOutClick:c,...u})=>{const n=k({LoginFormInvalidEmailError:"Checkout.LoginForm.invalidEmailError",LoginFormMissingEmailError:"Checkout.LoginForm.missingEmailError",LoginFormEmailExistsAlreadyHaveAccount:"Checkout.LoginForm.emailExists.alreadyHaveAccount",LoginFormEmailExistsSignInButton:"Checkout.LoginForm.emailExists.signInButton",LoginFormEmailExistsForFasterCheckout:"Checkout.LoginForm.emailExists.forFasterCheckout"}),{data:i}=M.value,g=(i==null?void 0:i.id)||"",L=!!i,[v,p]=f(!1),[e,h]=f(l),[d,E]=f(),[x,_]=f(!0),b=t=>t.valid?null:t.valueMissing?n.LoginFormMissingEmailError:n.LoginFormInvalidEmailError,C=T.value.data,y=t=>{const{value:s}=t.target;h(s),E(null),_(!0)},A=t=>{const{validity:s}=t.target;E(b(s))},I=t=>{const{validity:s}=t.target;E(b(s))};!v&&L&&(p(!0),h((i==null?void 0:i.email)||l)),R(()=>{if(!e||d)return;const t=setTimeout(()=>{V(e).then(s=>{_(s),(i==null?void 0:i.email)!==e&&$({cartId:g,email:e}).catch(H=>{console.log("set email failed",H)})}).catch(s=>{console.log(s),E(n.LoginFormInvalidEmailError),_(!0)})},Y);return()=>{t&&clearTimeout(t)}},[e,d,n.LoginFormInvalidEmailError,i==null?void 0:i.email,g]);const B=x?"":m(O,{children:[n.LoginFormEmailExistsAlreadyHaveAccount," ",o("a",{href:"#",onClick:t=>{t.preventDefault(),a==null||a(e)},children:n.LoginFormEmailExistsSignInButton})," ",n.LoginFormEmailExistsForFasterCheckout]});return o(Q,{className:r,currentEmail:e,error:d,hint:B,name:U,onEmailBlur:A,onEmailChange:y,onEmailInvalid:I,onSignInClick:t=>{const s=e?X(e):!1;a==null||a(s?t:null)},onSignOutClick:c,isAuthenticated:!!z.value,customer:C,...u})};export{me as L};
//# sourceMappingURL=LoginForm.js.map
