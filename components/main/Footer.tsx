import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";



const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                

                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Community</div>
                    
                    <a href="https://github.com/Ashish5180?tab=repositories" className="flex flex-row items-center my-[15px] cursor-pointer z-50"
                    target="_blank" rel="noopener noreferrer">
                        
                        <RxGithubLogo />
                        <span className="text-[15px] ml-[6px]">Github</span> 
                           
                    </a>
                    
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Social Media</div>
                    <a href="https://www.instagram.com/_ashishyadavvv/" className="flex z-50 flex-row items-center my-[15px] cursor-pointer"
                    target="_blank" rel="noopener noreferrer">
                       
                        < RxInstagramLogo/>
                        <span className="text-[15px] ml-[6px]">Instagram</span>
                        
                    </a>
                    {/* <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxTwitterLogo />
                        <a className="text-[15px] ml-[6px]">Twitter</a>    
                    </p> */}
                    <a href="https://www.linkedin.com/in/ashish-yadav-00262b29b/" className="flex z-50 flex-row items-center my-[15px] cursor-pointer"
                    target="_blank" rel="noopener noreferrer">
                       
                        <RxLinkedinLogo />
                        <span className="text-[15px] ml-[6px]">Linkedin</span> 
                          
                    </a>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Feel free to contact us </div>
                   
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                  
                        <span className="text-[15px] ml-[6px]">Gmail:theashish.y8750@gmail.com</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                  
                        <span className="text-[15px] ml-[6px]">Phone no. 8750084388</span>    
                    </p>
                </div>
            </div>

            
        </div>
    </div>
  )
}

export default Footer