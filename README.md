# Qureal Editor

> Official Qureal React Components

![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)

## Install

```bash
npm install qureal-editor
```

## Usage

```jsx
import React from "react";
import { QurealViewer } from "qureal-editor";

function App() {
    return (
        <QurealViewer
            slug="test_21"
            onFormSubmit={(form_data)=>{
                console.log("Data filled in form", form_data);
            }}
            style={{
                width: "800px",
                height: "90vh",
                border: "1px solid black"
            }}
        />
    );
}
```

For efficieny in case of multiple creations rendering, do not destroy the component, just update slug prop.

## License

MIT © [shivampip](https://github.com/shivampip)
