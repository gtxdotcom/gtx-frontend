"use client";
import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "@/context/AddContext";

const Wallet = () => {
  const appContext = useContext(AuthContext);
  useEffect(() => {
    appContext.setNavbarState(true);
  }, []);

  const data = [
    {
      icon: "/images/market-icon/BTC.png",
      type: "BTC",
      name: "Bitcoin",
      price: "USD 53,260,20",
      change: 0.25,
      graph: "/images/market-graph/BTC.png",
    },
    {
      icon: "/images/market-icon/ETH.png",
      type: "ETH",
      name: "Ethereum",
      price: "USD 53,260,20",
      change: -4.51,
      graph: "/images/market-graph/ETH.png",
    },
    {
      icon: "/images/market-icon/BTC.png",
      type: "BTC",
      name: "Bitcoin",
      price: "USD 53,260,20",
      change: 0.25,
      graph: "/images/market-graph/BTC.png",
    },
    {
      icon: "/images/market-icon/ETH.png",
      type: "ETH",
      name: "Ethereum",
      price: "USD 53,260,20",
      change: -4.51,
      graph: "/images/market-graph/ETH.png",
    },
    {
      icon: "/images/market-icon/BTC.png",
      type: "BTC",
      name: "Bitcoin",
      price: "USD 53,260,20",
      change: 0.25,
      graph: "/images/market-graph/BTC.png",
    },
    {
      icon: "/images/market-icon/ETH.png",
      type: "ETH",
      name: "Ethereum",
      price: "USD 53,260,20",
      change: -4.51,
      graph: "/images/market-graph/ETH.png",
    },
    {
      icon: "/images/market-icon/BTC.png",
      type: "BTC",
      name: "Bitcoin",
      price: "USD 53,260,20",
      change: 0.25,
      graph: "/images/market-graph/BTC.png",
    },
    {
      icon: "/images/market-icon/ETH.png",
      type: "ETH",
      name: "Ethereum",
      price: "USD 53,260,20",
      change: -4.51,
      graph: "/images/market-graph/ETH.png",
    },
    {
      icon: "/images/market-icon/BTC.png",
      type: "BTC",
      name: "Bitcoin",
      price: "USD 53,260,20",
      change: 0.25,
      graph: "/images/market-graph/BTC.png",
    },
    {
      icon: "/images/market-icon/ETH.png",
      type: "ETH",
      name: "Ethereum",
      price: "USD 53,260,20",
      change: -4.51,
      graph: "/images/market-graph/ETH.png",
    },
    {
      icon: "/images/market-icon/BTC.png",
      type: "BTC",
      name: "Bitcoin",
      price: "USD 53,260,20",
      change: 0.25,
      graph: "/images/market-graph/BTC.png",
    },
    {
      icon: "/images/market-icon/ETH.png",
      type: "ETH",
      name: "Ethereum",
      price: "USD 53,260,20",
      change: -4.51,
      graph: "/images/market-graph/ETH.png",
    },
    {
      icon: "/images/market-icon/BTC.png",
      type: "BTC",
      name: "Bitcoin",
      price: "USD 53,260,20",
      change: 0.25,
      graph: "/images/market-graph/BTC.png",
    },
    {
      icon: "/images/market-icon/ETH.png",
      type: "ETH",
      name: "Ethereum",
      price: "USD 53,260,20",
      change: -4.51,
      graph: "/images/market-graph/ETH.png",
    },
  ];

  const summary = [
    {
      type: "BTC",
      description: "Total Balance",
      price: 0.2133214214,
      usd: 3230.98,
      change: -0.25,
    },
  ];

  const [selectedSummary, setSummary] = useState(summary[0]);

  return (
    <div className="flex flex-row w-full h-[885px] bg-[#000] px-11 pb-7">
      <div className="flex flex-col w-1/4 h-full pr-7">
        <div className="flex flex-col w-full h-full">
          <div className="flex flex-col w-full h-1/4 rounded-xl mb-4 px-6 py-4 border-2 border-[#246CF9]">
            <div className="flex flex-row justify-between items-center mb-4">
              <div className="flex flex-row">
                <img src="/images/market-icon/BTC.png" />
                <div className="px-5 text-white">BTC</div>
              </div>
              <div className="text-[#11CABE]">0.25%</div>
            </div>
            <div className="text-[25px] text-white mb-2">0.2133214214</div>
            <div className="text-[#A5ADCF] text-base">3,230.98 USD</div>
            <img src="/images/wallet-icon/BTC.png" />
          </div>
          <div className="flex flex-col w-full h-1/4 rounded-xl mb-4 px-6 py-4 bg-[#1E1F25]">
            <div className="flex flex-row justify-between items-center mb-4">
              <div className="flex flex-row">
                <img src="/images/market-icon/BTC.png" />
                <div className="px-5">BTC</div>
              </div>
              <div className="text-[#11CABE]">0.25%</div>
            </div>
            <div className="text-[25px] text-white mb-2">0.2133214214</div>
            <div className="text-[#A5ADCF] text-base">3,230.98 USD</div>
            <img src="/images/wallet-icon/BTC.png" />
          </div>
          <div className="flex flex-col w-full h-1/4 rounded-xl mb-4 px-6 py-4 bg-[#1E1F25]">
            <div className="flex flex-row justify-between items-center mb-4">
              <div className="flex flex-row">
                <img src="/images/market-icon/BTC.png" />
                <div className="px-5">BTC</div>
              </div>
              <div className="text-[#11CABE]">0.25%</div>
            </div>
            <div className="text-[25px] text-white mb-2">0.2133214214</div>
            <div className="text-[#A5ADCF] text-base">3,230.98 USD</div>
            <img src="/images/wallet-icon/BTC.png" />
          </div>
          <div className="flex flex-col justify-center w-full h-full rounded-xl border-2 border-[#34384C] border-dashed">
            <button className="flex justify-center">
              <img src="/images/wallet-icon/Add Button.png" />
            </button>
            <div className="flex justify-center text-[#A5ADCF] mt-2">
              Add New Wallet
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full h-full">
        <div className="flex flex-row w-full h-1/3 bg-[#1E1F25] rounded-xl mb-4 p-8">
          <div className="flex flex-col justify-between w-2/5 h-full border-r-[1px] border-[#34384C]">
            <div className="flex flex-row items-center">
              <img src="/images/wallet-icon/Bitcoin.png" />
              <div className="text-white mx-3">{selectedSummary.type}</div>
            </div>
            <div className="text-[#5D6588] text-base">
              {selectedSummary.description}
            </div>
            <div className="text-white text-[39px]">
              {selectedSummary.price}
            </div>
            <div className="text-[#A5ADCF] text-[25px] mb-3">{`${selectedSummary.usd} USD`}</div>
            <div className="flex flex-row text-white text-[14px]">
              <button className="bg-[#246CF9] rounded-full border-2 p-2 mr-2">
                Withdraw
              </button>
              <button className="rounded-full border-2 p-2">Deposit</button>
            </div>
          </div>
          <div className="flex flex-col w-full h-full pl-[68px]">
            <div className="flex flex-col w-full h-1/2">
              <div className="flex flex-row justify-between w-full h-full">
                <div className="flex flex-col w-1/3 h-full">
                  <div className="text-[#5D6588] text-base">
                    Exchange Balance
                  </div>
                  <div className="text-white text-[25px]">0.213435345</div>
                  <div className="text-[#11CABE] text-[18px]">3,897.98 USD</div>
                </div>
                <div className="flex flex-col justify-end w-1/3 h-full">
                  <img
                    className="flex w-full h-full"
                    src="/images/wallet-icon/graph-top.png"
                  />
                  <div className="flex justify-end">+0.55%</div>
                </div>
              </div>
              <div className="flex w-full h-[8px]">
                <img
                  className="w-full h-full"
                  src="/images/wallet-icon/slide-bar.jpg"
                />
              </div>
            </div>
            <div className="flex flex-col w-full h-1/2">
              <div className="flex flex-row justify-between w-full h-full">
                <div className="flex flex-col w-1/3 h-full">
                  <div className="text-[#5D6588] text-base">
                    Exchange Balance
                  </div>
                  <div className="text-white text-[25px]">0.213435345</div>
                  <div className="text-[#11CABE] text-[18px]">3,897.98 USD</div>
                </div>
                <div className="flex flex-col justify-end w-1/3 h-full">
                  <img
                    className="flex w-full h-full"
                    src="/images/wallet-icon/graph-top.png"
                  />
                  <div className="flex justify-end">+0.55%</div>
                </div>
              </div>
              <div className="flex w-full h-[8px]">
                <img
                  className="w-full h-full"
                  src="/images/wallet-icon/slide-bar.jpg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row w-full h-2/3 rounded-xl bg-[#1E1F25] p-6">
          <table className="w-full flex flex-col h-full text-white">
            <thead className="flex flex-col w-full">
              <tr className="flex flex-row w-full justify-between h-20 border-b-2 py-7">
                <td className="w-[20%]">Assets</td>
                <td className="w-[16%]">On Orders</td>
                <td className="w-[16%]">Avaliable Balance</td>
                <td className="w-[16%]">Total Balance</td>
                <td className="w-1/10">Change</td>
                <td className="w-1/10">Trade</td>
              </tr>
            </thead>
            <tbody className="flex flex-col w-full overflow-auto">
              {data.map((item, index) => (
                <tr key={index} className="flex flex-row w-full justify-between items-center h-20 py-7">
                  <td className="flex flex-row py-2 w-[20%]">
                    <div className="pr-4">
                      <img src={item.icon} />
                    </div>
                    <div className="pr-9">{item.type}</div>
                    <div>{item.name}</div>
                  </td>
                  <td className="w-[16%]">
                    <div className="w-full">{item.price}</div>
                  </td>
                  <td className="w-[16%]">
                    <div className="w-full">{item.price}</div>
                  </td>
                  <td className="w-[16%]">
                    <div className="w-full">{item.price}</div>
                  </td>
                  <td className="w-1/10">
                    <div
                      className={`${
                        item.change > 0 ? "text-[#30E0A1]" : "text-[#FA2256]"
                      } w-full`}
                    >
                      {Math.abs(item.change) + "%"}
                    </div>
                  </td>
                  <td className="w-1/10">
                    <button className="rounded-full border-2 border-[#246CF9] px-4 py-2">
                      Buy
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
