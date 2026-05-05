export default function errorHandler(error: any, event: any) {
  console.error("Vercel HTTPError Details:", error);
  const errorMessage = error instanceof Error ? error.message : String(error);
  const errorStack = error instanceof Error ? error.stack : '';
  
  event.res.setHeader('content-type', 'application/json');
  event.res.end(JSON.stringify({
    error: "Detailed Error",
    message: errorMessage,
    stack: errorStack,
    original: error
  }));
}
