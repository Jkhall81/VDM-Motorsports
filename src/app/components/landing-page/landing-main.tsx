import Image from "next/image";

export const LandingMain = () => {
  return (
    <div className="w-full min-h-[calc(100vh-5rem)] flex">
      <div className="bg-purple-400 w-[800px] h-[400px] absolute z-[1] left-[600px] top-[250px] opacity-90" />
      <div className="bg-fuchsia-600 absolute w-[400px] h-[100px] right-[100px] opacity-70" />
      {/* Left Container */}
      <div className=" w-[50%]">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-center pt-[80px] ml-[200px]">
            <Image
              src="/stock-4.jpg"
              alt="white bmw e30"
              className="object-cover z-[30]"
              height={400}
              width={600}
            />
          </div>
          <div className="flex flex-col items-start justify-center mt-[200px] mr-[200px] pl-[50px] z-[30]">
            <span className="text-6xl">
              <strong className="bg-gradient-to-r from-purple-300 to-fuchsia-700 bg-clip-text text-transparent">
                VDM
              </strong>{" "}
              Motorsports
            </span>
            <p className="text-muted-foreground pt-10 text-wrap">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint ab
              laboriosam ipsa aliquam, earum nostrum.
            </p>
          </div>
        </div>
      </div>
      {/* Right Container */}
      <div className=" w-[50%]">
        <div className="flex flex-col h-full">
          <div className="w-full h-[20%]" />
          <div className="w-full h-[80%] flex justify-center items-center">
            <Image
              src="/stock-2.jpg"
              className="object-cover z-[30]"
              alt="bmw e30"
              height={900}
              width={900}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
