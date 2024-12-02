import { assertEquals } from "@std/assert";
import { zip } from "@std/collections/zip";
import { runPart } from "@macil/aocd";

function parse(input: string): Array<[number, number]> {
  return input.trimEnd().split("\n").map((line) => {
    const [a, b] = line.split(/\s+/).map(Number);
    return [a, b];
  });
}

function part1(input: string): number {
  const items = parse(input);
  const l1 = items.map((pair) => pair[0]).sort((a, b) => a - b);
  const l2 = items.map((pair) => pair[1]).sort((a, b) => a - b);
  const pairs = zip(l1, l2);
  return pairs
    .map(([a, b]) => Math.abs(a - b))
    .reduce((a, b) => a + b, 0);
}

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
  runPart(2024, 1, 1, part1);
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
