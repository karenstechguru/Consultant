import React from 'react';
import { SlBadge } from 'react-icons/sl';
import { FaFilePrescription } from 'react-icons/fa';
import { BiCommentDetail } from 'react-icons/bi';
import Corousal from './Corousal';
import { FaCircleChevronRight } from 'react-icons/fa6';
import { LuMousePointerClick } from 'react-icons/lu';
import { GoCommentDiscussion } from 'react-icons/go';
import { PiPrescription } from 'react-icons/pi';

function About() {
  return (
    <main>
      {/* Hero Section */}
      <section
        className="w-full h-[500px] bg-[url('https://i.ibb.co/2jssjLZ/gilles-lambert-pb-l-F8-VWa-PU-unsplash.jpg')] bg-cover bg-center relative"
        aria-label="Hero Section"
      >
        <div className="absolute top-44 left-[3%]">
          <h1 className="text-5xl text-white font-bold">
            With Pocket Pal you can
          </h1>
          <h1 className="text-5xl text-white font-bold mt-4">
            Talk to anyone anonymously
          </h1>
          <p className="text-2xl text-white mt-6">
            Private consultation + Video call for a little fee
          </p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded mt-6 transition-all duration-300"
            aria-label="Consult Now"
          >
            Consult Now
          </button>
          <div className="flex w-[90%] justify-between font-medium mt-10">
            <p className="flex items-center text-white">
              <SlBadge className="mr-2" />
              Verified Consultants
            </p>
            <p className="flex items-center text-white">
              <FaFilePrescription className="mr-2" />
              Digital Prescription for medical issues
            </p>
            <p className="flex items-center text-white">
              <BiCommentDetail className="mr-2" />
              Free spiritual Consultations
            </p>
          </div>
        </div>
      </section>

      {/* Common Health Concerns */}
      <section className="relative top-16 px-[3%]" aria-label="Common Health Concerns">
        <h2 className="text-3xl font-semibold">Common Health Concerns</h2>
        <p className="text-lg text-gray-500 mt-2">
          A consultant online for any conversation
        </p>
        <div className="mt-8">
          <Corousal />
        </div>
      </section>

      {/* Offers Section */}
      <section className="relative top-16 px-[3%] mt-16" aria-label="Offers">
        <h2 className="text-3xl font-semibold">Offers</h2>
        <div className="flex flex-wrap gap-6 mt-10">
          <div className="w-full md:w-[48%] h-56 bg-green-300 flex rounded shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-[90%]">
              <p className="bg-white py-1 text-green-500 w-max mt-4 ml-4 font-medium px-3">
                OFFER
              </p>
              <p className="text-3xl font-semibold ml-4 mt-4">
                Download the App & get
              </p>
              <p className="text-3xl font-semibold ml-4">$200 AppCash</p>
              <p className="text-xl font-semibold ml-4 flex mt-4">
                Download App
                <FaCircleChevronRight className="ml-2 mt-1.5" />
              </p>
            </div>
            <div className="grid place-items-end justify-end">
              <img
                src="https://www.practo.com/consult/static/images/offer-app-v1.png"
                alt="App Download Offer"
                width="100"
                height="90"
              />
            </div>
          </div>
          <div className="w-full md:w-[48%] h-56 bg-orange-300 flex rounded shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-[90%]">
              <p className="bg-white py-1 text-orange-500 w-max mt-4 ml-4 font-medium px-3">
                OFFER
              </p>
              <p className="text-3xl font-semibold ml-4 mt-4">
                Consult with specialists at
              </p>
              <p className="text-3xl font-semibold ml-4">just $199</p>
              <p className="text-xl font-semibold ml-4 flex mt-4">
                Consult Now
                <FaCircleChevronRight className="ml-2 mt-1.5" />
              </p>
            </div>
            <div className="grid place-items-end justify-end">
              <img
                src="https://www.practo.com/consult/static/images/offer-specialist-v1.png"
                alt="Specialist Consultation Offer"
                width="100"
                height="90"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="grid place-items-center mt-32 px-[3%]" aria-label="How It Works">
        <h2 className="text-4xl font-semibold">How it works</h2>
        <div className="flex mt-16">
          <div className="text-center">
            <LuMousePointerClick
              size={70}
              className="bg-gray-200 rounded-full p-4 mx-auto"
            />
            <p className="mt-4">Select a specialty or Service</p>
          </div>
          <hr className="border-gray-200 mt-9 border-2 w-24 mx-4" />
          <div className="text-center">
            <GoCommentDiscussion
              size={70}
              className="bg-gray-200 rounded-full p-4 mx-auto"
            />
            <p className="mt-4">Audio/video call with a verified consultant</p>
          </div>
          <hr className="border-gray-200 mt-9 border-2 w-24 mx-4" />
          <div className="text-center">
            <PiPrescription
              size={70}
              className="bg-gray-200 rounded-full p-4 mx-auto"
            />
            <p className="mt-4">Get a digital prescription & a free follow-up</p>
          </div>
        </div>
      </section>

      {/* User Metrics */}
      <section
        className="w-full h-32 bg-slate-900 text-white flex justify-evenly items-center mt-32"
        aria-label="User Metrics"
      >
        <div className="text-center">
          <p className="text-3xl font-semibold">2,00,000+</p>
          <p className="text-lg font-semibold">Happy Users</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-semibold">20,000+</p>
          <p className="text-lg font-semibold">Verified Consultants</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-semibold">25+</p>
          <p className="text-lg font-semibold">Specialties</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-semibold">4.5 / 5</p>
          <p className="text-lg font-semibold">App Rating</p>
        </div>
      </section>
    </main>
  );
}

export default About;
