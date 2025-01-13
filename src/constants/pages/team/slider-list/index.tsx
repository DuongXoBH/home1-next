import Image from "next/image";

export const SLIDES = [
  {
    id: 1,
    content: (
      <div className="w-[80%] md:w-full md:max-w-[580px] flex flex-col items-center">
        <div className="w-[73px] h-[73px] rounded-full">
          <Image
            src="/team-images/slide-image.svg"
            alt=""
            width={73}
            height={73}
          />
        </div>
        <p className="w-full md:max-w-[544px] mt-[44px] text-sm text-center leading-5 tracking-[1.4px] font-normal text-custom-gray">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
          metus tincidunt laoreet ultricies condimentum ac integer aliquam.
          Lorem diam dignissim amet fermentum elementum dui dui. Aliquam sem
          elementum morbi imperdiet suscipit erat ut. Purus volutpat in turpis
          gravida blandit.
        </p>
        <Image
          className="mt-[36px]"
          src="/team-images/star.svg"
          alt=""
          width={170}
          height={25}
        />
      </div>
    ),
  },
  {
    id: 2,
    content: (
      <div className="w-[80%] md:w-full md:max-w-[580px] flex flex-col items-center">
        <div className="w-[73px] h-[73px] rounded-full">
          <Image
            src="/team-images/slide-image.svg"
            alt=""
            width={73}
            height={73}
          />
        </div>
        <p className="w-full md:max-w-[544px] mt-[44px] text-sm text-center leading-5 tracking-[1.4px] font-normal text-custom-gray">
          2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
          metus tincidunt laoreet ultricies condimentum ac integer aliquam.
          Lorem diam dignissim amet fermentum elementum dui dui. Aliquam sem
          elementum morbi imperdiet suscipit erat ut. Purus volutpat in turpis
          gravida blandit.
        </p>
        <Image
          className="mt-[36px]"
          src="/team-images/star.svg"
          alt=""
          width={170}
          height={25}
        />
      </div>
    ),
  },
  {
    id: 3,
    content: (
      <div className="w-[80%] md:w-full md:max-w-[580px] flex flex-col items-center">
        <div className="w-[73px] h-[73px] rounded-full">
          <Image
            src="/team-images/slide-image.svg"
            alt=""
            width={73}
            height={73}
          />
        </div>
        <p className="w-full md:max-w-[544px] mt-[44px] text-sm text-center leading-5 tracking-[1.4px] font-normal text-custom-gray">
          3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
          metus tincidunt laoreet ultricies condimentum ac integer aliquam.
          Lorem diam dignissim amet fermentum elementum dui dui. Aliquam sem
          elementum morbi imperdiet suscipit erat ut. Purus volutpat in turpis
          gravida blandit.
        </p>
        <Image
          className="mt-[36px]"
          src="/team-images/star.svg"
          alt=""
          width={170}
          height={25}
        />
      </div>
    ),
  },
];
