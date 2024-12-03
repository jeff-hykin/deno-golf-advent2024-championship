var p=(i,s=0)=>(i=i.trim().split(/\s+/g).map((e,j)=>(p=j)&1?-e:e).sort(),i.slice(0,++p/2).map((e,j)=>s+=Math.abs(-i[j+p/2]-e)),s)

function part2(input: string): number {
  const items = parse(input);
  const l2NumberCounts = new Map<number, number>();
  for (const [_a, b] of items) {
    l2NumberCounts.set(b, (l2NumberCounts.get(b) ?? 0) + 1);
  }
  return items
    .map(([a]) => a * (l2NumberCounts.get(a) ?? 0))
    .reduce((a, b) => a + b, 0);
}

if (import.meta.main) {
  runPart(2024, 1, 1, p);
  runPart(2024, 1, 2, part2);
}

const TEST_INPUT = `\
3   4
4   3
2   5
1   3
3   9
3   3
`;

Deno.test("part1", () => {
  assertEquals(part1(TEST_INPUT), 11);
});

Deno.test("part2", () => {
  assertEquals(part2(TEST_INPUT), 31);
});
