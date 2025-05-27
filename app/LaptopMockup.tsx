import React from "react";
import Image from "next/image";

export const Macbook = () => {
  return (
    <div className="mx-auto w-[100%]">
      <div style={{ borderRadius: '3% 3% 0.5% 0.5% / 5%' }} className="macbook-screen relative w-4/5 mx-auto bg-[#333] overflow-hidden">
        <div className="macbook-viewport absolute inset-0 m-[4.3%_3.2%] overflow-hidden">
          <Image
            src="/screenshot2.png"
            alt="Screen content"
            fill
            className="object-contain"
            sizes="100vw"
            priority
          />
        </div>
      </div>
      <div className="macbook-base relative w-full" />
      <div className="macbook-notch relative mx-auto -mt-[3.5%] w-[14%] bg-[#ddd] rounded-[0_0_7%_7%]/[0_0_95%_95%]" />
      
      <style jsx>{`
        .macbook-screen::before {
          content: "";
          display: block;
          padding-top: 67%;
          border: 2px solid #cacacc;
          border-radius: 3% 3% 0% 0% / 5%;
          box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.8) inset, 
                      0 0 1px 2px rgba(255, 255, 255, 0.3) inset;
        }
        
        .macbook-screen::after {
          content: "";
          position: absolute;
          bottom: 0.75%;
          left: 0.5%;
          width: 99%;
          padding-top: 1%;
          border-top: 2px solid rgba(209, 7, 7, 0.15);
        }
        
        .macbook-base::before {
          content: "";
          display: block;
          padding-top: 3.3%;
          background: linear-gradient(#eaeced, #edeef0 55%, #fff 55%, 
                     #8a8b8f 56%, #999ba0 61%, #4B4B4F 84%, 
                     #262627 89%, rgba(0, 0, 0, .01) 98%);
          border-radius: 0 0 10% 10%/ 0 0 50% 50%;
        }
        
        .macbook-base::after {
          content: "";
          position: absolute;
          top: 0;
          width: 100%;
          height: 53%;
          background: linear-gradient(90deg, 
                    rgba(0, 0, 0, 0.5), 
                    rgba(255, 255, 255, 0.8) 0.5%, 
                    rgba(0, 0, 0, 0.4) 3.3%, 
                    transparent 15%, 
                    rgba(255, 255, 255, 0.8) 50%, 
                    transparent 85%, 
                    rgba(0, 0, 0, 0.4) 96.7%, 
                    rgba(255, 255, 255, 0.8) 99.5%, 
                    rgba(0, 0, 0, 0.5) 100%);
        }
        
        .macbook-notch {
          box-shadow: inset -5px -1px 3px rgba(0, 0, 0, 0.2), 
                      inset 5px -1px 3px rgba(0, 0, 0, 0.2);
        }
        
        .macbook-notch::before {
          content: "";
          display: block;
          padding-top: 10%;
        }
        
        .macbook-viewport {
          transition: background-position 3s ease;
          background-position: 0 0;
          background-size: 100% auto;
          overflow: hidden;
          cursor: pointer;
        }
        
        .macbook-viewport:hover {
          background-position: 0 100%;
        }
        
        .macbook-viewport::after {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at right bottom, 
                    transparent 75%, 
                    rgba(255, 255, 255, 0.05) 75%, 
                    transparent);
        }
      `}</style>
    </div>
  );
};
