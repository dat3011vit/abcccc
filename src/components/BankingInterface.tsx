// import React from 'react';
import {
  CircleDollarSign,
  FileText,
  Settings,
  CreditCard,
  Send,
  Landmark,
  Star,
  //   Calendar,
} from "lucide-react";
import bmoLogo from "../assets/logo.png"; // Sửa lại đường dẫn theo cấu trúc thư mục của bạn
import TransactionList from "./TransactionList";
import zelleLogo from "../assets/zelle-logo.png"; // Import ảnh
import StickyHeader from "./StickyHeader";

const BankingInterface = () => {
  // Get current date
  //   const today = new Date();
  //   const dateOptions: Intl.DateTimeFormatOptions = {
  //     weekday: "long",
  //     year: "numeric",
  //     month: "long",
  //     day: "numeric",
  //   };
  //   const formattedDate = today.toLocaleDateString("en-US", dateOptions);

  return (
    <div className="max-w-md mx-auto min-h-screen">
      <StickyHeader bmoLogo={bmoLogo} />

      {/* Welcome Section */}
      {/* <div
        className="text-white p-4 pb-8 rounded-b-2xl"
        style={{ backgroundColor: "#0079C2" }}
      >
        <h1 className="text-2xl mb-2">Good morning, Hey Money Corp</h1>
        <div className="flex items-center text-sm opacity-80">
          <Calendar size={16} className="mr-2" />
          <span>Today is {formattedDate}</span>
        </div>
      </div> */}

      {/* Quick Actions Section
            <div className="px-4 -mt-6 relative z-10">
                <div className="bg-white rounded-lg p-4 shadow-lg">
                    <h2 className="text-sm font-semibold mb-4">QUICK ACTIONS</h2>
                    <div className="flex justify-between items-center">
                        <div className="flex flex-col items-center">
                            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-2">
                                <RotateCw className="text-customBlue" size={24} />



                            </div>
                            <span className="text-xs text-center">BMO CreditView</span>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-2">
                                <Send className="text-customBlue" size={24} />
                            </div>
                            <span className="text-xs text-center">Send money with Zelle</span>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-2">
                                <FileText className="text-customBlue" size={24} />
                            </div>
                            <span className="text-xs text-center">Legal</span>
                        </div>
                    </div>
                </div>
            </div> */}

      {/* Account Section */}
      <div className="p-4 rounded" style={{ backgroundColor: "#f5f6f8" }}>
        {" "}
        <h2 className="text-xl font-semibold mb-2">Business Account</h2>
        <p className="text-gray-600 mb-1">Primary Business Chequing Account</p>
        <p className="text-gray-600 mb-4">1 (415) 555-2715</p>
        <h1 className="text-3xl font-medium mb-6">$251,199.75</h1>
        {/* Action Buttons */}
        <div
          className="grid grid-cols-3 gap-4 mb-4 px-4 py-2 pt-4 rounded overflow-x-auto"
          style={{ backgroundColor: "rgb(245 246 248)" }}
        >
          <div className="flex justify-center">
            <button className="flex flex-col items-center text-customBlue">
              <Send className="mb-1" size={28} strokeWidth={2} />{" "}
              {/* Tăng size và độ dày của icon */}
              <div className="flex flex-col items-center mt-1 text-sm font-medium">
                {" "}
                {/* Thêm font-medium */}
                <span>TRANSFER WITH</span>
                <img
                  src={zelleLogo}
                  alt="Zelle Logo"
                  className="h-4 mt-1 w-auto"
                />
              </div>
            </button>
          </div>

          <div className="flex justify-center">
            <button className="flex flex-col items-center text-customBlue">
              <FileText className="mb-1" size={28} strokeWidth={2} />{" "}
              {/* Tăng size và độ dày của icon */}
              <span className="text-sm mt-3 font-medium">PAY BILL</span>{" "}
              {/* Thêm font-medium */}
            </button>
          </div>

          <div className="flex justify-center">
            <button className="flex flex-col items-center text-customBlue">
              <Settings className="mb-1" size={28} strokeWidth={2} />{" "}
              {/* Tăng size và độ dày của icon */}
              <span className="text-sm mt-3 font-medium">MANAGE</span>{" "}
              {/* Thêm font-medium */}
            </button>
          </div>
        </div>
        {/* Tabs */}
        <div className="border-b mb-4">
          <div className="flex gap-4">
            <button className="px-4 py-2 border-b-2 border-customBlue font-medium">
              Overview
            </button>
            <button className="px-4 py-2 text-gray-500">Statements</button>
          </div>
        </div>
        {/* Transactions Section */}
        <div className="mb-20">
          {/* {" "} */}
          {/* Added margin bottom for fixed navigation */}

          <div className="bg-white  shadow-md p-0 pb-1 rounded-md">
            <div className="flex justify-start gap mb-4">
              {/* Button: Transactions */}
              <button className="flex-1 bg-customBlue text-white border border-customBlue p-5 text-center shadow-sm font-medium">
                Transactions
              </button>

              {/* Button: Account Details */}
              <button className="flex-1 bg-white  text-[grey] border border-gray-300  p-5 text-center shadow-sm font-medium">
                Account details
              </button>
            </div>
            {/* Filter Button */}
            <div>
              <button className="flex  items-center text-customBlue border border-customBlue rounded-lg p-2 px-4 shadow-sm mb-3 font-bold">
                <FileText size={20} className="mr-2 " />
                FILTER
              </button>
            </div>
            {/* Transaction Items */}
          </div>
          <TransactionList />
        </div>
        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t py-3 pb-6 ">
          <div className="flex justify-center gap-8">
            {" "}
            {/* Thay justify-around bằng justify-center và thêm gap */}
            <button className="flex flex-col items-center text-customBlue font-semibold">
              <CreditCard size={23} className="text-customBlue" />
              <span className="text-sm">Accounts</span>
            </button>
            <button className="flex flex-col items-center text-gray-500 font-semibold">
              <CircleDollarSign size={23} className="text-gray-500" />
              <span className="text-sm">Pay & Transfer</span>
            </button>
            <button className="flex flex-col items-center text-gray-500 font-semibold">
              <Landmark size={23} className="text-gray-500" />
              <span className="text-sm">Bank services</span>
            </button>
            <button className="flex flex-col items-center text-gray-500 font-semibold">
              <Star size={23} className="text-gray-500" />
              <span className="text-sm">Offers</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankingInterface;
