"use client";
import { useState } from "react";
import { Switch } from "@headlessui/react";
import Image from "next/image";

// Define the plan structure and its types
const plans = [
  {
    heading: "Startup",
    price: {
      monthly: 19,
      yearly: 190,
    },
    user: "per user",
    features: {
      profiles: "5 Social Profiles",
      posts: "5 Scheduled Posts Per Profile",
      templates: "400+ Templated",
      view: "Calendar View",
      support: "24/7 Support",
    },
  },
  {
    heading: "Business",
    price: {
      monthly: 29,
      yearly: 290,
    },
    user: "per user",
    features: {
      profiles: "10 Social Profiles",
      posts: "5 Scheduled Posts Per Profile",
      templates: "600+ Templated",
      view: "Calendar View",
      support: "24/7 VIP Support",
    },
  },
  {
    heading: "Agency",
    price: {
      monthly: 59,
      yearly: 590,
    },
    user: "per user",
    features: {
      profiles: "100 Social Profiles",
      posts: "100 Scheduled Posts Per Profile",
      templates: "800+ Templated",
      view: "Calendar View",
      support: "24/7 VIP Support",
    },
  },
];

const Manage = () => {
  const [enabled, setEnabled] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<"yearly" | "monthly">("yearly");

  const toggleEnabled = () => {
    // Toggle the enabled state
    setEnabled((prevEnabled) => !prevEnabled);

    // Update selected category based on the switch position
    setSelectedCategory((prevCategory) => (prevCategory === "yearly" ? "monthly" : "yearly"));
  };

  const filteredData = plans.map((plan) => ({
    ...plan,
    price: plan.price[selectedCategory], // Use the selectedCategory to show either monthly or yearly
  }));

  return (
    <section id="services-section dark:bg-darkmode">
      <div className="mx-auto max-w-7xl">
        <h3 className="text-center text-6xl font-black mx-24">
          Manage All Your Social Media Profiles From One Place.
        </h3>

        <div className="md:flex md:justify-around mt-20">
          <div className="flex gap-5 justify-center md:justify-start">
            <Image src="/images/manage/right.svg" alt="right-icon" width={21} height={14} />
            <h4 className="text-18 font-semibold">Free 15-day trial</h4>
          </div>
          <div className="flex gap-5 justify-center md:justify-start">
            <Image src="/images/manage/right.svg" alt="right-icon" width={21} height={14} />
            <h4 className="text-18 font-semibold">Unlimited Team Members</h4>
          </div>
          <div className="flex gap-5 justify-center md:justify-start">
            <Image src="/images/manage/right.svg" alt="right-icon" width={21} height={14} />
            <h4 className="text-18 font-semibold">Cancel Anytime</h4>
          </div>
        </div>

        <div className="mt-6 relative">
          <div className="dance-text -ml-80 text-center -rotate-[10deg] mb-5">get 3 months free</div>
          <Image src="/images/manage/toggle.svg" alt="toggle-image" width={24} height={24} className="absolute left-[37%] top-8" />
          <div className="flex justify-center">
            <h3 className="text-14 font-medium mr-5">Billed Yearly</h3>
            <Switch
              checked={enabled}
              onChange={toggleEnabled}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-black"
            >
              <span className="sr-only">Toggle billing period</span>
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${enabled ? "translate-x-6" : "translate-x-1"}`}
              />
            </Switch>
            <h3 className="text-14 font-medium ml-5">Billed Monthly</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 gap-14 manage">
          {filteredData.map((items, i) => (
            <div className="shadow-manage-shadow border border-border text-center p-10" key={i}>
              <h4 className="text-2xl font-bold mb-3">{items.heading}</h4>
              <h2 className="text-6xl font-extrabold mb-3">${items.price}</h2>
              <p className="text-14 font-medium text-darkgrey mb-6">{items.user}</p>

              <button className="text-14 font-bold text-primary bg-transparent hover:bg-primary hover:text-white border-2 border-primary rounded-full py-4 px-12 mb-6">
                Start My 15-day Trial
              </button>
              {/* Map through the features object and render each key-value pair dynamically */}
              {Object.entries(items.features).map(([key, value]) => (
                <h3 className="text-sm font-medium text-darkgrey mb-3" key={key}>
                  {value}
                </h3>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Manage;
