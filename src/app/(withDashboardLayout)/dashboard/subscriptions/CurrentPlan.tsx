import { Check } from 'lucide-react';
import { PiCrown } from 'react-icons/pi';

const CurrentPlan = () => {
      return (
            <div className="bg-white border rounded-lg p-8 max-w-md  text-center">
                  <div className="flex justify-center mb-6">
                        <div className="bg-[#FFF1F8] p-4 rounded-full">
                              <PiCrown className="size-12 text-primary" />
                        </div>
                  </div>

                  <div className="mb-2">
                        <div className="h-2 bg-gray-100 rounded-full">
                              <div className="h-full w-[80%] bg-primary rounded-full"></div>
                        </div>
                  </div>

                  <p className="text-gray-600 mb-6">12 Gifts Sent This Year</p>

                  <h2 className="text-xl font-semibold mb-6">Your Current Subscription Plan</h2>

                  <div className="bg-[#FFF1F8] border border-primary rounded-lg p-4 mb-6">
                        <div className="flex items-start gap-3">
                              <div className="bg-primary rounded-full p-1 mt-1">
                                    <Check className="w-4 h-4 text-white" />
                              </div>
                              <div className="text-left">
                                    <h3 className="font-semibold text-lg">Spoiling Myself</h3>
                                    <p className="text-gray-600">Process unlimited orders.</p>
                                    <p className="text-primary font-semibold text-lg mt-1">$50 / Month</p>
                              </div>
                        </div>
                  </div>

                  <button className="w-full bg-primary text-white py-3 rounded-lg hover:opacity-90 transition">
                        Change Plan
                  </button>
            </div>
      );
};

export default CurrentPlan;
