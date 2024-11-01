<!-- Start SDK Example Usage [usage] -->
```typescript
import { SDK } from "sdk";

const sdk = new SDK();

async function run() {
  const result = await sdk.createUser({
    name: "John Doe",
    age: 42,
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->