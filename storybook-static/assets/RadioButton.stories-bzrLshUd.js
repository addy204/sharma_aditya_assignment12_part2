import{j as n}from"./jsx-runtime-BZf_YgVj.js";import{p as c}from"./styled-components.browser.esm-BoS1Xy2b.js";import"./index-CEThVCg_.js";import"./tslib.es6-CvpyDmub.js";const v=c.label`
  display: flex;
  align-items: center;
  margin: 0 10px;
`,C=c.input.attrs({type:"radio"}).withConfig({shouldForwardProp:e=>!["bgColor"].includes(e)})`
  appearance: none;
  margin-right: 10px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid ${({disabled:e,bgColor:r})=>e?"grey":r||"blue"};
  background-color: ${({disabled:e,bgColor:r})=>e?r||"lightgrey":"transparent"};
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};

  &:checked {
    background-color: ${({disabled:e,bgColor:r})=>e?"grey":r||"blue"};
  }

  &:after {
    content: '';
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin: 4px;
    background: ${({disabled:e})=>e?"darkgrey":"white"};
  }
`,m=({name:e,options:r,onChange:y,visible:f=!0,disabled:h=!1,...x})=>f?n.jsx("div",{children:r.map(a=>n.jsxs(v,{children:[n.jsx(C,{name:e,value:a,onChange:()=>y(a),disabled:h,...x}),a]},a))}):null,g=m;m.__docgenInfo={description:"",methods:[],displayName:"RadioButton",props:{name:{required:!0,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},visible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},bgColor:{required:!1,tsType:{name:"string"},description:""}}};const O={title:"Components/RadioButton",component:g,argTypes:{options:{control:"array"},name:{control:"text"},visible:{control:"boolean"},disabled:{control:"boolean"},bgColor:{control:"color"}}},b=e=>n.jsx(g,{...e}),o=b.bind({});o.args={name:"radioGroup",options:["Option 1","Option 2","Option 3"],visible:!0,disabled:!1,bgColor:"blue"};const t=b.bind({});t.args={name:"radioGroup",options:["Option 1","Option 2","Option 3"],visible:!0,disabled:!0,bgColor:"lightgrey"};var s,i,d;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:"args => <RadioButton {...args} />",...(d=(i=o.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var l,p,u;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"args => <RadioButton {...args} />",...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const j=["Primary","Disabled"];export{t as Disabled,o as Primary,j as __namedExportsOrder,O as default};
