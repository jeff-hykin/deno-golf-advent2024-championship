var p=await new Response(Deno.stdin.readable).text(),c=0,s=0,i=p.split(/\s/g).map((e,j)=>(p=j)&1?-e:e).sort()
i.slice(++p/2).map((e,j,k)=>{s+=Math.abs((j=-i[j])-e)
k.map(h=>h==j&&(c+=j))})
console.log(s,c)
