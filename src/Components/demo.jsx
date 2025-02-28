import * as Dialog from "@radix-ui/react-dialog";
import { motion } from "framer-motion";
// import { X } from "lucide-react";

export default function MyModal({ isShow, func }) {
  return (
    <Dialog.Root open={isShow} onOpenChange={func}>
      {/* Overlay with fade-in animation */}
      <Dialog.Overlay className="fixed  bg-opacity-99 backdrop-blur-sm" />

      <Dialog.Portal>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-xl w-96"
        >
          <Dialog.Title className="text-xl font-semibold">Modal Title</Dialog.Title>
          <Dialog.Description className="mt-2 text-gray-500">
            This is a fully styled and animated modal.
          </Dialog.Description>

          <button
            onClick={func}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
          >
            {/* <X size={20} 
            />
             */}
             Heloo
          </button>

          <div className="mt-4 flex justify-end">
            <Dialog.Close className="bg-gray-300 px-4 py-2 rounded-md hover:bg-gray-400">
              Close
            </Dialog.Close>
          </div>
        </motion.div>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
