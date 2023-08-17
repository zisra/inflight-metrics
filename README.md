# In-flight metrics

**Allows passengers in planes using Panasonic to easily get information about the current flight.**

> **Disclaimer**: Data elements such as temperature, flight latitude, flight longitude, etc. are classified as Product Public under the Panasonic Product Data Classification Framework. Information under this classification does not carry any access, labeling, or transmission restrictions. Deliberate or accidental exposure to these types of data elements, does not lead to any adverse impact to aircraft operations or safety.

### To install:

```bash
git clone https://github.com/zisra/inflight-metrics
bun install
```

### To run:

First, connect to some kind of in-flight network, such as Lufthansa's `Telekom_FlyNet`

```bash
bun run index.ts
```

### Sample data
Sample data can be found in the `data` folder, as well as the Lufthansa FlyNet client website
