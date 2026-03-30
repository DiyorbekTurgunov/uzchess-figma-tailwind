'use client';

import Image from 'next/image';
import DonatSection from "@/components/main/donat-section";
import Banner from "@/components/main/banner";
import {NewsFullData} from "@/components/news/data/newsFullData";

export default function NewsFull() {
    return (
        <main>
            {NewsFullData.map((item) => (
                <div key={item.id} className="flex gap-6 justify-center">
                    <div className="flex flex-col items-center p-5 w-256.5 bg-[#1A1D1F] rounded-xl border border-[#1F272A]">
                        <div className="flex flex-col">
                            <p className="font-bold text-[28px] text-[#F7F9FA] leading-snug">{item.title}</p>
                            <div className="flex gap-2 mt-3.25">
                                <p className="font-normal text-[16px] text-[#F7F9FA66]">{item.date}</p>
                                <p className="font-normal text-[16px] text-[#F7F9FA66]">{item.hour}</p>
                            </div>
                            <div className="overflow-hidden w-246.5 h-97.5 bg-[#131313] rounded-xl mt-4">
                                <Image src={item.img1} alt={"image"} width={986} height={390}/>
                            </div>.
                        </div>
                        <div>
                            <div className="flex flex-col justify-between mt-6 w-226.5 h-94.75">
                                <p className="font-bold text-[24px] text-[#F7F9FA]">{item.title2}</p>
                                <p className="font-bold text-[18px]">{item.desc1}</p>
                                <p className="font-normal text-[18px]">{item.desc2}</p>
                                <p className="font-normal text-[18px]">{item.desc3}</p>
                                <p className="font-normal text-[18px]">{item.desc4}</p>
                            </div>
                            <div>
                               <div className="flex p-4 w-226.5 h-33 bg-[#1B2A33] rounded-xl my-5 gap-4">
                                    <div>
                                        <Image src={"/svg/frame2.svg"} alt={"svg"} width={33} height={25}/>
                                    </div>
                                    <div className="flex flex-col leading-4.5">
                                        <p className="italic font-medium text-[16px] text-[#F7F9FA]">{item.manual}</p>
                                        <p className="font-sans font-bold text-[16px] text-[#F7F9FA] mt-5">{item.author}</p>
                                        <p className="font-medium text-[13px] text-[#F7F9FA99]">{item.who}</p>
                                    </div>
                               </div>
                                <div className="overflow-hidden w-226.5 h-96.5 bg-[#131313] rounded-xl">
                                    <Image src={item.img2} alt={"image"} width={906} height={386}/>
                                </div>
                                <ul className="w-226.5 pl-8 mt-5">
                                    <li className="font-sans font-normal text-[18px] text-white/70">{item.description1}</li>
                                    <li className="font-sans font-normal text-[18px] text-white/70">{item.description2}</li>
                                    <li className="font-sans font-normal text-[18px] text-white/70">{item.description3}</li>
                                    <li className="font-sans font-normal text-[18px] text-white/70">{item.description4}</li>
                                </ul>
                                <div className="flex flex-col justify-end h-15.25 border-t border-[#F7F9FA1A] mt-5">
                                   <div className="flex justify-between h-10">
                                        <div className="flex items-center gap-4">
                                            <Image src={"/svg/twitter2.svg"} alt={"svg"} width={24} height={24}/>
                                            <Image src={"/svg/facebook2.svg"} alt={"svg"} width={24} height={24}/>
                                            <Image src={"/svg/telegram2.svg"} alt={"svg"} width={24} height={24}/>
                                            <Image src={"/svg/link2.svg"} alt={"svg"} width={24} height={24}/>
                                        </div>
                                       <div className="flex items-center gap-5.75">
                                           <div className="flex gap-3">
                                               <Image src={"/svg/view.svg"} alt={"svg"} width={24} height={24}/>
                                               <p>5 132</p>
                                           </div>
                                           <div className="flex justify-center items-center gap-2.5 w-48.5 h-10 bg-[#F7F9FA1A] rounded-lg">
                                               <p>Поделиться</p>
                                               <Image src={"/svg/share.svg"} alt={"svg"} width={20} height={20}/>
                                           </div>
                                       </div>
                                   </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <DonatSection/>
                        <Banner/>
                    </div>
                </div>
            ))}
        </main>

    )
}