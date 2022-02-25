import React from "react";
import BottomNavigation from "../../components/BottomNavigation/BottomNavigation";
import MessageInbox from "../../components/MessageInbox/MessageInbox";
import TopNavigation from "../../components/TopNavigation/TopNavigation";

export default function MessagesPage() {
  return (
    <div className="bg-main">
      <TopNavigation />
      <BottomNavigation />
      <MessageInbox />
    </div>
  );
}
