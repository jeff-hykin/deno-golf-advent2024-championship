new Response(Deno.stdin).text().then((p,c=0,s=0,i=p.split(/\s/g).map((e,j)=>(p=j)&1?-e:e).sort())=>i.slice(++p/2).map((e,j,k)=>s+=Math.abs((j=-i[j])-e)+!k.map(h=>c+=j*(h==j)))+console.log(s,c))
