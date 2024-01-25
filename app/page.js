'use client';
import FeatureInfo from '@/components/FeatureInfo';
import Footer from '@/components/Footer';
import axios from 'axios';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');

  const addToWaitlist = async () => {
    try {
      const res = await axios.post('api-route/addToWaitlist', {
        email: email,
      });
      console.log(res?.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className=" bg-gradient-to-bl from-[#18153b] to-[#1d274b] relative">
      {/* Background */}
      <Image
        className="absolute"
        src={'/background.png'}
        alt="backgroud"
        fill
      />
      {/* Dots */}
      <b className="w-1 h-1 rounded-full bg-slate-400 absolute top-40 left-20" />
      <b className="w-1 h-1 rounded-full bg-slate-400 absolute top-40 left-60" />
      <b className="w-1 h-1 rounded-full bg-slate-400 absolute top-60 left-80" />
      <b className="w-1 h-1 rounded-full bg-slate-400 absolute top-40 right-20" />
      <b className="w-1 h-1 rounded-full bg-slate-400 absolute top-50 right-60" />
      <b className="w-1 h-1 rounded-full bg-slate-400 absolute top-30 right-30" />
      <b className="w-1 h-1 rounded-full bg-slate-400 absolute top-70 right-20" />
      <b className="w-1 h-1 rounded-full bg-slate-400 absolute bottom-20 left-50" />
      <b className="w-1 h-1 rounded-full bg-slate-400 absolute bottom-40 right-40" />
      <b className="w-1 h-1 rounded-full bg-slate-400 absolute bottom-20 left-20" />
      <b className="w-1 h-1 rounded-full bg-slate-400 absolute bottom-40 left-60" />

      <div className="text-center py-12 md:py-28">
        <p className="text-white text-2xl md:text-3xl">
          Compliance Management Redefined
        </p>
        <p className="bg-gradient-to-b from-white via-slate-400 to-slate-600 text-transparent bg-clip-text text-2xl md:text-3xl">
          Simple, Smart, Productive
        </p>
        <p className="text-[#9F9F9F] text-base md:text-lg ">
          Seamless workflows, Crafted by AI Innovation
        </p>
      </div>
      <div className="flex flex-col md:flex-row px-4 justify-center pb-12 gap-4 relative z-10">
        <input
          className="outline-none bg-transparent w-full md:w-80 text-white placeholder:text-[#9F9F9F] border border-white rounded p-2"
          placeholder="Company Email ID"
          onChange={(e) => setEmail(e.target.value)} //handling input change
          value={email}
        />
        <button
          className="rounded bg-white px-4 py-2 text-[#34416B]"
          onClick={() => addToWaitlist()}
        >
          Join Waitlist
        </button>
      </div>
      <div className="text-center">
        <p className="pb-2 text-base md:text-lg text-[#9F9F9F]">
          Secure a competitive advantage in
        </p>
      </div>
      <div className="flex flex-col text-center md:flex-row md:justify-between pb-20 md:pb-32 px-20">
        <p className="inline-block text-2xl md:text-3xl font-bold bg-gradient-to-r from-  via-slate-500 to-slate-400 text-transparent bg-clip-text">
          Banking
        </p>
        <p className="inline-block text-2xl md:text-3xl font-bold bg-gradient-to-r from-slate-700 via-slate-400 to-slate-200 text-transparent bg-clip-text">
          Legal Services
        </p>{' '}
        <p className="inline-block text-2xl md:text-3xl font-bold text-white">
          Education
        </p>{' '}
        <p className="inline-block text-2xl md:text-3xl font-bold bg-gradient-to-r from-slate-200 via-slate-400 to-slate-700 text-transparent bg-clip-text">
          Healthcare
        </p>{' '}
        <p className="inline-block text-2xl md:text-3xl font-bold bg-gradient-to-r from-slate-400 via-slate-500 to- text-transparent bg-clip-text">
          Telecomm
        </p>
      </div>
      <div className="flex justify-center">
        <p className="text-[#9F9F9F] text-2xl md:text-3xl">
          Understand Our Mission
        </p>
      </div>
      <div className="flex justify-center">
        <Image
          src={'/video.png'}
          width={800}
          height={600}
          alt="video"
          className="object-cover w-full md:w-auto md:object-none z-10"
        />
      </div>
      {/* shadow */}

      <div className="flex flex-col md:flex-row justify-between gap-8 py-8 md:py-16 px-4 md:px-20">
        <FeatureInfo
          icon={'/icon1.png'}
          title={'Intuitive Dashboard'}
          content={
            'User-friendly interface providing seamless navigation and effortlessly accessible data insights facilitating a streamlined workflow.'
          }
        />
        <FeatureInfo
          icon={'/icon2.png'}
          title={'Accurate Risk Assessment'}
          content={
            'Analyzing uncertainties and severity of regulations and circulars to safeguard operations and enhance proactive decision-making.'
          }
        />
        <FeatureInfo
          icon={'/icon3.png'}
          title={'Compliance Co-Pilot'}
          content={
            'Navigating regulatory landscapes with precision and ease, your trusted partner in ensuring adherence to industry standards.'
          }
        />
      </div>
      <Footer />
    </div>
  );
}
