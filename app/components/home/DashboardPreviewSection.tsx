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

            <div className="bg-gray-50 p-4 md:p-6"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreviewSection;
