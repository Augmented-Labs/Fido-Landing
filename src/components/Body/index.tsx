import React from "react";

type Props = {};

const Body = (props: Props) => {
  return (
    <div className="h-full pt-14 pb-20">
      <div className="w-full flex justify-center items-center container mx-auto px-4 flex-col">
        <div className="text-5xl font-bold">{`Fido's Toolkit`}</div>
        <div className="font-light max-w-md text-center mt-4">
          A suite of tools to bring your CX stack to the next level
        </div>
      </div>
      <div className="container mx-auto px-12 lg:mt-32 mt-24">
        {/* feature 1 */}
        <div className="flex items-center justify-between lg:flex-row flex-col-reverse">
          <div className="flex flex-col">
            <div className="lg:max-w-md text-center lg:text-left mt-8 lg:mt-0">
              <div className="text-5xl font-bold">Ticket Assist</div>
              <div className="mt-4">
                {`Let us automatically generate responses to tickets (using knowledege
          base + previous tickets) so your agents only need to approve them`}
              </div>
            </div>
          </div>
          <div className="bg-primary lg:w-1/2 p-5 shadow-2xl">
            <div className="">
              <img src="/feature1.png" alt="feature1" />
            </div>
          </div>
        </div>
        {/* feature 2*/}
        <div className="mt-24 flex items-center justify-between lg:flex-row flex-col">
          <div className="bg-primary lg:w-1/2 p-5 shadow-2xl">
            <img src="/feature2.gif" alt="feature2" />
          </div>
          <div className="flex flex-col">
            <div className="lg:max-w-md text-center lg:text-left mt-8 lg:mt-0">
              <div className="text-5xl font-bold">Self Write</div>
              <div className="mt-4">
                {`Our AI will process your tickets and turn them into knowlege base articles using redudant ticket requests => to decrease inbound tickets`}
              </div>
            </div>
          </div>
        </div>

        {/* feature 3*/}
        <div className="mt-24 flex items-center justify-between lg:flex-row flex-col-reverse">
          <div className="flex flex-col">
            <div className="lg:max-w-md text-center lg:text-left mt-8 lg:mt-0">
              <div className="text-5xl font-bold">AI Prioritzation</div>
              <div className="mt-4">
                {`Prioritzation of tickets will help keep your first repsonse rate low `}
              </div>
            </div>
          </div>
          <div className="bg-primary lg:w-1/2 p-5 shadow-2xl">
            <div className="">
              <img src="/feature3.png" alt="feature1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
