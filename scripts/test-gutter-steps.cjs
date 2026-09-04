const fs=require('node:fs');
const vm=require('node:vm');
const assert=require('node:assert/strict');
const ts=require('typescript');
const React=require('react');
const source=ts.transpileModule(fs.readFileSync('components/gutter-estimate-steps.tsx','utf8'),{compilerOptions:{jsx:ts.JsxEmit.ReactJSX,module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020}}).outputText;
function scenario(campaign){
 let state=[],cursor=0,invalid=false,reported=false,focused=false;
 const form={querySelectorAll:()=>[{checkValidity:()=>!invalid,reportValidity:()=>{reported=true;}}],querySelector:()=>({focus:()=>{focused=true;}})};
 const module={exports:{}};
 vm.runInNewContext(source,{module,exports:module.exports,require:name=>name==='react'?{...React,useEffect:()=>{},useRef:()=>({current:form}),useState:init=>{const i=cursor++;if(!(i in state))state[i]=typeof init==='function'?init():init;return [state[i],v=>{state[i]=typeof v==='function'?v(state[i]):v;}];}}:name.endsWith('.css')?{}:require(name),requestAnimationFrame:fn=>fn()});
 const render=()=>{cursor=0;return module.exports.GutterEstimateSteps({campaign});};
 const nodes=tree=>{const out=[];function visit(n){if(!n||typeof n!=='object')return;if(Array.isArray(n)){n.forEach(visit);return;}out.push(n);visit(n.props?.children);}visit(tree);return out;};
 let tree=render();
 const submit=()=>{let prevented=false;tree.props.onSubmit({preventDefault:()=>{prevented=true;}});tree=render();return prevented;};
 assert.equal(nodes(tree).filter(n=>n.type==='fieldset'&&!n.props.hidden).length,1);
 const inputs=nodes(tree).filter(n=>n.type==='input');
 inputs.find(n=>n.props.name==='first_name').props.onChange({target:{value:'Test'}});
 tree=render();
 invalid=true;assert.equal(submit(),true);assert.equal(state[0],0);assert.equal(reported,true);
 invalid=false;
 for(let i=1;i<=3;i++){assert.equal(submit(),true);assert.equal(state[0],i);}
 assert.equal(focused,true);
 nodes(tree).find(n=>n.type==='button'&&n.props.type==='button').props.onClick();
 tree=render();assert.equal(state[0],2);assert.equal(state[1].first_name,'Test');
 assert.equal(submit(),true);assert.equal(submit(),false);assert.equal(state[2],true);
 assert.equal(submit(),true);
 for(const name of ['name','service','message','contact','startedAt','return_to','landing_page','utm_source','gclid','fbclid'])assert.ok(nodes(tree).some(n=>n.type==='input'&&n.props.name===name));
 console.log(campaign+': progression, validation gate, back/preservation, focus, final submit, duplicate guard, attribution passed');
}
scenario('estimate-a');
scenario('seamless-gutters-10-off');
