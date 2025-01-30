import React from 'react';
import BreadcrumbsBanner from "@/components/common/BreadcrumbsBanner";

const page = () => {
    return (
        <section>
            <BreadcrumbsBanner pageName={"Privacy Policy"} routeName={"Privacy Policy"} />
            <main className="container mx-auto px-[100px] py-[100px]">
                <div className=''>
                    <p className='text-[#65728E] text-base leading-[24px]'>At GiftMeIn, your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your personal information. By using our services, you agree to the practices described in this policy.</p>
                    
                    <div className="space-y-4">
  <h1 className="text-[#160E4B] text-xl font-semibold">Information We Collect</h1>
  
  <p className="text-gray-700">
    We collect the following types of information to provide you with a seamless gifting experience:
  </p>

  <ul className="list-disc list-inside space-y-2 text-gray-700">
    <li>
      <span className="font-medium">Personal Information:</span>
      <ul className="list-none ml-4 space-y-1">
        <li>- Name, email address, phone number, and shipping address.</li>
        <li>- Payment details (processed securely through third-party providers).</li>
      </ul>
    </li>

    <li>
      <span className="font-medium">Event and Gift Preferences:</span>
      <ol className="list-none ml-4 space-y-1">
        <li>- Important dates (e.g., birthdays, anniversaries) and gift preferences.</li>
        <li>- Survey responses and preferences you provide for personalized gifts.</li>
      </ol>
    </li>

    <li>
      <span className="font-medium">Usage Data:</span>
      <ul className="list-none ml-4 space-y-1">
        <li>- IP address, browser type, device information, and website interactions.</li>
      </ul>
    </li>
  </ul>
</div>

                </div>

            </main>
        </section>
    );
};

export default page;