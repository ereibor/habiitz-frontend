import React from "react";

const DashboardPreviewSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
            Everything you need to build better habits
          </h2>
          <p className="text-gray-500 text-base max-w-lg mx-auto">
            A beautiful dashboard that makes tracking your daily routines
            effortless and even enjoyable
          </p>
        </div>

        {/* Browser frame mockup */}
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl shadow-2xl shadow-gray-300/40 border border-gray-200 overflow-hidden bg-white">
            {/* Browser chrome */}

            <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b border-gray-200">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>

              <div className="flex-1 mx-4">
                <div className="bg-white rounded-md px-3 py-1 text-xs text-gray-400 max-w-xs mx-auto text-center border border-gray-200">
                  Habiitz
                </div>
              </div>
            </div>

            {/* Dasboard Preview */}

            <div className="bg-gray-50 p-4 md:p-6">
              <div className="flex gap">
                {/* Mini Sidebar */}
                <div className="hidden md:flex flex-col gap-3 w-12 bg-white rounded-xl p-2 border border-gray-100">
                  <div className="w-8 h-8 rounded-lg bg-linear-to-br from-sky-500 to-blue-500 mx-auto" />
                  <div className="w-8 h-8 rounded-lg bg-blue-50 mx-auto" />
                  <div className="w-8 h-8 rounded-lg bg-gray-50 mx-auto" />
                  <div className="w-8 h-8 rounded-lg bg-gray-50 mx-auto" />
                </div>

                {/* Main Content */}
                <div className="flex-1 bg-white rounded-xl border border-gray-100 p-4 md:p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="h-4 w-40 bg-gray-200 rounded mb-1.5" />
                      <div className="h-3 w-28 bg-gray-100 rounded" />
                    </div>
                    <div className="h-8 w-24 bg-blue-50 rounded-lg" />
                  </div>

                  {/* Fake tab bar */}
                  <div className="flex gap-1 mb-4">
                    <div className="h-7 w-14 bg-white border border-gray-200 rounded-md" />
                    <div className="h-7 w-16 bg-gray-100 rounded-md" />
                    <div className="h-7 w-12 bg-gray-100 rounded-md" />
                    <div className="h-7 w-16 bg-gray-100 rounded-md" />
                  </div>

                  {/* Fake Grid */}
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-orange-400" />
                      <span className="text-[10px] text-gray-500 w-12">
                        Read
                      </span>

                      <div className="flex gap-1.5">
                        <div className="w-6 h-6 rounded bg-orange-400" />
                        <div className="w-6 h-6 rounded bg-orange-400/20" />
                        <div className="w-6 h-6 rounded bg-orange-400" />
                        <div className="w-6 h-6 rounded bg-orange-400" />
                        <div className="w-6 h-6 rounded bg-orange-400/20" />
                        <div className="w-6 h-6 rounded bg-orange-400" />
                        <div className="w-6 h-6 rounded bg-orange-400" />
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-violet-500" />
                      <span className="text-[10px] text-gray-500 w-12">
                        Workout
                      </span>

                      <div className="flex gap-1.5">
                        <div className="w-6 h-6 rounded bg-violet-500" />
                        <div className="w-6 h-6 rounded bg-violet-500" />
                        <div className="w-6 h-6 rounded bg-violet-500/20" />
                        <div className="w-6 h-6 rounded bg-violet-500/20" />
                        <div className="w-6 h-6 rounded bg-violet-500/20" />
                        <div className="w-6 h-6 rounded bg-violet-500" />
                        <div className="w-6 h-6 rounded bg-violet-500" />
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-cyan-400" />
                      <span className="text-[10px] text-gray-500 w-12">
                        Meditate
                      </span>

                      <div className="flex gap-1.5">
                        <div className="w-6 h-6 rounded bg-cyan-400" />
                        <div className="w-6 h-6 rounded bg-cyan-400" />
                        <div className="w-6 h-6 rounded bg-cyan-400" />
                        <div className="w-6 h-6 rounded bg-cyan-400" />
                        <div className="w-6 h-6 rounded bg-cyan-400" />
                        <div className="w-6 h-6 rounded bg-cyan-400" />
                        <div className="w-6 h-6 rounded bg-cyan-400" />
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <span className="text-[10px] text-gray-500 w-12">
                        Journal
                      </span>

                      <div className="flex gap-1.5">
                        <div className="w-6 h-6 rounded bg-red-500" />
                        <div className="w-6 h-6 rounded bg-red-500" />
                        <div className="w-6 h-6 rounded bg-red-500" />
                        <div className="w-6 h-6 rounded bg-red-500/20" />
                        <div className="w-6 h-6 rounded bg-red-500/20" />
                        <div className="w-6 h-6 rounded bg-red-500" />
                        <div className="w-6 h-6 rounded bg-red-500/20" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mini daily tracker */}
                <div className="hidden lg:block w-40 rounded-xl border border-gray-100 p-3">
                  <div className="h-3 w-20 bg-gray-200 rounded mb-2" />
                  <div className="h-1.5 w-full bg-gray-100 rounded-full mb-3 ">
                    <div className="h-full w-1/3 bg-linear-to-r from-blue-500 to-sky-400 rounded-full" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-10 rounded-lg bg-orange-100 border-l-2 border-orange-400 " />
                    <div className="h-10 rounded-lg bg-violet-100 border-l-2 border-violet-500 " />
                    <div className="h-10 rounded-lg bg-gray-50 border-l-2 border-cyan-400 " />
                    <div className="h-10 rounded-lg bg-gray-50 border-l-2 border-red-500 " />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreviewSection;
