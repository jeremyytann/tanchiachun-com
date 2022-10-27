import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbars/Navbar'
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { app } from '../firebase-config';
import { SpecialZoomLevel, Viewer, Worker } from '@react-pdf-viewer/core';

const ResumePage = () => {
    const storage = getStorage(app);
    const [resume, setResume] = useState(null);

    useEffect(()=>{
        getDownloadURL(ref(storage, 'Resume/resume.pdf')).then((url)=>{
            setResume(url);
        })
    }, [storage]);

    return (
        <div>
            <Navbar />

            { resume !== null && (
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
                    <Viewer fileUrl={resume} defaultScale={SpecialZoomLevel.PageFit} />
                </Worker>
            )}
        </div>
    )
}

export default ResumePage