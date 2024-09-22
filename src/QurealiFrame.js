import React, { Fragment, useEffect, useRef } from "react";


function QurealiFrame({ slug, type = "creation", style = {} }) {


    return (
        <Fragment>
            <iframe
                id="qureal_iframe"
                title="Qureal"
                // src={`http://localhost:3201/embed/${creation_slug}`}
                src={type === "creation" ? `https://show.qureal.com/embed/${slug}` : `https://show.qureal.com/ts/${slug}`}
                // src={`https://show.qureal.com/embed/${slug}`}
                style={{
                    width: "100%",
                    height: "100vh",
                    ...style
                }}
            />
        </Fragment>
    );
}

// export default QurealiFrame;
export default React.memo(QurealiFrame, () => true)
