import { spawn } from 'node:child_process';

const extraArgs = process.argv.slice(2);

async function run(label, command, args) {
  await new Promise((resolve, reject) => {
    const child = spawn(command, args, { stdio: 'inherit' });
    child.on('exit', (code) => {
      if (code === 0) resolve();
      else reject(new Error(`${label} failed with code ${code}`));
    });
  });
}

await run('crawl', 'node', ['scripts/crawl-loadmore.mjs']);
await run('capture', 'node', ['scripts/capture-sites.mjs', ...extraArgs]);
await run('fallback', 'node', ['scripts/fill-fallback-captures.mjs']);
await run('generate', 'node', ['scripts/generate-site-files.mjs']);
await run('index', 'node', ['scripts/build-agent-index.mjs']);
await run('validate', 'node', ['scripts/validate-repo.mjs']);
