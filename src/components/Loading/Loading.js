import { useEffect } from "react";
import './Loading.css';
function Loading(){
    useEffect(() => {
        const preloader = document.querySelector('.page-loading');
        preloader.classList.remove('active');
        setTimeout(() => {
            preloader.remove();
        }, 1000);
    }, []);
    
    return(
        <div className="page-loading active">
            <div className="page-loading-inner">
                <div className="page-spinner"></div> <span>Loading...</span>
            </div>
            
        </div>
    )
}

export default Loading;