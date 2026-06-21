import React from "react";
import SectionHeader from "../components/SectionHeader";
import Block from "../components/Block";

export default function ProjectPage() {
  return (
    <div>
      <SectionHeader title="my projects" />
      <Block className="">
        <div className="mx-auto max-w-5xl">
          {/* <!-- Header --> */}
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold">Our Features</h2>
            <p className="mt-2">Simple tools to help your business grow.</p>
          </div>

          {/* <!-- 3-Column Grid --> */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* <!-- Box 1 --> */}
            <div className="rounded-lg border p-6">
              <div className="mb-3 text-2xl">🚀</div>
              <h3 className="text-xl font-semibold">E-Commerce Platform</h3>
              <p className="mt-2">
                A modern online shopping platform with product management, user
                authentication, and secure transactions.
              </p>
            </div>

            {/* <!-- Box 2 --> */}
            <div className="rounded-lg border p-6">
              <div className="mb-3 text-2xl">🛡️</div>
              <h3 className="text-xl font-semibold">Digital Wallet System</h3>
              <p className="mt-2">
                A financial technology application concept with wallet
                management, transfers, and transaction tracking.
              </p>
            </div>

            {/* <!-- Box 3 --> */}
            <div className="rounded-lg border p-6">
              <div className="mb-3 text-2xl">📊</div>
              <h3 className="text-xl font-semibold">
                Business Website Projects
              </h3>
              <p className="mt-2">
                Developed responsive websites for businesses and personal
                brands.
              </p>
            </div>
          </div>
        </div>
      </Block>
    </div>
  );
}
