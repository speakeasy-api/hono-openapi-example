# CreateError

## Example Usage

```typescript
import { CreateError } from "sdk/models/components";

let value: CreateError = {
  issues: [
    {
      code: "<value>",
      path: [
        4236.55,
      ],
    },
  ],
  name: "<value>",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `issues`                                                 | [components.Issues](../../models/components/issues.md)[] | :heavy_check_mark:                                       | N/A                                                      |
| `name`                                                   | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |