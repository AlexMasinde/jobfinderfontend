import React from "react";
import BottomNavigation from "../../components/BottomNavigation/BottomNavigation";
import TopNavigation from "../../components/TopNavigation/TopNavigation";
import ContactUsForm from "../../components/ContactUsForm/ContactUsForm";
export default function ContactUsPage() {
  return (
    <div className="bg-main">
      <TopNavigation />
      <BottomNavigation />
      <ContactUsForm />
    </div>
  );
}
