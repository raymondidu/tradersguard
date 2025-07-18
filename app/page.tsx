import Image from "next/image";
import Link from "next/link";



const howitworksvalues =[
  {id: 1, title:"Connect Wallet", 
  description:"Securely connect your wallet to get started. No custody. No stress.",
  icon:"/link.png"
},
 {id: 2, title:"Set Capital Coverage", 
  description:"Select how much USDC you want protected, and track it in real time.",
  icon:"/graph.png"
},
 {id: 3, title:"Pay When You Profit", 
  description:"Only pay a small % (1–5%) of your profits as premium after winning trades.",
  icon:"/sparkles.png"
},
 {id: 4, title:"Earn Protection", 
  description:"As you contribute, you build protection. Reach 50% of your Earned Protection Threshold (EPT) or stay active for 30 days to become eligible.",
  icon:"/money-recive.png"
},
 {id: 5, title:"Claim After Catastrophic Loss", 
  description:"If your portfolio crashes 80% or more, you can submit a claim and receive fresh capital to start over.",
  icon:"/smiley.png"
},
]

export default function Home() {
  return (

       <div className=" w-full">
        <div className="mb-10 p-4">
                    <div className="flex justify-between items-start">
                                  <svg className="w-[83px] h-[41.904px] lg:w-[191px] lg:h-[96.43px] " xmlns="http://www.w3.org/2000/svg" width="191" height="97" viewBox="0 0 191 97" fill="none">
                            <path d="M162.776 15.9933C162.776 14.3563 164.105 13.0266 165.745 13.0266H176.077V18.8833H165.898C165.898 18.8833 168.63 19.7199 168.63 22.6718V27.5531H162.776V19.6004C162.776 19.2034 162.455 18.8833 162.059 18.8833H154.112C154.112 18.8833 157.079 19.1137 157.079 22.9044V27.5509H151.303V18.8833H143.78V13.0266H158.381C161.408 13.0266 162.438 15.8204 162.509 15.9143C162.59 16.0253 162.66 15.9976 162.78 15.9933H162.776Z" fill="#52D591"/>
                            <path d="M159.926 45.311C151.022 45.311 143.775 38.0648 143.775 29.1602H149.56C149.56 34.876 154.21 39.5268 159.926 39.5268C165.642 39.5268 170.293 34.876 170.293 29.1602H176.077C176.077 38.0648 168.831 45.311 159.926 45.311Z" fill="#52D591"/>
                            <path d="M18.6441 39.2707V30.6307H14.8875V26.2937H18.6441V20.8982H23.425V26.2937H28.5817V30.6307H23.425V37.5632C23.425 39.3732 23.425 41.5928 26.0203 41.5928C26.9423 41.5928 27.8303 41.2856 28.5817 40.9099V45.2129C27.6255 45.725 26.3619 45.93 25.03 45.93C18.6441 45.93 18.6441 41.2514 18.6441 39.2707Z" fill="#1B4134"/>
                            <path d="M31.2453 26.8743H35.9581V29.8112H36.0946C37.0508 27.9672 38.8608 26.3279 41.4561 26.3279C42.0368 26.3279 42.6514 26.4304 43.3002 26.6695V32.031C42.5489 31.7578 41.5587 31.6553 40.978 31.6553C36.5385 31.6553 36.0263 35.7874 36.0263 38.5536V45.93H31.2453V26.8743Z" fill="#1B4134"/>
                            <path d="M43.7441 40.3636C43.7441 36.8119 46.5444 35.3776 49.8911 34.6605C54.1939 33.7385 55.56 33.6018 55.56 32.0993C55.56 30.6991 54.3648 29.6405 52.5206 29.6405C50.8473 29.6405 49.413 30.5625 48.7984 32.6798L44.3247 31.1772C45.5199 27.2159 49.0033 25.7474 52.6913 25.7474C57.404 25.7474 60.3751 28.0696 60.3751 32.5091V39.4074C60.3751 42.515 60.6142 44.4296 60.9897 45.932H56.243C55.9698 45.1125 55.8672 43.7444 55.8672 42.8564H55.7991C54.8087 44.7006 52.6231 45.93 50.1301 45.93C46.8858 45.93 43.7441 44.0858 43.7441 40.3636ZM55.5942 38.178V36.6412C54.6378 37.051 52.8963 37.4949 51.8718 37.6999C50.335 38.0755 48.9691 38.7926 48.9691 40.2269C48.9691 41.6612 50.0618 42.2418 51.5302 42.2418C54.0574 42.2418 55.5942 40.1246 55.5942 38.178Z" fill="#1B4134"/>
                            <path d="M63.107 35.8216C63.107 29.538 67.0001 25.7474 71.7128 25.7474C74.513 25.7474 76.3914 27.0792 77.4841 28.8209H77.5524V20.896H82.3334V39.4074C82.3334 42.5492 82.5724 44.4296 82.9481 45.932H78.2354C77.9964 44.9077 77.8257 43.6077 77.8598 42.9248H77.7915C76.3914 45.042 74.0691 45.93 71.747 45.93C66.4538 45.93 63.107 41.6612 63.107 35.8216ZM77.655 35.7874C77.655 32.5433 75.6059 30.2893 72.8397 30.2893C70.0737 30.2893 68.0588 32.5774 68.0588 35.8216C68.0588 39.0658 70.0053 41.354 72.8397 41.354C75.6742 41.354 77.655 38.9975 77.655 35.7874Z" fill="#1B4134"/>
                            <path d="M92.3843 65.6984C92.3843 59.4149 96.2774 55.6243 100.99 55.6243C103.79 55.6243 105.669 56.9561 106.761 58.6977H106.83V50.7729H111.61V69.2841C111.61 72.4261 111.85 74.3063 112.225 75.8089H107.513C107.273 74.7844 107.103 73.4846 107.137 72.8016H107.069C105.669 74.9189 103.346 75.8069 101.024 75.8069C95.7309 75.8069 92.3843 71.5381 92.3843 65.6984ZM106.932 65.6643C106.932 62.4201 104.883 60.1662 102.117 60.1662C99.3508 60.1662 97.3359 62.4543 97.3359 65.6984C97.3359 68.9427 99.2824 71.2307 102.117 71.2307C104.951 71.2307 106.932 68.8744 106.932 65.6643Z" fill="#1B4134"/>
                            <path d="M85.2021 35.9241C85.2021 30.0503 89.1635 25.7474 94.7299 25.7474C99.4766 25.7474 103.916 28.8892 103.916 35.8899V37.1876H89.983C90.3929 40.0904 92.5443 41.627 95.0371 41.627C96.9837 41.627 98.6912 40.5343 99.5108 38.5878L103.985 40.3978C102.721 43.5395 99.5108 45.93 95.0713 45.93C89.4365 45.93 85.2021 41.9686 85.2021 35.9241ZM94.6957 29.8454C92.2369 29.8454 90.7001 31.5529 90.222 33.9092H99.1011C98.7595 31.0065 96.8471 29.8454 94.6957 29.8454Z" fill="#1B4134"/>
                            <path d="M106.819 26.8743H111.531V29.8112H111.668C112.624 27.9672 114.434 26.3279 117.03 26.3279C117.61 26.3279 118.225 26.4304 118.874 26.6695V32.031C118.122 31.7578 117.132 31.6553 116.552 31.6553C112.112 31.6553 111.6 35.7874 111.6 38.5536V45.93H106.819V26.8743Z" fill="#1B4134"/>
                            <path d="M119.213 40.5685L123.653 39.1342C124.506 41.2514 126.111 42.0027 127.477 42.0027C128.604 42.0027 129.97 41.5588 129.97 40.1927C129.97 38.8268 128.536 38.3829 127.272 38.0071L125.258 37.3925C122.867 36.6754 120.101 35.2411 120.101 31.7236C120.101 28.2063 123.175 25.7474 127.272 25.7474C131.097 25.7474 133.761 27.8647 134.546 30.5625L130.141 31.9968C129.697 30.7332 128.809 29.6405 127.136 29.6405C125.804 29.6405 124.882 30.3577 124.882 31.4162C124.882 32.7823 126.692 33.3627 128.229 33.8068L129.697 34.2166C131.575 34.763 135.059 35.7192 135.059 39.7488C135.059 43.5054 132.122 45.93 127.512 45.93C123.175 45.93 120.101 43.7444 119.213 40.5685Z" fill="#1B4134"/>
                            <path d="M16.3218 77.826L20.6588 76.255C21.5808 78.3381 23.0152 79.2261 25.2348 79.2261C28.3768 79.2261 30.0843 77.2796 30.0843 73.1816V72.2936H30.0159C28.684 74.411 26.5326 75.1281 24.3812 75.1281C18.6781 75.1281 15.6388 70.6203 15.6388 65.4296C15.6388 59.6923 19.3612 55.6285 24.2105 55.6285C27.0449 55.6285 29.0256 57.0286 30.0843 58.7361H30.1525V56.175H34.8652V73.3181C34.8652 81.0359 30.2892 83.2899 25.3715 83.2899C21.9907 83.2899 17.9951 82.2653 16.3218 77.826ZM30.1866 65.3271C30.1866 62.4244 28.1717 60.1704 25.3715 60.1704C22.5712 60.1704 20.5906 62.4585 20.5906 65.3271C20.5906 68.1956 22.5712 70.5519 25.3715 70.5519C28.1717 70.5519 30.1866 68.1956 30.1866 65.3271Z" fill="#1B4134"/>
                            <path d="M38.6899 68.1275V56.175H43.471V66.4881C43.471 69.3909 44.6321 71.2351 46.92 71.2351C49.413 71.2351 50.9156 69.1177 50.9156 66.42V56.175H55.6965V69.2885C55.6965 72.4303 55.9356 74.3085 56.3113 75.8111H51.5302C51.2912 74.7524 51.1547 73.4888 51.1888 72.9084H51.1205C50.062 74.6842 48.3545 75.8111 45.5541 75.8111C41.3536 75.8111 38.6899 73.2498 38.6899 68.1275Z" fill="#1B4134"/>
                            <path d="M58.5311 70.2447C58.5311 66.693 61.3313 65.2587 64.6779 64.5416C68.9809 63.6196 70.3469 63.4831 70.3469 61.9804C70.3469 60.5803 69.1516 59.5216 67.3075 59.5216C65.6341 59.5216 64.1999 60.4436 63.5852 62.5609L59.1115 61.0584C60.3068 57.097 63.7901 55.6285 67.4783 55.6285C72.1909 55.6285 75.162 57.9507 75.162 62.3902V69.2885C75.162 72.3961 75.401 74.3085 75.7768 75.8111H71.0298C70.7566 74.9914 70.6543 73.6255 70.6543 72.7377H70.5859C69.5956 74.5817 67.41 75.8111 64.917 75.8111C61.6729 75.8111 58.5311 73.9669 58.5311 70.2447ZM70.3811 68.0591V66.5223C69.4249 66.9321 67.6832 67.3761 66.6587 67.581C65.1219 67.9566 63.7559 68.6737 63.7559 70.108C63.7559 71.5423 64.8488 72.1229 66.3173 72.1229C68.8443 72.1229 70.3811 70.0057 70.3811 68.0591Z" fill="#1B4134"/>
                            <path d="M79.0551 56.7554H83.7678V59.6923H83.9043C84.8605 57.8483 86.6705 56.209 89.2659 56.209C89.8465 56.209 90.4611 56.3115 91.1099 56.5505V61.9121C90.3586 61.6389 89.3682 61.5365 88.7878 61.5365C84.3482 61.5365 83.836 65.6686 83.836 68.4347V75.8111H79.0551V56.7554Z" fill="#1B4134"/>
                          </svg>

                        <Link href="https://forms.gle/jp7V6zFA3WDXeij57">
                        <button className="bg-[#52D591] h-10 p-2 rounded text-[#1B4134] font-bold ">
                          Join the Waitlist
                        </button>
                        </Link>

                    </div>
                    <div className=" text-center text-[#1B4134] font-bold text-4xl lg:text-5xl pt-10">
                      <h1 className="">
                        Blow Your Account?

                      </h1>
                      <h1 className="">
                        We Fund You With <span className="text-[#3FB176]">New Capital</span>
                      </h1>
                    
                    </div> <p className="py-10 text-center text-[#5D706A] font-[400] text-lg">Decentralized trade insurance for crypto & meme coin traders</p>

                    <h1 className="rounded outline p-4 mb-10 text-[12px] font-bold lg:text-2xl">CA: 8SXQKLi8xBi2tpAGyiAuGXMwJ9kTgTyDhnxwbwEcmoon</h1>

                <div className="flex justify-center">
                      <Link href="https://forms.gle/jp7V6zFA3WDXeij57">
                      <button className="bg-[#52D591] h-10 p-2 rounded text-[#1B4134] font-bold ">
                        Join the Waitlist
                      </button>
                      </Link>
                </div>

                   




    </div>
    <div className="bg-[#F4FFF9] w-full text-center p-4 py-10">
      <h1 className=" text-[#1E1E1E] font-bold text-2xl lg:text-4xl">How it Works</h1>
      <p className="text-[#5D706A] py-5">Here is how it works in few simple steps.</p>

    
      <div  className=" lg:grid  lg:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {howitworksvalues.map((works, index) =>
        <div key={index} className="bg-[#fff] h-[129px] w-full lg:w-[500px] rounded-2xl flex mb-2 ">
        <div className="relative bg-[#1B4134] h-[129px] w-[84px] flex justify-center items-center rounded-l-2xl">
          <img src={works.icon} alt="link" />

        </div>
        <div className=" p-4 text-left w-[296px] lg:w-full">
          <h1 className="text-[#1B4134] font-bold text-x" >{works.id}. {works.title}</h1>
          <p className=" text-[14px] lg:text-lg w-full text-[#5D706A]">{works.description}</p>
          
        </div>

      </div>
     
      
      )}
       </div>

    </div>

     <Image 
                    className="w-full"
                    width={816}
                    height={372}
                    src="/coming-soon.png"
                    alt="TradeGuard is coming soon"
                    priority
                    />
       </div>
    
  );
}
