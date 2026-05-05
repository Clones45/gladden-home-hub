import handler from './.vercel/output/functions/__server.func/index.mjs';

const req = new Request('http://localhost/');
handler.fetch(req).then(async (res) => {
  console.log("Status:", res.status);
  console.log("Headers:", Object.fromEntries(res.headers.entries()));
  console.log("Body:", await res.text());
}).catch(err => {
  console.error("Uncaught Error:", err);
});
