"use client";;
import { useState } from "react";

import { Modal } from "./Modal";
import { useTranslation } from "react-i18next";
import { useServerVerificationModal } from "@/app/hooks/useServerVerificationModal";
import { PrimaryButton } from "../Buttons/PrimaryButton";

export const VerifyServerOwnerShipModal = () => {
  // Fetches modal state and functions from a custom hook
  const { isOpen, onClose } = useServerVerificationModal();
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation();

  // Modal body JSX
  const modalBody = (
    <div className="flex flex-col gap-[10px]">
      <h1 className="text-[17px] text-white font-medium">Steps to verify ownership</h1>
      <ul className="text-white">
        <li>
          <strong>Step 1:</strong> Access your server provider's control panel or dashboard.
        </li>
        <li>
          <strong>Step 2:</strong> Navigate to the section where you can edit your server's settings or configuration.
        </li>
        <li>
          <strong>Step 3:</strong> Locate the option to change the server name or hostname.
        </li>
        <li>
          <strong>Step 4:</strong> Edit the server name to: <code className="font-bold text-light_primary">SERVER VERIFICATION ServersStats.COM | 5502</code>.
        </li>
        <li>
          <strong>Step 5:</strong> Save the changes to apply the new server name.
        </li>
        <li>
          <strong>Step 6:</strong> Wait for the changes to take effect, which may vary depending on your server provider.
        </li>
        <li>
          <strong>Step 7:</strong> Once the name change is complete, return to ServersStats and initiate the verification process.
        </li>
        <li>
          <strong>Step 8:</strong> ServersStats will check for the server name change as part of the verification process.
        </li>
      </ul>
    </div>
  );
  
  
  

  // Modal footer JSX
  const modelFooter = (
    <PrimaryButton className="w-full text-[18px]">
      Check
    </PrimaryButton>
  );

  // Renders the modal component with provided content
  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        onClose();
      }}
      className="!gap-[20px]"
      topContent={t("verify")}
      bodyContent={modalBody}
      footerContent={modelFooter}
      sizeClassName="max-w-[600px]"
      isLoading={isLoading}
    />
  );
};
