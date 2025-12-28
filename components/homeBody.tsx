import { blogs } from "@/app/blog/blogs";
import { Button } from "@heroui/button";

interface Props {
  pageType?: "silver" | "gold" | "palladium" | "platinum";
}

export const HomeBody = ({ pageType }: Props) => {
  return (
    <div>
      <div className=" lg:hidden flex flex-col gap-y-4 w-full items-center justify-center px-5">
        <span className="text-3xl font-bold bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
          กราฟตอนนี้
        </span>
        <iframe
          src={
            pageType === "silver"
              ? "https://s.tradingview.com/widgetembed/?frameElementId=tradingview_8d6d1&symbol=FOREXCOM%3AXAGUSD&interval=1&hidesidetoolbar=1&symboledit=1&saveimage=1&toolbarbg=0a0a0a&studies=[]&theme=dark&style=1&timezone=Asia%2FBangkok&studies_overrides={}&overrides={}&enabled_features=[]&disabled_features=[]&locale=th"
              : pageType === "palladium"
                ? "https://s.tradingview.com/widgetembed/?frameElementId=tradingview_palladium&symbol=OANDA%3AXPDUSD&interval=1&hidesidetoolbar=1&symboledit=1&saveimage=1&toolbarbg=0a0a0a&studies=[]&theme=dark&style=1&timezone=Asia%2FBangkok&studies_overrides={}&overrides={}&enabled_features=[]&disabled_features=[]&locale=th"
                : pageType === "platinum"
                  ? "https://s.tradingview.com/widgetembed/?frameElementId=tradingview_platinum&symbol=OANDA%3AXPTUSD&interval=1&hidesidetoolbar=1&symboledit=1&saveimage=1&toolbarbg=0a0a0a&studies=[]&theme=dark&style=1&timezone=Asia%2FBangkok&studies_overrides={}&overrides={}&enabled_features=[]&disabled_features=[]&locale=th"
                  : "https://s.tradingview.com/widgetembed/?frameElementId=tradingview_8d6d1&symbol=FOREXCOM%3AXAUUSD&interval=1&hidesidetoolbar=1&symboledit=1&saveimage=1&toolbarbg=0a0a0a&studies=[]&theme=dark&style=1&timezone=Asia%2FBangkok&studies_overrides={}&overrides={}&enabled_features=[]&disabled_features=[]&locale=th"
          }
          className=" flex w-full rounded-3xl lg:w-1/2 pointer-events-none"
          height="500"
          scrolling="no"
        ></iframe>
      </div>

      <div className="relative flex w-full py-16 bg-white/5 mt-10 flex-col items-center px-5">
        <div className="absolute top-0 left-0 w-full h-10 bg-gradient-to-t from-transparent to-black" />

        <div className=" flex flex-col w-full lg:w-1/2 gap-y-4">
          {blogs.map((i, index) => (
            <div
              key={index}
              className=" flex flex-col xl:flex-row rounded-2xl backdrop-blur-xl border border-white/20 bg-gradient-to-b from-white/5 to-white/10 items-center justify-center "
            >
              <img
                className=" max-xl:h-72 h-full max-xl:w-full w-96 object-cover rounded-xl"
                alt="fischer"
                src={i.img}
              />

              <div className=" flex flex-col items-start justify-center py-4 px-4 gap-y-2">
                <span className=" text-xl font-bold bg-gradient-to-b from-yellow-300 to-yellow-700 bg-clip-text text-transparent">
                  {i.title}
                </span>
                <span className=" w-full h-full text-sm whitespace-pre-line ">
                  {i.description}
                </span>
                {/* <Button
                  className="  font-bold backdrop-blur-xl border border-white/20 bg-gradient-to-b from-transparent to-yellow-500/50"
                  onPress={() => handleSetBlog(index)}
                >
                  อ่านเพิ่มเติม
                </Button> */}
              </div>
            </div>
          ))}
        </div>

        <div className=" w-full lg:w-1/2 mt-20 md:mt-32  flex items-center justify-center flex-col">
          <span className="  text-3xl bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent font-bold mb-10">
            พิกัดร้าน
          </span>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3947.1980959705934!2d99.97121899999999!3d8.3821668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x305301950747b7f7%3A0xc255668f6dd245aa!2sAmulet%20market!5e0!3m2!1sen!2sth!4v1766925072117!5m2!1sen!2sth"
            width="600"
            height="450"
            loading="lazy"
            className=" rounded-3xl w-full pointer-events-none"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
