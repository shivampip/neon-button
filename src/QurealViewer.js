import React, { Fragment, useEffect, useRef } from "react";
import QurealiFrame from "./QurealiFrame";

const ALLOWED_ORIGINS = ["https://show.qureal.com", "http://localhost:3201"];

function QurealViewer({
    slug = "qi_sample",
    type = "creation", // creation or template 
    onFormSubmit = () => { },
    style = {}
}) {

    const sendToIFrame = (creation_slug) => {
        console.log("Sending data to iFrame")
        const qureal_element = document.getElementById("qureal_iframe");

        const qureal_window = qureal_element ? qureal_element.contentWindow : null;
        if (qureal_window) {
            qureal_window.postMessage({
                message_type: "OPEN_CREATION",
                data: {
                    slug: creation_slug
                }
            }, "*");
            console.log("Data sent to iframe")
        }
    }

    useEffect(() => {
        sendToIFrame(slug)
    }, [slug])

    useEffect(() => {
        const handler = (ev) => {
            if (ALLOWED_ORIGINS.includes(ev.origin) && typeof ev.data === "object") {
                switch (ev.data.event_type) {
                    case "FORM_SUBMIT":
                        onFormSubmit(ev.data.data);
                        break;
                    default:
                        console.log("No event type found");
                        console.log(ev.data);
                }
            }
        };

        window.addEventListener("message", handler);
        return () => window.removeEventListener("message", handler);
    }, []);

    return (
        <QurealiFrame
            slug={slug}
            type={type}
            style={style}
        />
    );
}

// export default QurealiFrame;
export default QurealViewer
