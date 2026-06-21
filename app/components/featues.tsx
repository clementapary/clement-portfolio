import React from "react";
import Block from "./Block";

export default function Featues() {
  return (
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
            <h3 className="text-xl font-semibold">Fast Setup</h3>
            <p className="mt-2">
              Launch your platform instantly with zero complex configurations.
            </p>
          </div>

          {/* <!-- Box 2 --> */}
          <div className="rounded-lg border p-6">
            <div className="mb-3 text-2xl">🛡️</div>
            <h3 className="text-xl font-semibold">Secure</h3>
            <p className="mt-2">
              Your data is safe with top-tier, enterprise-grade encryption.
            </p>
          </div>

          {/* <!-- Box 3 --> */}
          <div className="rounded-lg border p-6">
            <div className="mb-3 text-2xl">📊</div>
            <h3 className="text-xl font-semibold">Analytics</h3>
            <p className="mt-2">
              Track your daily progress and statistics in real time.
            </p>
          </div>
        </div>
      </div>
    </Block>
  );
}
