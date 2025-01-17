To fix the issue, you need to handle the asynchronous data fetching properly within the server component.  Here's a corrected version using `async/await` and a loading state:

```javascript
// pages/index.js (server component)
export default async function Home() {
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();
  return (
    <div>
      <h1>{data.title}</h1>
    </div>
  );
}
```
This improved version fetches the data before returning the JSX, resolving the hydration mismatch.  For more complex cases, consider using `Suspense` for a more robust loading experience.